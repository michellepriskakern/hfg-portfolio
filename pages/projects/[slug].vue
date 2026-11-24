<script setup lang="ts">
import { findProject, projects } from "~/content/projects";
import { site } from "~/content/site";

const route = useRoute();
const { t, lang } = useLang();

const project = findProject(String(route.params.slug));
if (!project) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}

const index = projects.findIndex((p) => p.slug === project.slug);
const nr = (i: number) => String(i + 1).padStart(2, "0");

useSeoMeta({
  title: () => `${project.title} – ${t(project.subtitle)} | Michelle Kern`,
  description: () => t(project.seoDescription),
  ogTitle: () => `${project.title} – ${t(project.subtitle)}`,
  ogDescription: () => t(project.seoDescription),
  ogImage: `https://www.michellekern.de${project.cover.src}`,
});

/* --- Kapitel-Index: zeigt, wo man gerade ist --- */
const activeChapter = ref(project.chapters[0]?.id ?? "");
const progress = ref(0);
let io: IntersectionObserver | undefined;

const onScroll = () => {
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  progress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
};

onMounted(() => {
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) activeChapter.value = (e.target as HTMLElement).id;
      }
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
  );
  document.querySelectorAll<HTMLElement>("[data-chapter]").forEach((el) => io?.observe(el));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => {
  io?.disconnect();
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <article v-if="project" class="project">
    <div class="progress" aria-hidden="true"><span :style="{ transform: `scaleX(${progress})` }" /></div>

    <!-- ============ Kopf ============ -->
    <header class="wrap p-head">
      <NuxtLink to="/#work" class="label p-back"><span aria-hidden="true">←</span> {{ t(site.ui.back) }}</NuxtLink>

      <div class="p-title-row">
        <span class="label bracket">{{ nr(index) }} / {{ nr(projects.length - 1) }}</span>
        <span class="label">{{ project.year }}</span>
      </div>
      <h1 class="display p-title">{{ project.title }}</h1>
      <p class="serif-i p-sub">{{ t(project.subtitle) }}</p>

      <dl class="p-meta rule">
        <div>
          <dt class="label bracket">{{ t(site.ui.duration) }}</dt>
          <dd>{{ t(project.duration) }}</dd>
        </div>
        <div>
          <dt class="label bracket">{{ t(site.ui.team) }}</dt>
          <dd>
            <template v-for="(m, i) in project.team" :key="m.name">
              <a v-if="m.url" :href="m.url" target="_blank" rel="noopener" class="link-u">{{ m.name }} <HoverArrow class="hover-arrow--inline hover-arrow--text" /></a>
              <span v-else>{{ m.name }}</span><span v-if="i < project.team.length - 1">, </span>
            </template>
          </dd>
        </div>
        <div>
          <dt class="label bracket">{{ t(site.ui.tools) }}</dt>
          <dd>{{ project.tools.join(", ") }}</dd>
        </div>
        <div>
          <dt class="label bracket">{{ t(site.ui.focus) }}</dt>
          <dd>{{ project.focus.map((f) => t(f)).join(", ") }}</dd>
        </div>
        <div class="p-meta-wide">
          <dt class="label bracket">{{ t(site.ui.context) }}</dt>
          <dd>{{ t(project.context) }}</dd>
        </div>
      </dl>
    </header>

    <figure class="wrap p-hero">
      <div class="img-frame p-hero-frame">
        <img v-parallax="0.07" :src="project.hero.src" :width="project.hero.w" :height="project.hero.h" :alt="t(project.hero.alt)" fetchpriority="high" />
      </div>
      <figcaption v-if="project.hero.caption" class="label p-cap">{{ t(project.hero.caption) }}</figcaption>
    </figure>

    <!-- ============ Kurzfassung ============ -->
    <section class="wrap p-intro">
      <div class="p-grid">
        <h2 class="label bracket">{{ t(site.ui.summary) }}</h2>
        <p v-reveal class="lead">{{ t(project.summary) }}</p>
      </div>
      <div class="p-grid p-challenge-row">
        <h2 class="label bracket">{{ t(site.ui.challenge) }}</h2>
        <blockquote v-reveal class="box p-challenge">
          <p class="serif p-challenge-text">{{ t(project.challenge) }}</p>
        </blockquote>
      </div>

      <!-- Prozess auf einen Blick -->
      <div class="p-grid p-steps-row">
        <h2 class="label bracket">{{ t(site.ui.process) }}</h2>
        <ol class="p-steps">
          <li v-for="(c, i) in project.chapters" :key="c.id">
            <a :href="'#' + c.id" class="p-step">
              <span class="label">{{ nr(i) }}</span>
              <span class="p-step-name">{{ t(c.nav) }}</span>
            </a>
          </li>
        </ol>
      </div>
    </section>

    <!-- ============ Kapitel ============ -->
    <div class="wrap p-body">
      <nav class="p-index" :aria-label="t(site.ui.process)">
        <ol>
          <li v-for="(c, i) in project.chapters" :key="c.id">
            <a :href="'#' + c.id" :class="{ 'is-active': activeChapter === c.id }" :aria-current="activeChapter === c.id ? 'step' : undefined">
              <span class="p-index-nr">{{ nr(i) }}</span>
              <span>{{ t(c.nav) }}</span>
            </a>
          </li>
        </ol>
      </nav>

      <div class="p-chapters">
        <section v-for="(c, i) in project.chapters" :id="c.id" :key="c.id" data-chapter class="chapter rule">
          <header class="chapter-head">
            <span class="chapter-nr serif" aria-hidden="true">{{ nr(i) }}</span>
            <div>
              <p class="label bracket">{{ t(c.nav) }}</p>
              <h2 class="h-lg chapter-title">{{ t(c.title) }}</h2>
            </div>
          </header>

          <div class="chapter-text" v-reveal>
            <p v-for="(para, k) in c.text" :key="k">{{ t(para) }}</p>
          </div>

          <div v-if="c.methods?.length" class="chapter-block">
            <h3 class="label">{{ t(site.ui.methods) }}</h3>
            <ul class="chips">
              <li v-for="(m, k) in c.methods" :key="k" class="chip">{{ t(m) }}</li>
            </ul>
          </div>

          <div v-if="c.insights?.length" class="chapter-block">
            <h3 class="label">{{ t(site.ui.insights) }}</h3>
            <ul class="insights">
              <li v-for="(ins, k) in c.insights" :key="k" v-reveal="k * 80" class="box insight">
                <span class="label">{{ nr(k) }}</span>
                <h4 class="insight-title">{{ t(ins.title) }}</h4>
                <p>{{ t(ins.text) }}</p>
              </li>
            </ul>
          </div>

          <blockquote v-if="c.quote" v-reveal class="chapter-quote">
            <p class="serif-i">„{{ t(c.quote.text) }}“</p>
            <footer v-if="c.quote.source" class="label">— {{ t(c.quote.source) }}</footer>
          </blockquote>

          <div v-if="c.images?.length" class="figures" :class="{ 'figures--single': c.images.length === 1 }">
            <figure v-for="img in c.images" :key="img.src" v-reveal>
              <div class="img-frame">
                <img :src="img.src" :width="img.w" :height="img.h" :alt="t(img.alt)" loading="lazy" />
              </div>
              <figcaption v-if="img.caption" class="label p-cap">{{ t(img.caption) }}</figcaption>
            </figure>
          </div>
        </section>

        <section v-if="project.youtubeId" id="video" class="chapter rule">
          <header class="chapter-head">
            <span class="chapter-nr serif" aria-hidden="true">▶</span>
            <div>
              <p class="label bracket">{{ t(site.ui.video) }}</p>
              <h2 class="h-lg chapter-title">{{ project.title }} {{ lang === "de" ? "im Film" : "on film" }}</h2>
            </div>
          </header>
          <VideoEmbed :id="project.youtubeId" :title="project.title + ' – Video'" :poster="project.cover.src" />
        </section>

        <section v-if="project.learnings?.length" class="chapter rule">
          <header class="chapter-head">
            <span class="chapter-nr serif" aria-hidden="true">+</span>
            <div>
              <p class="label bracket">Learnings</p>
              <h2 class="h-lg chapter-title">{{ t(site.ui.learnings) }}</h2>
            </div>
          </header>
          <ol class="learnings">
            <li v-for="(l, k) in project.learnings" :key="k" v-reveal="k * 80">
              <span class="label">{{ nr(k) }}</span>
              <p class="lead">{{ t(l) }}</p>
            </li>
          </ol>
        </section>
      </div>
    </div>

    <NextProjects :current="project.slug" />
  </article>
</template>

<style scoped>
.progress {
  position: fixed;
  inset: var(--nav-h) 0 auto 0;
  height: 2px;
  z-index: 49;
  pointer-events: none;
}
.progress span {
  display: block;
  height: 100%;
  background: var(--color-accent);
  transform-origin: left;
  transform: scaleX(0);
}

/* ---------- Kopf ---------- */
.p-head {
  padding-top: calc(var(--nav-h) + clamp(1.5rem, 4vw, 3.5rem));
}
.p-back {
  display: inline-flex;
  gap: 0.5rem;
  padding: 0.4rem 0;
  transition: color 0.3s var(--ease-fluid);
}
.p-back:hover {
  color: var(--color-ink);
}
.p-title-row {
  display: flex;
  justify-content: space-between;
  margin-top: clamp(2rem, 6vw, 5rem);
}
.p-title {
  margin-top: 0.5rem;
  font-size: clamp(3.4rem, 17vw, 16rem);
  overflow-wrap: anywhere;
}
.p-sub {
  font-size: clamp(1.5rem, 3.6vw, 3.25rem);
  line-height: 1.1;
  margin-top: 0.5rem;
  max-width: 22ch;
}
.p-meta {
  margin-top: clamp(2rem, 5vw, 4rem);
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem 1.5rem;
  font-size: 0.95rem;
}
.p-meta dd {
  margin-top: 0.3rem;
}
.p-meta-wide {
  grid-column: 1 / -1;
}
@media (min-width: 900px) {
  .p-meta {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.p-hero {
  margin-top: clamp(2rem, 4vw, 3.5rem);
}
.p-hero-frame {
  aspect-ratio: 16 / 9;
}
.p-hero-frame img {
  width: 100%;
  height: 120%;
  translate: 0 -8.33%;
  object-fit: cover;
}
.p-cap {
  margin-top: 0.6rem;
  text-transform: none;
  letter-spacing: 0;
  font-size: 0.82rem;
}
@media (max-width: 767px) {
  .p-hero-frame {
    aspect-ratio: 4 / 3;
  }
}

/* ---------- Kurzfassung ---------- */
.p-intro {
  margin-top: clamp(3.5rem, 8vw, 7rem);
  display: grid;
  gap: clamp(2.5rem, 5vw, 4.5rem);
}
.p-grid {
  display: grid;
  gap: 0.9rem;
}
.p-grid .lead {
  max-width: 46rem;
}
.p-challenge {
  max-width: 46rem;
}
.p-challenge-text {
  font-size: clamp(1.4rem, 2.4vw, 2.1rem);
  line-height: 1.2;
}
.p-steps {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.6rem;
}
.p-step {
  display: grid;
  gap: 0.25rem;
  height: 100%;
  border: 1px solid var(--color-ink);
  border-radius: 14px;
  padding: 0.8rem 0.9rem;
  transition: background 0.3s var(--ease-fluid), color 0.3s var(--ease-fluid);
}
.p-step:hover {
  background: var(--color-ink);
  color: var(--color-paper);
}
.p-step:hover .label {
  color: inherit;
}
.p-step-name {
  font-weight: 500;
  line-height: 1.2;
}
@media (min-width: 900px) {
  .p-grid {
    grid-template-columns: 1fr 3fr;
    gap: 1.5rem;
  }
  .p-steps {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}
@media (min-width: 600px) and (max-width: 899px) {
  .p-steps {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* ---------- Kapitel ---------- */
.p-body {
  margin-top: clamp(4rem, 8vw, 7rem);
  display: grid;
  gap: 2rem;
}
.p-index {
  display: none;
}
.chapter {
  padding-top: 1.25rem;
  padding-bottom: clamp(3.5rem, 7vw, 6.5rem);
}
.chapter-head {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem clamp(1rem, 2.5vw, 2.5rem);
  align-items: start;
}
.chapter-nr {
  font-size: clamp(3.5rem, 8vw, 7.5rem);
  line-height: 0.8;
  color: var(--color-accent);
  min-width: 1.5ch;
}
.chapter-title {
  margin-top: 0.5rem;
  max-width: 24ch;
}
.chapter-text {
  margin-top: clamp(1.5rem, 3vw, 2.5rem);
  max-width: 42rem;
  display: grid;
  gap: 1rem;
  font-size: 1.08rem;
  line-height: 1.6;
}
.chapter-block {
  margin-top: clamp(1.75rem, 3vw, 2.5rem);
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.7rem;
}
.insights {
  display: grid;
  gap: 0.75rem;
  margin-top: 0.7rem;
}
.insight {
  display: grid;
  gap: 0.4rem;
  align-content: start;
}
.insight-title {
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.01em;
}
.insight p {
  color: #3d3c39;
  font-size: 0.97rem;
}
@media (min-width: 700px) {
  .insights {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.chapter-quote {
  margin-top: clamp(2rem, 4vw, 3.5rem);
  max-width: 50rem;
  padding-left: clamp(1rem, 2vw, 1.75rem);
  border-left: 2px solid var(--color-accent);
}
.chapter-quote p {
  font-size: clamp(1.5rem, 2.8vw, 2.5rem);
  line-height: 1.15;
}
.chapter-quote footer {
  margin-top: 0.9rem;
}
.figures {
  margin-top: clamp(2rem, 4vw, 3.5rem);
  display: grid;
  gap: 1.25rem;
  align-items: start;
}
.figures img {
  width: 100%;
}
@media (min-width: 700px) {
  .figures {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .figures--single {
    grid-template-columns: minmax(0, 1fr);
    max-width: 52rem;
  }
}
.learnings {
  margin-top: 1.5rem;
  display: grid;
  gap: 1.25rem;
  max-width: 46rem;
}
.learnings li {
  display: grid;
  grid-template-columns: 2rem 1fr;
  align-items: baseline;
}

/* Desktop: Index links, bleibt beim Scrollen stehen */
@media (min-width: 1024px) {
  .p-body {
    grid-template-columns: minmax(0, 1fr) minmax(0, 3fr);
    gap: 1.5rem;
    align-items: start;
  }
  .p-index {
    display: block;
    position: sticky;
    top: calc(var(--nav-h) + 2rem);
  }
  .p-index ol {
    display: grid;
    gap: 0.15rem;
  }
  .p-index a {
    display: flex;
    gap: 0.75rem;
    padding: 0.3rem 0;
    font-size: 0.9rem;
    color: var(--color-muted);
    transition: color 0.3s var(--ease-fluid), transform 0.4s var(--ease-fluid);
  }
  .p-index-nr {
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    min-width: 1.6rem;
    padding-top: 0.15rem;
  }
  .p-index a:hover,
  .p-index a.is-active {
    color: var(--color-ink);
  }
  .p-index a.is-active {
    transform: translateX(0.5rem);
  }
  .p-index a.is-active .p-index-nr::before {
    content: "[";
  }
  .p-index a.is-active .p-index-nr::after {
    content: "]";
  }
}
</style>
