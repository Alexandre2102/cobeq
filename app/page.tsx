const projectPillars = [
  {
    title: "Client visé",
    text: "Les producteurs de fraises hors-sol, en serre ou sous tunnel, surtout les grandes exploitations où la récolte demande beaucoup de main-d’œuvre. Le besoin est concentré: au Québec, 10 % des fermes de plus de 10 hectares représentent 59 % de la superficie de récolte.",
  },
  {
    title: "Besoin du client",
    text: "Améliorer la rentabilité, la régularité et la prévisibilité de la récolte sans complexifier les opérations des producteurs.",
  },
  {
    title: "Taille du marché",
    text: "Le marché canadien représente environ 1 G$ au détail et 250,1 M$ en valeur à la ferme. La récolte pèse à elle seule 68,7 - 96,2 M$ par an.",
  },
  {
    title: "Potentiel du projet",
    text: "Une première génération capable de déplacer 10 à 30 % de la main-d’œuvre de récolte représente une valeur adressable estimée à 6,9 - 28,9 M$ par an au Canada.",
  },
];

const workstreams = [
  "Concevoir un module robotisé de cueillette de fraises pour les cultures hors-sol et en serre.",
  "Approcher la tige, couper, manipuler et déposer la fraise sans dommage commercial.",
  "Multiplier les préhenseurs pour viser le rendement humain plutôt qu’un robot mono-fruit lent.",
  "Mesurer la cadence, le taux de succès et le pourcentage de fruits endommagés sur banc d’essai.",
];


const pmcObjectives = [
  {
    value: "> 80 %",
    title: "Taux de succès",
    text: "Valider une cueillette automatique où la préhension et la séparation du fruit se font sans l’endommager ni l’oublier.",
  },
  {
    value: "13,9",
    title: "Fraises par minute",
    text: "Atteindre une cadence comparable à celle d’un cueilleur moyen avec le démonstrateur à trois préhenseurs.",
  },
  {
    value: "< 10 %",
    title: "Fruits endommagés",
    text: "Limiter les dommages causés par la manipulation afin que la performance reste pertinente pour un producteur.",
  },
  {
    value: "15 s",
    title: "Cycle par préhenseur",
    text: "Démontrer au minimum un cycle valide aux 15 secondes par préhenseur pour prouver la faisabilité.",
  },
];

const pmcScope = [
  "Approcher l’effecteur de la tige à partir d’une position connue.",
  "Couper ou détacher le pédoncule sans blesser le fruit.",
  "Soutenir, transférer et déposer la fraise dans une zone d’emmagasinage.",
  "Comparer les essais par cadence, taux de succès et dommages visibles.",
];

const culturePoints = [
  "Gouttières hors-sol utilisées en production, avec des rangs réguliers et un espace de travail limité.",
  "Fraises suspendues à différentes hauteurs, souvent partiellement cachées par le feuillage.",
  "Pédoncule fin à atteindre sans blesser le fruit, le plant ou les fruits voisins.",
  "Environnement de serre ou de tunnel où la cadence et la continuité de récolte comptent.",
];

const cultureImages = [
  {
    src: "/culture/gouttiere-industrie-suspendue.png",
    title: "Gouttière suspendue",
    alt: "Gouttière suspendue de fraises en production en serre",
  },
  {
    src: "/culture/fraise-proche-pedoncule.jpg",
    title: "Fruit fragile",
    alt: "Fraise mûre suspendue sous le feuillage avec pédoncule visible",
  },
  {
    src: "/culture/serre-fraises-suspendues.png",
    title: "Serre",
    alt: "Fraises suspendues en serre dans des rangs de production hors-sol",
  },
  {
    src: "/culture/hors-sol-sous-tunnel.png",
    title: "Hors-sol sous tunnel",
    alt: "Culture de fraises hors-sol sous tunnel avec fruits suspendus",
  },
];

const timeline = [
  {
    step: "01",
    title: "Cadrer le besoin",
    text: "Valider le problème terrain: coûts de récolte, rareté de main-d’œuvre, rendement et contraintes de culture hors-sol.",
  },
  {
    step: "02",
    title: "Concevoir le module",
    text: "Définir l’architecture mécatronique: positionnement, coupe, préhension, dépôt et gestion de plusieurs préhenseurs.",
  },
  {
    step: "03",
    title: "Intégrer le prototype",
    text: "Assembler le banc d’essai, les actionneurs, l’électronique et le contrôle pour exécuter un cycle complet de cueillette.",
  },
  {
    step: "04",
    title: "Prouver le rendement",
    text: "Comparer les essais à une référence humaine: cadence cible, taux de succès supérieur à 80 % et moins de 10 % de fruits endommagés.",
  },
];

