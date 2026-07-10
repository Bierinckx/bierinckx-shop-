var T = {
  nl: {
    nav: { home: "Home", shop: "Shop", psy: "Psychologie", cons: "Consultancy", cro: "Fractional CRO", graf: "Grafische Nijverheid", chat: "Klantenservice" },
    hero: { tag: "Luxury Beauty · BE / NL / FR", h1b: "Luxury Beauty", h1c: "die aanvoelt als een ritueel", sub: "Zorgvuldig geselecteerde skincare, parfum en make-up — voor het hele gezin dat kwaliteit herkent", cta1: "Ontdek de collectie", cta2: "Meer info" },
    cats: ["Skincare", "Parfum", "Make-up", "Home & Wellness", "Kleding"],
    catDesc: ["Ritueel voor elke dag", "Een signatuur, geen geur", "Verfijnd, nooit te veel", "Luxe die thuis blijft", "Voor het hele gezin"],
    shopCats: {
      skincare: { tag: "AURA LUXE &middot; Skincare", h1: "Skincare", sub: "Huidverzorging als dagelijks ritueel, niet als verplichting", badge: "Collectie in opbouw", intro: "Onze skincare-selectie draait om producten die hun werk doen &eacute;n een moment van rust brengen in de dag. Geen overvolle routines met twintig stappen, maar een doordachte keuze uit reiniging, verzorging en bescherming &mdash; afgestemd op wat de huid echt nodig heeft. Elk merk wordt geselecteerd op werkzame ingredi&euml;nten, herkomst en resultaat, niet op verpakking alleen.", segTitle: "Wat u vindt in Skincare", segSub: "Drie pijlers, &eacute;&eacute;n filosofie: verzorging die werkt", segs: [["beauty", "Gezichtsverzorging", "Reinigers, serums en crèmes voor elk huidtype &mdash; van hydratatie tot anti-aging."], ["rituals", "Rituelen & Texturen", "Producten die het verzorgingsmoment zelf tot een ervaring maken."], ["home", "Bodycare & Wellness", "Lichaamsverzorging die aansluit bij dezelfde kwaliteitsstandaard als het gezicht."]], whyTitle: "Waarom AURA LUXE Skincare", why: [["&#10022;", "Zorgvuldig geselecteerd", "Elk product wordt beoordeeld op ingredi&euml;nten, werkzaamheid en herkomst voor het de collectie haalt."], ["&#128230;", "Geen copy-paste catalogus", "Eigen productbeschrijvingen en beeldmateriaal &mdash; nooit klakkeloos overgenomen van de leverancier."], ["&#9989;", "Transparante levertijd", "Duidelijkheid over levering v&oacute;&oacute;r het afrekenen, geen verrassingen achteraf."], ["&#128274;", "Veilig & vertrouwd", "Beveiligde checkout via Stripe, BTW correct verwerkt, retour binnen 14 dagen."]] },
      parfum: { tag: "AURA LUXE &middot; Parfum", h1: "Parfum", sub: "Een signatuur, geen geur die morgen weer vervlogen is", badge: "Collectie in opbouw", intro: "Parfum is het meest persoonlijke onderdeel van een verzorgingsroutine &mdash; het blijft nadat u de kamer al verlaten hebt. Onze selectie focust op geuren met karakter: van tijdloze klassiekers tot niche-composities die opvallen zonder te overweldigen. Geen eindeloze rekken vol testers, maar een gecureerde keuze die het verschil maakt.", segTitle: "Wat u vindt in Parfum", segSub: "Voor elk moment een geur die past", segs: [["parfum", "Signature Eau de Parfum", "Krachtige, langhoudende composities voor wie een geur wil die herkenbaar blijft."], ["rituals", "Geurrituelen & Body Mist", "Lichtere texturen om doorheen de dag te verfrissen zonder te overladen."], ["beauty", "Geursets & Miniaturen", "Ideaal om een nieuwe geur te ontdekken of cadeau te doen."]], whyTitle: "Waarom AURA LUXE Parfum", why: [["&#10022;", "Karakter boven trend", "Wij kiezen geuren die blijven kloppen, niet enkel wat vandaag populair is."], ["&#128230;", "Authentieke productinformatie", "Geurfamilie, houdbaarheid en toepassing duidelijk beschreven &mdash; geen vage marketingtaal."], ["&#9989;", "Transparante levertijd", "Levertermijn altijd zichtbaar v&oacute;&oacute;r het afrekenen."], ["&#128274;", "Veilig & vertrouwd", "Beveiligde checkout via Stripe, retour binnen 14 dagen."]] },
      makeup: { tag: "AURA LUXE &middot; Make-up", h1: "Make-up", sub: "Verfijnd, nooit te veel &mdash; make-up die de huid respecteert", badge: "Collectie in opbouw", intro: "Make-up die goed oogt begint bij een goede formule. Onze selectie combineert dekkracht en pigmentatie met huidvriendelijke ingredi&euml;nten, zodat het resultaat mooi is &eacute;n de huid geen geweld aandoet. Van een natuurlijke daglook tot een uitgesproken avondlook &mdash; steeds met producten die hun belofte waarmaken.", segTitle: "Wat u vindt in Make-up", segSub: "Van basis tot finishing touch", segs: [["makeup", "Teint & Basis", "Foundation, concealer en poeder voor een egale, ademende teint."], ["beauty", "Ogen & Lippen", "Kleur die blijft zitten, van subtiel tot uitgesproken."], ["rituals", "Tools & Accessoires", "Kwasten, sponzen en accessoires voor een professioneel resultaat thuis."]], whyTitle: "Waarom AURA LUXE Make-up", why: [["&#10022;", "Kwaliteit boven kwantiteit", "Een gerichte selectie in plaats van een eindeloos aanbod dat de keuze bemoeilijkt."], ["&#128230;", "Eigen beeldmateriaal", "Elke swatch en productfoto in eigen huisstijl &mdash; geen leveranciersbeelden."], ["&#9989;", "Transparante levertijd", "Levering altijd zichtbaar v&oacute;&oacute;r het afrekenen."], ["&#128274;", "Veilig & vertrouwd", "Beveiligde checkout via Stripe, retour binnen 14 dagen."]] },
      home: { tag: "AURA LUXE &middot; Home & Wellness", h1: "Home & Wellness", sub: "Luxe die thuis blijft, ook na de deur achter u dicht", badge: "Collectie in opbouw", intro: "Welzijn stopt niet bij de badkamerspiegel. Onze Home & Wellness-selectie brengt dezelfde verfijning naar de rest van het huis &mdash; geurkaarsen, bad- en douche-essentials en kleine rituelen die een gewone avond net iets bijzonderder maken. Geselecteerd op kwaliteit, geur en afwerking.", segTitle: "Wat u vindt in Home & Wellness", segSub: "Rust en verfijning voor in huis", segs: [["home", "Geurkaarsen & Diffusers", "Signatuurgeuren voor in huis, langdurig en subtiel."], ["rituals", "Bad & Douche Rituelen", "Verzorgende essentials voor een moment van ontspanning."], ["beauty", "Kleine Luxe-accenten", "Details die een interieur net dat tikkeltje verfijnder maken."]], whyTitle: "Waarom AURA LUXE Home & Wellness", why: [["&#10022;", "Geselecteerd op geur & afwerking", "Alleen producten die ook echt een verschil maken in de ervaring thuis."], ["&#128230;", "Geen copy-paste catalogus", "Eigen beschrijvingen, geen letterlijke leveranciersteksten."], ["&#9989;", "Transparante levertijd", "Levering duidelijk zichtbaar v&oacute;&oacute;r het afrekenen."], ["&#128274;", "Veilig & vertrouwd", "Beveiligde checkout via Stripe, retour binnen 14 dagen."]] },
      kleding: { tag: "AURA LUXE &middot; Kleding", h1: "Kleding voor het hele gezin", sub: "Van eerste kruippakjes tot tijdloze elegantie &mdash; 0 tot 65+ jaar", badge: "Collectie in opbouw", intro: "Kleding is de nieuwste uitbreiding binnen AURA LUXE: premium en verzorgd gemaakte kledij voor het volledige gezin, van baby tot senior. Dezelfde kwaliteitsstandaard als onze beauty-collecties &mdash; zorgvuldig geselecteerde merken, eerlijke materialen en pasvorm die klopt &mdash; nu ook voor wat u draagt, niet enkel voor wat u op de huid aanbrengt.", segTitle: "Kleding per levensfase", segSub: "Vijf leeftijdssegmenten, telkens dezelfde zorgvuldigheid", segs: [["baby", "Baby & Peuter (0&ndash;4 jaar)", "Zachte, huidvriendelijke stoffen voor de allerkleinsten.", "Zacht katoenen rompertje"], ["kids", "Kids (4&ndash;10 jaar)", "Speelse, praktische kledij die een actieve dag overleeft.", "Speels T-shirt met print"], ["teens", "Tieners (10&ndash;19 jaar)", "Hedendaagse stijlen waarmee jongeren zich zelfverzekerd voelen.", "Oversized hoodie"], ["adults", "Volwassenen (20&ndash;65 jaar)", "Tijdloze basics en statement-stukken voor elke gelegenheid.", "Tijdloze wollen jas"], ["seniors", "Senioren (65+ jaar)", "Comfortabele elegantie met aandacht voor pasvorm en draagcomfort.", "Comfortabele linnen blouse"]], whyTitle: "Waarom AURA LUXE Kleding", why: [["&#10022;", "&Eacute;&eacute;n kwaliteitsstandaard", "Dezelfde zorgvuldigheid als onze beauty-collecties, nu toegepast op kleding."], ["&#128230;", "Eigen beeldmateriaal per segment", "Elke leeftijdsgroep krijgt on-topic beeldmateriaal, geen generieke stockfoto's."], ["&#9989;", "Transparante levertijd", "Levering altijd zichtbaar v&oacute;&oacute;r het afrekenen, voor elk segment."], ["&#128274;", "Veilig & vertrouwd", "Beveiligde checkout via Stripe, retour binnen 14 dagen."]] }
    },
    trust: ["Gratis retour binnen 14 dagen", "Veilig betalen via Stripe", "Levering in BE · NL · FR", "Klantenservice 7/7 · 24u"],
    more: "Meer info →",
    brands: "Onze merken",
    brandsSub: "Geselecteerde premium partners",
    services: "Revenue Agency",
    chatWelcome: "Welkom bij AURA LUXE! Ik ben uw persoonlijke assistent en help u 24 uur per dag, 7 dagen per week. Hoe kan ik u helpen?",
    chatPlaceholder: "Stel uw vraag...",
    chatSend: "Verstuur",
    chatTitle: "👑 AURA LUXE — Klantenservice 24/7",
    chatSubtitle: "Altijd beschikbaar · Uw taal · Gespecialiseerde hulp",
    psy: { hero: "Jouw welzijn staat centraal", heroSub: "Online begeleiding via beveiligde chat. Volledig vertrouwelijk en professioneel.", book: "Sessie boeken & betalen", chatTitle: "Chat na betaling", chatInfo: "Na betaling ontvangt u direct toegang tot de beveiligde chat met uw psycholoog.", howTitle: "Hoe werkt het?", steps: ["Kies uw sessieduur en betaal via Stripe", "Na bevestiging: directe toegang tot de beveiligde chat", "Chat met uw psycholoog op het afgesproken tijdstip", "Volledig vertrouwelijk · GDPR-conform"], sessions: [["30 minuten", "Eerste kennismaking of korte opvolging"], ["60 minuten", "Standaard therapeutisch gesprek"], ["90 minuten", "Diepgaande sessie of intake"]], s: [["🧠", "Individuele therapie", "Begeleiding bij stress, angst, burn-out en levensvragen."], ["👨‍👩‍👧", "Gezinstherapie", "Ondersteuning voor gezinnen, koppels en ouders."], ["🧒", "Jeugdpsychologie", "Begeleiding voor kinderen en jongeren (6–25 jaar)."], ["💼", "Bedrijfspsychologie", "Burn-out preventie, re-integratie en leiderschapscoaching."], ["🌱", "Life Coaching", "Persoonlijke groei, doelen en zingeving."], ["🧩", "Traumaverwerking", "EMDR · PTSS · complexe trauma · onder supervisie."]], email: "psy@bierinckx.com", privacy: "🔒 Volledig vertrouwelijk · GDPR-conform · End-to-end versleuteld" },
    cons: { hero: "Optimaliseer uw organisatie", heroSub: "Resultaatgerichte begeleiding voor KMO's in de Benelux. Prijs altijd op maat via offerte.", cta: "Vrijblijvend gesprek plannen", dienstenTitle: "Onze diensten", diensten: [["🔍", "Procesanalyse & -optimalisatie", "Volledige doorlichting van uw bedrijfsprocessen. As-is mapping, bottleneck-detectie en to-be ontwerp."], ["👥", "Functioneringsgesprekken", "Professionele voorbereiding, begeleiding en opvolging van functioneringsgesprekken en 360°-evaluaties."], ["🎯", "Functie-optimalisatie & analyse", "Grondige analyse van functies, rollen en verantwoordelijkheden. RACI-matrices en organogramoptimalisatie."], ["🤖", "AI-adoptie & implementatie", "AI-readiness assessment, LLM-selectie en implementatiebegeleiding."], ["📈", "Lean Six Sigma", "Waste-eliminatie, DMAIC, Kaizen-events en continue verbetercycli."], ["🎓", "Teamontwikkeling & training", "Opleidingsprogramma's en kennisborging na elk traject."]], aanpakTitle: "Onze aanpak", steps: ["Gratis intakegesprek (60 min)", "Analyse op maat", "Offerte na intakegesprek", "Na akkoord: betaling via Stripe", "Traject start · 30 & 90 dagen opvolging"], email: "consultancy@bierinckx.com", prijsNote: "Alle tarieven worden vastgelegd in een persoonlijke offerte na het intakegesprek. Geen verrassingen." },
    cro: { hero: "Groei zonder de kosten van een voltijdse CRO", heroSub: "Strategisch revenue leiderschap voor AI/SaaS scale-ups in BE · NL · DE.", what: "Wat is een Fractional CRO?", whatTxt: "Een Chief Revenue Officer op deeltijdse basis. Tarieven worden bepaald in overleg en vastgelegd in een offerte op maat.", fasesTitle: "Onze fasen", fases: [["Fase 1 — Audit & Opbouw", "Strategische audit · pipeline opbouw · eerste resultaten."], ["Fase 2+ — Schaling", "Team leadership · internationale groei · recurring revenue."]], targets: ["AI/SaaS bedrijven · 10–50 FTE", "Series A/B financiering", "Actief in BE · NL · DE · internationaal", "Klaar voor de volgende groeifase"], email: "sales@bierinckx.com", cta: "Strategiegesprek aanvragen", prijsNote: "Tarieven worden vastgelegd in een persoonlijke offerte na een eerste gesprek." },
    graf: { hero: "Onderdelen en consumables zonder gedoe", heroSub: "Drukkerijen, repro, verpakking en sign in BE · NL · LU — marktconforme prijzen, snelle levering, altijd het juiste onderdeel.", cta: "Vraag een prijsvergelijking aan", dienstenTitle: "Onze diensten", diensten: [["🖨️", "Consumables & onderdelen", "Toner, drums, inkt en wisselstukken voor de meest courante drukpersen en grootformaat printers. Marktconforme prijzen door directe inkoop bij groothandel."], ["📦", "Snelle levering Benelux", "Standaardbestellingen leveren wij binnen 24-48u in BE/NL/LU. Spoedbestellingen mogelijk in overleg."], ["🔧", "Compatibiliteitscheck vooraf", "Wij controleren machine- en typenummer vóór levering, zodat er nooit een verkeerd onderdeel wordt besteld."], ["💶", "Kostenbesparing zonder kwaliteitsverlies", "Vergelijkbare kwaliteit aan een lagere prijs dankzij schaalvoordeel bij inkoop — geen compromis op kritische onderdelen zoals drukwalsen."], ["📋", "Vaste contactpersoon", "Eén aanspreekpunt voor herbestellingen, geen callcenter."]], aanpakTitle: "Zo werkt het", steps: ["Stuur ons uw machinetype + huidige leverancier/prijs", "Prijsvergelijking op maat, meestal binnen 24u", "Eerste bestelling ter controle van kwaliteit en levertijd", "Vaste leveringsafspraken op maat van uw verbruik"], email: "sales@bierinckx.com", prijsNote: "Prijzen zijn marktconform en afhankelijk van volume — wij sturen altijd eerst een vergelijking met uw huidige leverancier, geen verplichtingen." }
  },
  fr: {
    nav: { home: "Accueil", shop: "Boutique", psy: "Psychologie", cons: "Consultance", cro: "Fractional CRO", graf: "Industrie Graphique", chat: "Service client" },
    hero: { tag: "Luxury Beauty · BE / NL / FR", h1b: "Luxury Beauty", h1c: "comme un rituel quotidien", sub: "Soins, parfums et maquillage soigneusement sélectionnés — pour toute la famille qui reconnaît la qualité", cta1: "Découvrir la collection", cta2: "En savoir plus" },
    cats: ["Soins", "Parfum", "Maquillage", "Maison & Bien-être", "Vêtements"],
    catDesc: ["Un rituel au quotidien", "Une signature, pas un simple parfum", "Raffiné, jamais trop", "Le luxe qui reste à la maison", "Pour toute la famille"],
    shopCats: {
      skincare: { tag: "AURA LUXE &middot; Soins", h1: "Soins", sub: "Le soin de la peau comme rituel quotidien, pas comme corv&eacute;e", badge: "Collection en cours", intro: "Notre s&eacute;lection de soins mise sur des produits qui agissent vraiment tout en offrant un moment de calme dans la journ&eacute;e. Pas de routine en vingt &eacute;tapes, mais un choix r&eacute;fl&eacute;chi de nettoyants, soins et protections &mdash; adapt&eacute;s aux besoins r&eacute;els de la peau. Chaque marque est s&eacute;lectionn&eacute;e pour ses ingr&eacute;dients actifs, son origine et ses r&eacute;sultats, pas seulement son emballage.", segTitle: "Ce que vous trouverez dans Soins", segSub: "Trois piliers, une seule philosophie&nbsp;: un soin qui fonctionne", segs: [["beauty", "Soins du visage", "Nettoyants, s&eacute;rums et cr&egrave;mes pour chaque type de peau &mdash; hydratation &agrave; anti-&acirc;ge."], ["rituals", "Rituels & Textures", "Des produits qui transforment le moment du soin en v&eacute;ritable exp&eacute;rience."], ["home", "Soins du corps & Bien-&ecirc;tre", "Des soins corporels au m&ecirc;me niveau d'exigence que ceux du visage."]], whyTitle: "Pourquoi choisir AURA LUXE Soins", why: [["&#10022;", "S&eacute;lection rigoureuse", "Chaque produit est &eacute;valu&eacute; sur ses ingr&eacute;dients, son efficacit&eacute; et son origine avant d'int&eacute;grer la collection."], ["&#128230;", "Aucun copier-coller", "Descriptions et visuels propres &mdash; jamais repris tels quels du fournisseur."], ["&#9989;", "D&eacute;lai de livraison transparent", "Clart&eacute; sur la livraison avant le paiement, sans surprise."], ["&#128274;", "S&eacute;curis&eacute; & fiable", "Paiement s&eacute;curis&eacute; via Stripe, retour gratuit sous 14 jours."]] },
      parfum: { tag: "AURA LUXE &middot; Parfum", h1: "Parfum", sub: "Une signature, pas un parfum qui s'&eacute;vapore d&egrave;s demain", badge: "Collection en cours", intro: "Le parfum est l'&eacute;l&eacute;ment le plus personnel d'une routine de soin &mdash; il reste apr&egrave;s que vous ayez quitt&eacute; la pi&egrave;ce. Notre s&eacute;lection privil&eacute;gie les parfums de caract&egrave;re&nbsp;: des classiques intemporels aux compositions de niche qui se remarquent sans envahir. Pas de rayonnages sans fin, mais un choix cur&eacute; qui fait la diff&eacute;rence.", segTitle: "Ce que vous trouverez dans Parfum", segSub: "Un parfum pour chaque moment", segs: [["parfum", "Eau de Parfum Signature", "Des compositions puissantes et tenaces pour celles qui veulent un parfum reconnaissable."], ["rituals", "Rituels olfactifs & Brumes", "Des textures l&eacute;g&egrave;res pour se rafra&icirc;chir tout au long de la journ&eacute;e."], ["beauty", "Coffrets & Miniatures", "Id&eacute;al pour d&eacute;couvrir un nouveau parfum ou pour offrir."]], whyTitle: "Pourquoi choisir AURA LUXE Parfum", why: [["&#10022;", "Le caract&egrave;re avant la tendance", "Nous choisissons des parfums qui durent, pas seulement ce qui est populaire aujourd'hui."], ["&#128230;", "Informations authentiques", "Famille olfactive, tenue et usage clairement d&eacute;crits &mdash; pas de langage marketing vague."], ["&#9989;", "D&eacute;lai de livraison transparent", "D&eacute;lai toujours visible avant le paiement."], ["&#128274;", "S&eacute;curis&eacute; & fiable", "Paiement s&eacute;curis&eacute; via Stripe, retour sous 14 jours."]] },
      makeup: { tag: "AURA LUXE &middot; Maquillage", h1: "Maquillage", sub: "Raffin&eacute;, jamais trop &mdash; un maquillage qui respecte la peau", badge: "Collection en cours", intro: "Un maquillage r&eacute;ussi commence par une bonne formule. Notre s&eacute;lection combine couvrance et pigmentation avec des ingr&eacute;dients respectueux de la peau, pour un r&eacute;sultat aussi beau que confortable. D'un look de jour naturel &agrave; un look de soir&eacute;e affirm&eacute; &mdash; toujours avec des produits qui tiennent leurs promesses.", segTitle: "Ce que vous trouverez dans Maquillage", segSub: "De la base &agrave; la touche finale", segs: [["makeup", "Teint & Base", "Fond de teint, correcteur et poudre pour un teint uniforme et respirant."], ["beauty", "Yeux & L&egrave;vres", "Une couleur qui tient, du plus subtil au plus affirm&eacute;."], ["rituals", "Outils & Accessoires", "Pinceaux, &eacute;ponges et accessoires pour un r&eacute;sultat professionnel &agrave; la maison."]], whyTitle: "Pourquoi choisir AURA LUXE Maquillage", why: [["&#10022;", "Qualit&eacute; avant quantit&eacute;", "Une s&eacute;lection cibl&eacute;e plut&ocirc;t qu'une offre infinie qui complique le choix."], ["&#128230;", "Visuels propres", "Chaque swatch et photo produit dans notre propre charte &mdash; jamais des images fournisseur."], ["&#9989;", "D&eacute;lai de livraison transparent", "Livraison toujours visible avant le paiement."], ["&#128274;", "S&eacute;curis&eacute; & fiable", "Paiement s&eacute;curis&eacute; via Stripe, retour sous 14 jours."]] },
      home: { tag: "AURA LUXE &middot; Maison & Bien-&ecirc;tre", h1: "Maison & Bien-&ecirc;tre", sub: "Le luxe qui reste &agrave; la maison, m&ecirc;me apr&egrave;s la porte referm&eacute;e", badge: "Collection en cours", intro: "Le bien-&ecirc;tre ne s'arr&ecirc;te pas au miroir de la salle de bain. Notre s&eacute;lection Maison & Bien-&ecirc;tre apporte le m&ecirc;me raffinement dans le reste de la maison &mdash; bougies parfum&eacute;es, essentiels de bain et petits rituels qui rendent une soir&eacute;e ordinaire un peu plus sp&eacute;ciale. S&eacute;lectionn&eacute; pour la qualit&eacute;, le parfum et la finition.", segTitle: "Ce que vous trouverez dans Maison & Bien-&ecirc;tre", segSub: "Calme et raffinement pour la maison", segs: [["home", "Bougies & Diffuseurs", "Des parfums signature pour la maison, durables et subtils."], ["rituals", "Rituels de bain & douche", "Des essentiels apaisants pour un moment de d&eacute;tente."], ["beauty", "Petits accents de luxe", "Des d&eacute;tails qui rendent un int&eacute;rieur un peu plus raffin&eacute;."]], whyTitle: "Pourquoi choisir AURA LUXE Maison & Bien-&ecirc;tre", why: [["&#10022;", "S&eacute;lectionn&eacute; pour le parfum & la finition", "Uniquement des produits qui font vraiment la diff&eacute;rence &agrave; la maison."], ["&#128230;", "Aucun copier-coller", "Descriptions propres, jamais des textes fournisseur repris tels quels."], ["&#9989;", "D&eacute;lai de livraison transparent", "Livraison clairement visible avant le paiement."], ["&#128274;", "S&eacute;curis&eacute; & fiable", "Paiement s&eacute;curis&eacute; via Stripe, retour sous 14 jours."]] },
      kleding: { tag: "AURA LUXE &middot; V&ecirc;tements", h1: "V&ecirc;tements pour toute la famille", sub: "Des premi&egrave;res grenouill&egrave;res &agrave; l'&eacute;l&eacute;gance intemporelle &mdash; de 0 &agrave; 65 ans et plus", badge: "Collection en cours", intro: "Les v&ecirc;tements sont la toute derni&egrave;re extension d'AURA LUXE&nbsp;: des pi&egrave;ces premium et soign&eacute;es pour toute la famille, du b&eacute;b&eacute; au senior. La m&ecirc;me exigence de qualit&eacute; que nos collections beaut&eacute; &mdash; marques s&eacute;lectionn&eacute;es avec soin, mati&egrave;res honn&ecirc;tes et coupe juste &mdash; d&eacute;sormais aussi pour ce que vous portez, pas seulement pour ce que vous appliquez sur la peau.", segTitle: "V&ecirc;tements par tranche d'&acirc;ge", segSub: "Cinq segments d'&acirc;ge, toujours le m&ecirc;me soin", segs: [["baby", "B&eacute;b&eacute; & Bambin (0&ndash;4 ans)", "Des mati&egrave;res douces et respectueuses de la peau pour les tout-petits.", "Body en coton doux"], ["kids", "Enfants (4&ndash;10 ans)", "Des v&ecirc;tements ludiques et pratiques qui r&eacute;sistent &agrave; une journ&eacute;e active.", "T-shirt ludique imprim&eacute;"], ["teens", "Adolescents (10&ndash;19 ans)", "Des styles actuels qui donnent confiance aux jeunes.", "Hoodie oversize"], ["adults", "Adultes (20&ndash;65 ans)", "Des basiques intemporels et des pi&egrave;ces fortes pour toute occasion.", "Manteau intemporel en laine"], ["seniors", "Seniors (65 ans et plus)", "Une &eacute;l&eacute;gance confortable, avec une attention particuli&egrave;re &agrave; la coupe.", "Blouse en lin confortable"]], whyTitle: "Pourquoi choisir AURA LUXE V&ecirc;tements", why: [["&#10022;", "Une seule exigence de qualit&eacute;", "Le m&ecirc;me soin que nos collections beaut&eacute;, d&eacute;sormais appliqu&eacute; aux v&ecirc;tements."], ["&#128230;", "Visuels propres par segment", "Chaque tranche d'&acirc;ge re&ccedil;oit des visuels pertinents, jamais des photos g&eacute;n&eacute;riques."], ["&#9989;", "D&eacute;lai de livraison transparent", "Livraison toujours visible avant le paiement, pour chaque segment."], ["&#128274;", "S&eacute;curis&eacute; & fiable", "Paiement s&eacute;curis&eacute; via Stripe, retour sous 14 jours."]] }
    },
    trust: ["Retour gratuit 14 jours", "Paiement sécurisé Stripe", "Livraison BE · NL · FR", "Service client 7/7 · 24h"],
    more: "En savoir plus →",
    brands: "Nos marques",
    brandsSub: "Partenaires premium sélectionnés",
    services: "Revenue Agency",
    chatWelcome: "Bienvenue chez AURA LUXE! Je suis votre assistant personnel, disponible 24h/24 et 7j/7. Comment puis-je vous aider?",
    chatPlaceholder: "Posez votre question...",
    chatSend: "Envoyer",
    chatTitle: "👑 AURA LUXE — Service Client 24/7",
    chatSubtitle: "Toujours disponible · Votre langue · Aide spécialisée",
    psy: { hero: "Votre bien-être est notre priorité", heroSub: "Accompagnement en ligne via chat sécurisé. Entièrement confidentiel et professionnel.", book: "Réserver et payer", chatTitle: "Chat après paiement", chatInfo: "Après paiement, vous recevrez immédiatement accès au chat sécurisé.", howTitle: "Comment ça marche?", steps: ["Choisissez la durée et payez via Stripe", "Après confirmation: accès direct au chat", "Chat avec votre psychologue à l'heure convenue", "Entièrement confidentiel · RGPD"], sessions: [["30 minutes", "Premier contact ou suivi court"], ["60 minutes", "Séance standard"], ["90 minutes", "Séance approfondie"]], s: [["🧠", "Thérapie individuelle", "Accompagnement pour le stress, l'anxiété, le burn-out."], ["👨‍👩‍👧", "Thérapie familiale", "Soutien pour les familles, couples et parents."], ["🧒", "Psychologie jeunesse", "Accompagnement pour enfants et jeunes (6–25 ans)."], ["💼", "Psychologie d'entreprise", "Prévention burn-out et coaching."], ["🌱", "Life Coaching", "Croissance personnelle et sens de la vie."], ["🧩", "Traumatisme", "EMDR · PTSD · trauma complexe."]], email: "psy@bierinckx.com", privacy: "🔒 Entièrement confidentiel · RGPD · Chiffrement" },
    cons: { hero: "Optimisez votre organisation", heroSub: "Accompagnement orienté résultats pour les PME. Prix toujours sur devis.", cta: "Planifier un entretien", dienstenTitle: "Nos services", diensten: [["🔍", "Analyse des processus", "Diagnostic complet, cartographie et conception to-be."], ["👥", "Entretiens d'évaluation", "Préparation, animation et suivi. Évaluations 360°."], ["🎯", "Optimisation des fonctions", "Analyse RACI et optimisation des organigrammes."], ["🤖", "Adoption IA", "Assessment, sélection LLM et implémentation."], ["📈", "Lean Six Sigma", "DMAIC, Kaizen et amélioration continue."], ["🎓", "Formation", "Programmes et capitalisation des connaissances."]], aanpakTitle: "Notre approche", steps: ["Entretien gratuit (60 min)", "Analyse personnalisée", "Devis après l'entretien", "Paiement Stripe", "Suivi 30 & 90 jours"], email: "consultancy@bierinckx.com", prijsNote: "Tarifs fixés dans un devis personnalisé. Aucune surprise." },
    cro: { hero: "Croissance sans le coût d'un CRO à temps plein", heroSub: "Leadership revenue pour scale-ups AI/SaaS en BE · NL · DE.", what: "Qu'est-ce qu'un Fractional CRO?", whatTxt: "Un CRO à temps partiel. Tarifs sur devis après un premier entretien.", fasesTitle: "Nos phases", fases: [["Phase 1 — Audit", "Audit · pipeline · premiers résultats."], ["Phase 2+ — Scaling", "Leadership · croissance internationale."]], targets: ["AI/SaaS · 10–50 ETP", "Series A/B", "BE · NL · DE · international", "Prêt à croître"], email: "sales@bierinckx.com", cta: "Demander un entretien", prijsNote: "Tarifs sur devis après un premier entretien." },
    graf: { hero: "Pièces et consommables sans tracas", heroSub: "Imprimeries, repro, emballage et signalétique en BE · NL · LU — prix compétitifs, livraison rapide, toujours la bonne pièce.", cta: "Demander une comparaison de prix", dienstenTitle: "Nos services", diensten: [["🖨️", "Consommables & pièces", "Toner, tambours, encre et pièces de rechange pour les presses et imprimantes grand format les plus courantes."], ["📦", "Livraison rapide Benelux", "Commandes standards livrées sous 24-48h en BE/NL/LU."], ["🔧", "Vérification de compatibilité", "Nous vérifions le type de machine avant la livraison."], ["💶", "Réduction des coûts sans compromis", "Qualité comparable à prix inférieur grâce aux économies d'échelle."], ["📋", "Interlocuteur unique", "Un seul point de contact pour vos commandes récurrentes."]], aanpakTitle: "Comment ça marche", steps: ["Envoyez votre type de machine + fournisseur actuel", "Comparaison de prix sous 24h", "Première commande test", "Accords de livraison sur mesure"], email: "sales@bierinckx.com", prijsNote: "Prix compétitifs selon volume — nous envoyons toujours d'abord une comparaison, sans engagement." }
  },
  en: {
    nav: { home: "Home", shop: "Shop", psy: "Psychology", cons: "Consultancy", cro: "Fractional CRO", graf: "Graphics Industry", chat: "Customer Service" },
    hero: { tag: "Luxury Beauty · BE / NL / FR", h1b: "Luxury Beauty", h1c: "that feels like a ritual", sub: "Carefully curated skincare, fragrance and make-up — for the whole family that values quality", cta1: "Discover the collection", cta2: "Learn more" },
    cats: ["Skincare", "Fragrance", "Make-up", "Home & Wellness", "Clothing"],
    catDesc: ["A ritual for every day", "A signature, not just a scent", "Refined, never too much", "Luxury that stays home", "For the whole family"],
    shopCats: {
      skincare: { tag: "AURA LUXE &middot; Skincare", h1: "Skincare", sub: "Skincare as a daily ritual, not a chore", badge: "Collection coming soon", intro: "Our skincare selection is built around products that actually work while bringing a moment of calm to the day. No twenty-step routines &mdash; just a considered edit of cleansers, treatments and protection, matched to what skin genuinely needs. Every brand is chosen for active ingredients, provenance and results, not packaging alone.", segTitle: "What you'll find in Skincare", segSub: "Three pillars, one philosophy: care that works", segs: [["beauty", "Face Care", "Cleansers, serums and creams for every skin type &mdash; from hydration to anti-ageing."], ["rituals", "Rituals & Textures", "Products that turn the skincare moment into an experience."], ["home", "Bodycare & Wellness", "Body care held to the same standard as the face."]], whyTitle: "Why AURA LUXE Skincare", why: [["&#10022;", "Carefully curated", "Every product is judged on ingredients, efficacy and origin before it joins the collection."], ["&#128230;", "No copy-paste catalogue", "Original descriptions and imagery &mdash; never lifted from the supplier."], ["&#9989;", "Transparent delivery", "Delivery clarity shown before checkout, no surprises."], ["&#128274;", "Safe & trusted", "Secure checkout via Stripe, free returns within 14 days."]] },
      parfum: { tag: "AURA LUXE &middot; Fragrance", h1: "Fragrance", sub: "A signature, not a scent that fades by tomorrow", badge: "Collection coming soon", intro: "Fragrance is the most personal part of any routine &mdash; it lingers after you've left the room. Our selection focuses on scents with character: from timeless classics to niche compositions that stand out without overwhelming. No endless tester walls, just a curated edit that makes the difference.", segTitle: "What you'll find in Fragrance", segSub: "A scent for every moment", segs: [["parfum", "Signature Eau de Parfum", "Powerful, long-lasting compositions for those who want a recognisable scent."], ["rituals", "Scent Rituals & Body Mist", "Lighter textures to refresh throughout the day without overdoing it."], ["beauty", "Discovery Sets & Miniatures", "Ideal for discovering a new scent or gifting."]], whyTitle: "Why AURA LUXE Fragrance", why: [["&#10022;", "Character over trend", "We choose scents that keep making sense, not just what's popular today."], ["&#128230;", "Authentic product information", "Scent family, longevity and use clearly described &mdash; no vague marketing language."], ["&#9989;", "Transparent delivery", "Delivery time always visible before checkout."], ["&#128274;", "Safe & trusted", "Secure checkout via Stripe, returns within 14 days."]] },
      makeup: { tag: "AURA LUXE &middot; Make-up", h1: "Make-up", sub: "Refined, never too much &mdash; make-up that respects the skin", badge: "Collection coming soon", intro: "Make-up that looks good starts with a good formula. Our selection combines coverage and pigmentation with skin-friendly ingredients, so the result looks beautiful and feels comfortable. From a natural daytime look to a bold evening look &mdash; always with products that deliver on their promise.", segTitle: "What you'll find in Make-up", segSub: "From base to finishing touch", segs: [["makeup", "Complexion & Base", "Foundation, concealer and powder for an even, breathable finish."], ["beauty", "Eyes & Lips", "Colour that lasts, from subtle to bold."], ["rituals", "Tools & Accessories", "Brushes, sponges and accessories for a professional result at home."]], whyTitle: "Why AURA LUXE Make-up", why: [["&#10022;", "Quality over quantity", "A focused selection instead of an endless range that makes choosing harder."], ["&#128230;", "Original imagery", "Every swatch and product photo in our own house style &mdash; never supplier images."], ["&#9989;", "Transparent delivery", "Delivery always shown before checkout."], ["&#128274;", "Safe & trusted", "Secure checkout via Stripe, returns within 14 days."]] },
      home: { tag: "AURA LUXE &middot; Home & Wellness", h1: "Home & Wellness", sub: "Luxury that stays home, even after the door closes", badge: "Collection coming soon", intro: "Wellbeing doesn't stop at the bathroom mirror. Our Home & Wellness selection brings the same refinement to the rest of the house &mdash; scented candles, bath and shower essentials, and small rituals that make an ordinary evening a little more special. Selected for quality, scent and finish.", segTitle: "What you'll find in Home & Wellness", segSub: "Calm and refinement for the home", segs: [["home", "Candles & Diffusers", "Signature home scents, long-lasting and subtle."], ["rituals", "Bath & Shower Rituals", "Nurturing essentials for a moment of relaxation."], ["beauty", "Small Luxury Accents", "Details that make an interior that little bit more refined."]], whyTitle: "Why AURA LUXE Home & Wellness", why: [["&#10022;", "Selected for scent & finish", "Only products that genuinely change the experience at home."], ["&#128230;", "No copy-paste catalogue", "Original descriptions, never supplier text copied verbatim."], ["&#9989;", "Transparent delivery", "Delivery clearly shown before checkout."], ["&#128274;", "Safe & trusted", "Secure checkout via Stripe, returns within 14 days."]] },
      kleding: { tag: "AURA LUXE &middot; Clothing", h1: "Clothing for the whole family", sub: "From first onesies to timeless elegance &mdash; ages 0 to 65+", badge: "Collection coming soon", intro: "Clothing is AURA LUXE's newest expansion: premium, carefully made clothing for the whole family, from babies to seniors. The same quality standard as our beauty collections &mdash; carefully selected brands, honest materials and a fit that's right &mdash; now applied to what you wear, not just what you put on your skin.", segTitle: "Clothing by life stage", segSub: "Five age segments, the same care every time", segs: [["baby", "Baby & Toddler (0&ndash;4 years)", "Soft, skin-friendly fabrics for the very youngest.", "Soft cotton onesie"], ["kids", "Kids (4&ndash;10 years)", "Playful, practical clothing that survives an active day.", "Playful printed t-shirt"], ["teens", "Teens (10&ndash;19 years)", "Contemporary styles that help young people feel confident.", "Oversized hoodie"], ["adults", "Adults (20&ndash;65 years)", "Timeless basics and statement pieces for every occasion.", "Timeless wool coat"], ["seniors", "Seniors (65+ years)", "Comfortable elegance with attention to fit and wearability.", "Comfortable linen blouse"]], whyTitle: "Why AURA LUXE Clothing", why: [["&#10022;", "One quality standard", "The same care as our beauty collections, now applied to clothing."], ["&#128230;", "Original imagery per segment", "Every age group gets on-topic imagery, never generic stock photos."], ["&#9989;", "Transparent delivery", "Delivery always shown before checkout, for every segment."], ["&#128274;", "Safe & trusted", "Secure checkout via Stripe, returns within 14 days."]] }
    },
    trust: ["Free returns within 14 days", "Secure payment via Stripe", "Delivery in BE · NL · FR", "Customer service 7/7 · 24h"],
    more: "Learn more →",
    brands: "Our brands",
    brandsSub: "Selected premium partners",
    services: "Revenue Agency",
    chatWelcome: "Welcome to AURA LUXE! I am your personal assistant, available 24 hours a day, 7 days a week. How can I help you?",
    chatPlaceholder: "Ask your question...",
    chatSend: "Send",
    chatTitle: "👑 AURA LUXE — Customer Service 24/7",
    chatSubtitle: "Always available · Your language · Specialist support",
    psy: { hero: "Your wellbeing is our priority", heroSub: "Online support via secure chat. Fully confidential and professional.", book: "Book & pay your session", chatTitle: "Chat after payment", chatInfo: "After payment you receive immediate access to the secure chat.", howTitle: "How does it work?", steps: ["Choose duration and pay via Stripe", "After confirmation: direct chat access", "Chat with your psychologist", "Fully confidential · GDPR"], sessions: [["30 minutes", "Introduction or short follow-up"], ["60 minutes", "Standard session"], ["90 minutes", "In-depth session"]], s: [["🧠", "Individual therapy", "Guidance for stress, anxiety and burnout."], ["👨‍👩‍👧", "Family therapy", "Support for families and couples."], ["🧒", "Youth psychology", "Specialist guidance (6–25 years)."], ["💼", "Corporate psychology", "Burnout prevention and coaching."], ["🌱", "Life Coaching", "Personal growth and meaning."], ["🧩", "Trauma", "EMDR · PTSD · complex trauma."]], email: "psy@bierinckx.com", privacy: "🔒 Fully confidential · GDPR · End-to-end encrypted" },
    cons: { hero: "Optimise your organisation", heroSub: "Results-driven guidance for SMEs. Pricing always tailored via a personal quote.", cta: "Schedule a consultation", dienstenTitle: "Our services", diensten: [["🔍", "Process analysis", "Full audit, as-is mapping and to-be design."], ["👥", "Performance reviews", "Professional preparation and 360° evaluations."], ["🎯", "Role optimisation", "RACI matrices and organisational design."], ["🤖", "AI adoption", "Assessment, LLM selection and implementation."], ["📈", "Lean Six Sigma", "DMAIC, Kaizen and continuous improvement."], ["🎓", "Training", "Programmes and knowledge retention."]], aanpakTitle: "Our approach", steps: ["Free intake (60 min)", "Tailored analysis", "Quote after intake", "Payment via Stripe", "Follow-up 30 & 90 days"], email: "consultancy@bierinckx.com", prijsNote: "All rates are set in a personalised quote. No surprises." },
    cro: { hero: "Growth without the cost of a full-time CRO", heroSub: "Strategic revenue leadership for AI/SaaS scale-ups in BE · NL · DE.", what: "What is a Fractional CRO?", whatTxt: "A part-time CRO. Top expertise at a fraction of the cost. Rates on request.", fasesTitle: "Our phases", fases: [["Phase 1 — Audit", "Strategic audit · pipeline · first results."], ["Phase 2+ — Scaling", "Team leadership · international growth."]], targets: ["AI/SaaS · 10–50 FTE", "Series A/B funding", "BE · NL · DE · internationally", "Ready for next growth phase"], email: "sales@bierinckx.com", cta: "Request a strategy call", prijsNote: "Rates set in a personalised quote after an initial call." },
    graf: { hero: "Parts and consumables without the hassle", heroSub: "Printing houses, repro, packaging and signage in BE · NL · LU — market-rate pricing, fast delivery, always the right part.", cta: "Request a price comparison", dienstenTitle: "Our services", diensten: [["🖨️", "Consumables & parts", "Toner, drums, ink and spare parts for the most common printing presses and large-format printers."], ["📦", "Fast Benelux delivery", "Standard orders delivered within 24-48h in BE/NL/LU."], ["🔧", "Compatibility check first", "We verify the machine model before delivery — never the wrong part."], ["💶", "Cost savings without quality loss", "Comparable quality at a lower price through bulk-buying scale."], ["📋", "Single point of contact", "One contact person for repeat orders, no call centre."]], aanpakTitle: "How it works", steps: ["Send us your machine type + current supplier/price", "Tailored price comparison, usually within 24h", "First trial order to verify quality and lead time", "Fixed delivery agreements tailored to your usage"], email: "sales@bierinckx.com", prijsNote: "Prices are market-rate and volume-dependent — we always send a comparison with your current supplier first, no obligation." }
  }
};
var PHOTOS = {
  hero: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=90&fit=crop",
  baby: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=85&fit=crop",
  kids: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=85&fit=crop",
  teens: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=85&fit=crop",
  adults: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=85&fit=crop",
  seniors: "https://images.unsplash.com/photo-1772419578685-f918fb5b814b?w=600&q=85&fit=crop",
  home: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=85&fit=crop",
  beauty: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=85&fit=crop",
  parfum: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=85&fit=crop",
  makeup: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=85&fit=crop",
  rituals: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=85&fit=crop",
  fashion: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=85&fit=crop",
  lookfantastic: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=85&fit=crop"
};
var CAT_ICONS = [
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="20" r="10" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M14 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/><circle cx="22" cy="18" r="1.5" fill="#8B1A2B"/><circle cx="30" cy="18" r="1.5" fill="#8B1A2B"/><path d="M22 24c1 1.5 3 1.5 4 0" stroke="#8B1A2B" stroke-width="1.2" stroke-linecap="round"/><circle cx="34" cy="8" r="3" fill="#F5F3EE" stroke="#C9A96E" stroke-width="1.2"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="16" r="8" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M18 36v-6c0-3.314 3.582-6 8-6s8 2.686 8 6v6" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/><path d="M18 32l-4 6M34 32l4 6" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="15" r="9" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M17 38v-8a9 9 0 0118 0v8" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/><path d="M17 8c4-4 10-2 12 0" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="14" r="9" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M12 42c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/><path d="M23 18c1.2 1.5 3.6 1.5 4.8 0" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="14" r="9" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M14 42c0-7 5.373-12 12-12s12 5 12 12" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><path d="M8 26L26 10l18 16" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 22v18h24V22" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="21" y="30" width="10" height="10" rx="1" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.2"/></svg>`
];
var CAT_KEYS = ["skincare", "parfum", "makeup", "home", "kleding"];
var CAT_PHOTO_KEYS = ["beauty", "parfum", "makeup", "home", "fashion"];
var CAT_SLUGS = {
  nl: ["skincare", "parfum", "make-up", "home-wellness", "kleding"],
  fr: ["soins", "parfum", "maquillage", "maison-bien-etre", "vetements"],
  en: ["skincare", "fragrance", "make-up", "home-wellness", "clothing"]
};
var CAT_SLUG_TO_KEY = { nl: {}, fr: {}, en: {} };
["nl", "fr", "en"].forEach((l) => CAT_SLUGS[l].forEach((slug, i) => CAT_SLUG_TO_KEY[l][slug] = CAT_KEYS[i]));
var FAVICON_SVG = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">&#128081;</text></svg>')}`;
var CSS = `
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
.ti::before{content:'✓';color:var(--go)}
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
.ph-g{background:linear-gradient(135deg,#2a2a1a 0%,#4a4a2d 50%,#2a2a1a 100%)}
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
.tl li::before{content:'→';color:var(--bu);font-weight:700}
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
.seg-block{border:1px solid var(--lt);margin-bottom:1.75rem;background:var(--cr)}
.seg-head{display:flex;gap:1.25rem;padding:1.5rem;align-items:center;flex-wrap:wrap;border-bottom:1px solid var(--lt)}
.seg-img{width:100px;height:100px;object-fit:cover;border-radius:2px;flex-shrink:0}
.seg-info{flex:1;min-width:200px}
.seg-name{font-family:'Playfair Display',Georgia,serif;font-size:1.1rem;margin-bottom:.35rem}
.seg-desc{font-size:.84rem;color:var(--gr);line-height:1.6;max-width:480px}
.prod-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:1px;background:var(--lt)}
.prod-card{background:var(--cr);padding:1rem;position:relative}
.prod-badge{position:absolute;top:.6rem;left:.6rem;background:var(--go);color:#fff;font-size:.58rem;letter-spacing:.08em;text-transform:uppercase;padding:.22rem .5rem;border-radius:1px;z-index:1}
.prod-img{width:100%;height:120px;object-fit:cover;margin-bottom:.6rem;border-radius:1px}
.prod-name{font-size:.8rem;margin-bottom:.3rem;line-height:1.4}
.prod-price{font-size:.78rem;color:var(--gr);margin-bottom:.7rem}
.prod-btn{width:100%;padding:.55rem;font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;border:1px solid var(--lt);background:var(--iv);color:var(--gr);cursor:not-allowed}
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
var CHAT_JS = /* @__PURE__ */ ((lang, welcome, placeholder, send, title2, subtitle) => `
<script>
(function(){
  const LANG = '${lang}';
  const WELCOME = ${JSON.stringify(welcome)};
  const SYSTEM_PROMPT = [
    'You are a specialized luxury lifestyle customer service agent for AURA LUXE by Bierinckx Revenue Agency.',
    'You speak the language of the user automatically (NL/FR/EN).',
    'AURA LUXE is a mid-to-high end luxury beauty & lifestyle webshop for the whole family, in BE/NL/FR.',
    'Categories: Skincare, Fragrance (Parfum), Make-up, Home & Wellness, and Clothing (Kleding) for the whole family, ages 0-80.',
    'Affiliate partners: Lookfantastic, Parfumdreams, Boozt, Douglas, Rituals. Never disclose partner fees, percentages, or arrangements to customers.',
    'Returns: 14 days. Delivery: BE, NL, FR. Payment: Stripe (Card, iDEAL, Bancontact, SEPA).',
    'Other services: Psychology sessions via psy@bierinckx.com, Consultancy via consultancy@bierinckx.com, Fractional CRO via sales@bierinckx.com, Graphics industry parts & consumables via sales@bierinckx.com.',
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
      const reply = data.reply || (LANG === 'nl' ? 'Excuses, er is een technisch probleem. Contacteer ons via auraluxe@bierinckx.com' : LANG === 'fr' ? 'Désolé, erreur technique. Contactez-nous via auraluxe@bierinckx.com' : 'Sorry, technical error. Contact us at auraluxe@bierinckx.com');
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
function go(lang,page){const map={'':'',shop:'shop',psy:'psychologie',cons:'consultancy',cro:'cro',graf:'grafische-nijverheid',chat:'klantenservice','shop-skincare':'skincare','shop-parfum':'parfum','shop-makeup':'make-up','shop-home':'home-wellness','shop-kleding':'kleding'};const frMap={psy:'psychologie',cons:'consultance',cro:'cro',graf:'industrie-graphique',chat:'service-client','shop-skincare':'soins','shop-parfum':'parfum','shop-makeup':'maquillage','shop-home':'maison-bien-etre','shop-kleding':'vetements'};const enMap={psy:'psychology',cons:'consultancy',cro:'cro',graf:'graphics-industry',chat:'customer-service','shop-skincare':'skincare','shop-parfum':'fragrance','shop-makeup':'make-up','shop-home':'home-wellness','shop-kleding':'clothing'};let slug=map[page]||page;if(lang==='fr'&&frMap[page])slug=frMap[page];if(lang==='en'&&enMap[page])slug=enMap[page];window.location.href='/'+lang+(slug?'/'+slug:'');}
function setLang(lang,cur){go(lang,cur);}
function sendChat(){const inp=document.getElementById('chat-inp');if(!inp||!inp.value.trim())return;const msgs=document.getElementById('chat-msgs');const u=document.createElement('div');u.className='msg msg-user';u.textContent=inp.value;msgs.appendChild(u);inp.value='';msgs.scrollTop=msgs.scrollHeight;setTimeout(()=>{const b=document.createElement('div');b.className='msg msg-bot';b.textContent='Uw bericht is ontvangen. Uw psycholoog reageert zo snel mogelijk.';msgs.appendChild(b);msgs.scrollTop=msgs.scrollHeight;},800);}
document.addEventListener('keydown',function(e){const i=document.getElementById('chat-inp');if(i&&e.key==='Enter'&&document.activeElement===i)sendChat();});
<\/script>`);
var CHAT_WIDGET = /* @__PURE__ */ ((t, lang) => `
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
</div>`);
function nav(t, lang, cur) {
  return `<nav>
<a class="logo" href="/${lang}">&#128081; AURA <span>LUXE</span></a>
<div class="nl">
  <a onclick="go('${lang}','')" class="${cur === "" ? "ac" : ""}">` + t.nav.home + `</a>
  <a onclick="go('${lang}','shop')" class="${cur === "shop" ? "ac" : ""}">` + t.nav.shop + `</a>
  <a onclick="go('${lang}','psy')" class="${cur === "psy" ? "ac" : ""}">` + t.nav.psy + `</a>
  <a onclick="go('${lang}','cons')" class="${cur === "cons" ? "ac" : ""}">` + t.nav.cons + `</a>
  <a onclick="go('${lang}','cro')" class="${cur === "cro" ? "ac" : ""}">` + t.nav.cro + `</a>
  <a onclick="go('${lang}','graf')" class="${cur === "graf" ? "ac" : ""}">` + t.nav.graf + `</a>
  <div class="ls">
    <button class="lb ${lang === "nl" ? "ac" : ""}" onclick="setLang('nl','${cur}')">NL</button>
    <button class="lb ${lang === "fr" ? "ac" : ""}" onclick="setLang('fr','${cur}')">FR</button>
    <button class="lb ${lang === "en" ? "ac" : ""}" onclick="setLang('en','${cur}')">EN</button>
  </div>
</div>
</nav>`;
}
function foot(t, lang) {
  const footTxt = lang === "nl" ? "Mid-to-high end Luxury Beauty &middot; Skincare &middot; Parfum &middot; Make-up &middot; BE / NL / FR" : lang === "fr" ? "Luxury Beauty haut de gamme &middot; Soins &middot; Parfum &middot; Maquillage &middot; BE / NL / FR" : "Mid-to-high end Luxury Beauty &middot; Skincare &middot; Fragrance &middot; Make-up &middot; BE / NL / FR";
  const svcLabel = lang === "nl" ? "Diensten" : "Services";
  return `<footer>
<div class="fg">
  <div class="fb"><div class="fl">&#128081; AURA <span>LUXE</span></div><p>${footTxt}</p></div>
  <div class="fc"><h4>Shop</h4>${t.cats.map((c, i) => `<a onclick="go('${lang}','shop-${CAT_KEYS[i]}')">${c}</a>`).join("")}</div>
  <div class="fc"><h4>${svcLabel}</h4><a onclick="go('${lang}','psy')">${t.nav.psy}</a><a onclick="go('${lang}','cons')">${t.nav.cons}</a><a onclick="go('${lang}','cro')">${t.nav.cro}</a><a onclick="go('${lang}','graf')">${t.nav.graf}</a></div>
  <div class="fc"><h4>Contact</h4><a href="mailto:auraluxe@bierinckx.com">auraluxe@bierinckx.com</a><a href="mailto:psy@bierinckx.com">psy@bierinckx.com</a><a href="mailto:consultancy@bierinckx.com">consultancy@bierinckx.com</a><a href="mailto:sales@bierinckx.com">sales@bierinckx.com</a></div>
</div>
<div class="fb2"><span>&copy; 2026 Bierinckx Revenue Agency &mdash; Kessel, Belgi&euml;</span></div>
</footer>`;
}
function page(title2, desc, lang, body, cur = "") {
  const hl = ["nl", "fr", "en"].map((l) => `<link rel="alternate" hreflang="${l}" href="https://bierinckx.com/${l}">`).join("");
  const t = T[lang];
  return `<!DOCTYPE html><html lang="${lang}"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="${desc}">
<meta property="og:title" content="${title2}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${PHOTOS.beauty}">
<meta name="robots" content="index,follow">
${hl}
<link rel="icon" href="${FAVICON_SVG}" type="image/svg+xml">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
<title>${title2}</title>
<style>${CSS}</style>
</head><body>
${body}
${CHAT_WIDGET(t, lang)}
${CHAT_JS(lang, t.chatWelcome, t.chatPlaceholder, t.chatSend, t.chatTitle, t.chatSubtitle)}
</body></html>`;
}
function buildHome(t, lang) {
  const photoKeys = CAT_PHOTO_KEYS;
  const cats = t.cats.map((name, i) => `
    <div class="cc" onclick="go('${lang}','shop-${CAT_KEYS[i]}')">
      <img class="cc-img" src="${PHOTOS[photoKeys[i]]}" alt="${name}" loading="lazy">
      <div class="cc-body"><div class="ci">${CAT_ICONS[i]}</div><div class="cn">${name}</div><div class="cd">${t.catDesc[i]}</div></div>
    </div>`).join("");
  const trust = t.trust.map((x) => `<div class="ti">${x}</div>`).join("");
  const svcs = [
    ["🧠", t.nav.psy, lang === "nl" ? "Online begeleiding via beveiligde chat na betaling." : lang === "fr" ? "Accompagnement via chat sécurisé après paiement." : "Online guidance via secure chat after payment.", "psy"],
    ["🎯", t.nav.cons, lang === "nl" ? "Procesoptimalisatie, functioneringsgesprekken en functie-analyse." : lang === "fr" ? "Optimisation, entretiens d'évaluation et analyse." : "Process optimisation, performance reviews and role analysis.", "cons"],
    ["📈", t.nav.cro, lang === "nl" ? "Revenue leiderschap voor AI/SaaS scale-ups. Prijs op offerte." : lang === "fr" ? "Leadership revenue pour scale-ups. Prix sur devis." : "Revenue leadership for AI/SaaS scale-ups. Price on request.", "cro"],
    ["🖨️", t.nav.graf, lang === "nl" ? "Onderdelen & consumables voor drukkerijen, repro en verpakking. Marktconforme prijzen." : lang === "fr" ? "Pièces & consommables pour imprimeries et emballage. Prix compétitifs." : "Parts & consumables for printing, repro and packaging. Market-rate pricing.", "graf"],
    ["✨", "AURA LUXE", lang === "nl" ? "Mid-to-high end luxury beauty — skincare, parfum, make-up en home & wellness." : lang === "fr" ? "Luxury beauty haut de gamme — soins, parfum, maquillage et maison & bien-être." : "Mid-to-high end luxury beauty — skincare, fragrance, make-up and home & wellness.", "shop"]
  ].map(([i, t2, d, p]) => `<div class="sc" onclick="go('${lang}','${p}')"><div class="si">${i}</div><div class="sct">${t2}</div><div class="scd">${d}</div><div class="sl">${t.more}</div></div>`).join("");
  const brands = [
    { name: "Lookfantastic", img: PHOTOS.lookfantastic },
    { name: "Douglas", img: PHOTOS.parfum },
    { name: "Rituals", img: PHOTOS.rituals },
    { name: "Boozt", img: PHOTOS.fashion },
    { name: "Parfumdreams", img: PHOTOS.beauty }
  ].map((b) => `<div class="brand-card"><img class="brand-img" src="${b.img}" alt="${b.name}" loading="lazy"><div class="brand-name">${b.name}</div></div>`).join("");
  const features2 = [
    { img: PHOTOS.beauty, title: lang === "nl" ? "Luxury Beauty" : lang === "fr" ? "Beauté Luxe" : "Luxury Beauty", desc: lang === "nl" ? "Curated premium beauty. Elk product geselecteerd op kwaliteit en merkwaarde." : lang === "fr" ? "Beauté premium sélectionnée. Chaque produit choisi pour sa qualité." : "Curated premium beauty. Every product selected for quality and brand value." },
    { img: PHOTOS.fashion, title: lang === "nl" ? "Mode & Stijl" : "Mode & Style", desc: lang === "nl" ? "Premium mode voor elke leeftijd. Van eerste stapjes tot tijdloze elegantie." : lang === "fr" ? "Mode premium pour tous les âges. Des premiers pas à l'élégance intemporelle." : "Premium fashion for every age. From first steps to timeless elegance." }
  ].map((f) => `<div class="feature-item"><img src="${f.img}" alt="${f.title}" loading="lazy"><div class="feature-overlay"><div class="feature-text"><h3>${f.title}</h3><p>${f.desc}</p><button class="btn bg" onclick="go('${lang}','shop')">${t.hero.cta1}</button></div></div></div>`).join("");
  const body = nav(t, lang, "") + `
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hc">
    <span class="htag">&#128081; ${t.hero.tag}</span>
    <h1 class="h1">Premium <strong>${t.hero.h1b}</strong><br>${t.hero.h1c}</h1>
    <p class="hsub">${t.hero.sub}</p>
    <p class="hsub2">${t.cats[0]} &bull; ${t.cats[1]} &bull; ${t.cats[2]} &bull; ${t.cats[3]} &bull; ${t.cats[4]} &bull; BE / NL / FR</p>
    <div class="btns">
      <button class="btn bp" onclick="go('${lang}','shop')">${t.hero.cta1}</button>
      <button class="btn bs" onclick="document.getElementById('sv').scrollIntoView({behavior:'smooth'})">${t.hero.cta2}</button>
    </div>
  </div>
</section>
<div class="trust">${trust}</div>
<section class="sec">
  <div class="sh"><span class="stag">&#10022; AURA LUXE</span><h2 class="stitle">${lang === "nl" ? "Onze collecties" : lang === "fr" ? "Nos collections" : "Our collections"}</h2><p class="ssub">${lang === "nl" ? "Skincare · Parfum · Make-up · Home & Wellness · Kleding" : lang === "fr" ? "Soins · Parfum · Maquillage · Maison & Bien-être · Vêtements" : "Skincare · Fragrance · Make-up · Home & Wellness · Clothing"}</p></div>
  <div class="g6">${cats}</div>
</section>
<section class="sec sec-alt">
  <div class="feature-grid">${features2}</div>
</section>
<section class="sec">
  <div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Partners" : "Partners"}</span><h2 class="stitle">${t.brands}</h2><p class="ssub">${t.brandsSub}</p></div>
  <div class="brands-row">${brands}</div>
</section>
<section class="sec sec-alt" id="sv">
  <div class="sh"><span class="stag">&#10022; Bierinckx</span><h2 class="stitle">${t.services}</h2></div>
  <div class="sg">${svcs}</div>
</section>
` + foot(t, lang);
  const metaDesc = lang === "nl" ? `Mid-to-high end luxury beauty. Skincare, parfum, make-up en home & wellness. BE/NL/FR.` : lang === "fr" ? `Luxury beauty haut de gamme. Soins, parfum, maquillage et maison & bien-être. BE/NL/FR.` : `Mid-to-high end luxury beauty. Skincare, fragrance, make-up and home & wellness. BE/NL/FR.`;
  return page(`AURA LUXE | ${t.hero.h1c} — Bierinckx`, metaDesc, lang, body);
}
function buildShop(t, lang) {
  const photoKeys = CAT_PHOTO_KEYS;
  const cats = t.cats.map((c, i) => `
    <div class="scat" onclick="go('${lang}','shop-${CAT_KEYS[i]}')">
      <img class="scat-img" src="${PHOTOS[photoKeys[i]]}" alt="${c}" loading="lazy">
      <div class="scat-body"><div class="scat-icon">${CAT_ICONS[i]}</div><div class="scat-name">${c}</div><div class="scat-desc">${t.catDesc[i]}</div></div>
    </div>`).join("");
  const body = nav(t, lang, "shop") + `
<section class="sec" style="text-align:center">
  <div class="shop-h">
    <div class="sb">${lang === "nl" ? "Coming Soon" : lang === "fr" ? "Bientôt disponible" : "Coming Soon"}</div>
    <h1 class="stitle" style="font-family:'Playfair Display',Georgia,serif;margin-bottom:1rem">${lang === "nl" ? "Collectie in opbouw" : lang === "fr" ? "Collection en cours" : "Collection coming soon"}</h1>
    <p class="ssub">${lang === "nl" ? "Ontdek onze vijf collecties. Individuele producten en volledige checkout volgen zeer binnenkort." : lang === "fr" ? "Découvrez nos cinq collections. Les produits individuels et le paiement complet arrivent très prochainement." : "Discover our five collections. Individual products and full checkout are coming very soon."}<br>${lang === "nl" ? "Skincare · Parfum · Make-up · Home & Wellness · Kleding · BE / NL / FR" : lang === "fr" ? "Soins · Parfum · Maquillage · Maison & Bien-être · Vêtements · BE / NL / FR" : "Skincare · Fragrance · Make-up · Home & Wellness · Clothing · BE / NL / FR"}</p>
  </div>
  <div class="sc2">${cats}</div>
  <div style="margin-top:3rem"><button class="btn bp" onclick="window.location='mailto:auraluxe@bierinckx.com'">auraluxe@bierinckx.com &mdash; ${lang === "nl" ? "Vroege toegang" : lang === "fr" ? "Accès anticipé" : "Early access"}</button></div>
</section>
` + foot(t, lang);
  return page(`Shop | AURA LUXE`, `Mid-to-high end luxury beauty & kleding — skincare, parfum, make-up, home & wellness en kleding voor het hele gezin (0-80 jaar).`, lang, body);
}
function buildCatPage(t, lang, key) {
  const c = t.shopCats[key];
  const idx = CAT_KEYS.indexOf(key);
  const mainImg = PHOTOS[CAT_PHOTO_KEYS[idx]];
  const testBadge = lang === "nl" ? "Voorbeeld · test" : lang === "fr" ? "Exemple · test" : "Example · test";
  const comingSoonBtn = lang === "nl" ? "Binnenkort beschikbaar" : lang === "fr" ? "Bient\u00f4t disponible" : "Coming soon";
  const segs = key === "kleding" ? c.segs.map(([imgKey, name, desc, demoProduct]) => `
    <div class="seg-block">
      <div class="seg-head">
        <img class="seg-img" src="${PHOTOS[imgKey]}" alt="${name}" loading="lazy">
        <div class="seg-info"><div class="seg-name">${name}</div><div class="seg-desc">${desc}</div></div>
      </div>
      <div class="prod-grid">
        <div class="prod-card">
          <div class="prod-badge">${testBadge}</div>
          <img class="prod-img" src="${PHOTOS[imgKey]}" alt="${demoProduct}" loading="lazy">
          <div class="prod-name">${demoProduct}</div>
          <div class="prod-price">&mdash;</div>
          <button class="prod-btn" disabled>${comingSoonBtn}</button>
        </div>
      </div>
    </div>`).join("") : c.segs.map(([imgKey, name, desc]) => `
    <div class="scat">
      <img class="scat-img" src="${PHOTOS[imgKey]}" alt="${name}" loading="lazy">
      <div class="scat-body"><div class="scat-name">${name}</div><div class="scat-desc">${desc}</div></div>
    </div>`).join("");
  const why = c.why.map(([icon, title2, desc]) => `<div class="d-card"><div class="d-icon">${icon}</div><div class="d-title">${title2}</div><div class="d-desc">${desc}</div></div>`).join("");
  const pillStyle = "display:inline-block;border:1px solid var(--lt);padding:.55rem 1.15rem;border-radius:2px;font-size:.75rem;letter-spacing:.06em;text-transform:uppercase;color:var(--gr);text-decoration:none;cursor:pointer";
  const otherCats = CAT_KEYS.map((k, i) => k === key ? "" : `<a onclick="go('${lang}','shop-${k}')" style="${pillStyle}">${t.cats[i]}</a>`).join("");
  const earlyAccessLabel = lang === "nl" ? "Vroege toegang" : lang === "fr" ? "Accès anticipé" : "Early access";
  const allCollectionsLabel = lang === "nl" ? "Alle collecties" : lang === "fr" ? "Toutes les collections" : "All collections";
  const rangeLabel = lang === "nl" ? "Aanbod" : lang === "fr" ? "Offre" : "Range";
  const otherCatsTitle = lang === "nl" ? "Ontdek ook onze andere collecties" : lang === "fr" ? "Découvrez aussi nos autres collections" : "Explore our other collections";
  const body = nav(t, lang, "shop") + `
<section class="hero" style="min-height:58vh">
  <div class="hero-bg" style="background-image:url('${mainImg}')"></div>
  <div class="hero-overlay"></div>
  <div class="hc">
    <span class="htag">&#128081; ${c.tag}</span>
    <h1 class="h1">${c.h1}</h1>
    <p class="hsub">${c.sub}</p>
    <p class="hsub2">${c.badge}</p>
    <div class="btns">
      <button class="btn bp" onclick="window.location='mailto:auraluxe@bierinckx.com'">${earlyAccessLabel}</button>
      <button class="btn bs" onclick="go('${lang}','shop')">${allCollectionsLabel}</button>
    </div>
  </div>
</section>
<section class="sec sec-alt">
  <div class="sh"><span class="stag">&#10022; AURA LUXE</span><h2 class="stitle">${c.h1}</h2></div>
  <p style="max-width:720px;margin:0 auto;text-align:center;line-height:1.8;color:var(--gr)">${c.intro}</p>
</section>
<section class="sec">
  <div class="sh"><span class="stag">&#10022; ${rangeLabel}</span><h2 class="stitle">${c.segTitle}</h2><p class="ssub">${c.segSub}</p></div>
  <div class="${key === 'kleding' ? '' : 'sc2'}" style="${key === 'kleding' ? 'max-width:900px;margin:2.5rem auto 0' : ''}">${segs}</div>
</section>
<section class="sec sec-alt">
  <div class="sh"><span class="stag">&#10022; AURA LUXE</span><h2 class="stitle">${c.whyTitle}</h2></div>
  <div class="d-grid">${why}</div>
</section>
<section class="sec" style="text-align:center">
  <div class="sh"><h2 class="stitle">${otherCatsTitle}</h2></div>
  <div style="display:flex;gap:.75rem;flex-wrap:wrap;justify-content:center;margin-bottom:2.5rem">${otherCats}</div>
  <button class="btn bp" onclick="window.location='mailto:auraluxe@bierinckx.com'">auraluxe@bierinckx.com</button>
</section>
` + foot(t, lang);
  return page(`${c.h1} | AURA LUXE`, c.intro.replace(/&[a-z]+;/g, " ").slice(0, 155), lang, body, "shop");
}
function buildPsy(t, lang) {
  const p = t.psy;
  const svcs = p.s.map(([i, tt, d]) => `<div class="sc" style="cursor:default"><div class="si">${i}</div><div class="sct">${tt}</div><div class="scd">${d}</div></div>`).join("");
  const steps = p.steps.map((s, i) => `<div class="step"><div class="sn">${i + 1}</div><div class="st">${s}</div></div>`).join("");
  const sessions = p.sessions.map(([dur, desc]) => `<div class="sess" onclick="this.classList.toggle('sel')"><div class="sess-dur">${dur}</div><div class="sess-desc">${desc}</div></div>`).join("");
  const body = nav(t, lang, "psy") + `
<section class="ph ph-p"><h1>${p.hero}</h1><p>${p.heroSub}</p><button class="btn bg" onclick="document.getElementById('sess-kies').scrollIntoView({behavior:'smooth'})">${p.book}</button></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Ons aanbod" : lang === "fr" ? "Notre offre" : "Our services"}</span><h2 class="stitle">${lang === "nl" ? "Psychologie & Welzijn" : lang === "fr" ? "Psychologie & Bien-être" : "Psychology & Wellbeing"}</h2></div><div class="sg">${svcs}</div></section>
<section class="sec" id="sess-kies"><div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Stap 1" : "Step 1"}</span><h2 class="stitle">${lang === "nl" ? "Kies uw sessieduur" : lang === "fr" ? "Choisissez la durée" : "Choose your session duration"}</h2><p class="ssub">${lang === "nl" ? "Na betaling ontvangt u directe toegang tot de beveiligde chat" : lang === "fr" ? "Après paiement, accès direct au chat" : "After payment you receive immediate access to the secure chat"}</p></div><div class="sess-grid">${sessions}</div><div style="text-align:center;margin-top:2rem"><button class="btn bp" onclick="window.location='mailto:${p.email}'">${p.book}</button><p style="margin-top:1rem;font-size:.82rem;color:var(--gr)">${p.privacy}</p></div></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; Chat</span><h2 class="stitle">${p.chatTitle}</h2><p class="ssub">${p.chatInfo}</p></div><div class="chat-locked"><p>&#128274; ${lang === "nl" ? "De chat wordt automatisch ontgrendeld na betaling van uw sessie." : lang === "fr" ? "Le chat est automatiquement débloqué après paiement." : "The chat is automatically unlocked after payment."}</p><button class="btn bp" onclick="window.location='mailto:${p.email}'">${p.book}</button></div></section>
<section class="sec"><div class="sh"><span class="stag">&#10022; Process</span><h2 class="stitle">${p.howTitle}</h2></div><div class="steps">${steps}</div></section>
` + foot(t, lang);
  return page(`${lang === "nl" ? "Psychologie" : "Psychology"} | Bierinckx`, p.heroSub, lang, body);
}
function buildCons(t, lang) {
  const c = t.cons;
  const diensten = c.diensten.map(([icon, title2, desc]) => `<div class="d-card"><div class="d-icon">${icon}</div><div class="d-title">${title2}</div><div class="d-desc">${desc}</div></div>`).join("");
  const steps = c.steps.map((s, i) => `<div class="step"><div class="sn">${i + 1}</div><div class="st">${s}</div></div>`).join("");
  const body = nav(t, lang, "cons") + `
<section class="ph ph-c"><h1>${c.hero}</h1><p>${c.heroSub}</p><button class="btn bg" onclick="window.location='mailto:${c.email}'">${c.cta}</button></section>
<section class="sec"><div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Wat we doen" : lang === "fr" ? "Ce que nous faisons" : "What we do"}</span><h2 class="stitle">${c.dienstenTitle}</h2></div><div class="d-grid">${diensten}</div></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Aanpak" : lang === "fr" ? "Approche" : "Approach"}</span><h2 class="stitle">${c.aanpakTitle}</h2></div><div class="steps">${steps}</div><div class="price-note">${c.prijsNote}</div></section>
<section class="sec"><div class="sh"><h2 class="stitle">${c.cta}</h2></div><div class="ib"><p>&#128231; <a class="ea" href="mailto:${c.email}">${c.email}</a></p><button class="btn bp">${c.cta}</button></div></section>
` + foot(t, lang);
  return page(`Consultancy | Bierinckx`, c.heroSub, lang, body);
}
function buildCRO(t, lang) {
  const c = t.cro;
  const fases = c.fases.map(([title2, desc], i) => `<div class="fase${i === 1 ? ' style="border-color:var(--bu);background:var(--iv)"' : ""}"><div class="fase-title">${title2}</div><div class="fase-desc">${desc}</div></div>`).join("");
  const targets = c.targets.map((x) => `<li>${x}</li>`).join("");
  const body = nav(t, lang, "cro") + `
<section class="ph ph-r"><h1>${c.hero}</h1><p>${c.heroSub}</p><button class="btn bg" onclick="window.location='mailto:${c.email}'">${c.cta}</button></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; Fractional CRO</span><h2 class="stitle">${c.what}</h2><p class="ssub" style="max-width:580px;margin:0 auto">${c.whatTxt}</p></div></section>
<section class="sec"><div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Fasen" : "Phases"}</span><h2 class="stitle">${c.fasesTitle}</h2></div><div class="fase-grid">${fases}</div><div class="price-note">${c.prijsNote}</div></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; ICP</span><h2 class="stitle">${lang === "nl" ? "Voor wie?" : lang === "fr" ? "Pour qui?" : "Who is it for?"}</h2></div><ul class="tl">${targets}</ul></section>
<section class="sec"><div class="sh"><h2 class="stitle">${c.cta}</h2></div><div class="ib"><p>&#128231; <a class="ea" href="mailto:${c.email}">${c.email}</a></p><button class="btn bp">${c.cta}</button></div></section>
` + foot(t, lang);
  return page(`Fractional CRO | Bierinckx`, c.heroSub, lang, body);
}
function buildGraf(t, lang) {
  const g = t.graf;
  const diensten = g.diensten.map(([icon, title2, desc]) => `<div class="d-card"><div class="d-icon">${icon}</div><div class="d-title">${title2}</div><div class="d-desc">${desc}</div></div>`).join("");
  const steps = g.steps.map((s, i) => `<div class="step"><div class="sn">${i + 1}</div><div class="st">${s}</div></div>`).join("");
  const body = nav(t, lang, "graf") + `
<section class="ph ph-g"><h1>${g.hero}</h1><p>${g.heroSub}</p><button class="btn bg" onclick="window.location='mailto:${g.email}'">${g.cta}</button></section>
<section class="sec"><div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Wat we doen" : lang === "fr" ? "Ce que nous faisons" : "What we do"}</span><h2 class="stitle">${g.dienstenTitle}</h2></div><div class="d-grid">${diensten}</div></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Aanpak" : lang === "fr" ? "Approche" : "Approach"}</span><h2 class="stitle">${g.aanpakTitle}</h2></div><div class="steps">${steps}</div><div class="price-note">${g.prijsNote}</div></section>
<section class="sec"><div class="sh"><h2 class="stitle">${g.cta}</h2></div><div class="ib"><p>&#128231; <a class="ea" href="mailto:${g.email}">${g.email}</a></p><button class="btn bp">${g.cta}</button></div></section>
` + foot(t, lang);
  return page(`${lang === "nl" ? "Grafische Nijverheid" : lang === "fr" ? "Industrie Graphique" : "Graphics Industry"} | Bierinckx`, g.heroSub, lang, body);
}
function detectLang(request) {
  const url = new URL(request.url);
  const parts = url.pathname.split("/").filter(Boolean);
  const langs = ["nl", "fr", "en"];
  if (langs.includes(parts[0]))
    return { lang: parts[0], rest: parts.slice(1) };
  const accept = request.headers.get("accept-language") || "";
  if (accept.toLowerCase().startsWith("fr"))
    return { lang: "fr", rest: parts };
  return { lang: "nl", rest: parts };
}
var worker_default = {
  async fetch(request, env3, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET,POST,OPTIONS", "Access-Control-Allow-Headers": "Content-Type" };
    if (request.method === "OPTIONS")
      return new Response(null, { status: 204, headers: cors });
    if (path === "/api/chat" && request.method === "POST") {
      let body;
      try {
        body = await request.json();
      } catch {
        return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400, headers: cors });
      }
      const { message, history = [], system, lang: lang2 = "nl" } = body;
      if (!message)
        return new Response(JSON.stringify({ error: "No message" }), { status: 400, headers: cors });
      try {
        const messages = [...history.slice(-8), { role: "user", content: message }];
        const resp = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-api-key": env3.CLAUDE_API_KEY, "anthropic-version": "2023-06-01" },
          body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 400, system: system || "You are a helpful customer service agent for AURA LUXE luxury lifestyle webshop. Answer in the language the user writes in. Be warm, concise and professional.", messages })
        });
        const data = await resp.json();
        const reply = data.content?.[0]?.text || "";
        if (!resp.ok || !reply) {
          console.log(`[CHAT-ERR] status=${resp.status} type=${data?.error?.type || "?"} msg=${(data?.error?.message || "").slice(0, 150)}`);
          const fb = lang2 === "fr" ? "Un problème technique est survenu. Contactez-nous via auraluxe@bierinckx.com" : lang2 === "en" ? "A technical issue occurred. Please contact us at auraluxe@bierinckx.com" : "Er is een technisch probleem. Contacteer ons via auraluxe@bierinckx.com";
          return new Response(JSON.stringify({ reply: fb }), { headers: { ...cors, "Content-Type": "application/json" } });
        }
        return new Response(JSON.stringify({ reply }), { headers: { ...cors, "Content-Type": "application/json" } });
      } catch (e) {
        return new Response(JSON.stringify({ reply: "Er is een technisch probleem. Contacteer ons via auraluxe@bierinckx.com" }), { headers: { ...cors, "Content-Type": "application/json" } });
      }
    }
    if (path === "/api/webhook" && request.method === "POST") {
      const body = await request.text();
      try {
        const e = JSON.parse(body);
        console.log(`[WH] ${e.type}`);
        return new Response(JSON.stringify({ received: true }), { headers: { ...cors, "Content-Type": "application/json" } });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 400, headers: cors });
      }
    }
    if (path === "/api/create-checkout" && request.method === "POST") {
      let body;
      try {
        body = await request.json();
      } catch {
        return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400, headers: cors });
      }
      const { business_line, product_name, amount_eur, customer_email, locale = "nl" } = body;
      if (!business_line || !product_name || !amount_eur)
        return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400, headers: cors });
      try {
        const params = new URLSearchParams({ "payment_method_types[]": "card", "line_items[0][price_data][currency]": "eur", "line_items[0][price_data][product_data][name]": product_name, "line_items[0][price_data][unit_amount]": String(Math.round(amount_eur * 100)), "line_items[0][quantity]": "1", "mode": "payment", "locale": locale, "automatic_tax[enabled]": "true", "metadata[business_line]": business_line, "success_url": `https://bierinckx.com/${locale}/chat?paid=1`, "cancel_url": `https://bierinckx.com/${locale}/psychologie` });
        if (customer_email)
          params.set("customer_email", customer_email);
        const resp = await fetch("https://api.stripe.com/v1/checkout/sessions", { method: "POST", headers: { "Authorization": `Bearer ${env3.STRIPE_SECRET_KEY}`, "Content-Type": "application/x-www-form-urlencoded" }, body: params });
        const session = await resp.json();
        if (!resp.ok)
          throw new Error(session.error?.message || "Stripe error");
        return new Response(JSON.stringify({ url: session.url }), { headers: { ...cors, "Content-Type": "application/json" } });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: cors });
      }
    }
    if (path === "/robots.txt")
      return new Response("User-agent: *\nAllow: /\nSitemap: https://bierinckx.com/sitemap.xml\n", { headers: { "Content-Type": "text/plain" } });
    if (path === "/sitemap.xml")
      return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://bierinckx.com/nl</loc><priority>1.0</priority></url><url><loc>https://bierinckx.com/fr</loc><priority>1.0</priority></url><url><loc>https://bierinckx.com/en</loc><priority>1.0</priority></url><url><loc>https://bierinckx.com/nl/shop</loc><priority>0.9</priority></url><url><loc>https://bierinckx.com/nl/skincare</loc><priority>0.85</priority></url><url><loc>https://bierinckx.com/nl/parfum</loc><priority>0.85</priority></url><url><loc>https://bierinckx.com/nl/make-up</loc><priority>0.85</priority></url><url><loc>https://bierinckx.com/nl/home-wellness</loc><priority>0.85</priority></url><url><loc>https://bierinckx.com/nl/kleding</loc><priority>0.85</priority></url><url><loc>https://bierinckx.com/nl/psychologie</loc><priority>0.8</priority></url><url><loc>https://bierinckx.com/nl/consultancy</loc><priority>0.8</priority></url><url><loc>https://bierinckx.com/nl/cro</loc><priority>0.8</priority></url><url><loc>https://bierinckx.com/nl/grafische-nijverheid</loc><priority>0.8</priority></url></urlset>`, { headers: { "Content-Type": "application/xml" } });
    if (path === "/" || path === "") {
      const accept = request.headers.get("accept-language") || "";
      const lang2 = accept.toLowerCase().startsWith("fr") ? "fr" : "nl";
      return Response.redirect(`https://bierinckx.com/${lang2}`, 302);
    }
    const { lang, rest } = detectLang(request);
    const t = T[lang];
    const p = rest[0] || "";
    const h = /* @__PURE__ */ ((html) => new Response(html, { headers: { "Content-Type": "text/html;charset=UTF-8" } }));
    if (p === "")
      return h(buildHome(t, lang));
    if (p === "shop")
      return h(buildShop(t, lang));
    if (CAT_SLUG_TO_KEY[lang][p])
      return h(buildCatPage(t, lang, CAT_SLUG_TO_KEY[lang][p]));
    if (["psychologie", "psychology", "psy"].includes(p))
      return h(buildPsy(t, lang));
    if (["consultancy", "consultance", "cons"].includes(p))
      return h(buildCons(t, lang));
    if (["cro", "fractional-cro"].includes(p))
      return h(buildCRO(t, lang));
    if (["grafische-nijverheid", "industrie-graphique", "graphics-industry", "graf"].includes(p))
      return h(buildGraf(t, lang));
    if (["bedankt", "merci", "thank-you", "chat", "klantenservice", "service-client", "customer-service"].includes(p)) {
      const paid = url.searchParams.get("paid") === "1";
      const chatContent = paid ? `<div class="chat-locked"><p>&#10003; ${lang === "nl" ? "Uw sessie is bevestigd. De chat is beschikbaar via de knop rechtsonder op elke pagina." : lang === "fr" ? "Votre session est confirmée. Le chat est disponible via le bouton en bas à droite." : "Your session is confirmed. Chat is available via the button at the bottom right."}</p></div>` : `<div class="chat-locked"><p>&#128274; ${lang === "nl" ? "Nog geen actieve sessie. Betaal eerst om toegang te krijgen." : lang === "fr" ? "Pas encore de session. Payez d'abord." : "No active session yet. Please pay first."}</p><button class="btn bp" onclick="window.location='/'+('${lang}')+'/psychologie'">${lang === "nl" ? "Sessie boeken" : "Book a session"}</button></div>`;
      return h(page(`Chat | Bierinckx`, `Klantenservice AURA LUXE`, lang, nav(t, lang, "psy") + `<section class="sec"><div class="sh"><span class="stag">&#10022; Chat</span><h2 class="stitle">${t.chatTitle}</h2><p class="ssub">${t.chatSubtitle}</p></div>${chatContent}</section>` + foot(t, lang)));
    }
    return new Response(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>404</title></head><body style="font-family:system-ui;background:#FAF9F6;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center"><div><h1 style="font-weight:300;margin-bottom:1rem">404</h1><a href="/${lang}" style="color:#8B1A2B">← Home</a></div></body></html>`, { status: 404, headers: { "Content-Type": "text/html;charset=UTF-8" } });
  }
};
export default worker_default;
