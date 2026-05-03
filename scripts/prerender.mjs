import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const clientDir = path.join(root, "dist/client");
const serverEntry = path.join(root, "dist/server/entry-server.js");

const tpl = await fs.readFile(path.join(clientDir, "index.html"), "utf-8");
if (!tpl.includes("<!--app-html-->") || !tpl.includes("<!--app-head-->")) {
  throw new Error("index.html lacks <!--app-html--> or <!--app-head--> markers");
}

const { render, blogPosts } = await import(pathToFileURL(serverEntry).href);

const routes = [
  "/",
  "/blog",
  "/ofertas",
  "/hoteles",
  "/vuelos-madrid-roma",
  "/privacy",
  "/terms",
  "/cookies",
  ...blogPosts.map((p) => `/blog/${p.slug}`),
];

let okCount = 0;
let failCount = 0;

for (const route of routes) {
  try {
    const { html, head } = render(route);
    const out = tpl.replace("<!--app-head-->", head).replace("<!--app-html-->", html);

    const filePath =
      route === "/"
        ? path.join(clientDir, "index.html")
        : path.join(clientDir, route, "index.html");

    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, out);
    okCount++;
    console.log(`  ok ${route} -> ${path.relative(root, filePath)} (${out.length}B)`);
  } catch (e) {
    failCount++;
    console.error(`  FAIL ${route}: ${e?.message || e}`);
  }
}

console.log(`\nPrerendered ${okCount} routes (${failCount} failed)`);
if (failCount > 0) process.exit(1);
