<script setup lang="ts">
/**
 * Eigener Cursor (nur mit Maus/Trackpad):
 * – kleiner Punkt, der weich hinterherläuft
 * – über Links etwas größer
 * – über Elementen mit data-cursor="…" ein großer Kreis mit Text in Klammern, z. B. [ explore ]
 * – verzieht sich leicht in Bewegungsrichtung
 */
const enabled = ref(false);
const label = ref<string | null>(null);
const overLink = ref(false);
const visible = ref(false);
const root = ref<HTMLElement | null>(null);
const shape = ref<HTMLElement | null>(null);

let x = 0;
let y = 0;
let cx = 0;
let cy = 0;
let raf = 0;
let started = false;

const onMove = (e: MouseEvent) => {
  x = e.clientX;
  y = e.clientY;
  if (!started) {
    cx = x;
    cy = y;
    started = true;
  }
  visible.value = true;
  const target = (e.target as HTMLElement | null)?.closest?.("[data-cursor], a, button, [role='button'], .hl") as HTMLElement | null;
  label.value = target?.dataset.cursor ?? null;
  overLink.value = !!target && !target.dataset.cursor;
};
const onLeave = () => {
  visible.value = false;
};
const onDown = () => root.value?.classList.add("is-down");
const onUp = () => root.value?.classList.remove("is-down");

const loop = () => {
  const nx = cx + (x - cx) * 0.18;
  const ny = cy + (y - cy) * 0.18;
  const vx = nx - cx;
  const vy = ny - cy;
  cx = nx;
  cy = ny;
  if (root.value) root.value.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
  if (shape.value) {
    const stretch = Math.min(Math.hypot(vx, vy) / 60, 0.28);
    const angle = (Math.atan2(vy, vx) * 180) / Math.PI;
    shape.value.style.transform = `rotate(${angle.toFixed(1)}deg) scale(${(1 + stretch).toFixed(3)}, ${(1 - stretch).toFixed(3)})`;
  }
  raf = requestAnimationFrame(loop);
};

const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    label.value = null;
    overLink.value = false;
  },
);

onMounted(() => {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  enabled.value = true;
  document.documentElement.classList.add("has-cursor");
  window.addEventListener("mousemove", onMove, { passive: true });
  window.addEventListener("mousedown", onDown);
  window.addEventListener("mouseup", onUp);
  document.addEventListener("mouseleave", onLeave);
  raf = requestAnimationFrame(loop);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  document.documentElement.classList.remove("has-cursor");
  window.removeEventListener("mousemove", onMove);
  window.removeEventListener("mousedown", onDown);
  window.removeEventListener("mouseup", onUp);
  document.removeEventListener("mouseleave", onLeave);
});
</script>

<template>
  <div
    v-if="enabled"
    ref="root"
    class="cursor"
    :class="{ 'is-visible': visible, 'is-label': !!label, 'is-link': overLink }"
    aria-hidden="true"
  >
    <span ref="shape" class="cursor-shape" />
    <span class="cursor-text">[&nbsp;{{ label }}&nbsp;]</span>
  </div>
</template>

<style scoped>
.cursor {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.25s var(--ease-fluid);
}
.cursor.is-visible {
  opacity: 1;
}
.cursor-shape {
  position: absolute;
  left: -5px;
  top: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-ink);
  transition:
    width 0.45s var(--ease-fluid),
    height 0.45s var(--ease-fluid),
    left 0.45s var(--ease-fluid),
    top 0.45s var(--ease-fluid),
    background-color 0.3s var(--ease-fluid);
}
.cursor.is-link .cursor-shape {
  width: 34px;
  height: 34px;
  left: -17px;
  top: -17px;
  background: color-mix(in srgb, var(--color-ink) 18%, transparent);
}
.cursor.is-label .cursor-shape {
  width: 108px;
  height: 108px;
  left: -54px;
  top: -54px;
  background: var(--color-accent);
}
.cursor.is-down .cursor-shape {
  width: 7px;
  height: 7px;
  left: -3.5px;
  top: -3.5px;
}
.cursor.is-label.is-down .cursor-shape {
  width: 92px;
  height: 92px;
  left: -46px;
  top: -46px;
}
.cursor-text {
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%) scale(0.6);
  white-space: nowrap;
  color: #fff;
  font-size: 0.74rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.25s var(--ease-fluid), transform 0.45s var(--ease-fluid);
}
.cursor.is-label .cursor-text {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
</style>
