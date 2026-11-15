<script setup lang="ts">
import { projects } from "~/content/projects";
import { site } from "~/content/site";

const { t, lang } = useLang();

useSeoMeta({
  title: "Michelle Kern – Interaction Design Portfolio",
  description: () =>
    lang.value === "de"
      ? "Portfolio von Michelle Kern, Interaktionsgestalterin an der HfG Schwäbisch Gmünd: cura, Bubble, Phlib und zenzone – mit Research, Konzept und Prototyping."
      : "Portfolio of Michelle Kern, interaction designer at HfG Schwäbisch Gmünd: cura, Bubble, Phlib and zenzone – with research, concept and prototyping.",
  ogTitle: "Michelle Kern – Interaction Design Portfolio",
});

/* --- Claim im Hero: Wörter werden Buchstabe für Buchstabe getippt und wieder gelöscht --- */
const words = site.home.claimWords;
const typed = ref(words[0]);
const typing = ref(false);
let alive = false;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function typeLoop() {
  let i = 0;
  while (alive) {
    await sleep(2400); // Wort stehen lassen
    if (!alive) return;
    typing.value = true;
    while (alive && typed.value.length) {
      typed.value = typed.value.slice(0, -1);
      await sleep(35);
    }
    i = (i + 1) % words.length;
    await sleep(280);
    for (const ch of words[i]) {
      if (!alive) return;
      typed.value += ch;
      await sleep(60 + Math.random() * 60);
    }
    typing.value = false;
  }
}

/* --- Index-Anzeige: welches Projekt ist gerade im Blick? --- */
const activeIndex = ref(0);
const showIndex = ref(false);
const tiles = ref<HTMLElement[]>([]);
const workSection = ref<HTMLElement | null>(null);
let io: IntersectionObserver | undefined;
let sectionIo: IntersectionObserver | undefined;

/* Hero tritt beim Scrollen zurück, während die Projekte darüber gleiten */
const hero = ref<HTMLElement | null>(null);
let heroTicking = false;
const onHeroScroll = () => {
  if (heroTicking) return;
  heroTicking = true;
  requestAnimationFrame(() => {
    heroTicking = false;
    const p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.9)));
    hero.value?.style.setProperty("--hp", p.toFixed(3));
  });
};

onMounted(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced) {
    alive = true;
    typeLoop();
    window.addEventListener("scroll", onHeroScroll, { passive: true });
    onHeroScroll();
  }

  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) activeIndex.value = Number((e.target as HTMLElement).dataset.index ?? 0);
      }
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
  );
  tiles.value.forEach((el) => el && io?.observe(el));

  sectionIo = new IntersectionObserver(
    (entries) => {
      showIndex.value = entries[0]?.isIntersecting ?? false;
    },
    { rootMargin: "-30% 0px -30% 0px", threshold: 0 },
  );
  if (workSection.value) sectionIo.observe(workSection.value);
});

onBeforeUnmount(() => {
  alive = false;
  window.removeEventListener("scroll", onHeroScroll);
  io?.disconnect();
  sectionIo?.disconnect();
});

const nr = (i: number) => String(i + 1).padStart(2, "0");

/*
 * Freie Komposition: jede Kachel hat Position, Format, ein eigenes Scroll-Tempo (drift)
 * und ein Tempo für das Bild im Rahmen (speed). Ab dem 5. Projekt wiederholt sich das Muster.
 */
const layouts = [
  { cls: "tile--a", ratio: "1 / 1", speed: 0.06, drift: -0.14 },
  { cls: "tile--b", ratio: "5 / 4", speed: -0.05, drift: 0.18 },
  { cls: "tile--c", ratio: "4 / 5", speed: 0.05, drift: 0.06 },
  { cls: "tile--d", ratio: "16 / 10", speed: -0.06, drift: -0.12 },
];
const layoutFor = (i: number) => layouts[i % layouts.length];

const heroImages = computed(() => projects.slice(0, 3).map((p) => p.cover));
</script>

