// BIERINCKX REVENUE AGENCY — CLOUDFLARE WORKER v4.0
// 24/7 AI Klantenservice | Favicon | Hoge kwaliteit foto's
// NL/FR/EN | AURA LUXE 0-70j

const T = {
  nl: {
    nav: { home: 'Home', shop: 'Shop', psy: 'Psychologie', cons: 'Consultancy', cro: 'Fractional CRO', chat: 'Klantenservice' },
    hero: { tag: 'Premium Luxury Lifestyle', h1b: 'Luxury Lifestyle', h1c: 'voor het hele gezin', sub: 'Van pasgeboren baby tot senior van 70 jaar', cta1: 'Ontdek de collectie', cta2: 'Meer info' },
    cats: ['Baby & Peuter','Kids','Tieners','Volwassenen','Senioren','Home & Wellness'],
    catDesc: ['0\u20133 jaar \u00b7 Zacht, veilig en luxueus','4\u201312 jaar \u00b7 Premium voor actieve kinderen','13\u201317 jaar \u00b7 Stijlvol en eigentijds','18\u201350 jaar \u00b7 Luxury lifestyle','50\u201370 jaar \u00b7 Elegantie en comfort','Voor het hele gezin \u00b7 Woondecor & welzijn'],
    trust: ['Gratis retour binnen 14 dagen','Veilig betalen via Stripe','Levering in BE \u00b7 NL \u00b7 FR','Klantenservice 7/7 \u00b7 24u'],
    more: 'Meer info \u2192', brands: 'Onze merken', brandsSub: 'Geselecteerde premium partners', services: 'Revenue Agency',
    chatWelcome: 'Welkom bij AURA LUXE! Ik ben uw persoonlijke assistent en help u 24 uur per dag, 7 dagen per week. Hoe kan ik u helpen?',
    chatPlaceholder: 'Stel uw vraag...',
    chatSend: 'Verstuur',
    chatTitle: '\ud83d\udc51 AURA LUXE \u2014 Klantenservice 24/7',
    chatSubtitle: 'Altijd beschikbaar \u00b7 Uw taal \u00b7 Gespecialiseerde hulp',
    psy: { hero: 'Jouw welzijn staat centraal', heroSub: 'Online begeleiding via beveiligde chat. Volledig vertrouwelijk en professioneel.', book: 'Sessie boeken & betalen', chatTitle: 'Chat na betaling', chatInfo: 'Na betaling ontvangt u direct toegang tot de beveiligde chat met uw psycholoog.', howTitle: 'Hoe werkt het?', steps: ['Kies uw sessieduur en betaal via Stripe','Na bevestiging: directe toegang tot de beveiligde chat','Chat met uw psycholoog op het afgesproken tijdstip','Volledig vertrouwelijk \u00b7 GDPR-conform'], sessions: [['30 minuten','Eerste kennismaking of korte opvolging'],['60 minuten','Standaard therapeutisch gesprek'],['90 minuten','Diepgaande sessie of intake']], s: [['\ud83e\udde0','Individuele therapie','Begeleiding bij stress, angst, burn-out en levensvragen.'],['\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67','Gezinstherapie','Ondersteuning voor gezinnen, koppels en ouders.'],['\ud83e\uddd2','Jeugdpsychologie','Begeleiding voor kinderen en jongeren (6\u201325 jaar).'],['\ud83d\udcbc','Bedrijfspsychologie','Burn-out preventie, re-integratie en leiderschapscoaching.'],['\ud83c\udf31','Life Coaching','Persoonlijke groei, doelen en zingeving.'],['\ud83e\udde9','Traumaverwerking','EMDR \u00b7 PTSS \u00b7 complexe trauma \u00b7 onder supervisie.']], email: 'psy@bierinckx.com', privacy: '\ud83d\udd12 Volledig vertrouwelijk \u00b7 GDPR-conform \u00b7 End-to-end versleuteld' },
    cons: { hero: 'Optimaliseer uw organisatie', heroSub: 'Resultaatgerichte begeleiding voor KMO\u2019s in de Benelux. Prijs altijd op maat via offerte.', cta: 'Vrijblijvend gesprek plannen', dienstenTitle: 'Onze diensten', diensten: [['\ud83d\udd0d','Procesanalyse & -optimalisatie','Volledige doorlichting van uw bedrijfsprocessen. As-is mapping, bottleneck-detectie en to-be ontwerp.'],['\ud83d\udc65','Functioneringsgesprekken','Professionele voorbereiding, begeleiding en opvolging van functioneringsgesprekken en 360\u00b0-evaluaties.'],['\ud83c\udfaf','Functie-optimalisatie & analyse','Grondige analyse van functies, rollen en verantwoordelijkheden. RACI-matrices en organogramoptimalisatie.'],['\ud83e\udd16','AI-adoptie & implementatie','AI-readiness assessment, LLM-selectie en implementatiebegeleiding.'],['\ud83d\udcc8','Lean Six Sigma','Waste-eliminatie, DMAIC, Kaizen-events en continue verbetercycli.'],['\ud83c\udf93','Teamontwikkeling & training','Opleidingsprogramma\u2019s en kennisborging na elk traject.']], aanpakTitle: 'Onze aanpak', steps: ['Gratis intakegesprek (60 min)','Analyse op maat','Offerte na intakegesprek','Na akkoord: betaling via Stripe','Traject start \u00b7 30 & 90 dagen opvolging'], email: 'consultancy@bierinckx.com', prijsNote: 'Alle tarieven worden vastgelegd in een persoonlijke offerte na het intakegesprek. Geen verrassingen.' },
    cro: { hero: 'Groei zonder de kosten van een voltijdse CRO', heroSub: 'Strategisch revenue leiderschap voor AI/SaaS scale-ups in BE \u00b7 NL \u00b7 DE.', what: 'Wat is een Fractional CRO?', whatTxt: 'Een Chief Revenue Officer op deeltijdse basis. Tarieven worden bepaald in overleg en vastgelegd in een offerte op maat.', fasesTitle: 'Onze fasen', fases: [['Fase 1 \u2014 Audit & Opbouw','Strategische audit \u00b7 pipeline opbouw \u00b7 eerste resultaten.'],['Fase 2+ \u2014 Schaling','Team leadership \u00b7 internationale groei \u00b7 recurring revenue.']], targets: ['AI/SaaS bedrijven \u00b7 10\u201350 FTE','Series A/B financiering','Actief in BE \u00b7 NL \u00b7 DE \u00b7 internationaal','Klaar voor de volgende groeifase'], email: 'sales@bierinckx.com', cta: 'Strategiegesprek aanvragen', prijsNote: 'Tarieven worden vastgelegd in een persoonlijke offerte na een eerste gesprek.' }
  },
  fr: {
    nav: { home: 'Accueil', shop: 'Boutique', psy: 'Psychologie', cons: 'Consultance', cro: 'Fractional CRO', chat: 'Service client' },
    hero: { tag: 'Premium Luxury Lifestyle', h1b: 'Luxury Lifestyle', h1c: 'pour toute la famille', sub: 'Du nouveau-n\u00e9 au senior de 70 ans', cta1: 'D\u00e9couvrir la collection', cta2: 'En savoir plus' },
    cats: ['B\u00e9b\u00e9 & Tout-petit','Enfants','Adolescents','Adultes','Seniors','Maison & Bien-\u00eatre'],
    catDesc: ['0\u20133 ans \u00b7 Doux, s\u00fbr et luxueux','4\u201312 ans \u00b7 Premium pour enfants actifs','13\u201317 ans \u00b7 Sty l\u00e9 et moderne','18\u201350 ans \u00b7 Lifestyle luxe','50\u201370 ans \u00b7 \u00c9l\u00e9gance et confort','Pour toute la famille \u00b7 D\u00e9co & bien-\u00eatre'],
    trust: ['Retour gratuit 14 jours','Paiement s\u00e9curis\u00e9 Stripe','Livraison BE \u00b7 NL \u00b7 FR','Service client 7/7 \u00b7 24h'],
    more: 'En savoir plus \u2192', brands: 'Nos marques', brandsSub: 'Partenaires premium s\u00e9lectionn\u00e9s', services: 'Revenue Agency',
    chatWelcome: 'Bienvenue chez AURA LUXE! Je suis votre assistant personnel, disponible 24h/24 et 7j/7. Comment puis-je vous aider?',
    chatPlaceholder: 'Posez votre question...',
    chatSend: 'Envoyer',
    chatTitle: '\ud83d\udc51 AURA LUXE \u2014 Service Client 24/7',
    chatSubtitle: 'Toujours disponible \u00b7 Votre langue \u00b7 Aide sp\u00e9cialis\u00e9e',
    psy: { hero: 'Votre bien-\u00eatre est notre priorit\u00e9', heroSub: 'Accompagnement en ligne via chat s\u00e9curis\u00e9. Enti\u00e8rement confidentiel et professionnel.', book: 'R\u00e9server et payer', chatTitle: 'Chat apr\u00e8s paiement', chatInfo: 'Apr\u00e8s paiement, vous recevrez imm\u00e9diatement acc\u00e8s au chat s\u00e9curis\u00e9.', howTitle: 'Comment \u00e7a marche?', steps: ['Choisissez la dur\u00e9e et payez via Stripe','Apr\u00e8s confirmation: acc\u00e8s direct au chat','Chat avec votre psychologue \u00e0 l\u2019heure convenue','Enti\u00e8rement confidentiel \u00b7 RGPD'], sessions: [['30 minutes','Premier contact ou suivi court'],['60 minutes','S\u00e9ance standard'],['90 minutes','S\u00e9ance approfondie']], s: [['\ud83e\udde0','Th\u00e9rapie individuelle','Accompagnement pour le stress, l\u2019anxi\u00e9t\u00e9, le burn-out.'],['\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67','Th\u00e9rapie familiale','Soutien pour les familles, couples et parents.'],['\ud83e\uddd2','Psychologie jeunesse','Accompagnement pour enfants et jeunes (6\u201325 ans).'],['\ud83d\udcbc','Psychologie d\u2019entreprise','Pr\u00e9vention burn-out et coaching.'],['\ud83c\udf31','Life Coaching','Croissance personnelle et sens de la vie.'],['\ud83e\udde9','Traumatisme','EMDR \u00b7 PTSD \u00b7 trauma complexe.']], email: 'psy@bierinckx.com', privacy: '\ud83d\udd12 Enti\u00e8rement confidentiel \u00b7 RGPD \u00b7 Chiffrement' },
    cons: { hero: 'Optimisez votre organisation', heroSub: 'Accompagnement orient\u00e9 r\u00e9sultats pour les PME. Prix toujours sur devis.', cta: 'Planifier un entretien', dienstenTitle: 'Nos services', diensten: [['\ud83d\udd0d','Analyse des processus','Diagnostic complet, cartographie et conception to-be.'],['\ud83d\udc65','Entretiens d\u2019\u00e9valuation','Pr\u00e9paration, animation et suivi. \u00c9valuations 360\u00b0.'],['\ud83c\udfaf','Optimisation des fonctions','Analyse RACI et optimisation des organigrammes.'],['\ud83e\udd16','Adoption IA','Assessment, s\u00e9lection LLM et impl\u00e9mentation.'],['\ud83d\udcc8','Lean Six Sigma','DMAIC, Kaizen et am\u00e9lioration continue.'],['\ud83c\udf93','Formation','Programmes et capitalisation des connaissances.']], aanpakTitle: 'Notre approche', steps: ['Entretien gratuit (60 min)','Analyse personnalis\u00e9e','Devis apr\u00e8s l\u2019entretien','Paiement Stripe','Suivi 30 & 90 jours'], email: 'consultancy@bierinckx.com', prijsNote: 'Tarifs fix\u00e9s dans un devis personnalis\u00e9. Aucune surprise.' },
    cro: { hero: 'Croissance sans le co\u00fbt d\u2019un CRO \u00e0 temps plein', heroSub: 'Leadership revenue pour scale-ups AI/SaaS en BE \u00b7 NL \u00b7 DE.', what: 'Qu\u2019est-ce qu\u2019un Fractional CRO?', whatTxt: 'Un CRO \u00e0 temps partiel. Tarifs sur devis apr\u00e8s un premier entretien.', fasesTitle: 'Nos phases', fases: [['Phase 1 \u2014 Audit','Audit \u00b7 pipeline \u00b7 premiers r\u00e9sultats.'],['Phase 2+ \u2014 Scaling','Leadership \u00b7 croissance internationale.']], targets: ['AI/SaaS \u00b7 10\u201350 ETP','Series A/B','BE \u00b7 NL \u00b7 DE \u00b7 international','Pr\u00eat \u00e0 cro\u00eetre'], email: 'sales@bierinckx.com', cta: 'Demander un entretien', prijsNote: 'Tarifs sur devis apr\u00e8s un premier entretien.' }
  },
  en: {
    nav: { home: 'Home', shop: 'Shop', psy: 'Psychology', cons: 'Consultancy', cro: 'Fractional CRO', chat: 'Customer Service' },
    hero: { tag: 'Premium Luxury Lifestyle', h1b: 'Luxury Lifestyle', h1c: 'for the whole family', sub: 'From newborn to senior aged 70', cta1: 'Discover the collection', cta2: 'Learn more' },
    cats: ['Baby & Toddler','Kids','Teens','Adults','Seniors','Home & Wellness'],
    catDesc: ['0\u20133 years \u00b7 Soft, safe and luxurious','4\u201312 years \u00b7 Premium for active children','13\u201317 years \u00b7 Stylish and contemporary','18\u201350 years \u00b7 Luxury lifestyle','50\u201370 years \u00b7 Elegance and comfort','For the whole family \u00b7 Home d\u00e9cor & wellness'],
    trust: ['Free returns within 14 days','Secure payment via Stripe','Delivery in BE \u00b7 NL \u00b7 FR','Customer service 7/7 \u00b7 24h'],
    more: 'Learn more \u2192', brands: 'Our brands', brandsSub: 'Selected premium partners', services: 'Revenue Agency',
    chatWelcome: 'Welcome to AURA LUXE! I am your personal assistant, available 24 hours a day, 7 days a week. How can I help you?',
    chatPlaceholder: 'Ask your question...',
    chatSend: 'Send',
    chatTitle: '\ud83d\udc51 AURA LUXE \u2014 Customer Service 24/7',
    chatSubtitle: 'Always available \u00b7 Your language \u00b7 Specialist support',
    psy: { hero: 'Your wellbeing is our priority', heroSub: 'Online support via secure chat. Fully confidential and professional.', book: 'Book & pay your session', chatTitle: 'Chat after payment', chatInfo: 'After payment you receive immediate access to the secure chat.', howTitle: 'How does it work?', steps: ['Choose duration and pay via Stripe','After confirmation: direct chat access','Chat with your psychologist','Fully confidential \u00b7 GDPR'], sessions: [['30 minutes','Introduction or short follow-up'],['60 minutes','Standard session'],['90 minutes','In-depth session']], s: [['\ud83e\udde0','Individual therapy','Guidance for stress, anxiety and burnout.'],['\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67','Family therapy','Support for families and couples.'],['\ud83e\uddd2','Youth psychology','Specialist guidance (6\u201325 years).'],['\ud83d\udcbc','Corporate psychology','Burnout prevention and coaching.'],['\ud83c\udf31','Life Coaching','Personal growth and meaning.'],['\ud83e\udde9','Trauma','EMDR \u00b7 PTSD \u00b7 complex trauma.']], email: 'psy@bierinckx.com', privacy: '\ud83d\udd12 Fully confidential \u00b7 GDPR \u00b7 End-to-end encrypted' },
    cons: { hero: 'Optimise your organisation', heroSub: 'Results-driven guidance for SMEs. Pricing always tailored via a personal quote.', cta: 'Schedule a consultation', dienstenTitle: 'Our services', diensten: [['\ud83d\udd0d','Process analysis','Full audit, as-is mapping and to-be design.'],['\ud83d\udc65','Performance reviews','Professional preparation and 360\u00b0 evaluations.'],['\ud83c\udfaf','Role optimisation','RACI matrices and organisational design.'],['\ud83e\udd16','AI adoption','Assessment, LLM selection and implementation.'],['\ud83d\udcc8','Lean Six Sigma','DMAIC, Kaizen and continuous improvement.'],['\ud83c\udf93','Training','Programmes and knowledge retention.']], aanpakTitle: 'Our approach', steps: ['Free intake (60 min)','Tailored analysis','Quote after intake','Payment via Stripe','Follow-up 30 & 90 days'], email: 'consultancy@bierinckx.com', prijsNote: 'All rates are set in a personalised quote. No surprises.' },
    cro: { hero: 'Growth without the cost of a full-time CRO', heroSub: 'Strategic revenue leadership for AI/SaaS scale-ups in BE \u00b7 NL \u00b7 DE.', what: 'What is a Fractional CRO?', whatTxt: 'A part-time CRO. Top expertise at a fraction of the cost. Rates on request.', fasesTitle: 'Our phases', fases: [['Phase 1 \u2014 Audit','Strategic audit \u00b7 pipeline \u00b7 first results.'],['Phase 2+ \u2014 Scaling','Team leadership \u00b7 international growth.']], targets: ['AI/SaaS \u00b7 10\u201350 FTE','Series A/B funding','BE \u00b7 NL \u00b7 DE \u00b7 internationally','Ready for next growth phase'], email: 'sales@bierinckx.com', cta: 'Request a strategy call', prijsNote: 'Rates set in a personalised quote after an initial call.' }
  }
};

