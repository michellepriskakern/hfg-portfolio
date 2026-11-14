<script setup lang="ts">
import { site } from "~/content/site";

const { t, lang } = useLang();
const about = site.about;

useSeoMeta({
  title: () => (lang.value === "de" ? "Über mich | Michelle Kern" : "About | Michelle Kern"),
  description: () =>
    lang.value === "de"
      ? "Michelle Kern studiert Interaktionsgestaltung an der HfG Schwäbisch Gmünd. Arbeitsweise, Lebenslauf, Kompetenzen und Tools."
      : "Michelle Kern studies interaction design at HfG Schwäbisch Gmünd. Approach, CV, skills and tools.",
});

/* Statement in Text- und Hervorhebungs-Teile zerlegen: [[Wort|/bild.webp]] */
type Part = { text: string; img?: string };
const parts = computed<Part[]>(() => {
  const src = t(about.statement);
  const out: Part[] = [];
  const re = /\[\[(.+?)\|(.+?)\]\]/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    if (m.index > last) out.push({ text: src.slice(last, m.index) });
    out.push({ text: m[1], img: m[2] });
    last = m.index + m[0].length;
  }
  if (last < src.length) out.push({ text: src.slice(last) });
  return out;
});

const activeImg = ref<string | null>(null);
</script>

