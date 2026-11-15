/**
 * Zwei kleine Direktiven für Bewegung:
 *   v-reveal          – blendet ein Element ein, sobald es sichtbar wird
 *   v-parallax="0.1"  – verschiebt ein Element beim Scrollen leicht (nur Desktop)
 * Beide respektieren "Bewegung reduzieren" in den Systemeinstellungen.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const isClient = import.meta.client;
  const reduced = () => isClient && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let io: IntersectionObserver | null = null;
  const observer = () => {
    if (!io) {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io?.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
      );
    }
    return io;
  };

  nuxtApp.vueApp.directive("reveal", {
    mounted(el: HTMLElement, binding) {
      if (reduced() || !("IntersectionObserver" in window)) return;
      if (binding.value) el.style.setProperty("--reveal-delay", `${binding.value}ms`);
      el.classList.add("reveal");
      observer().observe(el);
    },
    unmounted(el: HTMLElement) {
      io?.unobserve(el);
    },
    getSSRProps() {
      return {};
    },
  });

  type Cfg = { speed: number; free: boolean };
  const items = new Map<HTMLElement, Cfg>();
  let ticking = false;
  let listening = false;

  const update = () => {
    ticking = false;
    const enabled = window.matchMedia("(min-width: 768px)").matches && !reduced();
    const vh = window.innerHeight;
    items.forEach(({ speed, free }, el) => {
      if (!enabled) {
        el.style.transform = "";
        return;
      }
      const parent = el.parentElement ?? el;
      const r = parent.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      // Bild im Rahmen: Versatz bleibt im 20-%-Spielraum. Freie Elemente: bis 180 px.
      const max = free ? Math.min(180, vh * 0.2) : r.height * 0.09;
      const raw = (r.top + r.height / 2 - vh / 2) * speed;
      const offset = Math.max(-max, Math.min(max, raw));
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    });
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  nuxtApp.vueApp.directive("parallax", {
    mounted(el: HTMLElement, binding) {
      const v = binding.value;
      const cfg: Cfg =
        typeof v === "number"
          ? { speed: v, free: false }
          : v && typeof v === "object"
            ? { speed: typeof v.speed === "number" ? v.speed : 0.08, free: !!v.free }
            : { speed: 0.08, free: false };
      items.set(el, cfg);
      el.style.willChange = "transform";
      if (!listening) {
        listening = true;
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
      }
      onScroll();
    },
    unmounted(el: HTMLElement) {
      items.delete(el);
    },
    getSSRProps() {
      return {};
    },
  });
});