// Hoge kwaliteit Unsplash foto's per categorie (royalty-free)
const PHOTOS = {
  hero: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=90&fit=crop', // luxury store
  baby: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=85&fit=crop', // baby products
  kids: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=85&fit=crop', // kids fashion
  teens: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=85&fit=crop', // teen fashion
  adults: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=85&fit=crop', // beauty products
  seniors: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=85&fit=crop', // elegant senior lifestyle
  home: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=85&fit=crop', // home wellness
  beauty: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=85&fit=crop', // luxury beauty
  parfum: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=85&fit=crop', // perfume
  rituals: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=85&fit=crop', // rituals spa
  fashion: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=85&fit=crop', // fashion
  lookfantastic: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=85&fit=crop', // skincare
};

const CAT_ICONS=[
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="20" r="10" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M14 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/><circle cx="22" cy="18" r="1.5" fill="#8B1A2B"/><circle cx="30" cy="18" r="1.5" fill="#8B1A2B"/><path d="M22 24c1 1.5 3 1.5 4 0" stroke="#8B1A2B" stroke-width="1.2" stroke-linecap="round"/><circle cx="34" cy="8" r="3" fill="#F5F3EE" stroke="#C9A96E" stroke-width="1.2"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="16" r="8" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M18 36v-6c0-3.314 3.582-6 8-6s8 2.686 8 6v6" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/><path d="M18 32l-4 6M34 32l4 6" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="15" r="9" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M17 38v-8a9 9 0 0118 0v8" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/><path d="M17 8c4-4 10-2 12 0" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="14" r="9" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M12 42c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/><path d="M23 18c1.2 1.5 3.6 1.5 4.8 0" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="14" r="9" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M14 42c0-7 5.373-12 12-12s12 5 12 12" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><path d="M8 26L26 10l18 16" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 22v18h24V22" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="21" y="30" width="10" height="10" rx="1" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.2"/></svg>`
];

