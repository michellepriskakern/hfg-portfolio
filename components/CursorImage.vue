<script setup lang="ts">
/**
 * Kleines Bild, das dem Mauszeiger folgt – für hervorgehobene Wörter
 * und die Projektliste. Auf Touch-Geräten wird es nicht angezeigt.
 */
const props = defineProps<{ src: string | null }>();

const x = ref(0);
const y = ref(0);
const canHover = ref(false);

const onMove = (e: MouseEvent) => {
  x.value = e.clientX;
  y.value = e.clientY;
};

onMounted(() => {
  canHover.value = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (canHover.value) window.addEventListener("mousemove", onMove, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("mousemove", onMove));

const lastSrc = ref<string | null>(null);
watch(
  () => props.src,
  (v) => {
    if (v) lastSrc.value = v;
  },
  { immediate: true },
);
</script>

<template>
  <div
    v-if="canHover"
    class="cursor-img"
    :class="{ 'is-on': !!src }"
    :style="{ transform: `translate3d(${x + 22}px, ${y - 90}px, 0)` }"
    aria-hidden="true"
  >
    <img v-if="lastSrc" :src="lastSrc" alt="" />
  </div>
</template>

<style scoped>
.cursor-img {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 40;
  width: clamp(180px, 20vw, 300px);
  aspect-ratio: 4 / 3;
  pointer-events: none;
  border-radius: var(--radius);
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.25s var(--ease-fluid);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.18);
}
.cursor-img.is-on {
  opacity: 1;
}
.cursor-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
