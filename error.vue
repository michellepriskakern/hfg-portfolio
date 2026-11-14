<script setup lang="ts">
import { site } from "~/content/site";

const props = defineProps<{ error: { statusCode?: number } }>();
const { t } = useLang();
const home = () => clearError({ redirect: "/" });
</script>

<template>
  <div>
    <SiteNav />
    <main id="main" class="wrap err">
      <p class="label bracket">{{ props.error?.statusCode ?? 404 }}</p>
      <h1 class="h-xl">{{ t(site.ui.notFound) }}</h1>
      <button type="button" class="btn" @click="home">← {{ t(site.ui.back) }}</button>
    </main>
  </div>
</template>

<style scoped>
.err {
  min-height: 80svh;
  padding-top: calc(var(--nav-h) + 4rem);
  display: grid;
  gap: 1.5rem;
  align-content: start;
  justify-items: start;
}
.err .btn {
  cursor: pointer;
}
</style>
