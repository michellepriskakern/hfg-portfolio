<script setup lang="ts">
/** Buchstaben-Roll-Effekt beim Hover (wie in der bisherigen Navigation). */
const props = defineProps<{ text: string }>();
const letters = computed(() => Array.from(props.text));
</script>

<template>
  <span class="roll" :aria-label="text">
    <span class="roll-line" aria-hidden="true">
      <span v-for="(c, i) in letters" :key="'a' + i" class="roll-letter" :style="{ transitionDelay: i * 18 + 'ms' }">{{ c === ' ' ? ' ' : c }}</span>
    </span>
    <span class="roll-line roll-line--second" aria-hidden="true">
      <span v-for="(c, i) in letters" :key="'b' + i" class="roll-letter" :style="{ transitionDelay: i * 18 + 'ms' }">{{ c === ' ' ? ' ' : c }}</span>
    </span>
  </span>
</template>

<style scoped>
.roll {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  line-height: 1.25;
}
.roll-line {
  display: block;
  white-space: nowrap;
}
.roll-line--second {
  position: absolute;
  left: 0;
  top: 0;
}
.roll-letter {
  display: inline-block;
  transition: transform 0.45s var(--ease-fluid);
}
.roll-line--second .roll-letter {
  transform: translateY(110%);
}
a:hover .roll-line:not(.roll-line--second) .roll-letter,
a:focus-visible .roll-line:not(.roll-line--second) .roll-letter,
button:hover .roll-line:not(.roll-line--second) .roll-letter {
  transform: translateY(-110%);
}
a:hover .roll-line--second .roll-letter,
a:focus-visible .roll-line--second .roll-letter,
button:hover .roll-line--second .roll-letter {
  transform: translateY(0);
}
</style>
