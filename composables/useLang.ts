export type Lang = "de" | "en";
export type L = string | { de: string; en: string };

/**
 * Sprache der Seite (Deutsch / Englisch).
 * Die Auswahl wird in einem Cookie gespeichert, damit sie beim nächsten
 * Besuch erhalten bleibt.
 */
export function useLang() {
  const lang = useCookie<Lang>("lang", {
    default: () => "de",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  const t = (value: L | undefined | null): string => {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[lang.value] ?? value.de;
  };

  const setLang = (next: Lang) => {
    lang.value = next;
  };

  return { lang, t, setLang };
}