// SVG Favicon als data URI
const FAVICON_SVG = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">&#128081;</text></svg>')}`;

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
:root{--cr:#FAF9F6;--iv:#F5F3EE;--bu:#8B1A2B;--bd:#6B1421;--bk:#1a1a1a;--gr:#555;--lt:#e8e0d0;--go:#C9A96E}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:system-ui,-apple-system,sans-serif;background:var(--cr);color:var(--bk);min-height:100vh}
nav{background:var(--cr);border-bottom:1px solid var(--lt);padding:0 2rem;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;height:64px}
.logo{font-family:'Playfair Display',Georgia,serif;font-size:1.35rem;font-weight:700;text-decoration:none;color:var(--bk);letter-spacing:.05em;display:flex;align-items:center;gap:.4rem}
.logo .cr{color:var(--go)}.logo span{color:var(--bu)}
.nl{display:flex;align-items:center;gap:1.2rem}
.nl a{text-decoration:none;color:var(--gr);font-size:.78rem;letter-spacing:.07em;text-transform:uppercase;transition:color .2s;padding:.25rem 0;border-bottom:2px solid transparent;cursor:pointer}
.nl a:hover,.nl a.ac{color:var(--bu);border-bottom-color:var(--bu)}
.nl a.chat-nav{background:var(--bu);color:#fff;padding:.35rem .85rem;border-bottom:none;font-size:.72rem}
.nl a.chat-nav:hover{background:var(--bd)}
.ls{display:flex;gap:.35rem;margin-left:.75rem;padding-left:.75rem;border-left:1px solid var(--lt)}
.lb{background:none;border:none;cursor:pointer;font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gr);padding:.2rem .45rem;border-radius:2px;transition:all .2s}
.lb.ac,.lb:hover{background:var(--bu);color:#fff}
.hero{position:relative;min-height:90vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:4rem 2rem;overflow:hidden}
.hero-bg{position:absolute;inset:0;background-image:url('${PHOTOS.beauty}');background-size:cover;background-position:center;filter:brightness(.35)}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(26,26,26,.7) 0%,rgba(139,26,43,.4) 100%)}
.hc{max-width:780px;position:relative;z-index:1;color:#fff}
.htag{display:inline-block;font-size:.72rem;letter-spacing:.25em;text-transform:uppercase;color:var(--go);margin-bottom:1.5rem;font-weight:500}
.h1{font-family:'Playfair Display',Georgia,serif;font-size:clamp(2.5rem,6vw,5rem);font-weight:400;line-height:1.08;margin-bottom:1.5rem}
.h1 strong{color:var(--go);font-weight:700}
.hsub{font-size:1.15rem;opacity:.9;line-height:1.7;margin-bottom:.5rem;max-width:560px;margin-left:auto;margin-right:auto}
.hsub2{font-size:.85rem;opacity:.65;letter-spacing:.08em;margin-bottom:2.5rem}
.btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.btn{padding:.9rem 2.4rem;font-size:.82rem;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;border-radius:1px;transition:all .22s;font-weight:500;display:inline-block;cursor:pointer;border:none}
.bp{background:var(--bu);color:#fff}.bp:hover{background:var(--bd);transform:translateY(-1px)}
.bs{border:1.5px solid rgba(255,255,255,.7);color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(4px)}.bs:hover{background:rgba(255,255,255,.2)}
.bg{background:var(--go);color:#fff}.bg:hover{background:#b8935a}
.trust{background:var(--bk);padding:.9rem 2rem;display:flex;justify-content:center;gap:2.5rem;flex-wrap:wrap}
.ti{color:rgba(255,255,255,.75);font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:.4rem}
.ti::before{content:'\u2713';color:var(--go)}
.sec{padding:4.5rem 2rem}.sec-alt{background:#fff}
.sh{text-align:center;margin-bottom:3rem}
.stag{font-size:.65rem;letter-spacing:.25em;text-transform:uppercase;color:var(--go);display:block;margin-bottom:.5rem}
.stitle{font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.5rem,3.5vw,2.4rem);font-weight:400;margin-bottom:.5rem}
.ssub{color:var(--gr);font-size:.92rem;line-height:1.6}
.g6{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:0;max-width:1200px;margin:0 auto;border:1px solid var(--lt)}
.cc{border-right:1px solid var(--lt);border-bottom:1px solid var(--lt);text-align:center;transition:all .25s;cursor:pointer;background:var(--cr);overflow:hidden;position:relative}
.cc:hover .cc-img{transform:scale(1.04)}
.cc:hover{background:var(--iv)}
.cc-img{width:100%;height:200px;object-fit:cover;transition:transform .4s;display:block}
.cc-body{padding:1.5rem 1.25rem}
.ci{margin-bottom:.6rem;display:flex;justify-content:center}
.cn{font-family:'Playfair Display',Georgia,serif;font-size:.98rem;font-weight:600;margin-bottom:.3rem}
.cd{font-size:.78rem;color:var(--gr);line-height:1.45}
.sg{display:grid;grid-template-columns:repeat(4,1fr);gap:0;max-width:1000px;margin:0 auto;border:1px solid var(--lt)}
.sc{padding:1.5rem;border-right:1px solid var(--lt);background:var(--cr);transition:all .2s;cursor:pointer;position:relative;border-bottom:2px solid transparent}
.sc:last-child{border-right:none}
.sc:hover{background:var(--iv);border-bottom-color:var(--go)}
.si{font-size:1.2rem;margin-bottom:.55rem;opacity:.7}
.sct{font-size:.86rem;font-weight:600;letter-spacing:.03em;margin-bottom:.38rem;color:var(--bk)}
.scd{font-size:.76rem;color:var(--gr);line-height:1.48;margin-bottom:.65rem}
.sl{font-size:.7rem;color:var(--bu);letter-spacing:.04em}
.brands-row{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;max-width:1000px;margin:0 auto;border:1px solid var(--lt)}
.brand-card{padding:2rem 1rem;text-align:center;border-right:1px solid var(--lt);background:var(--cr);transition:all .22s;overflow:hidden}
.brand-card:last-child{border-right:none}
.brand-card:hover{background:var(--iv)}
.brand-img{width:100%;height:140px;object-fit:cover;margin-bottom:1rem;border-radius:1px}
.brand-name{font-family:'Playfair Display',Georgia,serif;font-size:.88rem;letter-spacing:.08em;color:var(--bk);text-transform:uppercase}
.brand-pct{font-size:.72rem;color:var(--go);margin-top:.25rem}
.feature-grid{display:grid;grid-template-columns:1fr 1fr;gap:0;max-width:1100px;margin:0 auto}
.feature-item{position:relative;overflow:hidden;min-height:400px}
.feature-item img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .5s}
.feature-item:hover img{transform:scale(1.05)}
.feature-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(26,26,26,.85) 0%,rgba(26,26,26,.2) 60%,transparent 100%);display:flex;align-items:flex-end;padding:2.5rem}
.feature-text h3{font-family:'Playfair Display',Georgia,serif;font-size:1.5rem;font-weight:400;color:#fff;margin-bottom:.5rem}
.feature-text p{font-size:.85rem;color:rgba(255,255,255,.8);line-height:1.5;margin-bottom:1rem}
.ph{color:#fff;padding:5rem 2rem;text-align:center;position:relative;overflow:hidden}
.ph::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.35) 0%,transparent 100%);pointer-events:none}
.ph-p{background:linear-gradient(135deg,#1a2744 0%,#2d3f6b 50%,#1a2744 100%)}
.ph-c{background:linear-gradient(135deg,#1a3344 0%,#2d5266 50%,#1a3344 100%)}
.ph-r{background:linear-gradient(135deg,#1a1a1a 0%,#4a1a1a 50%,#1a1a1a 100%)}
.ph>*{position:relative;z-index:1}
.ph h1{font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.9rem,5vw,3.8rem);font-weight:400;margin-bottom:1rem}
.ph p{font-size:1.05rem;opacity:.9;max-width:600px;margin:0 auto 2rem}
.d-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.75rem;max-width:1050px;margin:0 auto}
.d-card{border:1px solid var(--lt);padding:2.25rem 2rem;background:var(--cr);transition:all .28s}
.d-card:hover{border-color:var(--bu);transform:translateY(-3px);box-shadow:0 6px 24px rgba(0,0,0,.07)}
.d-icon{font-size:1.75rem;margin-bottom:.75rem}
.d-title{font-family:'Playfair Display',Georgia,serif;font-size:1.05rem;font-weight:600;margin-bottom:.6rem}
.d-desc{font-size:.85rem;color:var(--gr);line-height:1.6}
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1.25rem;max-width:900px;margin:0 auto}
.step{background:#fff;border:1px solid var(--lt);padding:1.75rem;text-align:center}
.sn{width:36px;height:36px;background:var(--bu);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;margin:0 auto .85rem;font-size:.82rem}
.st{font-size:.83rem;color:var(--gr);line-height:1.5}
.ib{background:var(--iv);border:1px solid var(--lt);padding:2.25rem;max-width:560px;margin:0 auto;text-align:center}
.ib p{font-size:.88rem;color:var(--gr);line-height:1.6;margin-bottom:1.1rem}
.ea{color:var(--bu);text-decoration:none;font-weight:600}.ea:hover{text-decoration:underline}
.price-note{background:var(--iv);border-left:3px solid var(--go);padding:1.25rem 1.75rem;max-width:700px;margin:2rem auto 0;font-size:.88rem;color:var(--gr);line-height:1.6}
.tl{list-style:none;max-width:480px;margin:0 auto}
.tl li{padding:.55rem 0;border-bottom:1px solid var(--lt);font-size:.9rem;display:flex;align-items:center;gap:.6rem}
.tl li::before{content:'\u2192';color:var(--bu);font-weight:700}
.fase-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.75rem;max-width:800px;margin:0 auto}
.fase{border:1px solid var(--lt);padding:2.25rem 2rem;background:var(--cr)}
.fase-title{font-family:'Playfair Display',Georgia,serif;font-size:1.1rem;font-weight:600;margin-bottom:.75rem;color:var(--bu)}
.fase-desc{font-size:.85rem;color:var(--gr);line-height:1.6}
.shop-h{text-align:center;padding:4rem 2rem;max-width:800px;margin:0 auto}
.sb{display:inline-block;background:var(--bu);color:#fff;padding:.55rem 1.75rem;font-size:.72rem;letter-spacing:.25em;text-transform:uppercase;margin-bottom:1.75rem}
.sc2{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:0;max-width:1200px;margin:2.5rem auto 0;border:1px solid var(--lt)}
.scat{border-right:1px solid var(--lt);border-bottom:1px solid var(--lt);text-align:center;transition:all .28s;cursor:pointer;background:var(--cr);overflow:hidden}
.scat:hover{background:var(--iv)}
.scat:hover .scat-img{transform:scale(1.04)}
.scat-img{width:100%;height:180px;object-fit:cover;transition:transform .4s}
.scat-body{padding:1.25rem 1rem}
.scat-icon{margin-bottom:.5rem;display:flex;justify-content:center}
.scat-name{font-family:'Playfair Display',Georgia,serif;font-size:.92rem;font-weight:600;margin-bottom:.3rem}
.scat-desc{font-size:.76rem;color:var(--gr);line-height:1.4}
.sess-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.25rem;max-width:750px;margin:0 auto}
.sess{border:1px solid var(--lt);padding:2rem;text-align:center;transition:all .25s;cursor:pointer;background:var(--cr)}
.sess:hover,.sess.sel{border-color:var(--bu);background:var(--iv)}
.sess-dur{font-family:'Playfair Display',Georgia,serif;font-size:1.3rem;font-weight:700;color:var(--bu);margin-bottom:.4rem}
.sess-desc{font-size:.82rem;color:var(--gr);line-height:1.4}
.chat-widget{position:fixed;bottom:1.5rem;right:1.5rem;z-index:999}
.chat-fab{width:58px;height:58px;background:var(--bu);border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.5rem;box-shadow:0 4px 20px rgba(139,26,43,.4);transition:all .2s}
.chat-fab:hover{background:var(--bd);transform:scale(1.05)}
.chat-window{position:fixed;bottom:5.5rem;right:1.5rem;width:360px;max-height:520px;background:#fff;border:1px solid var(--lt);border-radius:4px;box-shadow:0 8px 40px rgba(0,0,0,.18);display:none;flex-direction:column;z-index:998}
.chat-window.open{display:flex}
.chat-head{background:var(--bu);color:#fff;padding:.9rem 1.25rem;display:flex;align-items:center;justify-content:space-between;gap:.75rem;border-radius:3px 3px 0 0}
.chat-head-info{display:flex;align-items:center;gap:.75rem}
.chat-status{width:9px;height:9px;background:#4ade80;border-radius:50%;flex-shrink:0}
.chat-head h4{font-size:.85rem;font-weight:600}
.chat-head p{font-size:.7rem;opacity:.8}
.chat-close{background:none;border:none;color:#fff;cursor:pointer;font-size:1.2rem;opacity:.7}
.chat-close:hover{opacity:1}
.chat-msgs{flex:1;overflow-y:auto;padding:1.25rem;display:flex;flex-direction:column;gap:.85rem;background:var(--iv);min-height:280px;max-height:320px}
.msg{max-width:82%;padding:.65rem .9rem;border-radius:2px;font-size:.83rem;line-height:1.5}
.msg-bot{background:#fff;border:1px solid var(--lt);align-self:flex-start;color:var(--bk)}
.msg-user{background:var(--bu);color:#fff;align-self:flex-end}
.msg-typing{opacity:.5;font-style:italic}
.chat-in{display:flex;border-top:1px solid var(--lt);background:#fff}
.chat-in input{flex:1;border:none;padding:.85rem 1rem;font-size:.85rem;outline:none;background:#fff;font-family:inherit;color:var(--bk)}
.chat-in button{background:var(--bu);color:#fff;border:none;padding:.85rem 1.1rem;cursor:pointer;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;transition:background .2s;white-space:nowrap}
.chat-in button:hover{background:var(--bd)}
.chat-locked{text-align:center;padding:3rem 2rem;background:var(--iv);border:1px solid var(--lt);max-width:700px;margin:0 auto}
.chat-locked p{font-size:.9rem;color:var(--gr);margin-bottom:1.5rem;line-height:1.6}
footer{background:var(--bk);color:rgba(255,255,255,.65);padding:3rem 2rem 2rem}
.fg{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:2rem;max-width:1100px;margin:0 auto 2rem}
.fb .fl{font-family:'Playfair Display',Georgia,serif;font-size:1.15rem;color:#fff;margin-bottom:.65rem}
.fb .fl span{color:var(--go)}
.fb p{font-size:.8rem;line-height:1.6}
.fc h4{font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:var(--go);margin-bottom:.9rem}
.fc a{display:block;text-decoration:none;color:rgba(255,255,255,.55);font-size:.8rem;margin-bottom:.45rem;transition:color .2s;cursor:pointer}
.fc a:hover{color:#fff}
.fb2{border-top:1px solid rgba(255,255,255,.12);padding-top:1.4rem;text-align:center;font-size:.72rem;display:flex;justify-content:center;gap:2rem;flex-wrap:wrap}
@media(max-width:900px){.sg{grid-template-columns:repeat(2,1fr)}.feature-grid{grid-template-columns:1fr}.brands-row{grid-template-columns:repeat(3,1fr)}}
@media(max-width:768px){.nl{display:none}.trust{gap:1.5rem}.g6{grid-template-columns:repeat(2,1fr)}.sg{grid-template-columns:repeat(2,1fr)}.sc2{grid-template-columns:repeat(2,1fr)}.chat-window{width:calc(100vw - 2rem);right:1rem}}
@media(max-width:480px){.g6,.sc2,.sg{grid-template-columns:1fr}.feature-grid{grid-template-columns:1fr}}
`;

const CHAT_JS = (lang, welcome, placeholder, send, title, subtitle) => `
<script>
(function(){
  const LANG = '${lang}';
  const WELCOME = ${JSON.stringify(welcome)};
  const SYSTEM_PROMPT = [
    'You are a specialized luxury lifestyle customer service agent for AURA LUXE by Bierinckx Revenue Agency.',
    'You speak the language of the user automatically (NL/FR/EN).',
    'AURA LUXE is a premium lifestyle webshop for the whole family, from 0 to 70 years.',
    'Categories: Baby & Toddler (0-3y), Kids (4-12y), Teens (13-17y), Adults (18-50y), Seniors (50-70y), Home & Wellness.',
    'Affiliate partners: Lookfantastic (15% commission), Parfumdreams (15-18%), Boozt (15-20%), Douglas (10-12%), Rituals (10-12%).',
    'Returns: 14 days. Delivery: BE, NL, FR. Payment: Stripe (Card, iDEAL, Bancontact, SEPA).',
    'Other services: Psychology sessions via psy@bierinckx.com, Consultancy via consultancy@bierinckx.com, Fractional CRO via sales@bierinckx.com.',
    'Always be warm, professional and helpful. Answer in the same language the user writes in.',
    'If you cannot answer, direct the user to auraluxe@bierinckx.com.',
    'Keep responses concise, friendly and professional. Max 3 sentences unless more detail is needed.'
  ].join(' ');

  let history = [];
  let isOpen = false;

  function toggleChat() {
    isOpen = !isOpen;
    document.getElementById('chat-win').classList.toggle('open', isOpen);
    if(isOpen && history.length === 0) {
      addMsg(WELCOME, 'bot');
    }
  }

  function addMsg(text, who) {
    const msgs = document.getElementById('chat-msgs-w');
    const div = document.createElement('div');
    div.className = 'msg msg-' + who;
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  async function sendMsg() {
    const inp = document.getElementById('chat-inp-w');
    const text = inp.value.trim();
    if (!text) return;
    inp.value = '';
    addMsg(text, 'user');
    history.push({ role: 'user', content: text });

    // Typing indicator
    const msgs = document.getElementById('chat-msgs-w');
    const typing = document.createElement('div');
    typing.className = 'msg msg-bot msg-typing';
    typing.id = 'typing-ind';
    typing.textContent = '...';
    msgs.appendChild(typing);
    msgs.scrollTop = msgs.scrollHeight;

    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: history.slice(-8), system: SYSTEM_PROMPT, lang: LANG })
      });
      const data = await resp.json();
      const reply = data.reply || (LANG === 'nl' ? 'Excuses, er is een technisch probleem. Contacteer ons via auraluxe@bierinckx.com' : LANG === 'fr' ? 'D\'sol\u00e9, erreur technique. Contactez-nous via auraluxe@bierinckx.com' : 'Sorry, technical error. Contact us at auraluxe@bierinckx.com');
      document.getElementById('typing-ind')?.remove();
      addMsg(reply, 'bot');
      history.push({ role: 'assistant', content: reply });
    } catch(e) {
      document.getElementById('typing-ind')?.remove();
      addMsg(LANG === 'nl' ? 'Verbindingsfout. Probeer opnieuw of mail naar auraluxe@bierinckx.com' : 'Connection error. Please email auraluxe@bierinckx.com', 'bot');
    }
  }

  window.toggleChat = toggleChat;
  window.sendChatW = sendMsg;

  document.addEventListener('keydown', function(e) {
    const i = document.getElementById('chat-inp-w');
    if (i && e.key === 'Enter' && document.activeElement === i) sendMsg();
  });
})();
function go(lang,page){const map={'':\'\',shop:\'shop\',psy:\'psychologie\',cons:\'consultancy\',cro:\'cro\',chat:\'klantenservice\'};const frMap={psy:\'psychologie\',cons:\'consultance\',cro:\'cro\',chat:\'service-client\'};const enMap={psy:\'psychology\',cons:\'consultancy\',cro:\'cro\',chat:\'customer-service\'};let slug=map[page]||page;if(lang==='fr'&&frMap[page])slug=frMap[page];if(lang==='en'&&enMap[page])slug=enMap[page];window.location.href='/'+lang+(slug?'/'+slug:'');}
function setLang(lang,cur){go(lang,cur);}
function sendChat(){const inp=document.getElementById('chat-inp');if(!inp||!inp.value.trim())return;const msgs=document.getElementById('chat-msgs');const u=document.createElement('div');u.className='msg msg-user';u.textContent=inp.value;msgs.appendChild(u);inp.value='';msgs.scrollTop=msgs.scrollHeight;setTimeout(()=>{const b=document.createElement('div');b.className='msg msg-bot';b.textContent='Uw bericht is ontvangen. Uw psycholoog reageert zo snel mogelijk.';msgs.appendChild(b);msgs.scrollTop=msgs.scrollHeight;},800);}
document.addEventListener('keydown',function(e){const i=document.getElementById('chat-inp');if(i&&e.key==='Enter'&&document.activeElement===i)sendChat();});
<\/script>`;

const CHAT_WIDGET = (t, lang) => `
<div class="chat-widget">
  <button class="chat-fab" onclick="toggleChat()" title="${t.chatTitle}">&#128081;</button>
  <div class="chat-window" id="chat-win">
    <div class="chat-head">
      <div class="chat-head-info">
        <div class="chat-status"></div>
        <div><h4>${t.chatTitle}</h4><p>${t.chatSubtitle}</p></div>
      </div>
      <button class="chat-close" onclick="toggleChat()">&#10005;</button>
    </div>
    <div class="chat-msgs" id="chat-msgs-w"></div>
    <div class="chat-in">
      <input id="chat-inp-w" type="text" placeholder="${t.chatPlaceholder}">
      <button onclick="sendChatW()">${t.chatSend}</button>
    </div>
  </div>
</div>`;

function nav(t,lang,cur){
  return `<nav>
<a class="logo" href="/${lang}">&#128081; AURA <span>LUXE</span></a>
<div class="nl">
  <a onclick="go('${lang}','')" class="${cur===''?'ac':''}">` + t.nav.home + `</a>
  <a onclick="go('${lang}','shop')" class="${cur==='shop'?'ac':''}">` + t.nav.shop + `</a>
  <a onclick="go('${lang}','psy')" class="${cur==='psy'?'ac':''}">` + t.nav.psy + `</a>
  <a onclick="go('${lang}','cons')" class="${cur==='cons'?'ac':''}">` + t.nav.cons + `</a>
  <a onclick="go('${lang}','cro')" class="${cur==='cro'?'ac':''}">` + t.nav.cro + `</a>
  <div class="ls">
    <button class="lb ${lang==='nl'?'ac':''}" onclick="setLang('nl','${cur}')">NL</button>
    <button class="lb ${lang==='fr'?'ac':''}" onclick="setLang('fr','${cur}')">FR</button>
    <button class="lb ${lang==='en'?'ac':''}" onclick="setLang('en','${cur}')">EN</button>
  </div>
</div>
</nav>`;}

function foot(t,lang){
  return `<footer>
<div class="fg">
  <div class="fb"><div class="fl">&#128081; AURA <span>LUXE</span></div><p>Premium Luxury Lifestyle voor het hele gezin &middot; 0 tot 70 jaar &middot; BE / NL / FR</p></div>
  <div class="fc"><h4>Shop</h4><a onclick="go('${lang}','shop')">${t.cats[0]}</a><a onclick="go('${lang}','shop')">${t.cats[1]}</a><a onclick="go('${lang}','shop')">${t.cats[2]}</a><a onclick="go('${lang}','shop')">${t.cats[3]}</a><a onclick="go('${lang}','shop')">${t.cats[4]}</a></div>
  <div class="fc"><h4>${lang==='nl'?'Diensten':lang==='fr'?'Services':'Services'}</h4><a onclick="go('${lang}','psy')">${t.nav.psy}</a><a onclick="go('${lang}','cons')">${t.nav.cons}</a><a onclick="go('${lang}','cro')">${t.nav.cro}</a></div>
  <div class="fc"><h4>Contact</h4><a href="mailto:auraluxe@bierinckx.com">auraluxe@bierinckx.com</a><a href="mailto:psy@bierinckx.com">psy@bierinckx.com</a><a href="mailto:consultancy@bierinckx.com">consultancy@bierinckx.com</a><a href="mailto:sales@bierinckx.com">sales@bierinckx.com</a></div>
</div>
<div class="fb2"><span>&copy; 2026 Bierinckx Revenue Agency &mdash; Kessel, Belgi&euml;</span></div>
</footer>`;}

function page(title,desc,lang,body,cur=''){
  const hl=['nl','fr','en'].map(l=>`<link rel="alternate" hreflang="${l}" href="https://bierinckx.com/${l}">`).join('');
  const t=T[lang];
  return `<!DOCTYPE html><html lang="${lang}"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="${desc}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${PHOTOS.beauty}">
<meta name="robots" content="index,follow">
${hl}
<link rel="icon" href="${FAVICON_SVG}" type="image/svg+xml">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
<title>${title}</title>
<style>${CSS}</style>
</head><body>
${body}
${CHAT_WIDGET(t,lang)}
${CHAT_JS(lang, t.chatWelcome, t.chatPlaceholder, t.chatSend, t.chatTitle, t.chatSubtitle)}
</body></html>`;}

function buildHome(t,lang){
  const photoKeys=['baby','kids','teens','adults','seniors','home'];
  const cats=t.cats.map((name,i)=>`
    <div class="cc">
      <img class="cc-img" src="${PHOTOS[photoKeys[i]]}" alt="${name}" loading="lazy">
      <div class="cc-body"><div class="ci">${CAT_ICONS[i]}</div><div class="cn">${name}</div><div class="cd">${t.catDesc[i]}</div></div>
    </div>`).join('');
  const trust=t.trust.map(x=>`<div class="ti">${x}</div>`).join('');
  const svcs=[['\ud83e\udde0',t.nav.psy,lang==='nl'?'Online begeleiding via beveiligde chat na betaling.':lang==='fr'?'Accompagnement via chat s\u00e9curis\u00e9 apr\u00e8s paiement.':'Online guidance via secure chat after payment.','psy'],['\ud83c\udfaf',t.nav.cons,lang==='nl'?'Procesoptimalisatie, functioneringsgesprekken en functie-analyse.':lang==='fr'?'Optimisation, entretiens d\u2019\u00e9valuation et analyse.':'Process optimisation, performance reviews and role analysis.','cons'],['\ud83d\udcc8',t.nav.cro,lang==='nl'?'Revenue leiderschap voor AI/SaaS scale-ups. Prijs op offerte.':lang==='fr'?'Leadership revenue pour scale-ups. Prix sur devis.':'Revenue leadership for AI/SaaS scale-ups. Price on request.','cro'],['\u2728','AURA LUXE',lang==='nl'?'Premium lifestyle webshop voor het hele gezin \u2014 0 tot 70 jaar.':lang==='fr'?'Boutique lifestyle pour toute la famille \u2014 0 \u00e0 70 ans.':'Premium lifestyle webshop for the whole family \u2014 0 to 70 years.','shop']].map(([i,t2,d,p])=>`<div class="sc" onclick="go('${lang}','${p}')"><div class="si">${i}</div><div class="sct">${t2}</div><div class="scd">${d}</div><div class="sl">${t.more}</div></div>`).join('');

  const brands=[
    {name:'Lookfantastic',pct:'15%',img:PHOTOS.lookfantastic},
    {name:'Douglas',pct:'10-12%',img:PHOTOS.parfum},
    {name:'Rituals',pct:'10-12%',img:PHOTOS.rituals},
    {name:'Boozt',pct:'15-20%',img:PHOTOS.fashion},
    {name:'Parfumdreams',pct:'15-18%',img:PHOTOS.beauty},
  ].map(b=>`<div class="brand-card"><img class="brand-img" src="${b.img}" alt="${b.name}" loading="lazy"><div class="brand-name">${b.name}</div><div class="brand-pct">${b.pct} ${lang==='nl'?'commissie':lang==='fr'?'commission':'commission'}</div></div>`).join('');

  const features=[
    {img:PHOTOS.beauty,title:lang==='nl'?'Luxury Beauty':lang==='fr'?'Beauté Luxe':'Luxury Beauty',desc:lang==='nl'?'Curated premium beauty. Elk product geselecteerd op kwaliteit en merkwaarde.':lang==='fr'?'Beauté premium s\u00e9lectionn\u00e9e. Chaque produit choisi pour sa qualit\u00e9.':'Curated premium beauty. Every product selected for quality and brand value.'},
    {img:PHOTOS.fashion,title:lang==='nl'?'Mode & Stijl':'Mode & Style',desc:lang==='nl'?'Premium mode voor elke leeftijd. Van eerste stapjes tot tijdloze elegantie.':lang==='fr'?'Mode premium pour tous les \u00e2ges. Des premiers pas \u00e0 l\u2019\u00e9l\u00e9gance intemporelle.':'Premium fashion for every age. From first steps to timeless elegance.'},
  ].map(f=>`<div class="feature-item"><img src="${f.img}" alt="${f.title}" loading="lazy"><div class="feature-overlay"><div class="feature-text"><h3>${f.title}</h3><p>${f.desc}</p><button class="btn bg" onclick="go('${lang}','shop')">${t.hero.cta1}</button></div></div></div>`).join('');

  const body=nav(t,lang,'')+`
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hc">
    <span class="htag">&#128081; ${t.hero.tag}</span>
    <h1 class="h1">Premium <strong>${t.hero.h1b}</strong><br>${t.hero.h1c}</h1>
    <p class="hsub">${t.hero.sub}</p>
    <p class="hsub2">Baby &bull; Kids &bull; ${t.cats[2]} &bull; ${t.cats[3]} &bull; ${t.cats[4]} &bull; BE / NL / FR</p>
    <div class="btns">
      <button class="btn bp" onclick="go('${lang}','shop')">${t.hero.cta1}</button>
      <button class="btn bs" onclick="document.getElementById('sv').scrollIntoView({behavior:'smooth'})">${t.hero.cta2}</button>
    </div>
  </div>
</section>
<div class="trust">${trust}</div>
<section class="sec">
  <div class="sh"><span class="stag">&#10022; AURA LUXE</span><h2 class="stitle">${lang==='nl'?'Onze collecties':lang==='fr'?'Nos collections':'Our collections'}</h2><p class="ssub">${lang==='nl'?'Kwaliteit voor elke leeftijd \u2014 0 tot 70 jaar':lang==='fr'?'Qualit\u00e9 pour chaque \u00e2ge \u2014 0 \u00e0 70 ans':'Quality for every age \u2014 0 to 70 years'}</p></div>
  <div class="g6">${cats}</div>
</section>
<section class="sec sec-alt">
  <div class="feature-grid">${features}</div>
</section>
<section class="sec">
  <div class="sh"><span class="stag">&#10022; ${lang==='nl'?'Partners':lang==='fr'?'Partenaires':'Partners'}</span><h2 class="stitle">${t.brands}</h2><p class="ssub">${t.brandsSub}</p></div>
  <div class="brands-row">${brands}</div>
</section>
<section class="sec sec-alt" id="sv">
  <div class="sh"><span class="stag">&#10022; Bierinckx</span><h2 class="stitle">${t.services}</h2></div>
  <div class="sg">${svcs}</div>
</section>
`+foot(t,lang);
  return page(`AURA LUXE | ${t.hero.h1c} \u2014 Bierinckx`,`Premium luxury lifestyle ${t.hero.h1c}. 0 tot 70 jaar.`,lang,body);
}

function buildShop(t,lang){
  const photoKeys=['baby','kids','teens','adults','seniors','home'];
  const cats=t.cats.map((c,i)=>`
    <div class="scat">
      <img class="scat-img" src="${PHOTOS[photoKeys[i]]}" alt="${c}" loading="lazy">
      <div class="scat-body"><div class="scat-icon">${CAT_ICONS[i]}</div><div class="scat-name">${c}</div><div class="scat-desc">${t.catDesc[i]}</div></div>
    </div>`).join('');
  const body=nav(t,lang,'shop')+`
<section class="sec" style="text-align:center">
  <div class="shop-h">
    <div class="sb">${lang==='nl'?'Coming Soon':lang==='fr'?'Bient\u00f4t disponible':'Coming Soon'}</div>
    <h1 class="stitle" style="font-family:'Playfair Display',Georgia,serif;margin-bottom:1rem">${lang==='nl'?'Collectie in opbouw':lang==='fr'?'Collection en cours':'Collection coming soon'}</h1>
    <p class="ssub">${lang==='nl'?'Onze premium collectie voor het hele gezin wordt binnenkort gelanceerd.':lang==='fr'?'Notre collection premium sera lanc\u00e9e prochainement.':'Our premium collection will launch soon.'}<br>${lang==='nl'?'Van 0 tot 70 jaar \u00b7 BE / NL / FR':lang==='fr'?'De 0 \u00e0 70 ans \u00b7 BE / NL / FR':'From 0 to 70 years \u00b7 BE / NL / FR'}</p>
  </div>
  <div class="sc2">${cats}</div>
  <div style="margin-top:3rem"><button class="btn bp" onclick="window.location='mailto:auraluxe@bierinckx.com'">auraluxe@bierinckx.com &mdash; ${lang==='nl'?'Vroege toegang':lang==='fr'?'Acc\u00e8s anticip\u00e9':'Early access'}</button></div>
</section>
`+foot(t,lang);
  return page(`Shop | AURA LUXE`,`Premium lifestyle shop voor het hele gezin.`,lang,body);
}

function buildPsy(t,lang){
  const p=t.psy;
  const svcs=p.s.map(([i,tt,d])=>`<div class="sc" style="cursor:default"><div class="si">${i}</div><div class="sct">${tt}</div><div class="scd">${d}</div></div>`).join('');
  const steps=p.steps.map((s,i)=>`<div class="step"><div class="sn">${i+1}</div><div class="st">${s}</div></div>`).join('');
  const sessions=p.sessions.map(([dur,desc])=>`<div class="sess" onclick="this.classList.toggle('sel')"><div class="sess-dur">${dur}</div><div class="sess-desc">${desc}</div></div>`).join('');
  const body=nav(t,lang,'psy')+`
<section class="ph ph-p"><h1>${p.hero}</h1><p>${p.heroSub}</p><button class="btn bg" onclick="document.getElementById('sess-kies').scrollIntoView({behavior:'smooth'})">${p.book}</button></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; ${lang==='nl'?'Ons aanbod':lang==='fr'?'Notre offre':'Our services'}</span><h2 class="stitle">${lang==='nl'?'Psychologie & Welzijn':lang==='fr'?'Psychologie & Bien-\u00eatre':'Psychology & Wellbeing'}</h2></div><div class="sg">${svcs}</div></section>
<section class="sec" id="sess-kies"><div class="sh"><span class="stag">&#10022; ${lang==='nl'?'Stap 1':lang==='fr'?'\u00c9tape 1':'Step 1'}</span><h2 class="stitle">${lang==='nl'?'Kies uw sessieduur':lang==='fr'?'Choisissez la dur\u00e9e':'Choose your session duration'}</h2><p class="ssub">${lang==='nl'?'Na betaling ontvangt u directe toegang tot de beveiligde chat':lang==='fr'?'Apr\u00e8s paiement, acc\u00e8s direct au chat':'After payment you receive immediate access to the secure chat'}</p></div><div class="sess-grid">${sessions}</div><div style="text-align:center;margin-top:2rem"><button class="btn bp" onclick="window.location='mailto:${p.email}'">${p.book}</button><p style="margin-top:1rem;font-size:.82rem;color:var(--gr)">${p.privacy}</p></div></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; Chat</span><h2 class="stitle">${p.chatTitle}</h2><p class="ssub">${p.chatInfo}</p></div><div class="chat-locked"><p>&#128274; ${lang==='nl'?'De chat wordt automatisch ontgrendeld na betaling van uw sessie.':lang==='fr'?'Le chat est automatiquement d\u00e9bloqu\u00e9 apr\u00e8s paiement.':'The chat is automatically unlocked after payment.'}</p><button class="btn bp" onclick="window.location='mailto:${p.email}'">${p.book}</button></div></section>
<section class="sec"><div class="sh"><span class="stag">&#10022; Process</span><h2 class="stitle">${p.howTitle}</h2></div><div class="steps">${steps}</div></section>
`+foot(t,lang);
  return page(`${lang==='nl'?'Psychologie':'Psychology'} | Bierinckx`,p.heroSub,lang,body);
}

function buildCons(t,lang){
  const c=t.cons;
  const diensten=c.diensten.map(([icon,title,desc])=>`<div class="d-card"><div class="d-icon">${icon}</div><div class="d-title">${title}</div><div class="d-desc">${desc}</div></div>`).join('');
  const steps=c.steps.map((s,i)=>`<div class="step"><div class="sn">${i+1}</div><div class="st">${s}</div></div>`).join('');
  const body=nav(t,lang,'cons')+`
<section class="ph ph-c"><h1>${c.hero}</h1><p>${c.heroSub}</p><button class="btn bg" onclick="window.location='mailto:${c.email}'">${c.cta}</button></section>
<section class="sec"><div class="sh"><span class="stag">&#10022; ${lang==='nl'?'Wat we doen':lang==='fr'?'Ce que nous faisons':'What we do'}</span><h2 class="stitle">${c.dienstenTitle}</h2></div><div class="d-grid">${diensten}</div></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; ${lang==='nl'?'Aanpak':lang==='fr'?'Approche':'Approach'}</span><h2 class="stitle">${c.aanpakTitle}</h2></div><div class="steps">${steps}</div><div class="price-note">${c.prijsNote}</div></section>
<section class="sec"><div class="sh"><h2 class="stitle">${c.cta}</h2></div><div class="ib"><p>&#128231; <a class="ea" href="mailto:${c.email}">${c.email}</a></p><button class="btn bp">${c.cta}</button></div></section>
`+foot(t,lang);
  return page(`Consultancy | Bierinckx`,c.heroSub,lang,body);
}

function buildCRO(t,lang){
  const c=t.cro;
  const fases=c.fases.map(([title,desc],i)=>`<div class="fase${i===1?' style=\"border-color:var(--bu);background:var(--iv)\"':''}"><div class="fase-title">${title}</div><div class="fase-desc">${desc}</div></div>`).join('');
  const targets=c.targets.map(x=>`<li>${x}</li>`).join('');
  const body=nav(t,lang,'cro')+`
<section class="ph ph-r"><h1>${c.hero}</h1><p>${c.heroSub}</p><button class="btn bg" onclick="window.location='mailto:${c.email}'">${c.cta}</button></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; Fractional CRO</span><h2 class="stitle">${c.what}</h2><p class="ssub" style="max-width:580px;margin:0 auto">${c.whatTxt}</p></div></section>
<section class="sec"><div class="sh"><span class="stag">&#10022; ${lang==='nl'?'Fasen':lang==='fr'?'Phases':'Phases'}</span><h2 class="stitle">${c.fasesTitle}</h2></div><div class="fase-grid">${fases}</div><div class="price-note">${c.prijsNote}</div></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; ICP</span><h2 class="stitle">${lang==='nl'?'Voor wie?':lang==='fr'?'Pour qui?':'Who is it for?'}</h2></div><ul class="tl">${targets}</ul></section>
<section class="sec"><div class="sh"><h2 class="stitle">${c.cta}</h2></div><div class="ib"><p>&#128231; <a class="ea" href="mailto:${c.email}">${c.email}</a></p><button class="btn bp">${c.cta}</button></div></section>
`+foot(t,lang);
  return page(`Fractional CRO | Bierinckx`,c.heroSub,lang,body);
}

function detectLang(request){const url=new URL(request.url);const parts=url.pathname.split('/').filter(Boolean);const langs=['nl','fr','en'];if(langs.includes(parts[0]))return{lang:parts[0],rest:parts.slice(1)};const accept=request.headers.get('accept-language')||'';if(accept.toLowerCase().startsWith('fr'))return{lang:'fr',rest:parts};return{lang:'nl',rest:parts};}

export default{
  async fetch(request,env,ctx){
    const url=new URL(request.url);const path=url.pathname;
    const cors={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,POST,OPTIONS','Access-Control-Allow-Headers':'Content-Type'};
    if(request.method==='OPTIONS')return new Response(null,{status:204,headers:cors});

    // AI Chat API endpoint
    if(path==='/api/key-check'){const present=!!(env&&env.CLAUDE_API_KEY);const preview=present?(env.CLAUDE_API_KEY||'').slice(0,7)+'...':'NIET INGESTELD';return new Response(JSON.stringify({key_present:present,preview}),{headers:{...cors,'Content-Type':'application/json'}});}
      if(path==='/api/chat'&&request.method==='POST'){
      let body;try{body=await request.json();}catch{return new Response(JSON.stringify({error:'Invalid JSON'}),{status:400,headers:cors});}
      const{message,history=[],system,lang='nl'}=body;
      if(!message)return new Response(JSON.stringify({error:'No message'}),{status:400,headers:cors});
      try{
        const messages=[...history.slice(-8),{role:'user',content:message}];
        const resp=await fetch('https://api.anthropic.com/v1/messages',{
          method:'POST',
          headers:{'Content-Type':'application/json','x-api-key':env.CLAUDE_API_KEY,'anthropic-version':'2023-06-01'},
          body:JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:400,system:system||'You are a helpful customer service agent for AURA LUXE luxury lifestyle webshop. Answer in the language the user writes in. Be warm, concise and professional.',messages})
        });
        const data=await resp.json();
        const reply=data.content?.[0]?.text||'';
        if(!resp.ok||!reply){console.log(`[CHAT-ERR] status=${resp.status} type=${data?.error?.type||'?'} msg=${(data?.error?.message||'').slice(0,150)}`);const fb=lang==='fr'?'Un probl\u00e8me technique est survenu. Contactez-nous via auraluxe@bierinckx.com':lang==='en'?'A technical issue occurred. Please contact us at auraluxe@bierinckx.com':'Er is een technisch probleem. Contacteer ons via auraluxe@bierinckx.com';return new Response(JSON.stringify({reply:fb}),{headers:{...cors,'Content-Type':'application/json'}});}
        return new Response(JSON.stringify({reply}),{headers:{...cors,'Content-Type':'application/json'}});
      }catch(e){
        return new Response(JSON.stringify({reply:'Er is een technisch probleem. Contacteer ons via auraluxe@bierinckx.com'}),{headers:{...cors,'Content-Type':'application/json'}});
      }
    }

    if(path==='/api/webhook'&&request.method==='POST'){const body=await request.text();try{const e=JSON.parse(body);console.log(`[WH] ${e.type}`);return new Response(JSON.stringify({received:true}),{headers:{...cors,'Content-Type':'application/json'}});}catch(e){return new Response(JSON.stringify({error:e.message}),{status:400,headers:cors});}}
    if(path==='/api/create-checkout'&&request.method==='POST'){let body;try{body=await request.json();}catch{return new Response(JSON.stringify({error:'Invalid JSON'}),{status:400,headers:cors});}const{business_line,product_name,amount_eur,customer_email,locale='nl'}=body;if(!business_line||!product_name||!amount_eur)return new Response(JSON.stringify({error:'Missing fields'}),{status:400,headers:cors});try{const params=new URLSearchParams({'payment_method_types[]':'card','line_items[0][price_data][currency]':'eur','line_items[0][price_data][product_data][name]':product_name,'line_items[0][price_data][unit_amount]':String(Math.round(amount_eur*100)),'line_items[0][quantity]':'1','mode':'payment','locale':locale,'automatic_tax[enabled]':'true','metadata[business_line]':business_line,'success_url':`https://bierinckx.com/${locale}/chat?paid=1`,'cancel_url':`https://bierinckx.com/${locale}/psychologie`});if(customer_email)params.set('customer_email',customer_email);const resp=await fetch('https://api.stripe.com/v1/checkout/sessions',{method:'POST',headers:{'Authorization':`Bearer ${env.STRIPE_SECRET_KEY}`,'Content-Type':'application/x-www-form-urlencoded'},body:params});const session=await resp.json();if(!resp.ok)throw new Error(session.error?.message||'Stripe error');return new Response(JSON.stringify({url:session.url}),{headers:{...cors,'Content-Type':'application/json'}});}catch(e){return new Response(JSON.stringify({error:e.message}),{status:500,headers:cors});}}

    if(path==='/robots.txt')return new Response('User-agent: *\nAllow: /\nSitemap: https://bierinckx.com/sitemap.xml\n',{headers:{'Content-Type':'text/plain'}});
    if(path==='/sitemap.xml')return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://bierinckx.com/nl</loc><priority>1.0</priority></url><url><loc>https://bierinckx.com/fr</loc><priority>1.0</priority></url><url><loc>https://bierinckx.com/en</loc><priority>1.0</priority></url><url><loc>https://bierinckx.com/nl/shop</loc><priority>0.9</priority></url><url><loc>https://bierinckx.com/nl/psychologie</loc><priority>0.8</priority></url><url><loc>https://bierinckx.com/nl/consultancy</loc><priority>0.8</priority></url><url><loc>https://bierinckx.com/nl/cro</loc><priority>0.8</priority></url></urlset>`,{headers:{'Content-Type':'application/xml'}});

    if(path==='/'||path===''){const accept=request.headers.get('accept-language')||'';const lang=accept.toLowerCase().startsWith('fr')?'fr':'nl';return Response.redirect(`https://bierinckx.com/${lang}`,302);}

    const{lang,rest}=detectLang(request);const t=T[lang];const p=rest[0]||'';
    const h=(html)=>new Response(html,{headers:{'Content-Type':'text/html;charset=UTF-8'}});

    if(p==='')return h(buildHome(t,lang));
    if(p==='shop')return h(buildShop(t,lang));
    if(['psychologie','psychology','psy'].includes(p))return h(buildPsy(t,lang));
    if(['consultancy','consultance','cons'].includes(p))return h(buildCons(t,lang));
    if(['cro','fractional-cro'].includes(p))return h(buildCRO(t,lang));
    if(['bedankt','merci','thank-you','chat','klantenservice','service-client','customer-service'].includes(p)){
      const paid=url.searchParams.get('paid')==='1';
      const chatContent=paid?`<div class="chat-locked"><p>&#10003; ${lang==='nl'?'Uw sessie is bevestigd. De chat is beschikbaar via de knop rechtsonder op elke pagina.':lang==='fr'?'Votre session est confirm\u00e9e. Le chat est disponible via le bouton en bas \u00e0 droite.':'Your session is confirmed. Chat is available via the button at the bottom right.'}</p></div>`:`<div class="chat-locked"><p>&#128274; ${lang==='nl'?'Nog geen actieve sessie. Betaal eerst om toegang te krijgen.':lang==='fr'?'Pas encore de session. Payez d\u2019abord.':'No active session yet. Please pay first.'}</p><button class="btn bp" onclick="window.location='/'+('${lang}')+'/psychologie'">${lang==='nl'?'Sessie boeken':'Book a session'}</button></div>`;
      return h(page(`Chat | Bierinckx`,`Klantenservice AURA LUXE`,lang,nav(t,lang,'psy')+`<section class="sec"><div class="sh"><span class="stag">&#10022; Chat</span><h2 class="stitle">${t.chatTitle}</h2><p class="ssub">${t.chatSubtitle}</p></div>${chatContent}</section>`+foot(t,lang)));
    }

    return new Response(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>404</title></head><body style="font-family:system-ui;background:#FAF9F6;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center"><div><h1 style="font-weight:300;margin-bottom:1rem">404</h1><a href="/${lang}" style="color:#8B1A2B">\u2190 Home</a></div></body></html>`,{status:404,headers:{'Content-Type':'text/html;charset=UTF-8'}});
  }
};
