import type { Metadata } from "next";

const communicationContact = {
  name: "Alexandre Tanguay",
  role: "Responsable des communications",
  email: "tana2102@usherbrooke.ca",
} as const;

export const metadata: Metadata = {
  title: "Projets et accomplissements | COBEQ",
  description: "Journal du projet COBEQ. Publications à venir.",
  alternates: {
    canonical: "/projets",
  },
  openGraph: {
    title: "Projets et accomplissements COBEQ",
    description: "Journal du projet COBEQ. Publications à venir.",
    url: "https://cobeq.ca/projets",
    siteName: "COBEQ",
    locale: "fr_CA",
    alternateLocale: ["en_CA"],
    type: "website",
    images: [
      {
        url: "/culture/terrain-rangs-sous-tunnel.jpeg",
        alt: "Culture de fraises hors-sol sous tunnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets et accomplissements COBEQ",
    description: "Journal du projet COBEQ. Publications à venir.",
    images: ["/culture/terrain-rangs-sous-tunnel.jpeg"],
  },
};

export default function ProjectsPage() {
  return (
    <main className="page-shell projects-page">
      <header className="topbar" aria-label="Navigation principale">
        <div className="brand-cluster">
          <a className="brand-link" href="/#accueil" aria-label="Retour à l’accueil PMC COBEQ">
            <img src="/brand/nom.png" alt="COBEQ" className="brand-wordmark" />
            <span>PMC en génie</span>
          </a>
          <button className="language-toggle" type="button" data-language-toggle aria-label="Traduire le site en anglais" aria-pressed="false">
            <span className="language-choice language-choice-fr">FR</span>
            <span className="language-choice language-choice-en">EN</span>
          </button>
        </div>
        <nav className="nav-links" aria-label="Sections du site">
          <a href="/#projet">Projet</a>
          <a href="/projets" aria-current="page">Journal</a>
          <a href="/#objectifs">Objectifs</a>
          <a href="/#udes">UDS</a>
          <a href="/#demarche">Démarche</a>
          <a href="/#equipe">Équipe</a>
          <a href="/#contribuer">Contribuer</a>
          <a href="/#megageniale">Méga GÉNIALE</a>
          <a className="nav-instagram instagram-icon-link" href="https://www.instagram.com/cobeq.ca/" target="_blank" rel="noreferrer" aria-label="Instagram COBEQ">
            <img src="/brand/instagram-couleur.png" alt="" />
          </a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Ouvrir le menu">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <nav className="mobile-nav" aria-label="Sections du site mobile">
            <a href="/#projet">Projet</a>
            <a href="/projets" aria-current="page">Journal</a>
            <a href="/#objectifs">Objectifs</a>
            <a href="/#udes">UDS</a>
            <a href="/#demarche">Démarche</a>
            <a href="/#equipe">Équipe</a>
            <a href="/#contribuer">Contribuer</a>
            <a href="/#megageniale">Méga GÉNIALE</a>
            <a className="mobile-nav-instagram instagram-icon-link" href="https://www.instagram.com/cobeq.ca/" target="_blank" rel="noreferrer" aria-label="Instagram COBEQ">
              <img src="/brand/instagram-couleur.png" alt="" />
            </a>
          </nav>
        </details>
      </header>

      <section className="projects-hero projects-hero-placeholder">
        <div className="projects-hero-inner">
          <div className="projects-hero-copy">
            <img src="/brand/nom.png" alt="COBEQ" className="projects-hero-wordmark" />
            <p className="section-kicker">Journal du projet</p>
            <h1>Projets et accomplissements</h1>
            <p>Publications à venir.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <img src="/brand/logo.png" alt="COBEQ" className="footer-logo" />
        <div>
          <strong>Projet majeur de conception COBEQ</strong>
          <p>Un module de cueillette robotisée de fraises, conçu par l’équipe COBEQ de la Promotion 69 de l’Université de Sherbrooke.</p>
        </div>
        <div className="footer-contact">
          <span>{communicationContact.role}</span>
          <a href={`mailto:${communicationContact.email}`}>{communicationContact.name} · {communicationContact.email}</a>
        </div>
        <div className="footer-links">
          <a className="footer-instagram instagram-icon-link" href="https://www.instagram.com/cobeq.ca/" target="_blank" rel="noreferrer" aria-label="Instagram COBEQ">
            <img src="/brand/instagram-couleur.png" alt="" />
          </a>
          <a href="/#accueil" aria-label="Retour à l’accueil">Accueil</a>
        </div>
      </footer>
      <script src="/i18n.js" defer></script>
    </main>
  );
}
