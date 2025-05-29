<template>
  <div class="max-w-3xl mx-auto p-8 mt-24">
    <h1 class="text-[42px] font-bold text-[#D53C4F]">Impressum</h1>
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
   <Footer />
</template>

<script setup lang="ts">
// Kein Skript erforderlich aktuell
import Footer from '~/components/Footer.vue'
</script>


<style scoped>
h2 {
  font-size: 28px;
  font-weight: 600;
  color: #D53C4F;
  margin-top: 2rem;
}

p {
  line-height: 1.6;
  color: #333;
}
</style>
