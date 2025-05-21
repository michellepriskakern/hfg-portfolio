<template>
  <div class="min-h-screen flex flex-col justify-between">
    <!-- Hauptinhalt -->
    <main>
      <NuxtPage />
    </main>

    <!-- Globaler Footer -->
    <footer class="w-full bg-neutral-800 text-white text-sm py-6 px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div class="flex space-x-4">
        <NuxtLink to="/impressum" class="hover:underline">Impressum</NuxtLink>
        <NuxtLink to="/datenschutz" class="hover:underline">Datenschutz</NuxtLink>
      </div>

      <div class="text-center text-xs">
        designed and coded 2025 by © michelle kern
      </div>

      <div class="flex space-x-4">
        <a href="https://www.linkedin.com/in/vanessa-hiller" target="_blank" class="hover:underline">LinkedIn</a>
        <a href="mailto:vanessa-hiller@outlook.com" class="hover:underline">Email</a>
      </div>
    </footer>
  </div>
</template>

