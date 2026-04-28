import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, string>;

const fr: Dict = {
  // Header
  "nav.societe": "Société",
  "nav.services": "Prestations",
  "nav.process": "Process",
  "nav.projets": "Projets",
  "nav.contact": "Contact",
  "nav.cta": "Devis express",

  // Hero
  "hero.badge": "Atelier ouvert · Devis sous 24h",
  "hero.title.1": "De l'idée",
  "hero.title.2": "à l'objet réel,",
  "hero.title.3": "en 3D.",
  "hero.desc":
    "Polyrepro conçoit, modélise et imprime vos prototypes et petites séries. Pionnier de l'impression 3D en France depuis 1993, nous mettons notre savoir-faire au service de l'industrie, du design, du médical et de l'architecture.",
  "hero.since": "Depuis",
  "hero.cta.start": "Démarrer un projet",
  "hero.cta.see": "Voir nos prestations",
  "hero.stat.1": "Année de création",
  "hero.stat.2": "Première imprimante 3D",
  "hero.stat.3": "Ans d'expertise additive",
  "hero.chip.printing": "Impression en cours",
  "hero.chip.precision": "Précision",
  "hero.chip.format": "Format",

  // About
  "about.kicker": "La société",
  "about.title": "Un demi-siècle au service de l'industrie.",
  "about.lead.1":
    "Le prototypage rapide et l'impression 3D désignent les technologies qui transforment un fichier CAO en un objet réel —",
  "about.lead.2": "notre métier depuis plus de 30 ans.",
  "about.p1":
    "Prestataire de services pour l'industrie depuis 1968, équipés dès 1993 de machines de prototypage rapide, nos équipes ont acquis une expérience reconnue par tous dans le domaine de l'impression 3D.",
  "about.p2":
    "Notre parc machine est renouvelé et enrichi régulièrement au gré des avancées technologiques, pour vous garantir la meilleure solution adaptée à chaque projet.",
  "about.p3":
    "Notre savoir-faire nous permet de vous accompagner et vous conseiller tout au long de l'élaboration de vos projets, pour un objet unique ou des petites séries.",
  "about.p4":
    "Quelle qu'en soit la dimension et le degré de finition, les plus grandes sociétés nous font confiance pour la qualité et la rapidité de nos prestations.",
  "about.card1.t": "Confidentialité",
  "about.card1.d":
    "Tous les projets que vous nous confiez restent strictement confidentiels.",
  "about.card2.t": "Réactivité",
  "about.card2.d":
    "Devis sous 24h ouvrées et délais maîtrisés sur chaque commande.",
  "about.card3.t": "Conseil",
  "about.card3.d":
    "Un accompagnement humain de la conception à la finition.",

  // Stats
  "stats.1.v": "Années d'activité",
  "stats.1.s": "Depuis 1968",
  "stats.2.v": "Ans en impression 3D",
  "stats.2.s": "Pionnier français",
  "stats.3.v": "Secteurs d'expertise",
  "stats.3.s": "Industrie, design, médical…",
  "stats.4.v": "Délai de devis",
  "stats.4.s": "Réponse rapide garantie",

  // Services
  "services.kicker": "Prestations",
  "services.title.1": "Du premier coup de crayon",
  "services.title.2": "au produit fini.",
  "services.desc":
    "Une chaîne complète sous un seul toit, pour gagner du temps, sécuriser la confidentialité et garantir la cohérence de votre projet.",
  "services.1.t": "CAO 3D",
  "services.1.d":
    "Conception, modélisation et plans techniques. Catia V5, Magics, Rhino. Interfaces IGES, DXF, 3DS, STL, STEP.",
  "services.2.t": "Prototypage rapide",
  "services.2.d":
    "Réalisation de prototypes fonctionnels et d'aspect, dès la pièce unique. Restitution fidèle des intentions de design.",
  "services.3.t": "Petites séries",
  "services.3.d":
    "Production en petites et moyennes séries pour pré-séries industrielles, validation marché ou production pérenne.",
  "services.4.t": "Finition & Aspect",
  "services.4.d":
    "Ponçage, peinture, vernis, métallisation, teinture. Vos prototypes prennent vie avec un rendu final premium.",

  // Process
  "process.kicker": "Méthode",
  "process.title": "5 étapes, zéro friction.",
  "process.desc":
    "Un process éprouvé, pensé pour les exigences industrielles : on avance vite, sans rien sacrifier à la précision.",
  "process.1.t": "Brief & cahier des charges",
  "process.1.d":
    "On écoute votre besoin, on cadre les contraintes techniques, fonctionnelles et budgétaires.",
  "process.2.t": "CAO & modélisation",
  "process.2.d":
    "Nos ingénieurs conçoivent ou retravaillent votre fichier 3D. Plans techniques inclus.",
  "process.3.t": "Choix de la technologie",
  "process.3.d":
    "SLA, SLS, FDM, Polyjet, MJF ou métal — nous choisissons la solution adaptée à chaque pièce.",
  "process.4.t": "Impression & post-traitement",
  "process.4.d":
    "Production sur notre parc machine renouvelé et finitions sur-mesure (peinture, métallisation, teinture).",
  "process.5.t": "Contrôle & livraison",
  "process.5.d":
    "Contrôle qualité, conditionnement et livraison dans le respect des délais convenus.",

  // Sectors
  "sectors.kicker": "Ils nous font confiance",
  "sectors.title.1": "6 secteurs,",
  "sectors.title.2": "une seule exigence.",
  "sectors.desc":
    "Les plus grandes sociétés des secteurs industriels, créatifs et médicaux nous confient leurs projets confidentiels.",
  "sector.label": "Secteur",
  "sector.1.n": "Industrie",
  "sector.1.d": "Pré-séries, R&D, pièces sur-mesure.",
  "sector.2.n": "Architecture",
  "sector.2.d": "Maquettes, concours, scénographie.",
  "sector.3.n": "Design",
  "sector.3.d": "Validation produit, prototypes d'aspect.",
  "sector.4.n": "Cosmétique",
  "sector.4.d": "Flaconnage, packaging, échantillons.",
  "sector.5.n": "Communication",
  "sector.5.d": "Stands, PLV, objets événementiels.",
  "sector.6.n": "Médical",
  "sector.6.d": "Pièces techniques, modèles anatomiques.",

  // Projects
  "projects.kicker": "Réalisations",
  "projects.title.1": "Quelques projets",
  "projects.title.2": "que nous pouvons montrer.",
  "projects.desc":
    "Soucieux de tenir nos engagements de confidentialité, nous ne présentons ici qu'une infime partie de nos réalisations.",
  "projects.1.tag": "Art & Tech",
  "projects.1.t": "Le Script-Walker",
  "projects.1.s": "Transcripteur Spatio-Temporel — Jill Bioskop",
  "projects.1.d":
    "Objet réel imprimé en 3D avec superpositions holographiques et interactives en relief.",
  "projects.2.tag": "Mobilier urbain",
  "projects.2.t": "La Boule Amego",
  "projects.2.s": "Cendrier urbain — Schecroun & Sammarcelli",
  "projects.2.d":
    "Création, fabrication et commercialisation d'un mobilier urbain breveté.",
  "projects.3.tag": "Confidentiel",
  "projects.3.t": "Et 1000 autres projets…",
  "projects.3.s": "Industrie · Cosmétique · Médical · Design",
  "projects.3.d":
    "Les projets qui nous sont confiés sont confidentiels. Discutons du vôtre en toute discrétion.",

  // Contact
  "contact.kicker": "Contact",
  "contact.title.1": "Parlons de",
  "contact.title.2": "votre projet.",
  "contact.desc":
    "Envoyez-nous votre fichier CAO ou décrivez-nous votre besoin. Nous vous répondons sous 24h ouvrées avec une première estimation.",
  "contact.phone": "Téléphone",
  "contact.email": "Email",
  "contact.workshop": "Atelier",
  "contact.workshop.v": "Région parisienne · France",
  "contact.f.firstname": "Prénom",
  "contact.f.lastname": "Nom",
  "contact.f.email": "Email professionnel",
  "contact.f.company": "Société",
  "contact.f.type": "Type de projet",
  "contact.f.type.1": "Prototype unique",
  "contact.f.type.2": "Petite série",
  "contact.f.type.3": "CAO & conception",
  "contact.f.type.4": "Pré-série industrielle",
  "contact.f.type.5": "Autre",
  "contact.f.message": "Décrivez votre projet",
  "contact.f.placeholder": "Quantité, matière souhaitée, délais, finition…",
  "contact.f.submit": "Envoyer ma demande",
  "contact.f.legal": "Vos données restent confidentielles. NDA possible sur demande.",
  "contact.sent.t": "Demande envoyée !",
  "contact.sent.d":
    "Notre équipe revient vers vous très rapidement avec une première analyse de votre projet.",

  // Footer
  "footer.tagline":
    "Prototypage rapide & impression 3D depuis 1968. Industrie, design, médical, cosmétique, architecture, communication.",
  "footer.col1": "Société",
  "footer.col1.1": "À propos",
  "footer.col1.2": "Méthode",
  "footer.col1.3": "Projets",
  "footer.col1.4": "Contact",
  "footer.col2": "Prestations",
  "footer.col2.1": "CAO 3D",
  "footer.col2.2": "Prototypage",
  "footer.col2.3": "Petites séries",
  "footer.col2.4": "Finition",
  "footer.news": "Newsletter",
  "footer.news.d": "Innovations, technologies, projets exclusifs.",
  "footer.news.ph": "Votre email",
  "footer.rights": "Tous droits réservés.",
  "footer.legal.1": "Mentions légales",
  "footer.legal.2": "Confidentialité",
  "footer.legal.3": "CGV",
};

