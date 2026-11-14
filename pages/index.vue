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

/* --- rotierender Claim im Hero --- */
const words = site.home.claimWords;
const wordIndex = ref(0);
let timer: ReturnType<typeof setInterval> | undefined;

/* --- Index-Anzeige: welches Projekt ist gerade im Blick? --- */
const activeIndex = ref(0);
const showIndex = ref(false);
const tiles = ref<HTMLElement[]>([]);
const workSection = ref<HTMLElement | null>(null);
let io: IntersectionObserver | undefined;
let sectionIo: IntersectionObserver | undefined;

onMounted(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced) {
    timer = setInterval(() => {
      wordIndex.value = (wordIndex.value + 1) % words.length;
    }, 2600);
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
  if (timer) clearInterval(timer);
  io?.disconnect();
  sectionIo?.disconnect();
});

const nr = (i: number) => String(i + 1).padStart(2, "0");

/* Versetztes Raster: jede Kachel hat Breite, Versatz und Parallax-Tempo */
const layouts = [
  { cls: "tile--a", speed: -0.06 },
  { cls: "tile--b", speed: 0.1 },
  { cls: "tile--c", speed: 0.05 },
  { cls: "tile--d", speed: -0.09 },
];
const layoutFor = (i: number) => layouts[i % layouts.length];

const heroImages = computed(() => projects.slice(0, 3).map((p) => p.cover));
</script>

<template>
  <div>
    <!-- ============ Hero ============ -->
    <section class="hero wrap">
      <div class="hero-stack" aria-hidden="true">
        <div v-for="(img, i) in heroImages" :key="img.src" class="hero-img" :class="'hero-img--' + i">
          <img v-parallax="[0.12, -0.08, 0.16][i]" :src="img.src" :width="img.w" :height="img.h" alt="" :fetchpriority="i === 0 ? 'high' : 'auto'" />
        </div>
      </div>

      <div class="hero-paper">
        <ul class="hero-meta label">
          <li class="bracket">Portfolio {{ new Date().getFullYear() }}</li>
          <li class="bracket">{{ t(site.role) }}</li>
          <li class="bracket hero-meta-loc">{{ site.location }}</li>
        </ul>

        <h1 class="display hero-title">
          <span class="block">{{ t(site.home.claimLead) }}</span>
          <span class="hero-word serif-i" aria-live="off">
            <span class="hero-bracket" aria-hidden="true">[</span>
            <Transition name="word" mode="out-in">
              <span :key="wordIndex" class="hero-word-inner">{{ words[wordIndex] }}</span>
            </Transition>
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
      <header class="work-head rule">
        <h2 id="work-title" class="label">{{ t(site.home.workTitle) }}</h2>
        <span class="label bracket">{{ nr(projects.length - 1) }}</span>
      </header>

      <ol class="tiles">
        <li
          v-for="(p, i) in projects"
          :key="p.slug"
          :ref="(el) => { if (el) tiles[i] = el as HTMLElement }"
          class="tile"
          :class="layoutFor(i).cls"
          :data-index="i"
        >
          <NuxtLink :to="`/projects/${p.slug}`" class="tile-link" v-reveal>
            <div class="img-frame img-bw tile-img" :style="{ aspectRatio: i % 2 === 0 ? '4 / 3' : '4 / 5' }">
              <img
                v-parallax="layoutFor(i).speed"
                :src="p.cover.src"
                :width="p.cover.w"
                :height="p.cover.h"
                :alt="t(p.cover.alt)"
                :loading="i === 0 ? 'eager' : 'lazy'"
              />
            </div>
            <div class="tile-cap">
              <span class="label bracket">{{ nr(i) }}</span>
              <h3 class="tile-title">{{ p.title }}</h3>
              <span class="label tile-year">{{ p.year }}</span>
              <p class="tile-sub">{{ t(p.subtitle) }}</p>
              <p class="label tile-disc">{{ t(p.disciplines) }}</p>
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
/* ---------- Hero ---------- */
.hero {
  position: relative;
  min-height: 100svh;
  padding-top: calc(var(--nav-h) + 1rem);
  padding-bottom: 1.25rem;
  display: flex;
  overflow: hidden;
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
  padding: clamp(1rem, 2.4vw, 2rem);
  border-radius: var(--radius);
  min-width: 0;
  background: color-mix(in srgb, var(--color-paper) 66%, transparent);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border: 1px solid color-mix(in srgb, var(--color-surface) 60%, transparent);
}
.hero-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  color: var(--color-ink);
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
.word-enter-active,
.word-leave-active {
  transition: opacity 0.45s var(--ease-fluid), transform 0.45s var(--ease-fluid);
}
.word-enter-from {
  opacity: 0;
  transform: translateY(0.35em);
}
.word-leave-to {
  opacity: 0;
  transform: translateY(-0.35em);
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
  .hero-meta-loc {
    display: none;
  }
  .hero-img--0 { left: -6%; top: 10%; width: 78%; }
  .hero-img--1 { right: -8%; top: 38%; width: 62%; }
  .hero-img--2 { right: 18%; bottom: 3%; width: 70%; }
  .hero-title {
    font-size: clamp(2.1rem, 10.4vw, 4.5rem);
  }
  .hero-word {
    font-size: 1em;
    line-height: 0.98;
  }
  .hero-word-inner {
    display: inline;
    margin: 0;
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

/* ---------- Arbeiten ---------- */
.work {
  position: relative;
  padding-top: clamp(4rem, 9vw, 8rem);
}
.work-head {
  display: flex;
  justify-content: space-between;
  padding-top: 0.75rem;
}
.tiles {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  margin-top: 2.5rem;
}
.tile-link {
  display: block;
}
.tile-img img {
  width: 100%;
  height: 120%;
  translate: 0 -8.33%;
  object-fit: cover;
}
.tile-cap {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: baseline;
  gap: 0.2rem 0.75rem;
  margin-top: 0.8rem;
}
.tile-title {
  font-size: clamp(1.5rem, 2.4vw, 2.25rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  line-height: 1;
  transition: color 0.3s var(--ease-fluid);
}
.tile-link:hover .tile-title {
  color: var(--color-accent);
}
.tile-sub {
  grid-column: 2 / -1;
  max-width: 28rem;
}
.tile-disc {
  grid-column: 2 / -1;
}
@media (min-width: 768px) {
  .tiles {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: 1.5rem;
    row-gap: clamp(5rem, 10vw, 10rem);
    margin-top: 4rem;
    padding-right: 4.5rem;
  }
  .tile--a { grid-column: 1 / span 7; }
  .tile--b { grid-column: 9 / span 4; margin-top: 38%; }
  .tile--c { grid-column: 2 / span 4; }
  .tile--d { grid-column: 7 / span 6; margin-top: 22%; }
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
  margin-top: clamp(6rem, 12vw, 12rem);
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
