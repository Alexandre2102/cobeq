import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exports a static GitHub Pages build", async () => {
  const html = await readFile(new URL("../docs/index.html", import.meta.url), "utf8");

  assert.match(html, /<title>PMC COBEQ \| Projet majeur de conception en génie<\/title>/);
  assert.match(html, /Module robotisé de cueillette de fraises/);
  assert.match(html, /Dons et commandites/);
  assert.match(html, /https:\/\/www\.instagram\.com\/cobeq\.ca\//);
  assert.match(html, /href="\.\/brand\/logo\.png"/);
  assert.match(html, /src="\.\/brand\/instagram-couleur\.png"/);
  assert.match(html, /url\(\.\/culture\/serre-rangs-suspendus\.jpg\)/);
  assert.doesNotMatch(html, /href="\//);
  assert.doesNotMatch(html, /src="\//);
  assert.doesNotMatch(html, /<script\b/i);
  assert.doesNotMatch(html, /modulepreload/);
});