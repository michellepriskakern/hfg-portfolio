<template>
  <footer class="footer py-6 text-gray-600 text-sm mt-12">
    <!-- Strich mit 10px Abstand links und rechts -->
    <div class="h-1 bg-gray-400 mx-[25px]"></div>

    <!-- Inhalt des Footers -->
    <div class="flex justify-between items-center pl-6 pr-40 mt-6">
      <p class="text-left">&copy; 2025 Michelle Kern</p>
      <nav class="flex space-x-20">
        <NuxtLink to="/dataprivacy" class="hover:text-gray-900">Datenschutzerklärung</NuxtLink>
        <NuxtLink to="/impressum" class="hover:text-gray-900">Impressum</NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<script setup>
// Optional: Setup für Props, etc.
</script>

<style scoped>
.footer {
  font-family: 'Helvetica Neue', sans-serif;
  color: #718096;
}
</style>
