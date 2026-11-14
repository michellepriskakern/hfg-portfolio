<template>
  <div class="legal max-w-3xl mx-auto p-8 mt-24">
    <h1>Impressum</h1>
    <p class="text-[20px] text-[#8C8C8B] mt-[2px]">Angaben gemäß § 5 TMG</p>

    <p class="mt-6">
      Michelle Kern<br />
      Marktgäßle 6<br />
      73525 Schwäbisch Gmünd
    </p>

    <h2>Kontakt:</h2>
    <p>
      michelle.kern@outlook.de
    </p>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Impressum | Michelle Kern', robots: 'noindex' })
</script>


<style scoped>
h2 {
  font-size: 28px;
  font-weight: 600;
  color: black;
  margin-top: 2rem;
}

p {
  line-height: 1.6;
  color: #333;
}
</style>