<template>
  <div>
    <!-- Bühne: der Hero bleibt stehen, die Projekte gleiten darüber -->
    <div class="stage">
    <!-- ============ Hero ============ -->
    <section ref="hero" class="hero">
      <div class="hero-stack" aria-hidden="true">
        <div v-for="(img, i) in heroImages" :key="img.src" class="hero-img" :class="'hero-img--' + i">
          <img v-parallax="[0.12, -0.08, 0.16][i]" :src="img.src" :width="img.w" :height="img.h" alt="" :fetchpriority="i === 0 ? 'high' : 'auto'" />
        </div>
      </div>

      <div class="hero-paper">
        <h1 class="display hero-title">
          <span class="block">{{ t(site.home.claimLead) }}</span>
          <span class="hero-word serif-i">
            <span class="sr-only">{{ words.join(", ") }}</span>
            <span class="hero-bracket" aria-hidden="true">[</span>
            <span class="hero-word-inner" aria-hidden="true">{{ typed || "\u200B" }}<span class="hero-caret" :class="{ 'is-typing': typing }" /></span>
            <span class="hero-bracket" aria-hidden="true">]</span>
          </span>
        </h1>

        <div class="hero-foot">
          <p class="hero-intro">{{ t(site.home.intro) }}</p>
          <a href="#work" class="hero-scroll label">
            <span class="bracket">{{ t(site.home.scroll) }}</span>
            <span class="hero-arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ============ Arbeiten ============ -->
    <section id="work" ref="workSection" class="work wrap" aria-labelledby="work-title">
      <!-- Überschrift nur für Screenreader, sichtbar sind direkt die Projekte -->
      <h2 id="work-title" class="sr-only">{{ t(site.home.workTitle) }}</h2>

      <ol class="tiles">
        <li
          v-for="(p, i) in projects"
          :key="p.slug"
          :ref="(el) => { if (el) tiles[i] = el as HTMLElement }"
          class="tile"
          :class="layoutFor(i).cls"
          :data-index="i"
        >
          <NuxtLink
            v-parallax="{ speed: layoutFor(i).drift, free: true }"
            :to="`/projects/${p.slug}`"
            class="tile-link"
            data-cursor="explore"
          >
            <div v-reveal class="tile-inner">
              <div class="img-frame img-bw tile-img" :style="{ aspectRatio: layoutFor(i).ratio }">
                <img
                  v-parallax="layoutFor(i).speed"
                  :src="p.cover.src"
                  :width="p.cover.w"
                  :height="p.cover.h"
                  :alt="t(p.cover.alt)"
                  :loading="i === 0 ? 'eager' : 'lazy'"
                />
                <div class="tile-cap">
                  <span class="tile-nr">[{{ nr(i) }}]</span>
                  <h3 class="tile-title"><RollText :text="p.title" /></h3>
                  <p class="tile-sub">{{ t(p.subtitle) }}</p>
                </div>
              </div>
              <p class="label tile-meta">
                <span>{{ t(p.disciplines) }}</span>
                <span>{{ p.year }}</span>
              </p>
            </div>
          </NuxtLink>
        </li>
      </ol>

      <!-- Index-Anzeige (Desktop): zeigt, wo man gerade ist -->
      <nav class="index" :class="{ 'is-on': showIndex }" aria-label="Projekt-Index">
        <ol>
          <li v-for="(p, i) in projects" :key="p.slug">
            <NuxtLink :to="`/projects/${p.slug}`" :class="{ 'is-active': activeIndex === i }" :tabindex="showIndex ? 0 : -1">
              <span class="index-nr">{{ nr(i) }}</span>
              <span class="index-name">{{ p.title }}</span>
            </NuxtLink>
          </li>
        </ol>
      </nav>
    </section>
    </div>

    <!-- ============ About-Teaser ============ -->
    <section class="teaser wrap">
      <div class="rule teaser-grid">
        <p class="label bracket">{{ t(site.about.title) }}</p>
        <div v-reveal>
          <p class="h-lg teaser-text">{{ t(site.home.aboutTeaser) }}</p>
          <NuxtLink to="/about" class="btn teaser-btn">{{ t(site.home.aboutLink) }} <span aria-hidden="true">→</span></NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---------- Bühne + Hero ---------- */
