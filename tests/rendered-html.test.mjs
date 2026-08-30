import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
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

test("server-renders the bilingual COBEQ site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>PMC COBEQ \| Projet majeur de conception en g.nie<\/title>/i);
  assert.match(html, /Module robotis. de cueillette de fraises/);
  assert.match(html, /href="\/projets"/);
  assert.match(html, /Journal/);
  assert.match(html, /Dons et commandites/);
  assert.match(html, /Responsable des communications/);
  assert.match(html, /tana2102@usherbrooke\.ca/);
  assert.match(html, /mailto:tana2102@usherbrooke\.ca/);
  assert.match(html, /mailto:tana2102@usherbrooke\.ca\?subject=COBEQ%20-%20Soutien%20au%20prototype/);
  assert.match(html, /mailto:tana2102@usherbrooke\.ca\?subject=COBEQ%20-%20Don/);
  assert.match(html, /mailto:tana2102@usherbrooke\.ca\?subject=COBEQ%20-%20Commandite/);
  assert.match(html, /Communication par courriel seulement/);
  assert.equal((html.match(/>Écrire par courriel</g) ?? []).length, 2);
  assert.doesNotMatch(html, /class="support-card-email"/);
  assert.doesNotMatch(html, /class="support-facts"/);
  assert.doesNotMatch(html, /mandat; la validation/);
  assert.doesNotMatch(html, /; COBEQ concentre/);
  assert.match(html, /data-language-toggle/);
  assert.match(html, /<link rel="canonical" href="https:\/\/cobeq\.ca\/"/);
  assert.match(html, /<meta name="robots" content="index, follow"/);
  assert.match(html, /<meta property="og:url" content="https:\/\/cobeq\.ca\/"/);
  assert.match(html, /https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=GT-NF7N5FDR/);
  assert.match(html, /gtag\('config', 'G-P8S4WPERL5'\)/);
  assert.match(html, /src="\/i18n\.js"/);
  assert.match(html, /FR/);
  assert.match(html, /EN/);
  assert.match(html, /class="mobile-menu"/);
  assert.match(html, /class="mobile-nav"/);
  assert.match(html, /class="brand-mobile-symbol"/);
  assert.match(html, /class="brand-mobile-label"/);
  assert.match(html, /https:\/\/www\.instagram\.com\/cobeq\.ca\//);
  assert.equal((html.match(/src="\/brand\/instagram-couleur\.png"/g) ?? []).length, 5);
  assert.doesNotMatch(html, />Suivre COBEQ sur Instagram</);
  assert.match(html, /Goutti.re suspendue/);
  assert.match(html, /Fruit fragile/);
  assert.match(html, /Serre/);
  assert.match(html, /Hors-sol sous tunnel/);
  assert.match(html, /Goutti.res industrielles/);
  assert.match(html, /\/culture\/terrain-hero-serre\.jpeg/);
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

test("keeps translation and support guide details available", async () => {
  const [page, css, i18n] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../public/i18n.js", import.meta.url), "utf8"),
  ]);

  assert.match(page, /data-language-toggle/);
  assert.match(page, /i18n\.js/);
  assert.match(css, /\.language-toggle/);
  assert.match(css, /html\[data-lang="en"\] \.support-card::before/);
  assert.match(i18n, /Robotic strawberry harvesting module/);
  assert.match(i18n, /Donations and sponsorships/);
  assert.match(i18n, /Communications lead/);
  assert.doesNotMatch(i18n, /mandate; validation/);
  assert.doesNotMatch(i18n, /market; COBEQ/);
  assert.match(i18n, /Make a donation/);
  assert.match(i18n, /Become a sponsor/);
  assert.match(i18n, /No tax receipt is issued for a sponsorship/);
  assert.match(i18n, /A proof of concept guided by throughput/);
  assert.match(page, /Informations du guide PMC pour/);
  assert.match(page, /Un don est un appui sans/);
  assert.match(page, /Fondation UDS/);
  assert.match(page, /re.u fiscal peut .tre .mis/);
  assert.match(page, /Une commandite est un appui financier/);
  assert.match(page, /Aucun re.u fiscal/);
  assert.doesNotMatch(page, /Tout surplus/);
  assert.doesNotMatch(page, /SARIC/);
  assert.match(css, /\.footer-instagram/);
  assert.match(css, /\.nav-links \.nav-instagram/);
  assert.match(css, /\.mobile-menu/);
  assert.match(css, /\.mobile-nav/);
  assert.match(css, /\.brand-mobile-symbol/);
  assert.match(css, /\.brand-mobile-label/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /\.nav-links\s*\{[^}]*display:\s*none/s);
  assert.match(css, /\.portrait-frame-pending/);
  assert.match(css, /\.support-tooltip/);
  assert.match(css, /\.support-info\s*\{[^}]*display:\s*contents/s);
  assert.match(css, /\.support-tooltip\s*\{[^}]*grid-column:\s*1 \/ -1/s);
  assert.doesNotMatch(css, /\.support-tooltip\s*\{[^}]*position:\s*absolute/s);
  assert.match(css, /terrain-fleur-fraise\.jpeg/);
  assert.match(css, /terrain-rangs-sous-tunnel\.jpeg/);
  assert.match(css, /serre-rangs-suspendus\.jpg/);
  assert.match(css, /terrain-hero-serre\.jpeg/);
  assert.match(css, /terrain-detail-pedoncule\.jpeg/);
  assert.doesNotMatch(css, /(?:rang-hors-sol-detail|tunnel-hors-sol|tunnel-rendement|fraise-proche-pedoncule)\.(?:jpg|png)/);
  assert.match(css, /grid-template-columns:\s*repeat\(5, minmax\(0, 1fr\)\)/);
  assert.doesNotMatch(css, /font-size:\s*0\.56rem/);
  assert.match(css, /@media \(min-width: 921px\) and \(max-width: 1180px\)/);
  assert.match(css, /flex-wrap:\s*nowrap/);
  assert.match(css, /flex:\s*0 0 34px/);
  assert.match(css, /\.objective-card p\s*\{[^}]*text-align:\s*left/s);
  assert.match(css, /\.timeline-item p\s*\{[^}]*text-align:\s*left/s);
  assert.doesNotMatch(css, /hyphens:\s*auto/);
  assert.match(css, /hyphens:\s*none/);
  assert.doesNotMatch(css, /overflow-x:\s*auto/);
  assert.doesNotMatch(css, /text-overflow:\s*ellipsis/);
  assert.match(css, /\.projects-hero/);
  assert.match(css, /@media \(max-width: 1180px\)\s*\{[^}]*\.projects-hero-inner\s*\{[^}]*grid-template-columns:\s*1fr/s);
  assert.match(css, /\.projects-hero-wordmark\s*\{[^}]*transform:\s*translateX\(-7\.7%\)/s);
});

