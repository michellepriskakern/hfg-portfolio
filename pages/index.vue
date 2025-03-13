<template>
  <div class="h-screen flex overflow-hidden">
    <!-- Linke Spalte: Projektliste -->
    <div class="w-1/3 flex flex-col justify-center pl-12">
      <div class="relative space-y-8">
        <div v-for="(project, index) in projects" :key="project.slug"
          class="transition-opacity duration-500">
          <!-- Flexbox für Titel & Untertitel in einer Reihe -->
          <div class="flex items-start">
            <h2 class="text-6xl font-bold transition-colors duration-500"
              :class="{ 
                'text-black opacity-100': index === activeIndex, 
                'text-gray-400 opacity-50': index !== activeIndex 
              }">
              {{ project.title }}
            </h2>

            <div class="ml-4 text-sm text-gray-500 font-light leading-snug max-w-[150px] flex flex-col"
              :class="{ 
                'opacity-100': index === activeIndex, 
                'opacity-50': index !== activeIndex 
              }">
              <span v-for="line in formatSubtitle(project.subtitle)" :key="line">
                {{ line }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Rechte Spalte: Scrollbarer Bereich für Projekte -->
    <div ref="scrollContainer" class="w-2/3 h-screen overflow-y-scroll snap-y snap-mandatory flex flex-col items-center">
      <div v-for="(project, index) in projects" :key="project.slug"
        class="relative flex items-center justify-center h-screen snap-center transition-transform duration-500"
        :class="{
          'scale-100 blur-0 opacity-100': index === activeIndex, 
          'scale-90 blur-sm opacity-50': index !== activeIndex
        }">

        <!-- ✅ Hier wird die Größe der Karte angepasst -->
        <NuxtLink :to="project.slug" class="w-[600px] max-w-[600px] transition-all duration-500">
          <img :src="project.image" :alt="project.title" class="w-full h-auto object-cover rounded-lg shadow-lg">
        </NuxtLink>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const projects = ref([
  { title: "ZenZone", subtitle: "Entspannung im Alltag", image: "/images/zenzone.png", slug: "/projects/zenzone" },
  { title: "Human Head", subtitle: "Interaktive Ausstellungs Gestaltung", image: "/images/thehumanhead.jpg", slug: "/projects/thehumanhead" },
  { title: "Phlib", subtitle: "Finde was du wirklich lesen willst", image: "/images/phlib.jpg", slug: "/projects/phlib" },
  { title: "Bubble", subtitle: "Alltagsunterstützung für Borderline", image: "/images/bubble.jpg", slug: "/projects/bubble" }
]);

const activeIndex = ref(0);
const scrollContainer = ref(null);

const formatSubtitle = (subtitle) => {
  if (!subtitle) return ["", "", ""]; 

  const words = subtitle.split(" ");
  const wordCount = words.length;

  if (wordCount === 3) {
    return words;
  } else {
    return [
      words.slice(0, Math.ceil(wordCount / 3)).join(" "),
      words.slice(Math.ceil(wordCount / 3), Math.ceil((2 * wordCount) / 3)).join(" "),
      words.slice(Math.ceil((2 * wordCount) / 3)).join(" "),
    ];
  }
};

const handleScroll = () => {
  if (!scrollContainer.value) return;

  const items = document.querySelectorAll(".snap-center");
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
};

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener("scroll", handleScroll);
  }
});
</script>

<style scoped>
html, body {
  overflow: hidden;
  height: 100%;
}

.scroll-smooth {
  scroll-behavior: smooth;
}
</style>
