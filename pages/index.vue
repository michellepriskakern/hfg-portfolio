<template>
  <div class="flex flex-col lg:flex-row h-screen overflow-hidden">
    <!-- Linke Spalte (Titel) -->
    <div
      ref="textScrollContainer"
      class="w-full lg:w-1/3 flex flex-col justify-center px-6 py-12 lg:pl-12 overflow-hidden relative"
    >
      <div class="relative h-full lg:h-screen flex items-center justify-center overflow-hidden">
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
              class="text-3xl sm:text-4xl lg:text-6xl font-bold transition-colors duration-300 mt-4 sm:mt-10 relative z-10"
              :class="{
                'text-black opacity-100': i === 0,
                'text-gray-400 opacity-80': i !== 0
              }"
            >
              {{ project.title }}
            </h2>
            <div
              v-if="i === 0"
              class="sm:ml-4 text-sm text-gray-600 font-light leading-snug max-w-xs flex flex-col opacity-100 transition-opacity duration-500 mt-4 sm:mt-12"
            >
              <span class="subtitle">
                <span
                  v-for="(word, index) in project.subtitle.split(' ')" 
                  :key="index" 
                  class="word"
                  :style="{ animationDelay: `${index * 0.1}s` }"
                >
                  {{ word }}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Rechte Spalte (scrollbare Cards) -->
    <div
      ref="scrollContainer"
      class="w-full lg:w-2/3 h-full lg:h-screen overflow-y-auto snap-y snap-mandatory flex flex-col items-center"
    >
      <div
        v-for="(project, index) in projects"
        :key="`card-${index}-${project.slug}`"
        class="relative flex items-center justify-center min-h-[90vh] lg:h-screen snap-center transition-transform duration-300"
        :class="{
          'scale-100 blur-0 opacity-100': index === activeIndex,
          'scale-95 blur-sm opacity-60': index !== activeIndex
        }"
      >
        <NuxtLink :to="project.slug" class="w-11/12 sm:w-[600px] lg:w-[800px] max-w-[800px] transition-all duration-300">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const originalProjects = [
  {
    title: 'zenzone',
    subtitle: 'Entspannung im Alltag',
    image: '/images/zenzone.png',
    slug: '/projects/zenzone'
  },
  {
    title: 'human head',
    subtitle: 'Interaktive Ausstellungs Gestaltung',
    image: '/images/humanhead.png',
    slug: '/projects/thehumanhead'
  },
  {
    title: 'Phlib',
    subtitle: 'Finde was du wirklich lesen willst',
    image: '/images/phlib.png',
    slug: '/projects/phlib'
  },
  {
    title: 'Bubble',
    subtitle: 'Alltagsunterstützung für Borderline',
    image: '/images/bubble.jpg',
    slug: '/projects/bubble'
  }
];

const projects = ref(Array(100).fill(originalProjects).flat());
const activeIndex = ref(originalProjects.length * 10);
const scrollContainer = ref(null);
const leftScrollOffset = ref(0);
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
    const distanceToCenter = Math.abs(
      rect.top + rect.height / 2 - window.innerHeight / 2
    );
    if (distanceToCenter < closestDistance) {
      closestDistance = distanceToCenter;
      closestIndex = index;
    }
  });

  activeIndex.value = closestIndex;

  // Invertiere Scroll für linke Seite
  leftScrollOffset.value = -container.scrollTop;

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
  setTimeout(() => {
    container.scrollTop = container.scrollHeight / 2;
    container.style.scrollBehavior = 'smooth';
    leftScrollOffset.value = -container.scrollTop;
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
html,
body {
  overflow: hidden;
  height: 100%;
}

.subtitle {
  display: flex;
  flex-wrap: wrap;
}

.word {
  display: inline-block;
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.2s forwards;
  margin-right: 5px;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