const en: Dict = {
  // Header
  "nav.societe": "Company",
  "nav.services": "Services",
  "nav.process": "Process",
  "nav.projets": "Projects",
  "nav.contact": "Contact",
  "nav.cta": "Get a quote",

  // Hero
  "hero.badge": "Workshop open · Quote within 24h",
  "hero.title.1": "From idea",
  "hero.title.2": "to real object,",
  "hero.title.3": "in 3D.",
  "hero.desc":
    "Polyrepro designs, models and prints your prototypes and small batches. A French pioneer of 3D printing since 1993, we put our expertise at the service of industry, design, medical and architecture.",
  "hero.since": "Since",
  "hero.cta.start": "Start a project",
  "hero.cta.see": "See our services",
  "hero.stat.1": "Founding year",
  "hero.stat.2": "First 3D printer",
  "hero.stat.3": "Years of additive expertise",
  "hero.chip.printing": "Printing in progress",
  "hero.chip.precision": "Precision",
  "hero.chip.format": "Format",

  // About
  "about.kicker": "The company",
  "about.title": "Half a century serving industry.",
  "about.lead.1":
    "Rapid prototyping and 3D printing are the technologies that turn a CAD file into a real object —",
  "about.lead.2": "our craft for over 30 years.",
  "about.p1":
    "A service provider to industry since 1968 and equipped with rapid prototyping machines as early as 1993, our teams have acquired widely recognised experience in 3D printing.",
  "about.p2":
    "Our machine fleet is regularly renewed and expanded to keep pace with technological advances, guaranteeing the best solution for every project.",
  "about.p3":
    "Our know-how lets us support and advise you throughout your project, for a single object or small production runs.",
  "about.p4":
    "Whatever the size and the level of finish, the largest companies trust us for the quality and speed of our services.",
  "about.card1.t": "Confidentiality",
  "about.card1.d":
    "Every project entrusted to us remains strictly confidential.",
  "about.card2.t": "Responsiveness",
  "about.card2.d":
    "Quote within 24 business hours and reliable lead times on every order.",
  "about.card3.t": "Advice",
  "about.card3.d": "Human support from concept to finish.",

  // Stats
  "stats.1.v": "Years of activity",
  "stats.1.s": "Since 1968",
  "stats.2.v": "Years in 3D printing",
  "stats.2.s": "French pioneer",
  "stats.3.v": "Areas of expertise",
  "stats.3.s": "Industry, design, medical…",
  "stats.4.v": "Quote turnaround",
  "stats.4.s": "Fast response guaranteed",

  // Services
  "services.kicker": "Services",
  "services.title.1": "From first sketch",
  "services.title.2": "to finished product.",
  "services.desc":
    "A complete chain under one roof — to save time, secure confidentiality and ensure project consistency.",
  "services.1.t": "3D CAD",
  "services.1.d":
    "Design, modelling and technical drawings. Catia V5, Magics, Rhino. Interfaces IGES, DXF, 3DS, STL, STEP.",
  "services.2.t": "Rapid prototyping",
  "services.2.d":
    "Functional and visual prototypes from a single piece — faithful rendering of design intent.",
  "services.3.t": "Small batches",
  "services.3.d":
    "Small and medium production runs for industrial pre-series, market validation or ongoing production.",
  "services.4.t": "Finishing & Look",
  "services.4.d":
    "Sanding, painting, varnishing, metallisation, dyeing. Your prototypes come to life with a premium final look.",

  // Process
  "process.kicker": "Method",
  "process.title": "5 steps, zero friction.",
  "process.desc":
    "A proven process built for industrial requirements: we move fast, without sacrificing precision.",
  "process.1.t": "Brief & specifications",
  "process.1.d":
    "We listen to your need and frame the technical, functional and budget constraints.",
  "process.2.t": "CAD & modelling",
  "process.2.d":
    "Our engineers design or refine your 3D file. Technical drawings included.",
  "process.3.t": "Technology selection",
  "process.3.d":
    "SLA, SLS, FDM, Polyjet, MJF or metal — we pick the right solution for each part.",
  "process.4.t": "Printing & post-processing",
  "process.4.d":
    "Production on our up-to-date machine fleet and bespoke finishing (paint, metallisation, dye).",
  "process.5.t": "Quality control & delivery",
  "process.5.d":
    "Quality control, packaging and delivery within agreed deadlines.",

  // Sectors
  "sectors.kicker": "They trust us",
  "sectors.title.1": "6 sectors,",
  "sectors.title.2": "one single standard.",
  "sectors.desc":
    "The largest companies in industrial, creative and medical sectors entrust us with their confidential projects.",
  "sector.label": "Sector",
  "sector.1.n": "Industry",
  "sector.1.d": "Pre-series, R&D, custom parts.",
  "sector.2.n": "Architecture",
  "sector.2.d": "Models, competitions, scenography.",
  "sector.3.n": "Design",
  "sector.3.d": "Product validation, visual prototypes.",
  "sector.4.n": "Cosmetics",
  "sector.4.d": "Bottling, packaging, samples.",
  "sector.5.n": "Communication",
  "sector.5.d": "Stands, POS, event objects.",
  "sector.6.n": "Medical",
  "sector.6.d": "Technical parts, anatomical models.",

  // Projects
  "projects.kicker": "Selected work",
  "projects.title.1": "A few projects",
  "projects.title.2": "we can show.",
  "projects.desc":
    "Bound by our confidentiality commitments, we can only show a tiny fraction of what we produce.",
  "projects.1.tag": "Art & Tech",
  "projects.1.t": "The Script-Walker",
  "projects.1.s": "Spatio-Temporal Transcriber — Jill Bioskop",
  "projects.1.d":
    "Real object 3D-printed with interactive holographic overlays in 3D relief.",
  "projects.2.tag": "Urban furniture",
  "projects.2.t": "The Amego Ball",
  "projects.2.s": "Urban ashtray — Schecroun & Sammarcelli",
  "projects.2.d":
    "Design, manufacturing and commercialisation of a patented urban furniture piece.",
  "projects.3.tag": "Confidential",
  "projects.3.t": "And a thousand more…",
  "projects.3.s": "Industry · Cosmetics · Medical · Design",
  "projects.3.d":
    "Projects entrusted to us are confidential. Let's discuss yours in full discretion.",

  // Contact
  "contact.kicker": "Contact",
  "contact.title.1": "Let's talk about",
  "contact.title.2": "your project.",
  "contact.desc":
    "Send us your CAD file or describe your need. We reply within 24 business hours with a first estimate.",
  "contact.phone": "Phone",
  "contact.email": "Email",
  "contact.workshop": "Workshop",
  "contact.workshop.v": "Greater Paris · France",
  "contact.f.firstname": "First name",
  "contact.f.lastname": "Last name",
  "contact.f.email": "Work email",
  "contact.f.company": "Company",
  "contact.f.type": "Project type",
  "contact.f.type.1": "Single prototype",
  "contact.f.type.2": "Small batch",
  "contact.f.type.3": "CAD & design",
  "contact.f.type.4": "Industrial pre-series",
  "contact.f.type.5": "Other",
  "contact.f.message": "Describe your project",
  "contact.f.placeholder": "Quantity, material, deadlines, finish…",
  "contact.f.submit": "Send my request",
  "contact.f.legal": "Your data stays confidential. NDA available on request.",
  "contact.sent.t": "Request sent!",
  "contact.sent.d":
    "Our team will get back to you very shortly with a first analysis of your project.",

  // Footer
  "footer.tagline":
    "Rapid prototyping & 3D printing since 1968. Industry, design, medical, cosmetics, architecture, communication.",
  "footer.col1": "Company",
  "footer.col1.1": "About",
  "footer.col1.2": "Method",
  "footer.col1.3": "Projects",
  "footer.col1.4": "Contact",
  "footer.col2": "Services",
  "footer.col2.1": "3D CAD",
  "footer.col2.2": "Prototyping",
  "footer.col2.3": "Small batches",
  "footer.col2.4": "Finishing",
  "footer.news": "Newsletter",
  "footer.news.d": "Innovation, technology, exclusive projects.",
  "footer.news.ph": "Your email",
  "footer.rights": "All rights reserved.",
  "footer.legal.1": "Legal notice",
  "footer.legal.2": "Privacy",
  "footer.legal.3": "Terms",
};

const dicts: Record<Lang, Dict> = { fr, en };

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const Ctx = createContext<I18nCtx>({
  lang: "fr",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("polyrepro.lang");
      if (saved === "en" || saved === "fr") return saved;
    }
    return "fr";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("polyrepro.lang", l);
      document.documentElement.lang = l;
    }
  };

  const t = (key: string) => dicts[lang][key] ?? key;

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  return useContext(Ctx);
}
