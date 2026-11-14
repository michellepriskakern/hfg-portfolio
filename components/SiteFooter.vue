<script setup lang="ts">
import { site } from "~/content/site";

const { t } = useLang();
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer wrap">
    <div class="rule footer-top">
      <p class="label bracket">{{ t(site.contact.title) }}</p>
      <a :href="'mailto:' + site.email" class="footer-cta">
        <span class="h-xl">{{ t(site.contact.cta) }}</span>
      </a>
      <div class="footer-links">
        <a :href="'mailto:' + site.email" class="link-u">{{ site.email }}</a>
        <a :href="site.linkedin" target="_blank" rel="noopener" class="link-u">LinkedIn ↗</a>
      </div>
    </div>
    <div class="footer-bottom label">
      <span>© {{ year }} {{ site.name }}</span>
      <span class="footer-legal">
        <NuxtLink to="/impressum" class="link-u">{{ t(site.ui.imprint) }}</NuxtLink>
        <NuxtLink to="/dataprivacy" class="link-u">{{ t(site.ui.privacy) }}</NuxtLink>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: clamp(5rem, 12vw, 11rem);
  padding-bottom: 1.5rem;
}
.footer-top {
  padding-top: 1.5rem;
  display: grid;
  gap: 1.5rem;
}
.footer-cta {
  display: inline-block;
  transition: color 0.3s var(--ease-fluid);
}
.footer-cta:hover {
  color: var(--color-accent);
}
.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 2rem;
  font-size: 1.05rem;
}
.footer-bottom {
  margin-top: clamp(3rem, 6vw, 5rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
}
.footer-legal {
  display: flex;
  gap: 1.5rem;
}
</style>