.stage {
  position: relative;
}
.hero {
  /* bleibt stehen, während die Projekte darüber scrollen */
  position: sticky;
  top: 0;
  z-index: 0;
  height: 100svh;
  min-height: 34rem;
  padding-top: var(--nav-h);
  display: flex;
  overflow: hidden;
}
/* Beim Scrollen tritt der Hero leicht zurück (--hp = 0 … 1) */
.hero-paper > * {
  opacity: calc(1 - var(--hp, 0) * 0.55);
}
.hero-title {
  transform: scale(calc(1 - var(--hp, 0) * 0.04));
  transform-origin: left center;
}
.hero-stack {
  filter: blur(calc(var(--hp, 0) * 6px));
}
.hero-stack {
  position: absolute;
  inset: var(--nav-h) 0 0 0;
  pointer-events: none;
}
.hero-img {
  position: absolute;
  overflow: hidden;
  border-radius: var(--radius);
}
.hero-img img {
  width: 100%;
  height: 120%;
  translate: 0 -8.33%;
  object-fit: cover;
  filter: grayscale(1) contrast(1.05);
}
.hero-img--0 {
  left: 6%;
  top: 14%;
  width: 46%;
  aspect-ratio: 4 / 3;
}
.hero-img--1 {
  right: 5%;
  top: 6%;
  width: 34%;
  aspect-ratio: 4 / 5;
}
.hero-img--2 {
  right: 22%;
  bottom: 6%;
  width: 40%;
  aspect-ratio: 16 / 10;
}
/* das „Transparentpapier“ über den Bildern */
.hero-paper {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  /* Fläche randlos, Texte mit dem gleichen Abstand zum Rand wie vorher */
  padding: calc(var(--gutter) + clamp(1rem, 2.4vw, 2rem));
  min-width: 0;
  background: color-mix(in srgb, var(--color-paper) 66%, transparent);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
.hero-title {
  margin: auto 0;
}
.hero-word {
  display: block;
  color: var(--color-accent);
  font-size: 0.82em;
  line-height: 1;
  padding-bottom: 0.08em;
  max-width: 100%;
}
.hero-bracket {
  font-family: var(--font-sans);
  font-style: normal;
  font-weight: 400;
  color: var(--color-ink);
  transform: translateY(-0.04em);
}
.hero-word-inner {
  display: inline-block;
  margin: 0 0.1em;
}
/* blinkender Cursor hinter dem getippten Wort */
.hero-caret {
  display: inline-block;
  width: 0.055em;
  height: 0.78em;
  margin-left: 0.08em;
  background: currentColor;
  vertical-align: -0.04em;
  animation: caret 1.05s steps(1) infinite;
}
.hero-caret.is-typing {
  animation: none;
}
@keyframes caret {
  50% {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-caret {
    display: none;
  }
}
.hero-foot {
  display: grid;
  gap: 1.25rem;
  align-items: end;
}
.hero-intro {
  max-width: 34rem;
  font-size: clamp(1rem, 1.25vw, 1.2rem);
  line-height: 1.45;
}
.hero-scroll {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--color-ink);
  justify-self: start;
}
.hero-arrow {
  display: inline-block;
  animation: nudge 1.8s var(--ease-fluid) infinite;
}
@keyframes nudge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}
@media (max-width: 767px) {
  .hero-img--0 { left: -6%; top: 10%; width: 78%; }
  .hero-img--1 { right: -8%; top: 38%; width: 62%; }
  .hero-img--2 { right: 18%; bottom: 3%; width: 70%; }
  .hero-title {
    font-size: clamp(2.1rem, 10.4vw, 4.5rem);
  }
  .hero-word {
    font-size: 0.82em;
    line-height: 1;
    white-space: nowrap;
  }
  .hero-word-inner {
    display: inline;
    margin: 0 0.04em;
  }
}
@media (min-width: 768px) {
  .hero-foot {
    grid-template-columns: 1fr auto;
  }
  .hero-scroll {
    justify-self: end;
  }
}

