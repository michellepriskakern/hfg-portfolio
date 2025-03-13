<template>
  <NuxtLink :to="slug" class="block group">
    <div class="shadow-lg hover:shadow-xl transition duration-300 ease-in-out bg-white rounded-lg overflow-hidden w-[600px] h-[350px]">
      <!-- Bildbereich (fixierte rechteckige Höhe) -->
      <div class="relative w-full h-[220px]">
        <img class="w-full h-full object-cover" :src="image" :alt="title" />
      </div>

      <!-- Textbereich kompakter -->
      <div class="p-3 flex justify-between items-center">
        <div class="flex-1">
          <h3 class="text-lg font-semibold truncate whitespace-nowrap">{{ title }}</h3>
          <h4 class="text-sm text-gray-600">{{ subtitle }}</h4>
        </div>

        <!-- Pfeil bleibt gleich -->
        <svg
          class="w-5 h-5 text-black transform transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: String,
  slug: String
});
</script>

<style scoped>
/* Falls nötig, um das Layout weiter anzupassen */
</style>
