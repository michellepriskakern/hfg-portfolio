<script setup lang="ts">
import { site } from "~/content/site";

/** YouTube-Video, das erst nach einem Klick geladen wird (Datenschutz). */
const props = defineProps<{ id: string; title: string; poster: string }>();
const { t } = useLang();
const loaded = ref(false);
</script>

<template>
  <div class="video img-frame">
    <iframe
      v-if="loaded"
      :src="`https://www.youtube-nocookie.com/embed/${props.id}?autoplay=1&rel=0`"
      :title="title"
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      allowfullscreen
    />
    <button v-else type="button" class="video-poster" @click="loaded = true">
      <img :src="poster" alt="" loading="lazy" />
      <HoverArrow />
      <span class="video-ui">
        <span class="video-play">▶&nbsp; {{ t(site.ui.videoLoad) }}</span>
        <span class="video-note">{{ t(site.ui.videoNote) }}</span>
      </span>
    </button>
  </div>
</template>

<style scoped>
.video {
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
}
.video iframe,
.video-poster {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.video-poster {
  cursor: pointer;
  padding: 0;
  text-align: left;
}
.video-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) brightness(0.55);
  transition: filter 0.5s var(--ease-fluid), transform 0.9s var(--ease-fluid);
}
.video-poster:hover img {
  filter: grayscale(0) brightness(0.6);
  transform: scale(1.02);
}
.video-ui {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #fff;
  padding: 1.5rem;
  text-align: center;
}
.video-play {
  border: 1px solid #fff;
  border-radius: 999px;
  padding: 0.8rem 1.4rem;
  font-size: 1rem;
  transition: background 0.3s var(--ease-fluid), color 0.3s var(--ease-fluid);
}
.video-poster:hover .video-play {
  background: #fff;
  color: var(--color-ink);
}
.video-note {
  max-width: 34rem;
  font-size: 0.8rem;
  opacity: 0.85;
}
</style>
