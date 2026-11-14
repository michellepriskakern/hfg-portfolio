# Portfolio Michelle Kern

Website: https://www.michellekern.de · Nuxt 3 · Tailwind CSS 4 · gehostet auf Vercel

## Inhalte ändern (ohne Design-Code anzufassen)

| Was | Wo |
| --- | --- |
| Projekte (Texte, Bilder, Methoden, Erkenntnisse) | `content/projects/<projekt>.ts` |
| Reihenfolge / Ausblenden eines Projekts | Feld `order` bzw. `published` in der Projektdatei |
| Texte für Startseite, About, Lebenslauf, Kontakt | `content/site.ts` |
| Farben, Schriften, Akzentfarbe | `assets/main.css` (Block `@theme` ganz oben) |
| Bilder | `public/img/<projekt>/` (WebP, max. 2000 px Kantenlänge) |

Alle Texte haben eine deutsche und eine englische Fassung: `{ de: "…", en: "…" }`.

### Neues Projekt anlegen

1. `content/projects/cura.ts` kopieren, umbenennen (z. B. `neues-projekt.ts`) und Inhalte anpassen.
   Der `slug` bestimmt die Adresse: `/projects/<slug>`.
2. Bilder nach `public/img/<slug>/` legen.
3. In `content/projects/index.ts` das Projekt importieren und in die Liste eintragen.

Die Projektseite, die Kachel auf der Startseite, die Liste „Weitere Arbeiten“ und die
Sitemap entstehen daraus automatisch.

### Projekt entfernen oder ausblenden

In der Projektdatei `published: false` setzen – oder die Datei löschen und den Eintrag
aus `content/projects/index.ts` entfernen.

## Aufbau

- `pages/` – Seiten: Start (`index.vue`), Projekt (`projects/[slug].vue`), About, Kontakt, Impressum, Datenschutz
- `components/` – Navigation, Footer, Video (lädt YouTube erst nach Klick), Hover-Bild, Projektliste
- `plugins/motion.ts` – Einblenden beim Scrollen (`v-reveal`) und Parallax (`v-parallax`)
- `composables/useLang.ts` – Sprachumschaltung DE/EN
- `server/routes/sitemap.xml.ts` – Sitemap
- `originals/` – unbearbeitete Originalbilder und die früheren Seiten (werden nicht ausgeliefert)

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
```

Schriften (Schibsted Grotesk, Instrument Serif) werden beim Build heruntergeladen und von der
eigenen Domain ausgeliefert – es gibt keine Verbindung zu Google-Servern.
