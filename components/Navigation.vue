<template>
  <nav class="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md z-50">
    <div class="flex justify-start">
      <ul class="flex space-x-6 text-gray-700 text-base lg:pl-12 pl-6 py-4">
        <li>
          <NuxtLink to="/" class="hover:text-purple-500">projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="hover:text-purple-500">about</NuxtLink>
        </li>
      
      </ul>
    </div>
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
