// Erzeugt die Sitemap automatisch aus den veröffentlichten Projekten.
import { projects } from "../../content/projects";

const BASE = "https://www.michellekern.de";

export default defineEventHandler((event) => {
  const paths = ["/", "/about", "/contact", ...projects.map((p) => `/projects/${p.slug}`), "/impressum", "/dataprivacy"];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    paths.map((p) => `  <url><loc>${BASE}${p}</loc></url>`).join("\n") +
    `\n</urlset>\n`;
  setHeader(event, "content-type", "application/xml; charset=utf-8");
  return body;
});
