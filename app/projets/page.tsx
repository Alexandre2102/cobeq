import type { Metadata } from "next";

const communicationContact = {
  name: "Alexandre Tanguay",
  role: "Responsable des communications",
  email: "tana2102@usherbrooke.ca",
} as const;

const communicationHref = (subject: string) =>
  `mailto:${communicationContact.email}?subject=${encodeURIComponent(subject)}`;

const projectUpdates = [
  {
    category: "Visite terrain",
    date: "Juillet 2026",
    title: "Observer la culture hors-sol sous tunnel",
    text: "Première collecte visuelle pour mieux comprendre l’espace réel autour des gouttières, la position des fruits et les contraintes d’accès du module.",
    image: "/culture/terrain-rangs-sous-tunnel.jpeg",
    alt: "Rangs de fraises hors-sol sous tunnel observés lors d’une visite terrain",
    tags: ["Culture cible", "Photos terrain"],
  },
  {
    category: "Conception",
    date: "Juillet 2026",
    title: "Comprendre le fruit, la tige et le point de coupe",
    text: "Les photos rapprochées documentent le pédoncule, les fruits voisins et le feuillage qui influence l’approche du préhenseur.",
    image: "/culture/terrain-detail-pedoncule.jpeg",
    alt: "Détail d’une fraise et de son pédoncule en culture hors-sol",
    tags: ["Pédoncule", "Préhension"],
  },
  {
    category: "Prototype",
    date: "À venir",
    title: "Premiers essais du banc d’essai",
    text: "Les essais de cadence, de taux de succès et de dommages visibles seront publiés ici lorsque le banc d’essai permettra de comparer les cycles de cueillette.",
    image: "/culture/terrain-fruits-groupe.jpeg",
    alt: "Groupe de fraises suspendues utilisé comme référence visuelle pour les futurs essais",
    tags: ["Rendement", "Validation"],
  },
  {
    category: "Financement",
    date: "À venir",
    title: "Bourses, dons et commandites confirmés",
    text: "Cette section servira à annoncer les appuis obtenus, les partenaires du prototype et les contributions qui rendent les essais possibles.",
    image: "/brand/logo.png",
    alt: "Symbole COBEQ",
    tags: ["Bourses", "Commandites"],
    logoCard: true,
  },
];

const announcementTypes = [
  {
    title: "Photos du projet",
    text: "Visites terrain, assemblage du banc d’essai, détails de préhension et évolution du prototype.",
  },
  {
    title: "Financement obtenu",
    text: "Dons, commandites, appuis matériels et ressources de prototypage reçues par l’équipe.",
  },
  {
    title: "Bourses et reconnaissances",
    text: "Prix, bourses, mentions et présentations officielles liées au Projet majeur de conception.",
  },
];

export const metadata: Metadata = {
  title: "Projets et accomplissements | COBEQ",
  description: "Journal du projet COBEQ: photos terrain, jalons du prototype, annonces de financement, bourses et accomplissements.",
  alternates: {
    canonical: "/projets",
  },
  openGraph: {
    title: "Projets et accomplissements COBEQ",
    description: "Suivre les photos, jalons, financements et accomplissements du projet COBEQ.",
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
    description: "Photos terrain, jalons du prototype, financements et bourses du projet COBEQ.",
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
      </header>

      <section className="projects-hero">
        <div className="projects-hero-inner">
          <div className="projects-hero-copy">
            <img src="/brand/nom.png" alt="COBEQ" className="projects-hero-wordmark" />
            <p className="section-kicker">Journal du projet</p>
            <h1>Projets et accomplissements</h1>
            <p>
              Une page pour suivre l’évolution de COBEQ: photos terrain, jalons du prototype, obtentions de financement, bourses et annonces importantes.
            </p>
            <div className="projects-hero-actions">
              <a href="#publications" className="button primary">Voir les publications</a>
              <a href={communicationHref("COBEQ - Nouvelle annonce")} className="button secondary">Envoyer une annonce</a>
            </div>
          </div>
          <aside className="projects-hero-note">
            <span>À publier ici</span>
            <strong>Photos, financement et bourses</strong>
            <p>Le contenu pourra évoluer au rythme du PMC sans alourdir la page d’accueil.</p>
          </aside>
        </div>
      </section>

      <section className="content-band updates-band" id="publications">
        <div className="section-heading center">
          <p className="section-kicker">Publications</p>
          <h2>Les prochaines annonces auront un endroit clair.</h2>
        </div>
        <div className="updates-grid">
          {projectUpdates.map((update, index) => (
            <article className={`update-card ${index === 0 ? "featured" : ""} ${update.logoCard ? "logo-update-card" : ""}`} key={update.title}>
              <figure>
                <img src={update.image} alt={update.alt} />
              </figure>
              <div className="update-card-content">
                <div className="update-meta">
                  <span>{update.category}</span>
                  <time>{update.date}</time>
                </div>
                <h3>{update.title}</h3>
                <p>{update.text}</p>
                <div className="update-tags" aria-label="Catégories">
                  {update.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band announcement-band">
        <div className="announcement-layout">
          <div>
            <p className="section-kicker">Accomplissements à venir</p>
            <h2>Une structure prête pour les nouvelles du projet.</h2>
            <p>
              Lorsqu’une bourse, une commandite ou une étape technique sera confirmée, elle pourra être ajoutée comme une publication avec une photo, une date et l’impact concret sur le prototype.
            </p>
          </div>
          <div className="announcement-type-grid">
            {announcementTypes.map((item) => (
              <article className="announcement-type-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-band publish-update-band">
        <div className="publish-update-panel">
          <div>
            <p className="section-kicker">Ajouter une publication</p>
            <h2>Envoyer une photo ou une annonce à publier.</h2>
            <p>
              Pour publier une nouvelle étape, envoyez le titre, la date, une courte description, une photo et le type d’annonce. Les communications passent directement par courriel.
            </p>
          </div>
          <a href={communicationHref("COBEQ - Publication projet")} className="button primary">Contacter l’équipe</a>
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
