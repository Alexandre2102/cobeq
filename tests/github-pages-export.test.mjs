import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exports a static bilingual GitHub Pages build", async () => {
  const html = await readFile(new URL("../docs/index.html", import.meta.url), "utf8");
  const i18n = await readFile(new URL("../docs/i18n.js", import.meta.url), "utf8");
  const cname = await readFile(new URL("../docs/CNAME", import.meta.url), "utf8");

  assert.match(html, /<title>PMC COBEQ \| Projet majeur de conception en génie<\/title>/);
  assert.match(html, /Module robotisé de cueillette de fraises/);
  assert.match(html, /Dons et commandites/);
  assert.match(html, /data-language-toggle/);
  assert.match(html, /src="\.\/i18n\.js" defer/);
  assert.match(i18n, /Robotic strawberry harvesting module/);
  assert.match(i18n, /Support COBEQ/);
  assert.match(i18n, /Become a sponsor/);
  assert.match(html, /https:\/\/www\.instagram\.com\/cobeq\.ca\//);
  assert.match(html, /href="\.\/brand\/logo\.png"/);
  assert.match(html, /href="\.\/brand\/favicon\.png"/);
  assert.match(html, /src="\.\/brand\/instagram-couleur\.png"/);
  assert.match(html, /url\(\.\/culture\/serre-rangs-suspendus\.jpg\)/);
  assert.match(html, /url\(\.\/culture\/terrain-hero-serre\.jpeg\)/);
  assert.match(html, /src="\.\/culture\/terrain-hero-serre\.jpeg"/);
  assert.match(html, /src="\.\/culture\/gouttiere-industrie-suspendue\.png"/);
  assert.match(html, /src="\.\/culture\/serre-fraises-suspendues\.png"/);
  assert.match(html, /src="\.\/culture\/terrain-detail-pedoncule\.jpeg"/);
  assert.match(html, /src="\.\/culture\/terrain-fruits-groupe\.jpeg"/);
  assert.doesNotMatch(html, /href="\//);
  assert.doesNotMatch(html, /src="\//);
  assert.doesNotMatch(html, /modulepreload/);
  assert.equal(cname.trim(), "cobeq.ca");
});
