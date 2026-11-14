<script setup lang="ts">
const { lang } = useLang();

useHead({
  htmlAttrs: { lang },
});
</script>

<template>
  <div>
    <SiteNav />
    <main id="main">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>
