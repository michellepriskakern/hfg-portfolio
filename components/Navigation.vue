<template>
  <nav class="fixed top-0 left-0 w-auto bg-white p-4 z-50">
    <ul class="flex space-x-6 text-gray-700 text-base">
      <li>
        <NuxtLink to="/about" class="hover:text-purple-500">about</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="hover:text-purple-500">projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="hover:text-purple-500">contact</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style>
@reference "tailwindcss";

.router-link-active {
  text-decoration: underline;
  @apply text-red-600;
}

a {
  @apply font-normal;
}

a:hover {
  @apply text-red-200;
}
</style>