/* ---------- Arbeiten (gleiten über den Hero) ---------- */
.work {
  position: relative;
  z-index: 1;
  padding-top: 30svh;
  padding-bottom: clamp(4rem, 10vw, 10rem);
  pointer-events: none; /* Lücken lassen den Hero darunter bedienbar */
}
.work .tile-link,
.work .index {
  pointer-events: auto;
}
.tiles {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4.5rem;
}
.tile-link {
  display: block;
}
.tile-img {
  position: relative;
  box-shadow: 0 24px 60px rgba(20, 20, 20, 0.12);
}
.tile-img img {
  width: 100%;
  height: 120%;
  translate: 0 -8.33%;
  object-fit: cover;
}
/* Titel liegt auf dem Bild */
.tile-cap {
  position: absolute;
  inset: auto 0 0 0;
  display: grid;
  gap: 0.2rem;
  padding: clamp(0.9rem, 1.6vw, 1.4rem);
  color: #fff;
  background: linear-gradient(to top, rgba(10, 10, 10, 0.62), rgba(10, 10, 10, 0));
}
.tile-nr {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
}
.tile-title {
  font-size: clamp(1.4rem, 2.2vw, 2.2rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  line-height: 1.05;
}
.tile-sub {
  font-size: 0.9rem;
  line-height: 1.35;
  max-width: 26rem;
  opacity: 0.9;
}
.tile-meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.6rem;
}
@media (max-width: 767px) {
  .tile--a,
  .tile--c {
    width: 86%;
  }
  .tile--b,
  .tile--d {
    width: 80%;
    margin-left: auto;
  }
}
@media (min-width: 768px) {
  .tiles {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: 1.5rem;
    row-gap: clamp(6rem, 14vw, 14rem);
    padding-right: 4.5rem;
  }
  /* versetzt wie auf einem Tisch verteilt: je zwei Projekte teilen sich eine Zeile */
  .tile--a { grid-column: 2 / span 4; }
  .tile--b { grid-column: 8 / span 4; margin-top: 32vh; }
  .tile--c { grid-column: 4 / span 3; }
  .tile--d { grid-column: 8 / span 5; margin-top: 20vh; }
  .tile-sub {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.5s var(--ease-fluid), opacity 0.4s var(--ease-fluid);
  }
  .tile-link:hover .tile-sub,
  .tile-link:focus-visible .tile-sub {
    max-height: 4rem;
    opacity: 0.9;
  }
}

/* ---------- Index-Anzeige ---------- */
.index {
  display: none;
}
@media (min-width: 768px) {
  .index {
    display: block;
    position: fixed;
    right: var(--gutter);
    top: 50%;
    transform: translateY(-50%);
    z-index: 30;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s var(--ease-fluid);
  }
  .index.is-on {
    opacity: 1;
    pointer-events: auto;
  }
  .index ol {
    display: grid;
    gap: 0.35rem;
    justify-items: end;
  }
  .index a {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-muted);
    transition: color 0.3s var(--ease-fluid);
  }
  .index-name {
    max-width: 0;
    overflow: hidden;
    white-space: nowrap;
    transition: max-width 0.5s var(--ease-fluid);
    order: -1;
  }
  .index a.is-active,
  .index a:hover {
    color: var(--color-ink);
  }
  .index a.is-active .index-name,
  .index a:hover .index-name,
  .index a:focus-visible .index-name {
    max-width: 10rem;
  }
  .index a.is-active .index-nr::before {
    content: "[";
  }
  .index a.is-active .index-nr::after {
    content: "]";
  }
}

/* ---------- About-Teaser ---------- */
.teaser {
  position: relative;
  z-index: 1;
  background: var(--color-paper);
  padding-top: clamp(3rem, 6vw, 6rem);
}
.teaser-grid {
  padding-top: 1rem;
  display: grid;
  gap: 1.5rem;
}
.teaser-text {
  max-width: min(46rem, 100%);
}
.teaser-btn {
  margin-top: 2rem;
}
@media (min-width: 768px) {
  .teaser-grid {
    grid-template-columns: 1fr 2fr;
  }
}
</style>
