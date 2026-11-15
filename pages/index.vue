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

/*
 * Intro (Name + Text) steht fest unten links. Sobald man scrollt, wird es grau und
 * tritt in den Hintergrund, die Projekte gleiten darüber. Vor dem About-Teaser verschwindet es ganz.
 */
const intro = ref<HTMLElement | null>(null);
const heroBg = ref<HTMLElement | null>(null);
const heroImages = computed(() => projects.slice(0, 3).map((p) => p.cover));
const teaser = ref<HTMLElement | null>(null);
let fadeTicking = false;
const onFade = () => {
  if (fadeTicking) return;
  fadeTicking = true;
  requestAnimationFrame(() => {
    fadeTicking = false;
    const vh = window.innerHeight;
    const p = Math.min(1, Math.max(0, window.scrollY / (vh * 0.55)));
    let o = 1 - p * 0.92; // bis auf 8 % – grau im Hintergrund
    const tTop = teaser.value?.getBoundingClientRect().top ?? Infinity;
    if (tTop < vh) o *= Math.max(0, (tTop - vh * 0.4) / (vh * 0.6));
    intro.value?.style.setProperty("opacity", o.toFixed(3));
    // Hintergrund-Bilder: gleiten nach oben weg, werden unschärfer und verschwinden
    heroBg.value?.style.setProperty("--bp", Math.min(1, window.scrollY / (vh * 0.7)).toFixed(3));
    intro.value?.classList.toggle("is-back", p > 0.5);
  });
};
let io: IntersectionObserver | undefined;
let sectionIo: IntersectionObserver | undefined;

onMounted(() => {
  window.addEventListener("scroll", onFade, { passive: true });
  window.addEventListener("resize", onFade, { passive: true });
  onFade();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced) {
    alive = true;
    typeLoop();
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
  window.removeEventListener("scroll", onFade);
  window.removeEventListener("resize", onFade);
  alive = false;
  io?.disconnect();
  sectionIo?.disconnect();
});

const nr = (i: number) => String(i + 1).padStart(2, "0");

/*
 * Freie Komposition: jede Kachel hat eine eigene Zeile, Position und Format,
 * ein ruhiges eigenes Scroll-Tempo (drift) und ein Tempo für das Bild im Rahmen (speed).
 * Ab dem 5. Projekt wiederholt sich das Muster.
 */
const layouts = [
  { cls: "tile--a", ratio: "4 / 5", speed: 0.06, drift: -0.07 },
  { cls: "tile--b", ratio: "5 / 4", speed: -0.05, drift: 0.06 },
  { cls: "tile--c", ratio: "1 / 1", speed: 0.05, drift: -0.05 },
  { cls: "tile--d", ratio: "16 / 10", speed: -0.06, drift: 0.07 },
];
const layoutFor = (i: number) => layouts[i % layouts.length];
const chars = (s: string) => [...s].map((c) => (c === " " ? "\u00A0" : c));
</script>

