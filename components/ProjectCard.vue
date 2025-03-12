<template>
  <div>
    <NuxtLink :to="slug" class="block">
      <div 
      class="text-gray shadow-none-lg transition duration-300 ease-in-out">
      <img :src="image"/>
      <h3 class="text-xl">{{ title }}</h3>
      <h4 class="text-sm"> {{ subtitle}}</h4>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  title: String,
  subtitle: String,
  image: String,
  slug: String
});
</script>


<style>

</style>