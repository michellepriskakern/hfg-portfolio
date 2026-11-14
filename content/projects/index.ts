import type { Project } from "../types";

import cura from "./cura";
import bubble from "./bubble";
import phlib from "./phlib";
import zenzone from "./zenzone";

/**
 * Alle Projekte der Website.
 *
 * Neues Projekt hinzufügen:
 *   1. eine bestehende Datei in diesem Ordner kopieren (z. B. cura.ts → neu.ts) und anpassen
 *   2. oben importieren und unten in die Liste eintragen
 * Projekt ausblenden: in der Projektdatei `published: false` setzen.
 * Reihenfolge: bestimmt das Feld `order` (höhere Zahl = weiter oben).
 */
export const allProjects: Project[] = [cura, bubble, phlib, zenzone].sort((a, b) => b.order - a.order);

export const projects: Project[] = allProjects.filter((p) => p.published);

export const findProject = (slug: string) => projects.find((p) => p.slug === slug.toLowerCase());
