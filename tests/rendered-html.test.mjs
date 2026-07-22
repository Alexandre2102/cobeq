import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
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
}

test("server-renders the COBEQ site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>PMC COBEQ \| Projet majeur de conception en génie<\/title>/i);
  assert.match(html, /Module robotisé de cueillette de fraises/);
  assert.match(html, /Dons et commandites/);
  assert.match(html, /Informations pour donateur/);
  assert.match(html, /Aucun re\u00e7u fiscal/);
  assert.doesNotMatch(html, /Tout surplus de dons transig/);
  assert.match(html, /MégaGÉNIALE/);
  assert.match(html, /Novembre 2027/);
  assert.match(html, /https:\/\/www\.megageniale\.usherbrooke\.ca\//);
  assert.match(html, /Visiter le site officiel/);
  assert.doesNotMatch(html, />megageniale\.usherbrooke\.ca</);
  assert.match(html, /https:\/\/www\.instagram\.com\/cobeq\.ca\//);
  assert.equal((html.match(/src="\/brand\/instagram-couleur\.png"/g) ?? []).length, 4);
  assert.doesNotMatch(html, />Suivre COBEQ sur Instagram</);
  assert.doesNotMatch(html, />Instagram @cobeq\.ca</);
  assert.doesNotMatch(html, />@cobeq\.ca</);
  assert.match(html, /Gouttière suspendue/);
  assert.match(html, /Fruit fragile/);
  assert.match(html, /Serre/);
  assert.match(html, /Hors-sol sous tunnel/);
  assert.match(html, /Gouttières industrielles/);
  assert.match(html, /\/culture\/gouttiere-industrie-rangs\.png/);
  assert.match(html, /\/culture\/gouttiere-industrie-suspendue\.png/);
  assert.match(html, /\/culture\/serre-fraises-suspendues\.png/);
  assert.match(html, /\/culture\/terrain-detail-pedoncule\.jpeg/);
  assert.match(html, /\/culture\/terrain-fruits-groupe\.jpeg/);
  assert.doesNotMatch(html, /\/culture\/(?:hors-sol-sous-tunnel)\.(?:png|jpg)/);
  assert.ok((html.match(/En attente d(?:'|&#x27;)une photo/g) ?? []).length >= 2);
  assert.doesNotMatch(html, /\/team\/gabriel-caron\.png/);
  assert.doesNotMatch(html, /\/team\/marc-aurele-menard\.png/);
  assert.doesNotMatch(html, /Building your site|react-loading-skeleton|codex-preview/i);
});

test("keeps support guide details in hover and focus tooltips", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /tooltipItems/);
  assert.match(page, /Informations du guide PMC pour/);
  assert.match(page, /Un don est un appui sans/);
  assert.match(page, /Fondation UDS/);
  assert.match(page, /re\u00e7u fiscal peut \u00eatre \u00e9mis/);
  assert.match(page, /Une commandite est un appui financier/);
  assert.match(page, /Aucun re\u00e7u fiscal/);
  assert.match(page, /cadre PMC de la Facult/);
  assert.doesNotMatch(page, /Tout surplus/);
  assert.doesNotMatch(page, /SARIC/);
  assert.match(page, /Dépenses liées aux composantes/);
  assert.match(page, /visites terrain/);
  assert.match(css, /\.footer-instagram/);
  assert.match(page, /nav-instagram/);
  assert.match(css, /\.instagram-icon-link/);
  assert.match(css, /\.nav-links \.nav-instagram/);
  assert.match(css, /\.portrait-frame-pending/);
  assert.match(css, /\.portrait-placeholder/);
  assert.match(css, /\.portrait-initials/);
  assert.match(css, /\.support-tooltip/);
  assert.match(css, /\.support-info-button sup/);
  assert.match(css, /\.support-info:hover \.support-tooltip/);
  assert.match(css, /\.support-info:focus-within \.support-tooltip/);
  assert.match(css, /overflow:\s*visible/);
  assert.match(css, /\.support-need-list/);
  assert.match(css, /terrain-fleur-fraise\.jpeg/);
  assert.match(css, /terrain-rangs-sous-tunnel\.jpeg/);
  assert.match(css, /terrain-hero-serre\.jpeg/);
  assert.match(css, /terrain-detail-pedoncule\.jpeg/);
  assert.doesNotMatch(css, /(?:serre-rangs-suspendus|rang-hors-sol-detail|tunnel-hors-sol|tunnel-rendement|fraise-proche-pedoncule)\.(?:jpg|png)/);
  assert.match(css, /\/brand\/logo\.png/);
  assert.match(css, /\.objective-band::after/);
  assert.match(css, /\.event-band::after/);
  assert.match(css, /width:\s*clamp\(300px,\s*34vw,\s*540px\)/);
  assert.match(css, /right:\s*clamp\(18px,\s*5vw,\s*72px\)/);
  assert.match(css, /left:\s*clamp\(18px,\s*5vw,\s*72px\)/);
  assert.match(css, /top:\s*clamp\(20px,\s*5vw,\s*70px\)/);
  assert.match(css, /bottom:\s*clamp\(46px,\s*7vw,\s*112px\)/);
  assert.doesNotMatch(css, /right:\s*clamp\(-150px/);
  assert.doesNotMatch(css, /left:\s*clamp\(-150px/);
  assert.match(css, /grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(css, /grid-template-columns:\s*repeat\(4, minmax\(0, 1fr\)\)/);
  assert.match(css, /overflow:\s*visible/);
  assert.match(css, /width:\s*min\(140px,\s*44vw\)/);
  assert.match(css, /justify-content:\s*flex-start/);
  assert.match(css, /display:\s*inline/);
  assert.match(css, /right:\s*-72px/);
  assert.match(css, /top:\s*42%/);
  assert.match(css, /width:\s*min\(330px,\s*78vw\)/);
  assert.match(css, /opacity:\s*0\.5/);
  assert.match(css, /font-size:\s*0\.64rem/);
  assert.match(css, /white-space:\s*normal/);
  assert.match(css, /overflow-wrap:\s*anywhere/);
  assert.doesNotMatch(css, /overflow-x:\s*auto/);
  assert.doesNotMatch(css, /scrollbar-width:\s*none/);
  assert.doesNotMatch(css, /text-overflow:\s*ellipsis/);
});