<template>
  <div class="about">
    <!-- ============ Hero: Foto unter „Transparentpapier“ ============ -->
    <section class="wrap a-hero">
      <div class="a-photo img-frame">
        <img v-parallax="0.08" src="/img/about/skydiving.webp" width="2000" height="1016" :alt="lang === 'de' ? 'Michelle Kern beim Fallschirmsprung' : 'Michelle Kern skydiving'" fetchpriority="high" />
      </div>
      <div class="a-paper">
        <p class="label bracket">{{ t(about.title) }}</p>
        <h1 class="h-xl a-title">
          Michelle<br />Kern
        </h1>
        <p class="label">{{ t(site.role) }} · {{ site.location }}</p>
      </div>
    </section>

    <!-- ============ Statement mit hervorgehobenen Wörtern ============ -->
    <section class="wrap a-statement">
      <p class="a-statement-text" v-reveal>
        <template v-for="(p, i) in parts" :key="i">
          <span
            v-if="p.img"
            class="hl"
            tabindex="0"
            @mouseenter="activeImg = p.img"
            @mouseleave="activeImg = null"
            @focus="activeImg = p.img"
            @blur="activeImg = null"
          >{{ p.text }}</span>
          <template v-else>{{ p.text }}</template>
        </template>
      </p>
      <CursorImage :src="activeImg" />
    </section>

    <!-- ============ Drei Abschnitte ============ -->
    <section class="wrap a-sections">
      <article v-for="(s, i) in about.sections" :key="i" v-reveal="i * 90" class="box a-section">
        <span class="label bracket">{{ String(i + 1).padStart(2, "0") }}</span>
        <h2 class="a-section-title">{{ t(s.title) }}</h2>
        <p>{{ t(s.text) }}</p>
      </article>
    </section>

    <!-- ============ Lebenslauf ============ -->
    <section id="cv" class="wrap a-cv">
      <header class="rule a-cv-head">
        <h2 class="h-xl">{{ t(about.cvTitle) }}</h2>
      </header>

      <div class="cv-grid">
        <div class="cv-col">
          <h3 class="label bracket">{{ t(about.education.title) }}</h3>
          <ul class="cv-list">
            <li v-for="(e, i) in about.education.items" :key="i" v-reveal>
              <span class="label">{{ t(e.time) }}</span>
              <strong>{{ t(e.title) }}</strong>
              <span class="cv-place">{{ t(e.place) }}</span>
            </li>
          </ul>

          <h3 class="label bracket cv-gap">{{ t(about.experience.title) }}</h3>
          <ul class="cv-list">
            <li v-for="(e, i) in about.experience.items" :key="i" v-reveal>
              <span class="label">{{ t(e.time) }}</span>
              <strong>{{ t(e.title) }}</strong>
              <span class="cv-place">{{ t(e.place) }}</span>
            </li>
          </ul>
        </div>

        <div class="cv-col">
          <h3 class="label bracket">{{ t(about.skills.title) }}</h3>
          <ul class="chips">
            <li v-for="s in about.skills.items" :key="s" class="chip">{{ s }}</li>
          </ul>

          <h3 class="label bracket cv-gap">{{ t(about.tools.title) }}</h3>
          <ul class="chips">
            <li v-for="s in about.tools.items" :key="s" class="chip">{{ s }}</li>
          </ul>

          <h3 class="label bracket cv-gap">{{ t(about.languages.title) }}</h3>
          <ul class="cv-plain">
            <li v-for="(s, i) in about.languages.items" :key="i">{{ t(s) }}</li>
          </ul>

          <h3 class="label bracket cv-gap">{{ t(about.interests.title) }}</h3>
          <ul class="chips">
            <li v-for="(s, i) in about.interests.items" :key="i" class="chip chip--quiet">{{ t(s) }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.a-hero {
  position: relative;
  padding-top: calc(var(--nav-h) + 1rem);
}
.a-photo {
  aspect-ratio: 4 / 5;
}
.a-photo img {
  width: 100%;
  height: 120%;
  translate: 0 -8.33%;
  object-fit: cover;
  object-position: 50% 30%;
}
.a-paper {
  position: absolute;
  left: calc(var(--gutter) + 0.75rem);
  right: calc(var(--gutter) + 0.75rem);
  bottom: 0.75rem;
  padding: clamp(1rem, 2vw, 1.75rem);
  border-radius: var(--radius);
  background: color-mix(in srgb, var(--color-paper) 70%, transparent);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid color-mix(in srgb, var(--color-surface) 60%, transparent);
  display: grid;
  gap: 0.75rem;
}
.a-paper .label {
  color: var(--color-ink);
}
@media (min-width: 768px) {
  .a-photo {
    aspect-ratio: 16 / 9;
    max-height: calc(100svh - var(--nav-h) - 2rem);
    width: 100%;
  }
  .a-paper {
    right: auto;
    width: min(46%, 34rem);
    left: calc(var(--gutter) + 1.25rem);
    bottom: 1.25rem;
  }
}

.a-statement {
  margin-top: clamp(4rem, 9vw, 8rem);
}
.a-statement-text {
  font-size: clamp(1.7rem, 4.4vw, 4.25rem);
  line-height: 1.12;
  letter-spacing: -0.025em;
  font-weight: 500;
  max-width: min(72rem, 100%);
}
.hl {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: var(--color-accent);
  cursor: default;
  background-image: linear-gradient(var(--color-accent), var(--color-accent));
  background-size: 100% 2px;
  background-position: 0 96%;
  background-repeat: no-repeat;
  transition: background-size 0.4s var(--ease-fluid), color 0.3s var(--ease-fluid);
  padding: 0 0.06em;
}
.hl:hover,
.hl:focus-visible {
  background-size: 100% 100%;
  color: #fff;
}

.a-sections {
  margin-top: clamp(4rem, 8vw, 7rem);
  display: grid;
  gap: 0.9rem;
}
.a-section {
  display: grid;
  gap: 0.75rem;
  align-content: start;
}
.a-section-title {
  font-size: clamp(1.4rem, 2vw, 1.9rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
}
@media (min-width: 900px) {
  .a-sections {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.a-cv {
  margin-top: clamp(5rem, 10vw, 9rem);
}
.a-cv-head {
  padding-top: 1.25rem;
}
.cv-grid {
  margin-top: clamp(2rem, 4vw, 3.5rem);
  display: grid;
  gap: 3rem;
}
.cv-gap {
  margin-top: 2.5rem;
}
.cv-list {
  margin-top: 0.75rem;
  border-top: 1px solid var(--color-ink);
}
.cv-list li {
  display: grid;
  gap: 0.15rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid var(--color-line);
}
.cv-list strong {
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.cv-place {
  color: #3d3c39;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.75rem;
}
.chip--quiet {
  border-color: var(--color-line);
}
.cv-plain {
  margin-top: 0.75rem;
  display: grid;
  gap: 0.25rem;
}
@media (min-width: 900px) {
  .cv-grid {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: clamp(2rem, 6vw, 6rem);
  }
}
</style>