<template>
  <div>
    <!-- ============ Hero: ruhig, nur Name + Haltung ============ -->
    <!-- ============ Hintergrund: Projektbilder unter „Transparentpapier“, verschwinden beim Scrollen ============ -->
    <div ref="heroBg" class="hero-bg" aria-hidden="true">
      <div v-for="(img, i) in heroImages" :key="img.src" class="hero-img" :class="'hero-img--' + i">
        <img :src="img.src" :width="img.w" :height="img.h" alt="" :fetchpriority="i === 0 ? 'high' : 'auto'" />
      </div>
      <div class="hero-paper" />
    </div>

    <!-- ============ Intro: fest unten links, tritt beim Scrollen zurück ============ -->
    <section ref="intro" class="intro">
      <h1 class="hero-name">
        <span class="block">michelle</span>
        <span class="block">kern</span>
      </h1>
      <div class="hero-side">
        <p class="hero-role">{{ t(site.home.role) }}</p>
        <p class="hero-claim">
          {{ t(site.home.claimLead) }}
          <span class="hero-word serif-i">
            <span class="sr-only">{{ words.join(", ") }}</span>
            <span class="hero-bracket" aria-hidden="true">[</span>
            <span class="hero-word-inner" aria-hidden="true">{{ typed || "\u200B" }}<span class="hero-caret" :class="{ 'is-typing': typing }" /></span>
            <span class="hero-bracket" aria-hidden="true">]</span>
          </span>
        </p>
      </div>
    </section>
    <!-- freie Fläche über dem Intro, danach kommen die Projekte -->
    <div class="hero-space" aria-hidden="true" />


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
          :style="{ gridRow: i + 1 }"
        >
          <NuxtLink
            v-parallax="{ speed: layoutFor(i).drift, free: true }"
            :to="`/projects/${p.slug}`"
            class="tile-link"
            data-cursor="explore"
          >
            <div v-reveal class="tile-inner">
              <div class="img-frame tile-img" :style="{ aspectRatio: layoutFor(i).ratio }">
                <img
                  v-parallax="layoutFor(i).speed"
                  :src="p.cover.src"
                  :width="p.cover.w"
                  :height="p.cover.h"
                  :alt="t(p.cover.alt)"
                  :loading="i === 0 ? 'eager' : 'lazy'"
                />
                <!-- erscheint erst beim Hover: Name mittig, Buchstabe für Buchstabe, darunter kurz worum es geht -->
                <div class="tile-cap">
                  <h3 class="tile-title" :aria-label="p.title">
                    <span v-for="(c, k) in chars(p.title)" :key="k" class="ch" :style="{ '--k': k }" aria-hidden="true">{{ c }}</span>
                  </h3>
                  <p class="tile-sub">{{ t(p.subtitle) }}</p>
                </div>
              </div>
              <p class="label tile-meta">
                <span><span class="tile-nr">[{{ nr(i) }}]</span> {{ t(p.disciplines) }}</span>
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

    <!-- ============ About-Teaser ============ -->
    <section ref="teaser" class="teaser wrap">
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
/* ---------- Hintergrund ---------- */
.hero-bg {
  --bp: 0;
  position: fixed;
  inset: var(--nav-h) 0 0 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  opacity: calc(1 - var(--bp));
  transform: translate3d(0, calc(var(--bp) * -14vh), 0) scale(calc(1 + var(--bp) * 0.04));
  filter: blur(calc(var(--bp) * 8px));
  will-change: transform, opacity;
}
.hero-img {
  position: absolute;
  overflow: hidden;
  border-radius: var(--radius);
}
.hero-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) contrast(1.05);
}
.hero-img--0 {
  left: 6%;
  top: 10%;
  width: 46%;
  aspect-ratio: 4 / 3;
}
.hero-img--1 {
  right: 5%;
  top: 4%;
  width: 34%;
  aspect-ratio: 4 / 5;
}
.hero-img--2 {
  right: 22%;
  bottom: 4%;
  width: 40%;
  aspect-ratio: 16 / 10;
}
/* das „Transparentpapier“ über den Bildern */
.hero-paper {
  position: absolute;
  inset: 0;
  background: color-mix(in srgb, var(--color-paper) 66%, transparent);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
@media (max-width: 767px) {
  .hero-img--0 { left: -6%; top: 8%; width: 78%; }
  .hero-img--1 { right: -8%; top: 34%; width: 62%; }
  .hero-img--2 { right: 18%; bottom: 3%; width: 70%; }
}
@media (prefers-reduced-motion: reduce) {
  .hero-bg {
    transform: none;
    filter: none;
  }
}

/* ---------- Intro: fest unten links (wie ein Schild hinter den Projekten) ---------- */
.intro {
  position: fixed;
  left: var(--gutter);
  right: var(--gutter);
  bottom: clamp(1.5rem, 3.2vw, 3rem);
  z-index: 0;
  pointer-events: none; /* enthält keine Links – darunterliegendes bleibt klickbar */
  display: grid;
  gap: 1.1rem;
  align-items: end;
  transition: color 0.6s var(--ease-fluid);
}
/* so hoch, dass beim Laden noch kein Projekt in den Namen ragt */
.hero-space {
  height: calc(100svh + 22vh);
}
.hero-name {
  font-size: clamp(3.6rem, 19vw, 7rem);
  font-weight: 600;
  line-height: 0.9;
  letter-spacing: -0.055em;
  margin-left: -0.05em;
  text-transform: lowercase;
}
.hero-side {
  display: grid;
  gap: 0.9rem;
  align-content: end;
  max-width: 27rem;
}
.hero-role {
  font-size: clamp(1.05rem, 1.4vw, 1.4rem);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.01em;
}
.hero-claim {
  color: var(--color-muted);
  font-size: clamp(0.9rem, 1vw, 1rem);
  line-height: 1.4;
}
.hero-word {
  display: block;
  color: var(--color-accent);
  font-size: 1.3em;
  line-height: 1.2;
  white-space: nowrap;
}
.intro.is-back .hero-word {
  color: inherit;
}
.hero-bracket {
  font-family: var(--font-sans);
  font-style: normal;
  color: var(--color-ink);
}
.hero-word-inner {
  margin: 0 0.12em;
}
/* blinkender Cursor hinter dem getippten Wort */
.hero-caret {
  display: inline-block;
  width: 1.5px;
  height: 0.85em;
  margin-left: 0.08em;
  background: currentColor;
  vertical-align: -0.08em;
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
@media (min-width: 768px) {
  /* Name links unten, Beschreibung startet in der Mitte – unten bündig */
  .intro {
    grid-template-columns: 1fr 1fr;
    column-gap: clamp(2rem, 4vw, 4rem);
  }
  .hero-name {
    font-size: clamp(5rem, 7.6vw, 10rem);
  }
  .hero-side {
    padding-bottom: 0.35rem;
  }
}

/* ---------- Arbeiten ---------- */
.work {
  position: relative;
  z-index: 1;
  padding-top: 0;
  padding-bottom: clamp(5rem, 12vw, 12rem);
}
.tiles {
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;
}
.tile-link {
  display: block;
}
.tile-img {
  position: relative;
}
.tile-img img {
  width: 100%;
  height: 120%;
  translate: 0 -8.33%;
  object-fit: cover;
  transition: scale 0.9s var(--ease-fluid);
}
/* Hover-Ebene: Name mittig, darunter kurz worum es geht */
.tile-cap {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  color: #fff;
  background: rgba(14, 14, 14, 0.34);
  opacity: 0;
  transition: opacity 0.5s var(--ease-fluid);
}
.tile-title {
  font-size: clamp(1.8rem, 3.2vw, 3.2rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
}
.ch {
  display: inline-block;
  opacity: 0;
  transform: translateY(0.35em);
  transition:
    opacity 0.45s var(--ease-fluid),
    transform 0.6s var(--ease-fluid);
  transition-delay: calc(var(--k) * 28ms);
}
.tile-sub {
  font-size: 0.95rem;
  line-height: 1.35;
  max-width: 22rem;
  opacity: 0;
  transform: translateY(0.4rem);
  transition:
    opacity 0.5s var(--ease-fluid) 0.18s,
    transform 0.6s var(--ease-fluid) 0.18s;
}
.tile-link:hover .tile-img img,
.tile-link:focus-visible .tile-img img {
  scale: 1.04;
}
.tile-link:hover .tile-cap,
.tile-link:focus-visible .tile-cap,
.tile-link:hover .ch,
.tile-link:focus-visible .ch,
.tile-link:hover .tile-sub,
.tile-link:focus-visible .tile-sub {
  opacity: 1;
  transform: none;
}
/* Touch-Geräte haben kein Hover: Name dort dauerhaft zeigen */
@media (hover: none) {
  .tile-cap {
    opacity: 1;
    background: linear-gradient(to top, rgba(10, 10, 10, 0.5), rgba(10, 10, 10, 0) 60%);
    place-content: end start;
    justify-items: start;
    text-align: left;
    padding: 1rem 1.1rem;
  }
  .tile-title {
    font-size: 1.6rem;
  }
  .ch {
    opacity: 1;
    transform: none;
  }
  .tile-sub {
    display: none;
  }
}
.tile-meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.7rem;
}
.tile-nr {
  color: var(--color-ink);
  margin-right: 0.3rem;
}
@media (max-width: 767px) {
  .tile--a,
  .tile--c {
    width: 84%;
  }
  .tile--b,
  .tile--d {
    width: 78%;
    margin-left: auto;
  }
}
@media (min-width: 768px) {
  .tiles {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: 1.5rem;
    row-gap: clamp(5rem, 9vw, 9rem);
    padding-right: 4.5rem;
  }
  /* jedes Projekt in eigener Zeile, abwechselnd links / rechts versetzt */
  .tile--a { grid-column: 2 / span 4; }
  .tile--b { grid-column: 7 / span 5; }
  .tile--c { grid-column: 3 / span 4; }
  .tile--d { grid-column: 6 / span 6; }
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