type TeamMember = {
  name: string;
  program: string;
  accentKey: "green" | "mechanical";
  image?: string;
  position?: string;
  initials?: string;
  photoStatus?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Alexandre Tanguay",
    program: "Génie robotique",
    accentKey: "green",
    image: "/team/alexandre-tanguay.png",
    position: "center 38%",
  },
  {
    name: "Sébastien Paquette",
    program: "Génie électrique",
    accentKey: "green",
    image: "/team/sebastien-paquette.png",
    position: "center 42%",
  },
  {
    name: "Gabriel Caron",
    program: "Génie mécanique",
    accentKey: "mechanical",
    initials: "GC",
    photoStatus: "En attente d'une photo",
  },
  {
    name: "Émile LeBlanc",
    program: "Génie mécanique",
    accentKey: "mechanical",
    image: "/team/emile-leblanc.png",
    position: "center 42%",
  },
  {
    name: "Marc-Aurèle Ménard",
    program: "Génie électrique",
    accentKey: "green",
    initials: "MM",
    photoStatus: "En attente d'une photo",
  },
  {
    name: "El Souleymane Bah",
    program: "Génie électrique",
    accentKey: "green",
    image: "/team/el-souleymane-bah.png",
    position: "center 38%",
  },
  {
    name: "Yanick Boucher",
    program: "Génie mécanique",
    accentKey: "mechanical",
    image: "/team/yanick-boucher.png",
    position: "center 36%",
  },
  {
    name: "Justin Lambert",
    program: "Génie mécanique",
    accentKey: "mechanical",
    image: "/team/justin-lambert.png",
    position: "center 42%",
  },
];

const supportNeeds = [
  {
    title: "Dépenses liées aux composantes du module",
    text: "Rails linéaires, moteurs, capteurs, contrôleurs, alimentation, câblage et autres éléments nécessaires à l’intégration.",
  },
  {
    title: "Banc d’essai représentatif",
    text: "Reproduction d’une culture de fraises hors-sol ou en serre, déplacements, visites terrain, transport et matériel d’essai.",
  },
  {
    title: "Essais de rendement",
    text: "Mesures de cadence, répétabilité, taux de succès, fruits endommagés et itérations de conception.",
  },
];

const supportOptions = [
  {
    title: "Faire un don",
    text: "Un appui ponctuel aide l’équipe à financer le prototype à trois préhenseurs, les essais et les itérations de conception.",
    action: "Contacter l’équipe",
    tooltipTitle: "Informations pour donateur",
    tooltipItems: [
      "Un don est un appui sans visibilité publicitaire en échange.",
      "Les dons peuvent passer par la Fondation UDS lorsque le projet y est inscrit.",
      "Un reçu fiscal peut être émis pour les dons admissibles de 20 $ et plus.",
      "Pour acheminer le don, le donateur indique le nom du projet dans le champ « Autre projet ».",
    ],
  },
  {
    title: "Devenir commanditaire",
    text: "Une contribution financière ou en nature peut soutenir les composantes, l’usinage, les essais terrain ou l’accès à des ressources de prototypage.",
    action: "Proposer une commandite",
    tooltipTitle: "Informations pour commanditaire",
    tooltipItems: [
      "Une commandite est un appui financier, matériel ou en services associé à une visibilité convenue.",
      "Aucun reçu fiscal n’est émis pour une commandite.",
      "Les contreparties de visibilité et toute entente officielle doivent respecter le cadre PMC de la Faculté de génie.",
      "Les contributions en nature peuvent soutenir l’usinage, les essais, l’accès terrain ou les ressources de prototypage.",
    ],
  },
];

const sponsorLevels = [
  "Soutien ponctuel",
  "Partenaire de prototype",
  "Commanditaire principal",
];


