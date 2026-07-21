import { mkdir, readFile, rm, writeFile, cp } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = join(root, "docs");
const publicDir = join(root, "public");
const serverEntry = join(root, "dist", "server", "index.js");

const workerUrl = pathToFileURL(serverEntry);
workerUrl.searchParams.set("static-export", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("http://localhost/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static export failed with HTTP ${response.status}`);
}

let html = await response.text();
const cssHref = html.match(/<link rel="stylesheet" href="([^"]+\.css)"[^>]*>/)?.[1];

if (!cssHref) {
  throw new Error("Could not find the compiled stylesheet in rendered HTML.");
}

const cssPath = join(root, "dist", "client", cssHref.replace(/^\//, ""));
const css = (await readFile(cssPath, "utf8")).replaceAll("url(/", "url(./");

html = html
  .replace(/<link rel="modulepreload"[^>]*>/g, "")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
  .replace(/<link rel="stylesheet" href="[^"]+\.css"[^>]*>/, `<style>${css}</style>`)
  .replaceAll('href="/', 'href="./')
  .replaceAll('src="/', 'src="./')
  .replaceAll('content="/', 'content="./');

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(publicDir, outputDir, { recursive: true });
await writeFile(join(outputDir, "index.html"), html, "utf8");
await writeFile(join(outputDir, "404.html"), html, "utf8");
await writeFile(join(outputDir, ".nojekyll"), "", "utf8");
await writeFile(join(outputDir, "CNAME"), "cobeq.ca\n", "utf8");

console.log(`GitHub Pages export written to ${outputDir}`);