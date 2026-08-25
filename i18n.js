(() => {
  const translations = {
    "PMC en génie": "Engineering PMC",
    "Projet": "Project",
    "Journal": "Updates",
    "Objectifs": "Goals",
    "Démarche": "Approach",
    "Équipe": "Team",
    "Contribuer": "Support",
    "Module robotisé de cueillette de fraises": "Robotic strawberry harvesting module",
    "PMC = Projet majeur de conception en génie à l’Université de Sherbrooke": "PMC = Major engineering design project at the Université de Sherbrooke",
    "COBEQ développe un module robotisé dédié à la cueillette de fraises de production en serre et en culture hors-sol.": "COBEQ is developing a robotic module dedicated to harvesting production strawberries in greenhouses and soilless systems.",
    "L’objectif: Cœur du projet, le RENDEMENT. Récolter plus efficacement, sans abîmer les fruits.": "The goal: THROUGHPUT at the core of the project. Harvest more efficiently without damaging the fruit.",
    "Comprendre le projet": "Understand the project",
    "Soutenir le prototype": "Support the prototype",
    "Besoin": "Need",
    "des coûts liés à une récolte très dépendante de la main-d’œuvre": "of costs tied to a harvest that depends heavily on labor",
    "Objectif rendement": "Throughput target",
    "13,9 fraises/min": "13.9 strawberries/min",
    "≈ 6 700 fraises/jour (8 h)": "≈ 6,700 strawberries/day (8 h)",
    "Prototype visé": "Target prototype",
    "3 préhenseurs": "3 grippers",
    "Un Projet majeur de conception en génie au baccalauréat, réalisé par la Promotion 69.": "A bachelor’s-level major engineering design project carried out by Promotion 69.",
    "Le PMC COBEQ, soit le Projet majeur de conception en génie, s’inscrit dans le parcours du baccalauréat en génie de la Promotion 69 de l’Université de Sherbrooke. Dans ce projet, l’équipe développe une solution ciblée pour les producteurs: augmenter la cadence de récolte tout en manipulant les fraises avec soin.": "The COBEQ PMC, the major engineering design project, is part of the bachelor’s engineering program for Promotion 69 at the Université de Sherbrooke. In this project, the team is developing a targeted solution for growers: increase harvest throughput while handling strawberries with care.",
    "Le projet en clair": "The project in brief",
    "Un module de cueillette de fraises qui cible le rendement.": "A strawberry harvesting module focused on throughput.",
    "Le client visé est le producteur de fraises qui doit cueillir beaucoup, vite et au bon moment. Le projet isole le cycle de cueillette pour développer un module duplicable: approcher la fraise, détacher le fruit, le manipuler doucement et le déposer, avec une cadence comparable à une référence humaine.": "The target customer is the strawberry grower who needs to pick a lot, quickly and at the right time. The project isolates the picking cycle to develop a duplicable module: approach the strawberry, detach the fruit, handle it gently and place it down at a rate comparable to a human reference.",
    "Culture cible": "Target crop system",
    "Le module COBEQ vise les cultures en gouttières hors-sol utilisées en production, en serre ou sous tunnel. Ces installations offrent une géométrie plus stable qu’un champ ouvert, mais la cueillette reste complexe: le fruit est fragile, le feuillage masque l’accès et le rendement dépend du temps de cycle.": "The COBEQ module targets soilless gutter systems used in production, in greenhouses or under tunnels. These installations offer more stable geometry than open fields, but harvesting remains complex: the fruit is fragile, foliage blocks access and throughput depends on cycle time.",
    "Gouttières hors-sol utilisées en production, avec des rangs réguliers et un espace de travail limité.": "Soilless gutters used in production, with regular rows and limited working space.",
    "Fraises suspendues à différentes hauteurs, souvent partiellement cachées par le feuillage.": "Strawberries hanging at different heights, often partly hidden by foliage.",
    "Pédoncule fin à atteindre sans blesser le fruit, le plant ou les fruits voisins.": "A thin peduncle to reach without damaging the fruit, plant or nearby berries.",
    "Environnement de serre ou de tunnel où la cadence et la continuité de récolte comptent.": "Greenhouse or tunnel environment where cycle rate and harvest continuity matter.",
    "Gouttières industrielles: l’environnement que le module cherche à servir.": "Industrial gutters: the environment the module is designed to serve.",
    "Gouttière suspendue": "Suspended gutter",
    "Fruit fragile": "Fragile fruit",
    "Serre": "Greenhouse",
    "Hors-sol sous tunnel": "Soilless under tunnel",
    "Objectifs du projet": "Project goals",
    "Le livrable du prototype.": "The prototype deliverable.",
    "Le livrable visé est un démonstrateur de cueillette à trois préhenseurs, conçu, fabriqué, intégré et validé sur un banc d’essai représentatif d’une culture de fraises hors-sol en serre. À partir de la position connue d’une fraise cible, le prototype doit exécuter un cycle complet: approche, coupe du pédoncule, soutien, transfert, dépôt et emmagasinage dans un bac. La vision et la sélection des fruits ne font pas partie du mandat. La validation porte d’abord sur le rendement, le taux de succès et les dommages visibles.": "The target deliverable is a three-gripper harvesting demonstrator, designed, built, integrated and validated on a test bench representative of soilless greenhouse strawberry production. Starting from the known position of a target strawberry, the prototype must execute a complete cycle: approach, peduncle cut, support, transfer, deposit and storage in a bin. Vision and fruit selection are outside the mandate. Validation first focuses on throughput, success rate and visible damage.",
    "Taux de succès": "Success rate",
    "Valider une cueillette automatique où la préhension et la séparation du fruit se font sans l’endommager ni l’oublier.": "Validate automatic picking where gripping and fruit separation happen without damaging or missing the fruit.",
    "13,9": "13.9",
    "Fraises par minute": "Strawberries per minute",
    "Atteindre une cadence comparable à celle d’un cueilleur moyen avec le démonstrateur à trois préhenseurs.": "Reach a rate comparable to an average picker using the three-gripper demonstrator.",
    "Fruits endommagés": "Damaged fruit",
    "Limiter les dommages causés par la manipulation afin que la performance reste pertinente pour un producteur.": "Limit handling damage so the measured performance remains relevant for a grower.",
    "Cycle par préhenseur": "Cycle per gripper",
    "Démontrer au minimum un cycle valide aux 15 secondes par préhenseur pour prouver la faisabilité.": "Demonstrate at least one valid cycle every 15 seconds per gripper to prove feasibility.",
    "Périmètre de validation": "Validation scope",
    "Un cycle complet, mesurable du début à la fin.": "A complete cycle, measurable from start to finish.",
    "Approcher l’effecteur de la tige à partir d’une position connue.": "Move the end effector toward the stem from a known position.",
    "Couper ou détacher le pédoncule sans blesser le fruit.": "Cut or detach the peduncle without damaging the fruit.",
    "Soutenir, transférer et déposer la fraise dans une zone d’emmagasinage.": "Support, transfer and place the strawberry in a storage area.",
    "Comparer les essais par cadence, taux de succès et dommages visibles.": "Compare trials by rate, success rate and visible damage.",
    "Client visé": "Target customer",
    "Les producteurs de fraises hors-sol, en serre ou sous tunnel, surtout les grandes exploitations où la récolte demande beaucoup de main-d’œuvre. Le besoin est concentré: au Québec, 10 % des fermes de plus de 10 hectares représentent 59 % de la superficie de récolte.": "Soilless strawberry producers in greenhouses or tunnels, especially larger farms where harvesting requires significant labor. The need is concentrated: in Quebec, 10% of farms over 10 hectares represent 59% of harvested area.",
    "Besoin du client": "Customer need",
    "Améliorer la rentabilité, la régularité et la prévisibilité de la récolte sans complexifier les opérations des producteurs.": "Improve harvest profitability, consistency and predictability without making growers’ operations more complex.",
    "Taille du marché": "Market size",
    "Le marché canadien représente environ 1 G$ au détail et 250,1 M$ en valeur à la ferme. La récolte pèse à elle seule 68,7 - 96,2 M$ par an.": "The Canadian market represents roughly $1B at retail and $250.1M in farm-gate value. Harvesting alone accounts for $68.7M - $96.2M per year.",
    "Potentiel du projet": "Project potential",
    "Une première génération capable de déplacer 10 à 30 % de la main-d’œuvre de récolte représente une valeur adressable estimée à 6,9 - 28,9 M$ par an au Canada.": "A first generation able to offset 10 to 30% of harvest labor represents an estimated addressable value of $6.9M - $28.9M per year in Canada.",
    "Ce que nous cherchons à faire": "What we aim to prove",
    "Isoler la cueillette, là où se crée la valeur.": "Isolate picking, where the value is created.",
    "COBEQ développe un module dédié à la cueillette: approcher la fraise, la détacher, la manipuler doucement et la déposer avec une cadence mesurable.": "COBEQ is developing a module dedicated to picking: approach the strawberry, detach it, handle it gently and deposit it with a measurable rate.",
    "Concevoir un module robotisé de cueillette de fraises pour les cultures hors-sol et en serre.": "Design a robotic strawberry harvesting module for soilless and greenhouse production.",
    "Approcher la tige, couper, manipuler et déposer la fraise sans dommage commercial.": "Approach the stem, cut, handle and deposit the strawberry without commercial damage.",
    "Multiplier les préhenseurs pour viser le rendement humain plutôt qu’un robot mono-fruit lent.": "Use multiple grippers to target human-level throughput instead of a slow single-fruit robot.",
    "Mesurer la cadence, le taux de succès et le pourcentage de fruits endommagés sur banc d’essai.": "Measure cycle rate, success rate and damaged-fruit percentage on a test bench.",
    "Module dédié à la cueillette": "Module dedicated to picking",
    "Le déplacement autonome est volontairement hors périmètre. Des solutions de mobilité existent déjà sur le marché. COBEQ concentre l’effort sur la cueillette, parce que c’est là que se jouent le rendement, le taux de succès et la qualité du fruit.": "Autonomous mobility is intentionally out of scope. Mobility solutions already exist on the market. COBEQ focuses its effort on picking, because this is where throughput, success rate and fruit quality are decided.",
    "Une preuve de concept guidée par le rendement.": "A proof of concept guided by throughput.",
    "été 2026": "summer 2026",
    "hiver 2027": "winter 2027",
    "automne 2027": "fall 2027",
    "Cadrer le besoin": "Frame the need",
    "Valider le problème terrain: coûts de récolte, rareté de main-d’œuvre, rendement et contraintes de culture hors-sol.": "Validate the field problem: harvest costs, labor scarcity, throughput and soilless-production constraints.",
    "Concevoir le module": "Design the module",
    "Définir l’architecture mécatronique: positionnement, coupe, préhension, dépôt et gestion de plusieurs préhenseurs.": "Define the mechatronic architecture: positioning, cutting, gripping, depositing and multi-gripper coordination.",
    "Intégrer le prototype": "Integrate the prototype",
    "Assembler le banc d’essai, les actionneurs, l’électronique et le contrôle pour exécuter un cycle complet de cueillette.": "Assemble the test bench, actuators, electronics and control system to run a complete picking cycle.",
    "Prouver le rendement": "Prove throughput",
    "Comparer les essais à une référence humaine: cadence cible, taux de succès supérieur à 80 % et moins de 10 % de fruits endommagés.": "Compare trials to a human reference: target rate, success rate above 80% and less than 10% damaged fruit.",
    "Équipe COBEQ": "COBEQ team",
    "Les membres qui portent le projet.": "The members carrying the project.",
    "Génie robotique": "Robotics engineering",
    "Responsable des communications": "Communications lead",
    "Génie électrique": "Electrical engineering",
    "Génie mécanique": "Mechanical engineering",
    "En attente d'une photo": "Photo pending",
    "Dons et commandites": "Donations and sponsorships",
    "Soutenir COBEQ.": "Support COBEQ.",
    "COBEQ cherche des contributeurs pour franchir les étapes clés du prototype: composantes, fabrication, banc d’essai, mesures de rendement et validation du cycle de cueillette.": "COBEQ is looking for contributors to reach the prototype’s key milestones: components, fabrication, test bench, throughput measurements and picking-cycle validation.",
    "Pour un don, une commandite ou une question, la communication se fait directement par courriel avec Alexandre Tanguay, responsable des communications.": "For a donation, sponsorship or question, communication goes directly by email through Alexandre Tanguay, communications lead.",
    "Communication par courriel seulement": "Email communication only",
    "Prototype à trois préhenseurs": "Three-gripper prototype",
    "Essais de rendement": "Throughput testing",
    "Terrain et banc d’essai": "Field and test bench",
    "Les contributions peuvent être financières ou en nature. Lorsqu’une entente officielle est nécessaire, l’équipe s’arrime au cadre PMC de la Faculté de génie et aux démarches de partenariat de l’Université de Sherbrooke.": "Contributions can be financial or in kind. When an official agreement is required, the team follows the Faculty of Engineering PMC framework and the Université de Sherbrooke partnership process.",
    "Faire un don": "Make a donation",
    "Un appui ponctuel aide l’équipe à financer le prototype à trois préhenseurs, les essais et les itérations de conception.": "A one-time contribution helps the team fund the three-gripper prototype, testing and design iterations.",
    "Contacter l’équipe": "Contact the team",
    "Écrire par courriel": "Write by email",
    "Informations pour donateur": "Donor information",
    "Un don est un appui sans visibilité publicitaire en échange.": "A donation is support provided without advertising visibility in return.",
    "Les dons peuvent passer par la Fondation UDS lorsque le projet y est inscrit.": "Donations can go through the UDS Foundation when the project is registered there.",
    "Un reçu fiscal peut être émis pour les dons admissibles de 20 $ et plus.": "A tax receipt may be issued for eligible donations of $20 or more.",
    "Pour acheminer le don, le donateur indique le nom du projet dans le champ « Autre projet ».": "To direct the donation, the donor enters the project name in the “Other project” field.",
    "Devenir commanditaire": "Become a sponsor",
    "Une contribution financière ou en nature peut soutenir les composantes, l’usinage, les essais terrain ou l’accès à des ressources de prototypage.": "A financial or in-kind contribution can support components, machining, field testing or access to prototyping resources.",
    "Proposer une commandite": "Propose a sponsorship",
    "Informations pour commanditaire": "Sponsor information",
    "Une commandite est un appui financier, matériel ou en services associé à une visibilité convenue.": "A sponsorship is financial, material or service support associated with agreed visibility.",
    "Aucun reçu fiscal n’est émis pour une commandite.": "No tax receipt is issued for a sponsorship.",
    "Les contreparties de visibilité et toute entente officielle doivent respecter le cadre PMC de la Faculté de génie.": "Visibility commitments and any official agreement must respect the Faculty of Engineering PMC framework.",
    "Les contributions en nature peuvent soutenir l’usinage, les essais, l’accès terrain ou les ressources de prototypage.": "In-kind contributions can support machining, testing, field access or prototyping resources.",
    "Guide PMC": "PMC guide",
    "Utilisation de l’appui": "Use of support",
    "Ce que l’appui rend possible": "What support makes possible",
    "Chaque contribution sert à rapprocher le prototype d’une validation concrète: construire, tester, mesurer et améliorer le module.": "Every contribution helps bring the prototype closer to concrete validation: build, test, measure and improve the module.",
    "Dépenses liées aux composantes du module": "Module component expenses",
    "Rails linéaires, moteurs, capteurs, contrôleurs, alimentation, câblage et autres éléments nécessaires à l’intégration.": "Linear rails, motors, sensors, controllers, power supply, wiring and other elements required for integration.",
    "Banc d’essai représentatif": "Representative test bench",
    "Reproduction d’une culture de fraises hors-sol ou en serre, déplacements, visites terrain, transport et matériel d’essai.": "Representation of soilless or greenhouse strawberry production, field visits, travel, transport and test equipment.",
    "Mesures de cadence, répétabilité, taux de succès, fruits endommagés et itérations de conception.": "Measurements of cycle rate, repeatability, success rate, damaged fruit and design iterations.",
    "Partenariat": "Partnership",
    "Formats de commandite": "Sponsorship formats",
    "Soutien ponctuel": "One-time support",
    "Partenaire de prototype": "Prototype partner",
    "Commanditaire principal": "Main sponsor",
    "Les détails de visibilité sont établis avec le partenaire selon la contribution, les contraintes du projet et les règles applicables au PMC.": "Visibility details are established with the partner according to the contribution, project constraints and the rules applicable to the PMC.",
    "Novembre 2027": "November 2027",
    "Invitation à venir": "Invitation to come",
    "COBEQ à la MégaGÉNIALE.": "COBEQ at MégaGÉNIALE.",
    "En novembre 2027, l’équipe souhaite présenter le démonstrateur et les résultats de cueillette lors de la MégaGÉNIALE.": "In November 2027, the team aims to present the demonstrator and harvesting results at MégaGÉNIALE.",
    "Visiter le site officiel": "Visit the official website",
    "Quand": "When",
    "À voir": "What to see",
    "Prototype, cadence et cycle de cueillette": "Prototype, cycle rate and picking cycle",
    "Invitation": "Invitation",
    "Producteurs, partenaires, commanditaires et communauté UDS": "Growers, partners, sponsors and the UDS community",
    "En savoir plus": "Learn more",
    "Site officiel": "Official site",
    "Journal du projet": "Project journal",
    "Projets et accomplissements": "Projects and milestones",
    "Une page pour suivre l’évolution de COBEQ: photos terrain, jalons du prototype, obtentions de financement, bourses et annonces importantes.": "A page to follow COBEQ’s progress: field photos, prototype milestones, funding received, awards and important announcements.",
    "Voir les publications": "View posts",
    "Envoyer une annonce": "Send an announcement",
    "À publier ici": "To publish here",
    "Photos, financement et bourses": "Photos, funding and awards",
    "Le contenu pourra évoluer au rythme du PMC sans alourdir la page d’accueil.": "The content can evolve with the PMC without overloading the homepage.",
    "Publications": "Posts",
    "Visite terrain": "Field visit",
    "Juillet 2026": "July 2026",
    "Observer la culture hors-sol sous tunnel": "Observe soilless production under tunnels",
    "Première collecte visuelle pour mieux comprendre l’espace réel autour des gouttières, la position des fruits et les contraintes d’accès du module.": "First visual collection to better understand the real space around the gutters, fruit position and access constraints for the module.",
    "Culture cible": "Target crop system",
    "Photos terrain": "Field photos",
    "Conception": "Design",
    "Comprendre le fruit, la tige et le point de coupe": "Understand the fruit, stem and cutting point",
    "Les photos rapprochées documentent le pédoncule, les fruits voisins et le feuillage qui influence l’approche du préhenseur.": "Close-up photos document the peduncle, nearby fruit and foliage that influence gripper approach.",
    "Pédoncule": "Peduncle",
    "Préhension": "Gripping",
    "Prototype": "Prototype",
    "À venir": "Coming soon",
    "Premiers essais du banc d’essai": "First test-bench trials",
    "Les essais de cadence, de taux de succès et de dommages visibles seront publiés ici lorsque le banc d’essai permettra de comparer les cycles de cueillette.": "Cycle-rate, success-rate and visible-damage trials will be published here when the test bench can compare picking cycles.",
    "Rendement": "Throughput",
    "Validation": "Validation",
    "Financement": "Funding",
    "Bourses, dons et commandites confirmés": "Confirmed awards, donations and sponsorships",
    "Cette section servira à annoncer les appuis obtenus, les partenaires du prototype et les contributions qui rendent les essais possibles.": "This section will announce secured support, prototype partners and contributions that make testing possible.",
    "Bourses": "Awards",
    "Commandites": "Sponsorships",
    "Accomplissements à venir": "Upcoming milestones",
    "Une structure prête pour les nouvelles du projet.": "A structure ready for project news.",
    "Lorsqu’une bourse, une commandite ou une étape technique sera confirmée, elle pourra être ajoutée comme une publication avec une photo, une date et l’impact concret sur le prototype.": "When an award, sponsorship or technical step is confirmed, it can be added as a post with a photo, date and concrete impact on the prototype.",
    "Photos du projet": "Project photos",
    "Visites terrain, assemblage du banc d’essai, détails de préhension et évolution du prototype.": "Field visits, test-bench assembly, gripping details and prototype progress.",
    "Financement obtenu": "Funding received",
    "Dons, commandites, appuis matériels et ressources de prototypage reçues par l’équipe.": "Donations, sponsorships, material support and prototyping resources received by the team.",
    "Bourses et reconnaissances": "Awards and recognition",
    "Prix, bourses, mentions et présentations officielles liées au Projet majeur de conception.": "Prizes, awards, mentions and official presentations related to the major design project.",
    "Ajouter une publication": "Add a post",
    "Envoyer une photo ou une annonce à publier.": "Send a photo or announcement to publish.",
    "Pour publier une nouvelle étape, envoyez le titre, la date, une courte description, une photo et le type d’annonce. Les communications passent directement par courriel.": "To publish a new step, send the title, date, short description, photo and announcement type. Communications go directly through email.",
    "Accueil": "Home",
    "Projet majeur de conception COBEQ": "COBEQ major design project",
    "Un module de cueillette robotisée de fraises, conçu par l’équipe COBEQ de la Promotion 69 de l’Université de Sherbrooke.": "A robotic strawberry harvesting module designed by the COBEQ team from Promotion 69 at the Université de Sherbrooke.",
    "Haut de page": "Back to top"
  };

  const originals = new WeakMap();
  let currentLanguage = "fr";

  function translatableTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return node.nodeValue && node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }

  function applyLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dataset.lang = language;

    for (const node of translatableTextNodes()) {
      if (!originals.has(node)) {
        const original = node.nodeValue.trim();
        if (translations[original]) originals.set(node, original);
      }

      const original = originals.get(node);
      if (!original) continue;
      const leading = node.nodeValue.match(/^\s*/)?.[0] ?? "";
      const trailing = node.nodeValue.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leading}${language === "en" ? translations[original] : original}${trailing}`;
    }

    for (const button of document.querySelectorAll("[data-language-toggle]")) {
      button.setAttribute("aria-pressed", language === "en" ? "true" : "false");
      button.setAttribute("aria-label", language === "en" ? "Afficher le site en français" : "Traduire le site en anglais");
    }
  }

  function initLanguageToggle() {
    document.documentElement.dataset.lang = "fr";
    for (const button of document.querySelectorAll("[data-language-toggle]")) {
      button.addEventListener("click", () => applyLanguage(currentLanguage === "fr" ? "en" : "fr"));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguageToggle, { once: true });
  } else {
    initLanguageToggle();
  }
})();
