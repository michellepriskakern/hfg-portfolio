<template>
  <div class="about-container">
    <!-- Hero Section -->
    <section class="hero-section relative">
      <img src="/images/skydiving.png" alt="Skydiving Background" class="hero-img" />
      <div class="hero-text absolute text-center">
        <h2 class="text-white text-3xl sm:text-7xl font-light">
          always searching for<br />
          <span class="font-bold" :style="{ color: currentColor }">
            {{ currentPhrase }}
          </span>
        </h2>
      </div>
    </section>

    <!-- About Text Section -->
    <section class="about-text-section py-12 px-6 sm:px-16 bg-white text-black text-lg leading-relaxed max-w-3xl mx-auto">
      <p>
        Hier ist ein <strong>Platzhaltertext</strong> über mich. Du kannst diesen Bereich nutzen, um deine Geschichte zu erzählen, deine Werte oder deine Projekte vorzustellen. 
      </p>
      <p class="mt-6">
        Alles, was dich ausmacht, kann hier seinen Platz finden – sei es kreativ, professionell oder ganz persönlich.
      </p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const phrases = [
  { text: 'meaningful expierences', color: '#FDD835' },
  { text: 'better interactions', color: '#FB8C00' },
  { text: 'new ideas', color: '#AB47BC' },
]

const currentPhrase = ref(phrases[0].text)
const currentColor = ref(phrases[0].color)
let index = 0
let intervalId: number

onMounted(() => {
  intervalId = setInterval(() => {
    index = (index + 1) % phrases.length
    currentPhrase.value = phrases[index].text
    currentColor.value = phrases[index].color
  }, 5000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.about-container {
  font-family: 'Helvetica Neue', sans-serif;
}

.hero-section {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.hero-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: brightness(0.9);
}

.hero-text {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.about-text-section {
  background: #fff;
}
</style>
