<script setup lang="ts">
import { site } from "~/content/site";

const { t, lang } = useLang();

useSeoMeta({
  title: () => (lang.value === "de" ? "Kontakt | Michelle Kern" : "Contact | Michelle Kern"),
  description: () => t(site.contact.lead),
});
</script>

<template>
  <section class="wrap contact">
    <p class="label bracket">{{ t(site.contact.title) }}</p>
    <h1 class="display contact-title">{{ t(site.contact.cta) }}</h1>
    <p class="lead contact-lead">{{ t(site.contact.lead) }}</p>

    <ul class="contact-list">
      <li>
        <span class="label bracket">E-Mail</span>
        <a :href="'mailto:' + site.email" class="contact-link link-u">{{ site.email }} <HoverArrow class="hover-arrow--inline hover-arrow--text" /></a>
      </li>
      <li>
        <span class="label bracket">LinkedIn</span>
        <a :href="site.linkedin" target="_blank" rel="noopener" class="contact-link link-u">Michelle Kern <HoverArrow class="hover-arrow--inline hover-arrow--text" /></a>
      </li>
      <li>
        <span class="label bracket">{{ lang === "de" ? "Ort" : "Location" }}</span>
        <span class="contact-link">{{ site.location }}</span>
      </li>
    </ul>

    <a :href="'mailto:' + site.email" class="btn contact-btn">{{ t(site.contact.mail) }} <HoverArrow class="hover-arrow--inline hover-arrow--text" /></a>
  </section>
</template>

<style scoped>
.contact {
  padding-top: calc(var(--nav-h) + clamp(2.5rem, 7vw, 6rem));
}
.contact-title {
  margin-top: 1rem;
}
.contact-lead {
  margin-top: clamp(1.5rem, 3vw, 2.5rem);
  max-width: 40rem;
}
.contact-list {
  margin-top: clamp(2.5rem, 5vw, 4rem);
  border-top: 1px solid var(--color-ink);
}
.contact-list li {
  display: grid;
  gap: 0.3rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--color-line);
}
.contact-link {
  font-size: clamp(1.25rem, 3vw, 2.25rem);
  letter-spacing: -0.02em;
  justify-self: start;
  overflow-wrap: anywhere;
}
.contact-btn {
  margin-top: 2.5rem;
}
@media (min-width: 768px) {
  .contact-list li {
    grid-template-columns: 1fr 3fr;
    align-items: baseline;
  }
}
</style>
