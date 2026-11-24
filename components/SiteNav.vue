<script setup lang="ts">
import { site } from "~/content/site";

const { lang, t, setLang } = useLang();
const route = useRoute();

const isActive = (to: string) =>
  to === "/" ? route.path === "/" || route.path.startsWith("/projects") : route.path.startsWith(to);
</script>

<template>
  <header class="nav">
    <a href="#main" class="skip">{{ t(site.ui.skip) }}</a>
    <nav class="wrap nav-inner" aria-label="Hauptnavigation">
      <NuxtLink to="/" class="nav-name">{{ site.name }}</NuxtLink>

      <ul class="nav-links">
        <li v-for="item in site.nav" :key="item.to">
          <NuxtLink :to="item.to" class="nav-link" :class="{ 'is-active': isActive(item.to) }" :aria-current="isActive(item.to) ? 'page' : undefined">
            <RollText :text="t(item.label)" />
          </NuxtLink>
        </li>
      </ul>

      <div class="nav-lang" role="group" :aria-label="t(site.ui.langSwitch)">
        <button type="button" :class="{ 'is-active': lang === 'de' }" :aria-pressed="lang === 'de'" @click="setLang('de')">DE</button>
        <span aria-hidden="true">/</span>
        <button type="button" :class="{ 'is-active': lang === 'en' }" :aria-pressed="lang === 'en'" @click="setLang('en')">EN</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  height: var(--nav-h);
  /* gleicher Grund wie die Seite, ohne Linie oder Schatten – keine sichtbare Kante */
  background: var(--color-paper);
}
.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.95rem;
}
.nav-name {
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
}
.nav-links {
  display: flex;
  gap: clamp(1rem, 2.4vw, 2rem);
  margin-left: auto;
}
.nav-link {
  position: relative;
  display: inline-block;
  padding: 0.4rem 0;
  color: var(--color-muted);
  transition: color 0.3s var(--ease-fluid);
}
.nav-link:hover,
.nav-link.is-active {
  color: var(--color-ink);
}
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.2rem;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s var(--ease-fluid);
}
.nav-link.is-active::after {
  transform: scaleX(1);
}
.nav-lang {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  color: var(--color-muted);
}
.nav-lang button {
  padding: 0.4rem 0.15rem;
  cursor: pointer;
  color: var(--color-muted);
}
.nav-lang button.is-active {
  color: var(--color-ink);
  text-decoration: underline;
  text-underline-offset: 4px;
}
.skip {
  position: absolute;
  left: 1rem;
  top: -4rem;
  background: var(--color-ink);
  color: var(--color-paper);
  padding: 0.6rem 1rem;
  border-radius: 999px;
  z-index: 60;
}
.skip:focus {
  top: 0.75rem;
}
@media (max-width: 420px) {
  .nav-inner {
    font-size: 0.88rem;
    gap: 0.6rem;
  }
  .nav-links {
    gap: 0.8rem;
  }
}
</style>
