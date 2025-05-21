<template>
  <transition name="fade" appear>
    <div>
      <!-- HERO SECTION -->
      <section class="pt-[300px] pb-[50px] px-[50px]">
        <h1 class="text-[48px] font-bold" style="color: #D53C4F;">zenzone</h1>
        <p class="text-[24px]" style="color: #8C8C8B; margin-top: 2px;">Entspannung im Alltag</p>
      </section>
      <!-- PROJECT INFO SECTION -->
      <section class="px-[50px] grid grid-cols-1 md:grid-cols-4 gap-10 text-[18px]">
        <div>
          <h2 class="text-[12px] font-semibold">[Duration]</h2>
          <p>März 2024 – Juli 2024</p>
        </div>
        <div>
          <h2 class="text-[12px] font-semibold">[Team]</h2>
          <a href="https://yasminhaehnel.com" target="_blank" class="text-black-500 hover:underline">yasminhaehnel.com</a>, <br />
          <a href="https://leaullmann.de" target="_blank" class="text-black-500 hover:underline">Lea Ullmann</a>,<br />
        </div>
        <div>
          <h2 class="text-[12px] font-semibold">[Tools]</h2>
          <p>Miro, Figma, Cinema 4D, Premiere Pro, <br /> Arduino</p>
        </div>
        <div>
          <h2 class="text-[12px] font-semibold">[Strategy]</h2>
          <p>Research, Konzept, Screen Design, Prototyping, Usability, 3D-Druck</p>
        </div>
      </section>

      <!-- IMAGE SECTION -->
      <section class="mt-[50px] flex justify-center">
        <img src="/images/interface-zenzone-box.jpg" alt="Project Image" class="large-image rounded-lg shadow-md" />
      </section>

      <!-- DESCRIPTION SECTION -->
      <section class="pl-[50px] mt-[50px] text-[24px] text-gray-800 leading-relaxed max-w-[800px]">
        <p>
          Unser Semesterprojekt im Kurs Interface Design 1 beschäftigte sich mit dem Thema Haptic User Interfaces im
          Alltag. Ziel war es, ein Gerät zu entwerfen, das sich über ein haptisches Interface bedienen lässt.
          In vielen Bereichen des Alltags werden haptische Rückmeldungen zunehmend durch Touchscreens ersetzt – was jedoch
          häufig zu Einschränkungen in der Barrierefreiheit führt. Unser Projekt setzte genau hier an und suchte nach
          alternativen, taktil erfahrbaren Bedienkonzepten.
        </p>
      </section>

      <!-- PROCESS SECTION -->
      <section class="mt-[200px] flex flex-col items-start text-[18px] pl-[50px]">
        <h2 class="text-[48px] font-bold leading-[1.0] mb-4 text-left">Process</h2>
        <div class="flex flex-col gap-[12px] text-left leading-relaxed process-text">
          <p><span class="font-semibold">Recherche & Problemverständnis</span><br />
            Das Smartphone ist für viele zum ständigen Begleiter geworden – auch abends im Bett. Doch genau dort steht es
            echter Entspannung oft im Weg. Eingehende Nachrichten, grelles Licht oder der Impuls, noch einmal schnell auf
            Social Media zu schauen, stören den Einschlafprozess und führen zu innerer Unruhe.
            Dabei ist es gerade abends wichtig, den Kopf freizubekommen und den Tag hinter sich zu lassen. Das Handy ist
            zwar ein praktisches Tool, um den Alltag zu organisieren, doch es kann auch zur Ablenkung werden. Viele
            Menschen haben Schwierigkeiten, abends abzuschalten und zur Ruhe zu kommen. Das Smartphone wird oft als letzte
            Beschäftigung genutzt, bevor
            Zwar gibt es Funktionen wie den „Nicht stören“-Modus oder Schlaf-Timer in Apps, doch das Problem bleibt: Das
            Handy liegt griffbereit – und damit auch die Ablenkung. Viele nutzen zudem YouTube, Spotify oder andere
            Plattformen, um mit Musik, Geräuschen oder Hörspielen einzuschlafen. Doch Werbung, Bildschirmlicht oder
            ständige Verfügbarkeit stören die eigentlich gewünschte Ruhe.
            zenzone wurde entwickelt, um genau hier anzusetzen: ein eigenständiges Gerät, das beruhigende Klänge abspielt
            – ganz ohne aktives Smartphone. Es schafft eine ablenkungsfreie Atmosphäre für echte Entspannung und
            unterstützt so einen natürlichen Einschlafprozess.
          </p>
          <p><span class="font-semibold">Ideenentwicklung & Konzeption</span><br />
            Im Rahmen der Recherche mit Interviewpartner:innen wurde deutlich, dass vielen Personen das Einschlafen am
            Abend ohne Hintergrundgeräusche schwerfällt und dass die Nutzung des Smartphones häufig den Einschlafprozess
            verzögert.
          </p>
          <p><span class="font-semibold">Umsetzung & Prototyping</span><br />
            Auf Basis dieser Erkenntnisse entstanden zunächst mehrere Low-Fidelity-Prototypen, um verschiedene Ansätze für
            die Gestaltung eines haptischen Produkts zu erproben. Unterstützend kamen Moodboards zum Einsatz, um einen
            passenden Stil zu entwickeln und visuelle Inspirationen zu sammeln.
            In einem weiterentwickelten Prototyp wurde ein Neopixel-Ring integriert, um Lichtverhältnisse nach dem „Wizard
            of Oz“-Prinzip simulieren zu können. Daraufhin konnte die Testphase beginnen.
            Insgesamt wurden mit 6 Personen Usabilitytests durchgeführt, aus denen hilfreiche Insights gezogen werden
            konnten, welche den Prototypen entweder bestätigt oder nochmals zu einem Umdenken der Bedienung führten.
          </p>
        </div>
      </section>

      <!-- IMAGE SECTION FOR PROCESS -->
      <section class="mt-[52px] flex justify-center">
        <img src="public/images/usabilitytesting.png" alt="Process Image" class="large-image rounded-lg shadow-md" />
      </section>

      <!-- FINAL SECTION -->
      <section class="mt-[200px] flex flex-col items-start text-[18px] pl-[50px]">
        <h2 class="text-[48px] font-bold leading-[1.0] mb-4 text-left">Final</h2>
        <div class="flex flex-col gap-[12px] text-left leading-relaxed process-text">
          <p><span class="font-semibold">App</span><br />
            In der App lassen sich individuelle Playlists hochladen und mit einem ausgewählten Stein verknüpfen oder
            direkt per NFC auf diesen übertragen. Zusätzlich können die gewünschte Lichttemperatur, die über den Stein
            ausgestrahlt werden soll, sowie die Zeit bis zum automatischen Standby-Modus der Box festgelegt werden. Nach
            der Konfiguration wird der Stein auf die Box gelegt – der Entspannungsprozess beginnt.
          </p>
          <p><span class="font-semibold">Box Bedienung</span><br />
            Box starten: Um die Box zu starten, wird der gewünschte Stein aufgelegt und das Licht sowie der Sound
            beginnen. Wenn der Stein von der Box genommen wird, schaltet sich die Box aus.
            Pausieren: Um den Sound zu pausieren und wieder zu starten, wird einmal auf den Stein getippt.
            Skippen: Um zum nächsten Sound in der Playlist zu skippen, wird doppelt auf den Stein getippt.
          </p>
          <p><span class="font-semibold">Steine</span><br />
            Es gibt drei Steine, welche für die verschiedenen Modi stehen. Alle drei werden durch eine unterschiedliche
            haptische Oberfläche gekennzeichnet.
            <br /><br />
            Modus 1 – Einschlafen:<br />
            Mit diesem Stein können Playlists erstellt werden, um das Einschlafen für Menschen, die ohne
            Hintergrundgeräusche nicht einschlafen können, zu erleichtern.<br /><br />
            Modus 2 – Meditieren:<br />
            Der Meditationsstein ist speziell für die Entspannung während einer beruhigenden Meditation konzipiert. Seine
            besondere Eigenschaft besteht darin, dass er sich an die Meditation anpasst und das Licht pulsierend zu den
            Atemübungen synchronisiert.<br /><br />
            Modus 3 – Dein Modus:<br />
            Mit diesem Stein können individuelle Playlisten erstellt werden, wie zum Beispiel Hörspiele, Podcasts oder die
            Lieblingsmusik für den Alltag.
          </p>
        </div>
      </section>

      <!-- IMAGE SECTION (App) -->
      <section class="mt-[50px] flex justify-center">
        <img src="/images/zenzone-bett.jpeg" alt="Project Image" class="large-image rounded-lg shadow-md" />
      </section>

      <!-- IMAGE SECTION (smartwatch und tablet) -->
      <section class="mt-[50px] flex justify-center gap-6 max-w-[1428px] mx-auto">
        <img src="public/images/zenzone-app.png" alt="Bild 1" class="square-image rounded-lg shadow-md" />
        <img src="public/images/zenzone-steine.png" alt="Bild 2" class="square-image rounded-lg shadow-md" />
      </section>

      <section class="mt-[200px] mb-[200px] flex flex-col items-start pl-[50px]">
        <h2 class="text-[48px] font-bold leading-[1.0] mb-8 text-left">Video</h2>
        <div class="w-full max-w-[1428px] aspect-w-16 aspect-h-9">
          <iframe
            width="1428"
            height="803"
            src="https://www.youtube.com/embed/PNB309KE4Jc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  </transition>
</template>

<script setup>
  // Kein JS notwendig für die fadeIn-Transition beim Laden
  import Footer from '~/components/Footer.vue'
</script>

<style scoped>
/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

/* Globale Bildgröße für große Bilder */
.large-image {
  width: 100%;
  max-width: 1428px;
  height: auto;
  object-fit: cover;
}

.square-image {
  width: 50%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  max-width: 714px;
}

/* GIF Bereich speziell ansprechen */
.gif-section {
  display: flex;
  align-items: center;
  gap: 50px;
}

.gif-section .gif-image {
  width: 800px;
  height: 800px;
  object-fit: contain;
}

/* Prozess Textbereich */
.process-text p {
  max-width: 50ch;
  word-wrap: break-word;
  line-height: 1.6;
  text-align: left;
  margin-bottom: 12px;
}

/* Textanpassung für den Hero-Bereich */
section h1+p {
  margin-top: 2px !important;
}

body {
  font-family: Arial, sans-serif;
}

.aspect-w-16 {
  width: 100%;
}

.aspect-h-9 {
  padding-top: 56.25%;
  position: relative;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
