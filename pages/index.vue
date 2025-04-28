<template>
  <div class="flex flex-col lg:flex-row h-screen overflow-hidden">
    <!-- Linke Spalte (Titel) -->
    <div
      ref="textScrollContainer"
      class="w-full lg:w-1/3 flex flex-col justify-center px-6 py-12 lg:pl-12 overflow-hidden relative ml-0 lg:ml-[50px]"
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
            <NuxtLink
              :to="project.slug"
              class="group"
            >
              <h2
                class="rolling-text text-5xl sm:text-6xl lg:text-7xl font-bold mt-4 sm:mt-10 relative z-10"
                :class="{
                  'text-black opacity-100': i === 0,
                  'text-gray-400 opacity-80': i !== 0
                }"
              >
                <span class="text-wrapper">
                  <span class="text-content">
                    <span v-for="(letter, index) in project.title.split('')" :key="index" class="letter" :style="{ animationDelay: `${index * 0.1}s` }">
                      {{ letter }}
                    </span>
                  </span>
                  <span class="text-content hover-text">
                    <span v-for="(letter, index) in project.title.split('')" :key="index" class="letter" :style="{ animationDelay: `${index * 0.1}s` }">
                      {{ letter }}
                    </span>
                  </span>
                </span>
              </h2>
            </NuxtLink>

            <div
              v-if="i === 0"
              class="sm:ml-4 text-lg sm:text-xl text-gray-600 font-light leading-snug max-w-xs flex flex-col opacity-100 transition-opacity duration-500 mt-4 sm:mt-12"
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

    <!-- Rechte Spalte (unendlicher Scroll für Bilder) -->
    <div
      ref="scrollContainer"
      class="right-column h-screen overflow-y-scroll snap-y snap-mandatory flex flex-col items-center lg:items-end pl-0 ml-0 lg:ml-[280px]" 
    >
      <div
        v-for="(project, index) in projects"
        :key="`card-${index}-${project.slug}`"
        class="relative flex items-center justify-center h-screen snap-center transition-transform duration-300"
        :class="{
          'scale-100 blur-0 opacity-100': index === activeIndex,
          'scale-90 blur-sm opacity-50': index !== activeIndex
        }"
      >
        <NuxtLink :to="project.slug" class="w-full sm:w-[1000px] max-w-[1000px] transition-all duration-300">
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
import { ref, onMounted, onUnmounted, computed } from 'vue';

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

const infiniteScrollProjects = computed(() => {
  const visibleProjects = projects.value.length;
  const offset = activeIndex.value % visibleProjects; // Ensure the loop behavior

  return [
    ...projects.value.slice(offset), // Slice from the activeIndex to the end
    ...projects.value.slice(0, offset) // Slice from the start to the activeIndex
  ];
});

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

/* --- Rolling Text Animation --- */

.rolling-text .text-wrapper {
  position: relative;
  display: inline-block;
  height: 1em;
  overflow: hidden;
}

.rolling-text .text-content {
  display: block;
  transition: transform 0.5s ease;
}

.rolling-text .hover-text {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease, top 0.5s ease;
  z-index: 1;
}

/* --- Standardzustand: keine Bewegung der Buchstaben --- */
.letter {
  display: inline-block;
  opacity: 1; /* Buchstaben sofort sichtbar */
  transform: translateY(0); /* Keine Verschiebung */
}

/* --- Hover: Animation starten --- */
.group:hover .letter {
  animation: rollUp 0.5s forwards;
}

/* --- Keyframes für die Roll-Animation --- */
@keyframes rollUp {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
