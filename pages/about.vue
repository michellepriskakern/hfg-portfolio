<template>
  <div class="w-full">
    <!-- Hero Section -->
    <section class="hero-section relative h-screen w-full">
      <img src="/images/skydiving.png" alt="Skydiving" class="hero-img absolute w-full h-full object-cover" />
      <div class="hero-text absolute text-center z-10">
        <h2 class="text-white text-3xl sm:text-7xl font-light">
          always searching for<br />
          <span class="font-bold" :style="{ color: currentColor }">{{ currentPhrase }}</span>
        </h2>
      </div>
    </section>

    <!-- Hauptinhalt (unterhalb der Hero Section) -->
    <div class="flex flex-col lg:flex-row w-full min-h-screen">
      <!-- Linker Bereich (Text) -->
      <div
        ref="textScrollContainer"
        class="w-full lg:w-[48%] flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 lg:pl-12 pb-12 overflow-hidden relative"
      >
        <div class="relative h-full lg:min-h-screen flex items-center justify-center">
          <div
            v-for="(project, i) in projects.slice(activeIndex)"
            :key="`title-${activeIndex + i}`"
            class="absolute transition-all duration-300 w-full flex flex-col items-start"
            :style="{
              transform: `translateY(${i * 100}%)`,
              opacity: i === 0 ? 1 : 0.2,
              pointerEvents: i === 0 ? 'auto' : 'none'
            }"
          >
            <div class="flex flex-col sm:flex-row items-start sm:items-center">
              <h2
                class="rolling-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-10 relative z-10 leading-big"
                :class="{
                  'text-black opacity-100': i === 0,
                  'text-gray-400 opacity-80': i !== 0
                }"
              >
                <span class="rolling-text">
                  <span class="line">
                    <span
                      v-for="(letter, index) in project.title.split('').map((char) => char === ' ' ? '&nbsp;' : char)"
                      :key="'line1-' + index"
                      class="letter"
                      v-html="letter"
                    ></span>
                  </span>
                  <span class="line second">
                    <span
                      v-for="(letter, index) in project.title.split('').map((char) => char === ' ' ? '&nbsp;' : char)"
                      :key="'line2-' + index"
                      class="letter"
                      v-html="letter"
                    ></span>
                  </span>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <!-- Rechter Bereich (Bilder + Text vollständig sichtbar) -->
      <div
        ref="scrollContainer"
        class="w-full lg:w-[52%] h-screen overflow-y-scroll snap-y snap-mandatory flex flex-col items-center justify-start px-4"
      >
        <div
  v-for="(project, index) in projects"
  :key="`card-${index}-${project.slug || index}`"
  class="relative w-full max-w-[750px] flex flex-col items-center justify-start snap-center py-12 transition-all duration-300"
  :class="{
    'scale-100 blur-0 opacity-100 translate-y-16': index === activeIndex,  // ← NEU
    'scale-95 blur-sm opacity-60 translate-y-0': index !== activeIndex     // ← NEU
  }"
>

          <NuxtLink class="w-full transition-all duration-300">
            <div class="w-full object-cover rounded-lg shadow-lg p-8 bg-white">
              <p class="text-xl text-left whitespace-pre-wrap break-words">{{ project.text }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Hero-Animation
const phrases = [
  { text: 'meaningful experiences', color: '#FDD835' },
  { text: 'better interactions', color: '#FB8C00' },
  { text: 'new ideas', color: '#AB47BC' }
];
const currentPhrase = ref(phrases[0].text);
const currentColor = ref(phrases[0].color);
let phraseIndex = 0;
let phraseInterval;

onMounted(() => {
  phraseInterval = setInterval(() => {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    currentPhrase.value = phrases[phraseIndex].text;
    currentColor.value = phrases[phraseIndex].color;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(phraseInterval);
});

const originalProjects = [
  {
    title: 'Wer ich bin',
    text: 'Hi, ich bin Michelle und gestalte mit Begeisterung digitale Produkte. Mit einem Auge fürs Design und dem anderen für die Technik bin ich immer auf der Suche nach der perfekten Balance zwischen Ästhetik und Funktion.',
  },
  {
    title: 'Wie ich denke',
    text: 'Mich interessiert bei Projekten besonders das "Warum". Nur wenn man den Kontext versteht, kann man sinnvolle Lösungen gestalten. Empathie und ein systemisches Denken sind für mich dabei zentral.',
  },
  {
    title: 'Wie ich arbeite',
    text: 'Ich arbeite gerne interdisziplinär, nutze Design Thinking und agile Methoden, um iterativ und nutzerzentriert zu entwickeln. Dabei ist mir der Austausch im Team besonders wichtig.',
  },
];

const projects = ref(Array(100).fill(originalProjects).flat());
const activeIndex = ref(originalProjects.length * 10);
const scrollContainer = ref(null);
let isAdjusting = false;

const handleScroll = () => {
  if (isAdjusting) return;
  const container = scrollContainer.value;
  if (!container) return;

  const items = container.querySelectorAll('.snap-center');
  let closestIndex = 0;
  let closestDistance = Infinity;

  items.forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    const distanceToCenter = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
    if (distanceToCenter < closestDistance) {
      closestDistance = distanceToCenter;
      closestIndex = index;
    }
  });

  activeIndex.value = closestIndex;

  const scrollTop = container.scrollTop;
  const sectionHeight = container.scrollHeight / 3;

  if (scrollTop >= sectionHeight * 2.5) {
    isAdjusting = true;
    requestAnimationFrame(() => {
      container.scrollTop -= sectionHeight;
      isAdjusting = false;
    });
  }
};

onMounted(() => {
  const container = scrollContainer.value;
  if (!container) return;

  container.addEventListener('scroll', handleScroll);
  container.style.scrollBehavior = 'auto';

  // Neuer setTimeout-Block
  setTimeout(() => {
    const middleOffset = container.scrollHeight / 2;
    container.scrollTop = middleOffset;
    container.style.scrollBehavior = 'smooth';

    // Manuelles Setzen von activeIndex (z.B. mittleres Element)
    const items = container.querySelectorAll('.snap-center');
    if (items.length > 0) {
      const middleIndex = Math.floor(items.length / 2);
      activeIndex.value = middleIndex;
    }

    // Optional handleScroll direkt aufrufen, um Blur-Effekt sofort zu korrigieren
    handleScroll();
  }, 50);
});

onUnmounted(() => {
  const container = scrollContainer.value;
  if (container) {
    container.removeEventListener('scroll', handleScroll);
  }
});
</script>


<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-img {
  object-fit: cover;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.rolling-text {
  display: inline-block;
  height: 1em;
  overflow: hidden;
  position: relative;
}

.rolling-text .line {
  display: flex;
  transition: transform 0.8s ease;
  transform: translateY(0%);
}

.rolling-text .second {
  position: absolute;
  top: 100%;
  left: 0;
}

.group:hover .rolling-text .line {
  transform: translateY(-100%);
}

.letter {
  display: inline-block;
  transition: transform 0.8s ease, opacity 0.8s ease;
}

.rolling-text .line .letter {
  transform: translateY(0%);
  opacity: 1;
}

.rolling-text .second .letter {
  transform: translateY(100%);
  opacity: 0;
}

.group:hover .rolling-text .line .letter {
  transform: translateY(-100%);
  opacity: 0;
}

.group:hover .rolling-text .second .letter {
  transform: translateY(0%);
  opacity: 1;
}
</style>
