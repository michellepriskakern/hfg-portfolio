<script setup lang="ts">
import { projects } from "~/content/projects";
import { site } from "~/content/site";

/** Liste weiterer Projekte am Ende einer Projektseite – beim Hover erscheint das Bild. */
const props = defineProps<{ current?: string }>();
const { t } = useLang();

const list = computed(() => projects.filter((p) => p.slug !== props.current));
const number = (slug: string) => String(projects.findIndex((p) => p.slug === slug) + 1).padStart(2, "0");
const active = ref<string | null>(null);
</script>

<template>
  <section class="wrap next" aria-labelledby="next-title">
    <h2 id="next-title" class="label bracket">{{ t(site.ui.next) }}</h2>
    <ul class="next-list">
      <li v-for="p in list" :key="p.slug">
        <NuxtLink
          :to="`/projects/${p.slug}`"
          class="next-row"
          @mouseenter="active = p.cover.src"
          @mouseleave="active = null"
          @focus="active = p.cover.src"
          @blur="active = null"
        >
          <span class="label next-nr">{{ number(p.slug) }}</span>
          <span class="next-title">{{ p.title }}</span>
          <span class="next-sub">{{ t(p.subtitle) }}</span>
          <span class="label next-year">{{ p.year }}</span>
          <span class="next-arrow" aria-hidden="true"><HoverArrow class="hover-arrow--inline" /></span>
        </NuxtLink>
      </li>
    </ul>
    <CursorImage :src="active" />
  </section>
</template>

<style scoped>
.next {
  margin-top: clamp(5rem, 10vw, 9rem);
}
.next-list {
  margin-top: 1rem;
  border-top: 1px solid var(--color-ink);
}
.next-row {
  display: grid;
  grid-template-columns: 2.5rem 1fr auto;
  align-items: baseline;
  gap: 0.25rem 1rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--color-line);
  transition: padding 0.4s var(--ease-fluid), color 0.3s var(--ease-fluid);
}
.next-title {
  font-size: clamp(1.9rem, 5vw, 4.25rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
}
.next-sub {
  grid-column: 2 / -1;
  color: var(--color-muted);
}
.next-year,
.next-arrow {
  display: none;
}
.next-row:hover,
.next-row:focus-visible {
  padding-left: 0.75rem;
  color: var(--color-accent);
}
@media (min-width: 900px) {
  .next-row {
    grid-template-columns: 4rem minmax(0, 1.1fr) minmax(0, 1fr) 6rem 2rem;
    padding: 1.4rem 0;
  }
  .next-sub {
    grid-column: auto;
  }
  .next-year,
  .next-arrow {
    display: block;
    text-align: right;
  }
  .next-arrow {
    font-size: 1.4rem;
    transform: translate(-6px, 6px);
    opacity: 0;
    transition: transform 0.4s var(--ease-fluid), opacity 0.3s var(--ease-fluid);
  }
  .next-row:hover .next-arrow {
    transform: none;
    opacity: 1;
  }
}
</style>
