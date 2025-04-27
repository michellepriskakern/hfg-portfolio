<template>
  <div class="about-container">
    <!-- Hero Section -->
    <section class="hero-section relative">
      <img src="/images/skydiving.png" alt="Skydiving Background" class="hero-img" />
      <div class="hero-text absolute text-center">
        <h2 class="text-white text-3xl sm:text-7xl font-light">
          always searching for<br />
          <span class="font-bold" :style="{ color: currentColor }">
            {{ currentPhrase }}
          </span>
        </h2>
      </div>
    </section>

    <!-- About Text Section -->
    <section class="about-text-section py-12 px-6 sm:px-16 bg-white text-black text-lg leading-relaxed max-w-3xl mx-auto">
      <div class="section">
        <h3 class="text-2xl font-bold mb-4">Wer ich bin</h3>
        <p>
          Hi, ich bin Michelle und studiere derzeit im 4. Semester Interaktionsgestaltung in Schwäbisch Gmünd. Derzeit bin ich auf der Suche nach einem Praktikum, um meine praktischen Erfahrungen weiter auszubauen, insbesondere interessieren mich die Bereiche UI/UX Design, Ausstellungsgestaltung, Interfacedesign und Usability Testing.
        </p>
        <p class="mt-6">
          Neben dem Studium findet man mich oft mit einem Buch in der Hand, auf Skiern oder in Museen – überall dort, wo es etwas Neues zu entdecken gibt. Gestaltung begleitet mich dabei immer: Ich liebe es, Eindrücke aufzusaugen, Neues auszuprobieren und daraus kreative Verbindungen zu schaffen.
        </p>
        <p class="mt-6">
          Außerdem bin ich eine echte Nachteule – abends kommen mir oft die besten Ideen. Deshalb liegt immer ein Notizbuch neben meinem Bett, damit kein Geistesblitz verloren geht.
        </p>
      </div>

      <div class="section mt-12">
        <h3 class="text-2xl font-bold mb-4">Wie ich denke</h3>
        <p>
          Mich interessiert bei der Entwicklung eines neuen Produktes die Frage, warum wir Produkte auf eine bestimmte Art nutzen, wie unser Verhalten dadurch beeinflusst wird und wieso wir sie so nutzen wie wir es tun.
        </p>
        <p class="mt-6">
          Dabei ist es mir wichtig, mit Intention zu gestalten – bewusst Erfahrungen zu schaffen, die über das eigentliche Produkt hinausgehen.
        </p>
        <p class="mt-6">
          Design bedeutet für mich, Funktion, Material, Nutzung und Kontext zusammenzudenken und daraus Erlebnisse zu entwickeln, bei denen der Nutzer im Mittelpunkt steht und ein einheitliches Gesamtbild zu schaffen.
        </p>
      </div>

      <div class="section mt-12">
        <h3 class="text-2xl font-bold mb-4">Wie ich arbeite</h3>
        <p>
          Ich arbeite gerne strukturiert und mit einem Plan – auch wenn das in der Praxis mal besser und mal schlechter funktioniert.
        </p>
        <p class="mt-6">
          Besonders wichtig ist mir die Arbeit im Team. Man lernt unglaublich viel voneinander, bekommt neue Perspektiven und kann gemeinsam bessere Lösungen entwickeln. Ein gutes Produkt entsteht aus guter Zusammenarbeit, bei der jeder seine Perspektive einbringt.
        </p>
        <p class="mt-6">
          Ein gutes Team, ein positives Mindset und ein respektvoller, freundlicher Umgang sind für mich genauso wichtig wie das Ergebnis – denn genau diese Haltung spiegelt sich später auch im Produkt wider.
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const phrases = [
  { text: 'meaningful expierences', color: '#FDD835' },
  { text: 'better interactions', color: '#FB8C00' },
  { text: 'new ideas', color: '#AB47BC' },
]

const currentPhrase = ref(phrases[0].text)
const currentColor = ref(phrases[0].color)
let index = 0
let intervalId: number

onMounted(() => {
  intervalId = setInterval(() => {
    index = (index + 1) % phrases.length
    currentPhrase.value = phrases[index].text
    currentColor.value = phrases[index].color
  }, 5000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.about-container {
  font-family: 'Helvetica Neue', sans-serif;
}

.hero-section {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.hero-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: brightness(0.9);
}

.hero-text {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.about-text-section {
  background: #fff;
}

.section {
  margin-bottom: 20px;
}

h3 {
  color: #333;
  font-size: 1.75rem;
  font-weight: bold;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
}
</style>