export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar" aria-label="Navigation principale">
        <a className="brand-link" href="#accueil" aria-label="Retour à l’accueil PMC COBEQ">
          <img src="/brand/nom.png" alt="COBEQ" className="brand-wordmark" />
          <span>PMC en génie</span>
        </a>
        <nav className="nav-links" aria-label="Sections du site">
          <a href="#projet">Projet</a>
          <a href="#objectifs">Objectifs</a>
          <a href="#udes">UDS</a>
          <a href="#demarche">Démarche</a>
          <a href="#equipe">Équipe</a>
          <a href="#contribuer">Contribuer</a>
          <a href="#megageniale">Méga GÉNIALE</a>
          <a className="nav-instagram instagram-icon-link" href="https://www.instagram.com/cobeq.ca/" target="_blank" rel="noreferrer" aria-label="Instagram COBEQ">
            <img src="/brand/instagram-couleur.png" alt="" />
          </a>
        </nav>
      </header>

      <section className="hero-section" id="accueil">
        <div className="hero-symbol-panel" aria-hidden="true">
          <img src="/brand/logo.png" alt="" className="hero-symbol" />
        </div>
        <div className="hero-content">
          <img src="/brand/nom.png" alt="COBEQ" className="hero-wordmark" />
          <p className="eyebrow">Module robotisé de cueillette de fraises</p>
          <h1>
            Projet{" "}
            <span className="pmc-term" tabIndex={0} aria-describedby="pmc-tooltip">
              PMC
              <span className="pmc-tooltip" id="pmc-tooltip" role="tooltip">
                PMC = Projet majeur de conception en génie à l’Université de Sherbrooke
              </span>
            </span>{" "}
            COBEQ
          </h1>
          <p className="hero-lede">
            COBEQ développe un module robotisé dédié à la cueillette de fraises de production en serre et en culture hors-sol.
            <br />
            L’objectif: Cœur du projet, le RENDEMENT. Récolter plus efficacement, sans abîmer les fruits.
          </p>
          <div className="hero-actions" aria-label="Actions principales">
            <a href="#projet" className="button primary">Comprendre le projet</a>
            <a href="#contribuer" className="button secondary">Soutenir le prototype</a>
          </div>
          <dl className="hero-metrics" aria-label="Repères du projet">
            <div>
              <dt>Besoin</dt>
              <dd>55 %</dd>
              <span>des coûts liés à une récolte très dépendante de la main-d’œuvre</span>
            </div>
            <div>
              <dt>Objectif rendement</dt>
              <dd>13,9 fraises/min</dd>
              <span>≈ 6 700 fraises/jour (8 h)</span>
            </div>
            <div>
              <dt>Prototype visé</dt>
              <dd>3 préhenseurs</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="institution-band" id="udes" aria-label="Université de Sherbrooke">
        <div className="institution-panel">
          <div className="udes-logo-frame">
            <img src="/brand/udes.png" alt="Université de Sherbrooke" />
          </div>
          <div className="institution-copy">
            <p className="section-kicker">Université de Sherbrooke</p>
            <h2>Un Projet majeur de conception en génie au baccalauréat, réalisé par la Promotion 69.</h2>
            <p>
              Le PMC COBEQ, soit le Projet majeur de conception en génie, s’inscrit dans le parcours du baccalauréat en génie de la Promotion 69 de l’Université de Sherbrooke. Dans ce projet, l’équipe développe une solution ciblée pour les producteurs: augmenter la cadence de récolte tout en manipulant les fraises avec soin.
            </p>
          </div>
        </div>
      </section>

      <section className="intro-band" id="projet">
        <div className="section-heading">
          <p className="section-kicker">Le projet en clair</p>
          <h2>Un module de cueillette de fraises qui cible le rendement.</h2>
        </div>
        <p className="intro-text">
          Le client visé est le producteur de fraises qui doit cueillir beaucoup, vite et au bon moment. Le projet isole le cycle de cueillette pour développer un module duplicable: approcher la fraise, détacher le fruit, le manipuler doucement et le déposer, avec une cadence comparable à une référence humaine.
        </p>
      </section>


      <section className="content-band culture-band" aria-label="Culture cible">
        <div className="culture-layout">
          <div className="culture-copy">
            <p className="section-kicker">Culture cible</p>
            <p>
              Le module COBEQ vise les cultures en gouttières hors-sol utilisées en production, en serre ou sous tunnel. Ces installations offrent une géométrie plus stable qu’un champ ouvert, mais la cueillette reste complexe: le fruit est fragile, le feuillage masque l’accès et le rendement dépend du temps de cycle.
            </p>
            <ul className="culture-points">
              {culturePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <figure className="culture-feature">
            <img src="/culture/gouttiere-industrie-rangs.png" alt="Gouttières hors-sol de fraises utilisées en production en serre" />
            <figcaption>Gouttières industrielles: l’environnement que le module cherche à servir.</figcaption>
          </figure>
        </div>
        <div className="culture-gallery" aria-label="Exemples visuels de la culture ciblée">
          {cultureImages.map((image) => (
            <figure className="culture-tile" key={image.src}>
              <img src={image.src} alt={image.alt} />
              <figcaption>{image.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="content-band objective-band" id="objectifs" aria-label="Objectifs du projet COBEQ">
        <div className="objective-heading">
          <p className="section-kicker">Objectifs du projet</p>
          <h2>Le livrable du prototype.</h2>
          <p>
            Le livrable visé est un démonstrateur de cueillette à trois préhenseurs, conçu, fabriqué, intégré et validé sur un banc d’essai représentatif d’une culture de fraises hors-sol en serre. À partir de la position connue d’une fraise cible, le prototype doit exécuter un cycle complet: approche, coupe du pédoncule, soutien, transfert, dépôt et emmagasinage dans un bac. La vision et la sélection des fruits ne font pas partie du mandat; la validation porte d’abord sur le rendement, le taux de succès et les dommages visibles.
          </p>
        </div>
        <div className="objective-grid">
          {pmcObjectives.map((objective) => (
            <article className="objective-card" key={objective.title}>
              <span className="objective-value">{objective.value}</span>
              <h3>{objective.title}</h3>
              <p>{objective.text}</p>
            </article>
          ))}
        </div>
        <div className="scope-strip">
          <div>
            <p className="scope-label">Périmètre de validation</p>
            <h3>Un cycle complet, mesurable du début à la fin.</h3>
          </div>
          <ul className="scope-list">
            {pmcScope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-band light-band" aria-label="Portrait rapide du projet">
        <div className="card-grid four">
          {projectPillars.map((pillar) => (
            <article className="info-card" key={pillar.title}>
              <span className="card-marker" aria-hidden="true" />
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band focus-band">
        <div className="section-heading center focus-heading">
          <p className="section-kicker">Ce que nous cherchons à faire</p>
          <h2>Isoler la cueillette, là où se crée la valeur.</h2>
          <p className="focus-lede">
            COBEQ développe un module dédié à la cueillette: approcher la fraise, la détacher,
            la manipuler doucement et la déposer avec une cadence mesurable.
          </p>
        </div>
        <ol className="workstream-list">
          {workstreams.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <aside className="scope-note">
          <span>Module dédié à la cueillette</span>
          <p>
            Le déplacement autonome est volontairement hors périmètre. Des solutions de mobilité
            existent déjà sur le marché; COBEQ concentre l’effort sur la cueillette, parce que
            c’est là que se jouent le rendement, le taux de succès et la qualité du fruit.
          </p>
        </aside>
      </section>

      <section className="content-band timeline-band" id="demarche">
        <div className="section-heading center">
          <p className="section-kicker">Démarche</p>
          <h2>Une preuve de concept guidée par le rendement.</h2>
          <div className="timeline-periods" aria-label="Période couverte par le PMC">
            <span>S6 (été 2026)</span>
            <span>S7 (hiver 2027)</span>
            <span>S8 (automne 2027)</span>
          </div>
        </div>
        <div className="timeline-grid">
          {timeline.map((item) => (
            <article className="timeline-item" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band team-band" id="equipe">
        <div className="team-intro">
          <div className="section-heading compact">
            <p className="section-kicker">Équipe COBEQ</p>
            <h2>Les membres qui portent le projet.</h2>
          </div>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className={`team-card ${member.accentKey}`} key={member.name}>
              <div className={`portrait-frame ${member.image ? "" : "portrait-frame-pending"}`}>
                {member.image ? (
                  <img src={member.image} alt={`Portrait de ${member.name}`} style={{ objectPosition: member.position ?? "center" }} />
                ) : (
                  <div className="portrait-placeholder" aria-label={`Photo de ${member.name} en attente`}>
                    <span className="portrait-initials">{member.initials}</span>
                    <span className="portrait-status">{member.photoStatus}</span>
                  </div>
                )}
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <span className={`member-program ${member.accentKey}`}>{member.program}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band support-band" id="contribuer">
        <div className="support-layout">
          <div className="support-copy">
            <p className="section-kicker">Dons et commandites</p>
            <h2>Soutenir COBEQ.</h2>
            <p>
              COBEQ cherche des contributeurs pour franchir les étapes clés du prototype: composantes, fabrication, banc d’essai, mesures de rendement et validation du cycle de cueillette.
            </p>
            <div className="support-facts" aria-label="Priorités du soutien">
              <span>Prototype à trois préhenseurs</span>
              <span>Essais de rendement</span>
              <span>Terrain et banc d’essai</span>
            </div>
            <div className="support-note">
              Les contributions peuvent être financières ou en nature. Lorsqu’une entente officielle est nécessaire, l’équipe s’arrime au cadre PMC de la Faculté de génie et aux démarches de partenariat de l’Université de Sherbrooke.
            </div>
            <a className="social-link instagram-icon-link" href="https://www.instagram.com/cobeq.ca/" target="_blank" rel="noreferrer" aria-label="Instagram COBEQ">
              <img src="/brand/instagram-couleur.png" alt="" />
            </a>
          </div>

          <div className="support-actions">
            {supportOptions.map((option) => (
              <article className="support-card" key={option.title}>
                <div className="support-card-heading">
                  <h3>{option.title}</h3>
                  <span className="support-info">
                    <button
                      type="button"
                      className="support-info-button"
                      aria-label={`Informations du guide PMC pour ${option.title}`}
                    >
                      <span>Guide PMC</span>
                      <sup aria-hidden="true">*</sup>
                    </button>
                    <span className="support-tooltip" role="tooltip">
                      <strong>{option.tooltipTitle}</strong>
                      {option.tooltipItems.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </span>
                  </span>
                </div>
                <p>{option.text}</p>
                <a href="#equipe" className="button primary">{option.action}</a>
              </article>
            ))}
          </div>
        </div>

        <div className="support-details">
          <div className="support-impact">
            <p className="section-kicker">Utilisation de l’appui</p>
            <h3>Ce que l’appui rend possible</h3>
            <p>
              Chaque contribution sert à rapprocher le prototype d’une validation concrète: construire, tester, mesurer et améliorer le module.
            </p>
            <ul className="support-need-list">
              {supportNeeds.map((item, index) => (
                <li key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="sponsor-card">
            <p className="section-kicker">Partenariat</p>
            <h3>Formats de commandite</h3>
            <div className="sponsor-levels">
              {sponsorLevels.map((level) => (
                <span key={level}>{level}</span>
              ))}
            </div>
            <p>
              Les détails de visibilité sont établis avec le partenaire selon la contribution, les contraintes du projet et les règles applicables au PMC.
            </p>
            <a className="instagram-pill instagram-icon-link" href="https://www.instagram.com/cobeq.ca/" target="_blank" rel="noreferrer" aria-label="Instagram COBEQ">
              <img src="/brand/instagram-couleur.png" alt="" />
            </a>
          </div>
        </div>
      </section>


      <section className="content-band event-band" id="megageniale">
        <div className="event-panel">
          <div className="event-copy">
            <div className="event-heading">
              <a className="event-logo-link" href="https://www.megageniale.usherbrooke.ca/" target="_blank" rel="noreferrer" aria-label="Site officiel de la MégaGÉNIALE">
                <img src="/brand/megageniale.png" alt="MégaGÉNIALE" />
                <span>MégaGÉNIALE</span>
              </a>
              <span className="event-date">Novembre 2027</span>
            </div>
            <p className="section-kicker">Invitation à venir</p>
            <h2>COBEQ à la MégaGÉNIALE.</h2>
            <p>
              En novembre 2027, l’équipe souhaite présenter le démonstrateur et les résultats de cueillette lors de la MégaGÉNIALE.
            </p>
            <a className="event-site-link" href="https://www.megageniale.usherbrooke.ca/" target="_blank" rel="noreferrer" aria-label="Visiter le site officiel de la MégaGÉNIALE">Visiter le site officiel</a>
          </div>
          <div className="event-details" aria-label="Détails à venir pour la MégaGÉNIALE">
            <div className="event-detail">
              <span>Quand</span>
              <strong>Novembre 2027</strong>
            </div>
            <div className="event-detail">
              <span>À voir</span>
              <strong>Prototype, cadence et cycle de cueillette</strong>
            </div>
            <div className="event-detail">
              <span>Invitation</span>
              <strong>Producteurs, partenaires, commanditaires et communauté UDS</strong>
            </div>
            <div className="event-detail">
              <span>En savoir plus</span>
              <a href="https://www.megageniale.usherbrooke.ca/" target="_blank" rel="noreferrer" aria-label="Visiter le site officiel de la MégaGÉNIALE">Site officiel</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <img src="/brand/logo.png" alt="COBEQ" className="footer-logo" />
        <div>
          <strong>Projet majeur de conception COBEQ</strong>
          <p>Un module de cueillette robotisée de fraises, conçu par l’équipe COBEQ de la Promotion 69 de l’Université de Sherbrooke.</p>
        </div>
        <div className="footer-links">
          <a className="footer-instagram instagram-icon-link" href="https://www.instagram.com/cobeq.ca/" target="_blank" rel="noreferrer" aria-label="Instagram COBEQ">
            <img src="/brand/instagram-couleur.png" alt="" />
          </a>
          <a href="#accueil" aria-label="Retour en haut de page">Haut de page</a>
        </div>
      </footer>
    </main>
  );
}
