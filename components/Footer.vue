<template>
  <footer class="footer py-6 bg-gray-100 text-gray-600 text-sm mt-12">
    <div class="flex justify-between items-center pl-6 pr-40">
      <p class="text-left">&copy; 2025 Michelle Kern</p>
      <nav class="flex space-x-20">
        <NuxtLink to="/dataprivacy" class="hover:text-gray-900">Datenschutzerklärung</NuxtLink>
        <NuxtLink to="/impressum" class="hover:text-gray-900">Impressum</NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<script setup>
// Falls du später Props brauchst, kannst du sie hier definieren
</script>

<style scoped>
.footer {
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #f7fafc;
  color: #718096;
}
</style>