test("server-renders the projects and accomplishments page", async () => {
  const response = await render("/projets");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Projets et accomplissements \| COBEQ<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/cobeq\.ca\/projets"/);
  assert.match(html, /https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=GT-NF7N5FDR/);
  assert.match(html, /gtag\('config', 'G-P8S4WPERL5'\)/);
  assert.match(html, /Projets et accomplissements/);
  assert.match(html, /Journal du projet/);
  assert.match(html, /Publications . venir\./);
  assert.doesNotMatch(html, /Pourquoi cette page/);
  assert.doesNotMatch(html, /Documenter l.avancement sans m.langer la pr.sentation principale/);
  assert.doesNotMatch(html, /Les prochaines annonces auront un endroit clair/);
  assert.doesNotMatch(html, /Visite terrain/);
  assert.doesNotMatch(html, /Financement/);
  assert.doesNotMatch(html, /Bourses, dons et commandites confirm.s/);
  assert.doesNotMatch(html, /Envoyer une annonce/);
  assert.doesNotMatch(html, /Ajouter une publication/);
  assert.doesNotMatch(html, /mailto:tana2102@usherbrooke\.ca\?subject=COBEQ%20-%20Publication%20projet/);
  assert.doesNotMatch(html, /class="update-card/);
  assert.doesNotMatch(html, /class="announcement-/);
  assert.match(html, /data-language-toggle/);
  assert.match(html, /class="mobile-menu"/);
  assert.match(html, /class="mobile-nav"/);
  assert.match(html, /src="\/i18n\.js"/);
});
