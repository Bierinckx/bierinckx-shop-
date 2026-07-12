var T = {
  nl: {
    nav: { home: "Home", shop: "Shop", psy: "Psychologie", cons: "Consultancy", cro: "Fractional CRO", graf: "Grafische Nijverheid", chat: "Klantenservice" },
    hero: { tag: "Onafhankelijk beauty-advies · BE / NL / FR / DE", h1b: "Luxury Beauty", h1c: "die wij eerlijk voor je testen", sub: "Wij vergelijken skincare, parfum en make-up bij topretailers als Douglas, Lookfantastic en Rituals — zodat jij altijd de beste keuze maakt, tegen de beste prijs.", cta1: "Bekijk onze Top Picks", cta2: "Hoe wij werken" },
    cats: ["Skincare", "Parfum", "Make-up", "Accessoires", "Home & Wellness", "Kleding"],
    catDesc: ["Ritueel voor elke dag", "Een signatuur, geen geur", "Verfijnd, nooit te veel", "De laatste, doordachte toets", "Luxe die thuis blijft", "Voor het hele gezin"],
    shopCats: {
      skincare: { tag: "AURA LUXE &middot; Skincare", h1: "Skincare", sub: "Huidverzorging als dagelijks ritueel, niet als verplichting", badge: "Collectie in opbouw", intro: "Onze skincare-selectie draait om producten die hun werk doen &eacute;n een moment van rust brengen in de dag. Geen overvolle routines met twintig stappen, maar een doordachte keuze uit reiniging, verzorging en bescherming &mdash; afgestemd op wat de huid echt nodig heeft. Elk merk wordt geselecteerd op werkzame ingredi&euml;nten, herkomst en resultaat, niet op verpakking alleen.", segTitle: "Wat u vindt in Skincare", segSub: "Drie pijlers, &eacute;&eacute;n filosofie: verzorging die werkt", segs: [["beauty", "Gezichtsverzorging", "Reinigers, serums en crèmes voor elk huidtype &mdash; van hydratatie tot anti-aging.", "Hydraterende dagcrème"], ["rituals", "Rituelen & Texturen", "Producten die het verzorgingsmoment zelf tot een ervaring maken.", "Kalmerend gezichtsserum"], ["home", "Bodycare & Wellness", "Lichaamsverzorging die aansluit bij dezelfde kwaliteitsstandaard als het gezicht.", "Verzachtende bodylotion"]], products: [["beauty", "Hydraterende dagcrème"], ["rituals", "Kalmerend gezichtsserum"], ["home", "Verzachtende bodylotion"], ["beauty", "Reinigende micellaire gel"], ["rituals", "Voedende nachtcrème"]], whyTitle: "Waarom AURA LUXE Skincare", why: [["&#10022;", "Zorgvuldig geselecteerd", "Elk product wordt beoordeeld op ingredi&euml;nten, werkzaamheid en herkomst voor het de collectie haalt."], ["&#128230;", "Geen copy-paste catalogus", "Eigen productbeschrijvingen en beeldmateriaal &mdash; nooit klakkeloos overgenomen van de leverancier."], ["&#9989;", "Transparante levertijd", "Duidelijkheid over levering v&oacute;&oacute;r het afrekenen, geen verrassingen achteraf."], ["&#128274;", "Veilig & vertrouwd", "U koopt rechtstreeks en veilig bij de retailer zelf; wij verwijzen u enkel eerlijk door."]] },
      parfum: { tag: "AURA LUXE &middot; Parfum", h1: "Parfum", sub: "Een signatuur, geen geur die morgen weer vervlogen is", badge: "Collectie in opbouw", intro: "Parfum is het meest persoonlijke onderdeel van een verzorgingsroutine &mdash; het blijft nadat u de kamer al verlaten hebt. Onze selectie focust op geuren met karakter: van tijdloze klassiekers tot niche-composities die opvallen zonder te overweldigen. Geen eindeloze rekken vol testers, maar een gecureerde keuze die het verschil maakt.", segTitle: "Wat u vindt in Parfum", segSub: "Voor elk moment een geur die past", segs: [["parfum", "Signature Eau de Parfum", "Krachtige, langhoudende composities voor wie een geur wil die herkenbaar blijft.", "Signature eau de parfum 50ml"], ["rituals", "Geurrituelen & Body Mist", "Lichtere texturen om doorheen de dag te verfrissen zonder te overladen.", "Verfrissende body mist"], ["beauty", "Geursets & Miniaturen", "Ideaal om een nieuwe geur te ontdekken of cadeau te doen.", "Ontdekkingsset miniaturen"]], products: [["parfum", "Signature eau de parfum 50ml"], ["rituals", "Verfrissende body mist"], ["beauty", "Ontdekkingsset miniaturen"], ["parfum", "Geurkaars huisparfum"], ["rituals", "Roll-on parfum reisformaat"]], whyTitle: "Waarom AURA LUXE Parfum", why: [["&#10022;", "Karakter boven trend", "Wij kiezen geuren die blijven kloppen, niet enkel wat vandaag populair is."], ["&#128230;", "Authentieke productinformatie", "Geurfamilie, houdbaarheid en toepassing duidelijk beschreven &mdash; geen vage marketingtaal."], ["&#9989;", "Transparante levertijd", "Levertermijn altijd zichtbaar v&oacute;&oacute;r het afrekenen."], ["&#128274;", "Veilig & vertrouwd", "U koopt rechtstreeks en veilig bij de retailer zelf; wij verwijzen u enkel eerlijk door."]] },
      makeup: { tag: "AURA LUXE &middot; Make-up", h1: "Make-up", sub: "Verfijnd, nooit te veel &mdash; make-up die de huid respecteert", badge: "Collectie in opbouw", intro: "Make-up die goed oogt begint bij een goede formule. Onze selectie combineert dekkracht en pigmentatie met huidvriendelijke ingredi&euml;nten, zodat het resultaat mooi is &eacute;n de huid geen geweld aandoet. Van een natuurlijke daglook tot een uitgesproken avondlook &mdash; steeds met producten die hun belofte waarmaken.", segTitle: "Wat u vindt in Make-up", segSub: "Van basis tot finishing touch", segs: [["makeup", "Teint & Basis", "Foundation, concealer en poeder voor een egale, ademende teint.", "Langhoudende foundation"], ["beauty", "Ogen & Lippen", "Kleur die blijft zitten, van subtiel tot uitgesproken.", "Precisie mascara"], ["rituals", "Tools & Accessoires", "Kwasten, sponzen en accessoires voor een professioneel resultaat thuis.", "Professionele kwastenset"]], products: [["makeup", "Langhoudende foundation"], ["beauty", "Precisie mascara"], ["rituals", "Professionele kwastenset"], ["makeup", "Matterende poeder"], ["beauty", "Voedende lippenbalsem met kleur"]], whyTitle: "Waarom AURA LUXE Make-up", why: [["&#10022;", "Kwaliteit boven kwantiteit", "Een gerichte selectie in plaats van een eindeloos aanbod dat de keuze bemoeilijkt."], ["&#128230;", "Eigen beeldmateriaal", "Elke swatch en productfoto in eigen huisstijl &mdash; geen leveranciersbeelden."], ["&#9989;", "Transparante levertijd", "Levering altijd zichtbaar v&oacute;&oacute;r het afrekenen."], ["&#128274;", "Veilig & vertrouwd", "U koopt rechtstreeks en veilig bij de retailer zelf; wij verwijzen u enkel eerlijk door."]] },
      accessoires: { tag: "AURA LUXE &middot; Accessoires", h1: "Accessoires", sub: "De laatste, doordachte toets die een look afmaakt", badge: "Collectie in opbouw", intro: "Accessoires zijn het verschil tussen &lsquo;af&rsquo; en &lsquo;bijna af&rsquo; &mdash; een tas, een sieraad, een bril die net dat tikkeltje karakter toevoegt. Onze selectie focust op tijdloze stukken van kwaliteit, niet op wegwerptrends. Elk stuk wordt gekozen op afwerking, materiaal en herkomst, zodat het jarenlang meegaat.", segTitle: "Wat u vindt in Accessoires", segSub: "Drie categorie&euml;n, &eacute;&eacute;n zelfde oog voor kwaliteit", segs: [["rituals", "Tassen", "Handtassen en clutches die functioneel &eacute;n tijdloos zijn.", "Leren schoudertas"], ["fashion", "Sieraden", "Kettingen, oorbellen en ringen die een outfit subtiel afmaken.", "Fijne gouden ketting"], ["beauty", "Zonnebrillen & Riemen", "De details die een silhouet compleet maken.", "Klassieke zonnebril"]], products: [["rituals", "Leren schoudertas"], ["fashion", "Fijne gouden ketting"], ["beauty", "Klassieke zonnebril"], ["rituals", "Leren riem"], ["fashion", "Parelknopoorbellen"]], whyTitle: "Waarom AURA LUXE Accessoires", why: [["&#10022;", "Zorgvuldig geselecteerd", "Elk stuk wordt beoordeeld op materiaal, afwerking en herkomst voor het de collectie haalt."], ["&#128230;", "Geen copy-paste catalogus", "Eigen productbeschrijvingen en beeldmateriaal &mdash; nooit klakkeloos overgenomen van de leverancier."], ["&#9989;", "Transparante levertijd", "Duidelijkheid over levering v&oacute;&oacute;r het afrekenen, geen verrassingen achteraf."], ["&#128274;", "Veilig & vertrouwd", "U koopt rechtstreeks en veilig bij de retailer zelf; wij verwijzen u enkel eerlijk door."]] },
      home: { tag: "AURA LUXE &middot; Home & Wellness", h1: "Home & Wellness", sub: "Luxe die thuis blijft, ook na de deur achter u dicht", badge: "Collectie in opbouw", intro: "Welzijn stopt niet bij de badkamerspiegel. Onze Home & Wellness-selectie brengt dezelfde verfijning naar de rest van het huis &mdash; geurkaarsen, bad- en douche-essentials en kleine rituelen die een gewone avond net iets bijzonderder maken. Geselecteerd op kwaliteit, geur en afwerking.", segTitle: "Wat u vindt in Home & Wellness", segSub: "Rust en verfijning voor in huis", segs: [["home", "Geurkaarsen & Diffusers", "Signatuurgeuren voor in huis, langdurig en subtiel.", "Signatuur geurkaars"], ["rituals", "Bad & Douche Rituelen", "Verzorgende essentials voor een moment van ontspanning.", "Verzorgende douchegel"], ["beauty", "Kleine Luxe-accenten", "Details die een interieur net dat tikkeltje verfijnder maken.", "Decoratief luxe-accessoire"]], products: [["home", "Signatuur geurkaars"], ["rituals", "Verzorgende douchegel"], ["beauty", "Decoratief luxe-accessoire"], ["home", "Aromatische diffuser-olie"], ["rituals", "Zachte badhanddoekenset"]], whyTitle: "Waarom AURA LUXE Home & Wellness", why: [["&#10022;", "Geselecteerd op geur & afwerking", "Alleen producten die ook echt een verschil maken in de ervaring thuis."], ["&#128230;", "Geen copy-paste catalogus", "Eigen beschrijvingen, geen letterlijke leveranciersteksten."], ["&#9989;", "Transparante levertijd", "Levering duidelijk zichtbaar v&oacute;&oacute;r het afrekenen."], ["&#128274;", "Veilig & vertrouwd", "U koopt rechtstreeks en veilig bij de retailer zelf; wij verwijzen u enkel eerlijk door."]] },
      kleding: { tag: "AURA LUXE &middot; Kleding", h1: "Kleding voor het hele gezin", sub: "Van eerste kruippakjes tot tijdloze elegantie &mdash; 0 tot 65+ jaar", badge: "Collectie in opbouw", intro: "Kleding is de nieuwste uitbreiding binnen AURA LUXE: premium en verzorgd gemaakte kledij voor het volledige gezin, van baby tot senior. Dezelfde kwaliteitsstandaard als onze beauty-collecties &mdash; zorgvuldig geselecteerde merken, eerlijke materialen en pasvorm die klopt &mdash; nu ook voor wat u draagt, niet enkel voor wat u op de huid aanbrengt.", segTitle: "Kleding per levensfase", segSub: "Vijf leeftijdssegmenten, telkens dezelfde zorgvuldigheid", segs: [["baby", "Baby & Peuter (0&ndash;4 jaar)", "Zachte, huidvriendelijke stoffen voor de allerkleinsten.", "Zacht katoenen rompertje"], ["kids", "Kids (4&ndash;10 jaar)", "Speelse, praktische kledij die een actieve dag overleeft.", "Speels T-shirt met print"], ["teens", "Tieners (10&ndash;19 jaar)", "Hedendaagse stijlen waarmee jongeren zich zelfverzekerd voelen.", "Oversized hoodie"], ["adults", "Volwassenen (20&ndash;65 jaar)", "Tijdloze basics en statement-stukken voor elke gelegenheid.", "Tijdloze wollen jas"], ["seniors", "Senioren (65+ jaar)", "Comfortabele elegantie met aandacht voor pasvorm en draagcomfort.", "Comfortabele linnen blouse"]], segProducts: {
    baby: ["Zacht katoenen rompertje", "Ademende slaapzak", "Speelse baby jumpsuit", "Zachte babymuts", "Kraamcadeauset kleertjes"],
    kids: ["Speels T-shirt met print", "Comfortabele jogger", "Regenjas met capuchon", "Kleurrijke sweater", "Sportieve short"],
    teens: ["Oversized hoodie", "Slim-fit jeans", "Grafisch T-shirt", "Bomberjack", "Sneakersokken set"],
    adults: ["Tijdloze wollen jas", "Klassiek overhemd", "Elegante blazer", "Comfortabele chino", "Zijden sjaal"],
    seniors: ["Comfortabele linnen blouse", "Zachte cardigan", "Broek met elastische pasvorm", "Ademende regenjas", "Warme fleece trui"]
  }, whyTitle: "Waarom AURA LUXE Kleding", why: [["&#10022;", "&Eacute;&eacute;n kwaliteitsstandaard", "Dezelfde zorgvuldigheid als onze beauty-collecties, nu toegepast op kleding."], ["&#128230;", "Eigen beeldmateriaal per segment", "Elke leeftijdsgroep krijgt on-topic beeldmateriaal, geen generieke stockfoto's."], ["&#9989;", "Transparante levertijd", "Levering altijd zichtbaar v&oacute;&oacute;r het afrekenen, voor elk segment."], ["&#128274;", "Veilig & vertrouwd", "U koopt rechtstreeks en veilig bij de retailer zelf; wij verwijzen u enkel eerlijk door."]] }
    },
    trust: ["100% onafhankelijk advies", "Vergeleken bij 5+ topretailers", "Altijd de scherpste prijs", "Levering via de retailer van jouw keuze"],
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
    hero: { tag: "Conseil beauté indépendant · BE / NL / FR / DE", h1b: "Luxury Beauty", h1c: "que nous testons honnêtement pour vous", sub: "Nous comparons soins, parfums et maquillage chez les meilleurs détaillants comme Douglas, Lookfantastic et Rituals — pour que vous fassiez toujours le meilleur choix, au meilleur prix.", cta1: "Découvrir nos sélections", cta2: "Comment ça marche" },
    cats: ["Soins", "Parfum", "Maquillage", "Accessoires", "Maison & Bien-être", "Vêtements"],
    catDesc: ["Un rituel au quotidien", "Une signature, pas un simple parfum", "Raffiné, jamais trop", "La touche finale, pensée avec soin", "Le luxe qui reste à la maison", "Pour toute la famille"],
    shopCats: {
      skincare: { tag: "AURA LUXE &middot; Soins", h1: "Soins", sub: "Le soin de la peau comme rituel quotidien, pas comme corv&eacute;e", badge: "Collection en cours", intro: "Notre s&eacute;lection de soins mise sur des produits qui agissent vraiment tout en offrant un moment de calme dans la journ&eacute;e. Pas de routine en vingt &eacute;tapes, mais un choix r&eacute;fl&eacute;chi de nettoyants, soins et protections &mdash; adapt&eacute;s aux besoins r&eacute;els de la peau. Chaque marque est s&eacute;lectionn&eacute;e pour ses ingr&eacute;dients actifs, son origine et ses r&eacute;sultats, pas seulement son emballage.", segTitle: "Ce que vous trouverez dans Soins", segSub: "Trois piliers, une seule philosophie&nbsp;: un soin qui fonctionne", segs: [["beauty", "Soins du visage", "Nettoyants, s&eacute;rums et cr&egrave;mes pour chaque type de peau &mdash; hydratation &agrave; anti-&acirc;ge.", "Cr&egrave;me de jour hydratante"], ["rituals", "Rituels & Textures", "Des produits qui transforment le moment du soin en v&eacute;ritable exp&eacute;rience.", "S&eacute;rum apaisant visage"], ["home", "Soins du corps & Bien-&ecirc;tre", "Des soins corporels au m&ecirc;me niveau d'exigence que ceux du visage.", "Lotion corporelle apaisante"]], products: [["beauty", "Crème de jour hydratante"], ["rituals", "Sérum apaisant visage"], ["home", "Lotion corporelle apaisante"], ["beauty", "Gel micellaire nettoyant"], ["rituals", "Crème de nuit nourrissante"]], whyTitle: "Pourquoi choisir AURA LUXE Soins", why: [["&#10022;", "S&eacute;lection rigoureuse", "Chaque produit est &eacute;valu&eacute; sur ses ingr&eacute;dients, son efficacit&eacute; et son origine avant d'int&eacute;grer la collection."], ["&#128230;", "Aucun copier-coller", "Descriptions et visuels propres &mdash; jamais repris tels quels du fournisseur."], ["&#9989;", "D&eacute;lai de livraison transparent", "Clart&eacute; sur la livraison avant le paiement, sans surprise."], ["&#128274;", "S&eacute;curis&eacute; & fiable", "Vous achetez directement et en toute s&eacute;curit&eacute; chez le d&eacute;taillant ; nous vous orientons simplement, en toute honn&ecirc;tet&eacute;."]] },
      parfum: { tag: "AURA LUXE &middot; Parfum", h1: "Parfum", sub: "Une signature, pas un parfum qui s'&eacute;vapore d&egrave;s demain", badge: "Collection en cours", intro: "Le parfum est l'&eacute;l&eacute;ment le plus personnel d'une routine de soin &mdash; il reste apr&egrave;s que vous ayez quitt&eacute; la pi&egrave;ce. Notre s&eacute;lection privil&eacute;gie les parfums de caract&egrave;re&nbsp;: des classiques intemporels aux compositions de niche qui se remarquent sans envahir. Pas de rayonnages sans fin, mais un choix cur&eacute; qui fait la diff&eacute;rence.", segTitle: "Ce que vous trouverez dans Parfum", segSub: "Un parfum pour chaque moment", segs: [["parfum", "Eau de Parfum Signature", "Des compositions puissantes et tenaces pour celles qui veulent un parfum reconnaissable.", "Eau de parfum signature 50ml"], ["rituals", "Rituels olfactifs & Brumes", "Des textures l&eacute;g&egrave;res pour se rafra&icirc;chir tout au long de la journ&eacute;e.", "Brume corporelle rafra&icirc;chissante"], ["beauty", "Coffrets & Miniatures", "Id&eacute;al pour d&eacute;couvrir un nouveau parfum ou pour offrir.", "Coffret d&eacute;couverte miniatures"]], products: [["parfum", "Eau de parfum signature 50ml"], ["rituals", "Brume corporelle rafraîchissante"], ["beauty", "Coffret découverte miniatures"], ["parfum", "Bougie parfum d'intérieur"], ["rituals", "Parfum roll-on format voyage"]], whyTitle: "Pourquoi choisir AURA LUXE Parfum", why: [["&#10022;", "Le caract&egrave;re avant la tendance", "Nous choisissons des parfums qui durent, pas seulement ce qui est populaire aujourd'hui."], ["&#128230;", "Informations authentiques", "Famille olfactive, tenue et usage clairement d&eacute;crits &mdash; pas de langage marketing vague."], ["&#9989;", "D&eacute;lai de livraison transparent", "D&eacute;lai toujours visible avant le paiement."], ["&#128274;", "S&eacute;curis&eacute; & fiable", "Vous achetez directement et en toute s&eacute;curit&eacute; chez le d&eacute;taillant ; nous vous orientons simplement, en toute honn&ecirc;tet&eacute;."]] },
      makeup: { tag: "AURA LUXE &middot; Maquillage", h1: "Maquillage", sub: "Raffin&eacute;, jamais trop &mdash; un maquillage qui respecte la peau", badge: "Collection en cours", intro: "Un maquillage r&eacute;ussi commence par une bonne formule. Notre s&eacute;lection combine couvrance et pigmentation avec des ingr&eacute;dients respectueux de la peau, pour un r&eacute;sultat aussi beau que confortable. D'un look de jour naturel &agrave; un look de soir&eacute;e affirm&eacute; &mdash; toujours avec des produits qui tiennent leurs promesses.", segTitle: "Ce que vous trouverez dans Maquillage", segSub: "De la base &agrave; la touche finale", segs: [["makeup", "Teint & Base", "Fond de teint, correcteur et poudre pour un teint uniforme et respirant.", "Fond de teint longue tenue"], ["beauty", "Yeux & L&egrave;vres", "Une couleur qui tient, du plus subtil au plus affirm&eacute;.", "Mascara pr&eacute;cision"], ["rituals", "Outils & Accessoires", "Pinceaux, &eacute;ponges et accessoires pour un r&eacute;sultat professionnel &agrave; la maison.", "Set de pinceaux professionnels"]], products: [["makeup", "Fond de teint longue tenue"], ["beauty", "Mascara précision"], ["rituals", "Set de pinceaux professionnels"], ["makeup", "Poudre matifiante"], ["beauty", "Baume à lèvres teinté nourrissant"]], whyTitle: "Pourquoi choisir AURA LUXE Maquillage", why: [["&#10022;", "Qualit&eacute; avant quantit&eacute;", "Une s&eacute;lection cibl&eacute;e plut&ocirc;t qu'une offre infinie qui complique le choix."], ["&#128230;", "Visuels propres", "Chaque swatch et photo produit dans notre propre charte &mdash; jamais des images fournisseur."], ["&#9989;", "D&eacute;lai de livraison transparent", "Livraison toujours visible avant le paiement."], ["&#128274;", "S&eacute;curis&eacute; & fiable", "Vous achetez directement et en toute s&eacute;curit&eacute; chez le d&eacute;taillant ; nous vous orientons simplement, en toute honn&ecirc;tet&eacute;."]] },
      accessoires: { tag: "AURA LUXE &middot; Accessoires", h1: "Accessoires", sub: "La touche finale, pens&eacute;e avec soin, qui ach&egrave;ve un look", badge: "Collection en cours", intro: "Les accessoires font la diff&eacute;rence entre un look fini et un look presque fini &mdash; un sac, un bijou, des lunettes qui apportent ce suppl&eacute;ment de caract&egrave;re. Notre s&eacute;lection privil&eacute;gie des pi&egrave;ces intemporelles et qualitatives, pas des tendances jetables. Chaque pi&egrave;ce est choisie pour sa finition, son mat&eacute;riau et son origine.", segTitle: "Ce que vous trouverez dans Accessoires", segSub: "Trois cat&eacute;gories, un m&ecirc;me sens du d&eacute;tail", segs: [["rituals", "Sacs", "Sacs \u00e0 main et pochettes \u00e0 la fois fonctionnels et intemporels.", "Sac \u00e0 bandouli\u00e8re en cuir"], ["fashion", "Bijoux", "Colliers, boucles d'oreilles et bagues qui subliment une tenue.", "Collier fin en or"], ["beauty", "Lunettes & Ceintures", "Les d\u00e9tails qui compl\u00e8tent une silhouette.", "Lunettes de soleil classiques"]], products: [["rituals", "Sac \u00e0 bandouli\u00e8re en cuir"], ["fashion", "Collier fin en or"], ["beauty", "Lunettes de soleil classiques"], ["rituals", "Ceinture en cuir"], ["fashion", "Boucles d'oreilles perles"]], whyTitle: "Pourquoi AURA LUXE Accessoires", why: [["&#10022;", "S&eacute;lectionn&eacute; avec soin", "Chaque pi&egrave;ce est &eacute;valu&eacute;e sur son mat&eacute;riau, sa finition et son origine avant d'int&eacute;grer la collection."], ["&#128230;", "Jamais de catalogue copi&eacute;-coll&eacute;", "Descriptions et visuels propres &mdash; jamais repris tels quels du fournisseur."], ["&#9989;", "D&eacute;lai transparent", "Clart&eacute; sur la livraison avant le paiement, sans surprise."], ["&#128274;", "S&eacute;curis&eacute; & fiable", "Vous achetez directement et en toute s&eacute;curit&eacute; chez le d&eacute;taillant ; nous vous orientons simplement, en toute honn&ecirc;tet&eacute;."]] },
      home: { tag: "AURA LUXE &middot; Maison & Bien-&ecirc;tre", h1: "Maison & Bien-&ecirc;tre", sub: "Le luxe qui reste &agrave; la maison, m&ecirc;me apr&egrave;s la porte referm&eacute;e", badge: "Collection en cours", intro: "Le bien-&ecirc;tre ne s'arr&ecirc;te pas au miroir de la salle de bain. Notre s&eacute;lection Maison & Bien-&ecirc;tre apporte le m&ecirc;me raffinement dans le reste de la maison &mdash; bougies parfum&eacute;es, essentiels de bain et petits rituels qui rendent une soir&eacute;e ordinaire un peu plus sp&eacute;ciale. S&eacute;lectionn&eacute; pour la qualit&eacute;, le parfum et la finition.", segTitle: "Ce que vous trouverez dans Maison & Bien-&ecirc;tre", segSub: "Calme et raffinement pour la maison", segs: [["home", "Bougies & Diffuseurs", "Des parfums signature pour la maison, durables et subtils.", "Bougie parfum&eacute;e signature"], ["rituals", "Rituels de bain & douche", "Des essentiels apaisants pour un moment de d&eacute;tente.", "Gel douche nourrissant"], ["beauty", "Petits accents de luxe", "Des d&eacute;tails qui rendent un int&eacute;rieur un peu plus raffin&eacute;.", "Accessoire d&eacute;co luxe"]], products: [["home", "Bougie parfumée signature"], ["rituals", "Gel douche nourrissant"], ["beauty", "Accessoire déco luxe"], ["home", "Huile aromatique pour diffuseur"], ["rituals", "Set de serviettes de bain douces"]], whyTitle: "Pourquoi choisir AURA LUXE Maison & Bien-&ecirc;tre", why: [["&#10022;", "S&eacute;lectionn&eacute; pour le parfum & la finition", "Uniquement des produits qui font vraiment la diff&eacute;rence &agrave; la maison."], ["&#128230;", "Aucun copier-coller", "Descriptions propres, jamais des textes fournisseur repris tels quels."], ["&#9989;", "D&eacute;lai de livraison transparent", "Livraison clairement visible avant le paiement."], ["&#128274;", "S&eacute;curis&eacute; & fiable", "Vous achetez directement et en toute s&eacute;curit&eacute; chez le d&eacute;taillant ; nous vous orientons simplement, en toute honn&ecirc;tet&eacute;."]] },
      kleding: { tag: "AURA LUXE &middot; V&ecirc;tements", h1: "V&ecirc;tements pour toute la famille", sub: "Des premi&egrave;res grenouill&egrave;res &agrave; l'&eacute;l&eacute;gance intemporelle &mdash; de 0 &agrave; 65 ans et plus", badge: "Collection en cours", intro: "Les v&ecirc;tements sont la toute derni&egrave;re extension d'AURA LUXE&nbsp;: des pi&egrave;ces premium et soign&eacute;es pour toute la famille, du b&eacute;b&eacute; au senior. La m&ecirc;me exigence de qualit&eacute; que nos collections beaut&eacute; &mdash; marques s&eacute;lectionn&eacute;es avec soin, mati&egrave;res honn&ecirc;tes et coupe juste &mdash; d&eacute;sormais aussi pour ce que vous portez, pas seulement pour ce que vous appliquez sur la peau.", segTitle: "V&ecirc;tements par tranche d'&acirc;ge", segSub: "Cinq segments d'&acirc;ge, toujours le m&ecirc;me soin", segs: [["baby", "B&eacute;b&eacute; & Bambin (0&ndash;4 ans)", "Des mati&egrave;res douces et respectueuses de la peau pour les tout-petits.", "Body en coton doux"], ["kids", "Enfants (4&ndash;10 ans)", "Des v&ecirc;tements ludiques et pratiques qui r&eacute;sistent &agrave; une journ&eacute;e active.", "T-shirt ludique imprim&eacute;"], ["teens", "Adolescents (10&ndash;19 ans)", "Des styles actuels qui donnent confiance aux jeunes.", "Hoodie oversize"], ["adults", "Adultes (20&ndash;65 ans)", "Des basiques intemporels et des pi&egrave;ces fortes pour toute occasion.", "Manteau intemporel en laine"], ["seniors", "Seniors (65 ans et plus)", "Une &eacute;l&eacute;gance confortable, avec une attention particuli&egrave;re &agrave; la coupe.", "Blouse en lin confortable"]], segProducts: {
    baby: ["Body en coton doux", "Gigoteuse respirante", "Combinaison bébé ludique", "Bonnet doux pour bébé", "Coffret naissance vêtements"],
    kids: ["T-shirt ludique imprimé", "Jogging confortable", "Imperméable à capuche", "Pull coloré", "Short de sport"],
    teens: ["Hoodie oversize", "Jean slim", "T-shirt graphique", "Blouson bomber", "Lot de chaussettes sneakers"],
    adults: ["Manteau intemporel en laine", "Chemise classique", "Blazer élégant", "Chino confortable", "Foulard en soie"],
    seniors: ["Blouse en lin confortable", "Gilet doux", "Pantalon à taille élastique", "Imperméable respirant", "Pull polaire chaud"]
  }, whyTitle: "Pourquoi choisir AURA LUXE V&ecirc;tements", why: [["&#10022;", "Une seule exigence de qualit&eacute;", "Le m&ecirc;me soin que nos collections beaut&eacute;, d&eacute;sormais appliqu&eacute; aux v&ecirc;tements."], ["&#128230;", "Visuels propres par segment", "Chaque tranche d'&acirc;ge re&ccedil;oit des visuels pertinents, jamais des photos g&eacute;n&eacute;riques."], ["&#9989;", "D&eacute;lai de livraison transparent", "Livraison toujours visible avant le paiement, pour chaque segment."], ["&#128274;", "S&eacute;curis&eacute; & fiable", "Vous achetez directement et en toute s&eacute;curit&eacute; chez le d&eacute;taillant ; nous vous orientons simplement, en toute honn&ecirc;tet&eacute;."]] }
    },
    trust: ["Avis 100% indépendant", "Comparé chez 5+ détaillants premium", "Toujours le meilleur prix", "Livraison via le détaillant de votre choix"],
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
    hero: { tag: "Independent beauty advice · BE / NL / FR / DE", h1b: "Luxury Beauty", h1c: "that we test honestly for you", sub: "We compare skincare, fragrance and make-up across top retailers like Douglas, Lookfantastic and Rituals — so you always make the best choice, at the best price.", cta1: "See our Top Picks", cta2: "How we work" },
    cats: ["Skincare", "Fragrance", "Make-up", "Accessories", "Home & Wellness", "Clothing"],
    catDesc: ["A ritual for every day", "A signature, not just a scent", "Refined, never too much", "The final, considered touch", "Luxury that stays home", "For the whole family"],
    shopCats: {
      skincare: { tag: "AURA LUXE &middot; Skincare", h1: "Skincare", sub: "Skincare as a daily ritual, not a chore", badge: "Collection coming soon", intro: "Our skincare selection is built around products that actually work while bringing a moment of calm to the day. No twenty-step routines &mdash; just a considered edit of cleansers, treatments and protection, matched to what skin genuinely needs. Every brand is chosen for active ingredients, provenance and results, not packaging alone.", segTitle: "What you'll find in Skincare", segSub: "Three pillars, one philosophy: care that works", segs: [["beauty", "Face Care", "Cleansers, serums and creams for every skin type &mdash; from hydration to anti-ageing.", "Hydrating day cream"], ["rituals", "Rituals & Textures", "Products that turn the skincare moment into an experience.", "Calming face serum"], ["home", "Bodycare & Wellness", "Body care held to the same standard as the face.", "Soothing body lotion"]], products: [["beauty", "Hydrating day cream"], ["rituals", "Calming face serum"], ["home", "Soothing body lotion"], ["beauty", "Micellar cleansing gel"], ["rituals", "Nourishing night cream"]], whyTitle: "Why AURA LUXE Skincare", why: [["&#10022;", "Carefully curated", "Every product is judged on ingredients, efficacy and origin before it joins the collection."], ["&#128230;", "No copy-paste catalogue", "Original descriptions and imagery &mdash; never lifted from the supplier."], ["&#9989;", "Transparent delivery", "Delivery clarity shown before checkout, no surprises."], ["&#128274;", "Safe & trusted", "You buy directly and securely from the retailer itself; we simply point you there, honestly."]] },
      parfum: { tag: "AURA LUXE &middot; Fragrance", h1: "Fragrance", sub: "A signature, not a scent that fades by tomorrow", badge: "Collection coming soon", intro: "Fragrance is the most personal part of any routine &mdash; it lingers after you've left the room. Our selection focuses on scents with character: from timeless classics to niche compositions that stand out without overwhelming. No endless tester walls, just a curated edit that makes the difference.", segTitle: "What you'll find in Fragrance", segSub: "A scent for every moment", segs: [["parfum", "Signature Eau de Parfum", "Powerful, long-lasting compositions for those who want a recognisable scent.", "Signature eau de parfum 50ml"], ["rituals", "Scent Rituals & Body Mist", "Lighter textures to refresh throughout the day without overdoing it.", "Refreshing body mist"], ["beauty", "Discovery Sets & Miniatures", "Ideal for discovering a new scent or gifting.", "Discovery set miniatures"]], products: [["parfum", "Signature eau de parfum 50ml"], ["rituals", "Refreshing body mist"], ["beauty", "Discovery set miniatures"], ["parfum", "Home fragrance candle"], ["rituals", "Travel-size roll-on perfume"]], whyTitle: "Why AURA LUXE Fragrance", why: [["&#10022;", "Character over trend", "We choose scents that keep making sense, not just what's popular today."], ["&#128230;", "Authentic product information", "Scent family, longevity and use clearly described &mdash; no vague marketing language."], ["&#9989;", "Transparent delivery", "Delivery time always visible before checkout."], ["&#128274;", "Safe & trusted", "You buy directly and securely from the retailer itself; we simply point you there, honestly."]] },
      makeup: { tag: "AURA LUXE &middot; Make-up", h1: "Make-up", sub: "Refined, never too much &mdash; make-up that respects the skin", badge: "Collection coming soon", intro: "Make-up that looks good starts with a good formula. Our selection combines coverage and pigmentation with skin-friendly ingredients, so the result looks beautiful and feels comfortable. From a natural daytime look to a bold evening look &mdash; always with products that deliver on their promise.", segTitle: "What you'll find in Make-up", segSub: "From base to finishing touch", segs: [["makeup", "Complexion & Base", "Foundation, concealer and powder for an even, breathable finish.", "Long-wear foundation"], ["beauty", "Eyes & Lips", "Colour that lasts, from subtle to bold.", "Precision mascara"], ["rituals", "Tools & Accessories", "Brushes, sponges and accessories for a professional result at home.", "Professional brush set"]], products: [["makeup", "Long-wear foundation"], ["beauty", "Precision mascara"], ["rituals", "Professional brush set"], ["makeup", "Mattifying powder"], ["beauty", "Tinted nourishing lip balm"]], whyTitle: "Why AURA LUXE Make-up", why: [["&#10022;", "Quality over quantity", "A focused selection instead of an endless range that makes choosing harder."], ["&#128230;", "Original imagery", "Every swatch and product photo in our own house style &mdash; never supplier images."], ["&#9989;", "Transparent delivery", "Delivery always shown before checkout."], ["&#128274;", "Safe & trusted", "You buy directly and securely from the retailer itself; we simply point you there, honestly."]] },
      accessoires: { tag: "AURA LUXE &middot; Accessories", h1: "Accessories", sub: "The final, considered touch that completes a look", badge: "Collection in progress", intro: "Accessories are the difference between finished and almost finished \u2014 a bag, a piece of jewelry, sunglasses that add just the right amount of character. Our selection focuses on timeless, quality pieces, not disposable trends. Every piece is chosen for its finish, material and origin, so it lasts for years.", segTitle: "What you'll find in Accessories", segSub: "Three categories, one eye for quality", segs: [["rituals", "Bags", "Handbags and clutches that are both functional and timeless.", "Leather shoulder bag"], ["fashion", "Jewelry", "Necklaces, earrings and rings that subtly finish an outfit.", "Fine gold necklace"], ["beauty", "Sunglasses & Belts", "The details that complete a silhouette.", "Classic sunglasses"]], products: [["rituals", "Leather shoulder bag"], ["fashion", "Fine gold necklace"], ["beauty", "Classic sunglasses"], ["rituals", "Leather belt"], ["fashion", "Pearl stud earrings"]], whyTitle: "Why AURA LUXE Accessories", why: [["&#10022;", "Carefully selected", "Every piece is assessed on material, finish and origin before it makes the collection."], ["&#128230;", "Never a copy-paste catalogue", "Our own product descriptions and imagery \u2014 never lifted straight from the supplier."], ["&#9989;", "Transparent delivery", "Delivery clarity shown before checkout, no surprises."], ["&#128274;", "Safe & trusted", "You buy directly and securely from the retailer itself; we simply point you there, honestly."]] },
      home: { tag: "AURA LUXE &middot; Home & Wellness", h1: "Home & Wellness", sub: "Luxury that stays home, even after the door closes", badge: "Collection coming soon", intro: "Wellbeing doesn't stop at the bathroom mirror. Our Home & Wellness selection brings the same refinement to the rest of the house &mdash; scented candles, bath and shower essentials, and small rituals that make an ordinary evening a little more special. Selected for quality, scent and finish.", segTitle: "What you'll find in Home & Wellness", segSub: "Calm and refinement for the home", segs: [["home", "Candles & Diffusers", "Signature home scents, long-lasting and subtle.", "Signature scented candle"], ["rituals", "Bath & Shower Rituals", "Nurturing essentials for a moment of relaxation.", "Nourishing shower gel"], ["beauty", "Small Luxury Accents", "Details that make an interior that little bit more refined.", "Decorative luxury accent"]], products: [["home", "Signature scented candle"], ["rituals", "Nourishing shower gel"], ["beauty", "Decorative luxury accent"], ["home", "Aromatic diffuser oil"], ["rituals", "Soft bath towel set"]], whyTitle: "Why AURA LUXE Home & Wellness", why: [["&#10022;", "Selected for scent & finish", "Only products that genuinely change the experience at home."], ["&#128230;", "No copy-paste catalogue", "Original descriptions, never supplier text copied verbatim."], ["&#9989;", "Transparent delivery", "Delivery clearly shown before checkout."], ["&#128274;", "Safe & trusted", "You buy directly and securely from the retailer itself; we simply point you there, honestly."]] },
      kleding: { tag: "AURA LUXE &middot; Clothing", h1: "Clothing for the whole family", sub: "From first onesies to timeless elegance &mdash; ages 0 to 65+", badge: "Collection coming soon", intro: "Clothing is AURA LUXE's newest expansion: premium, carefully made clothing for the whole family, from babies to seniors. The same quality standard as our beauty collections &mdash; carefully selected brands, honest materials and a fit that's right &mdash; now applied to what you wear, not just what you put on your skin.", segTitle: "Clothing by life stage", segSub: "Five age segments, the same care every time", segs: [["baby", "Baby & Toddler (0&ndash;4 years)", "Soft, skin-friendly fabrics for the very youngest.", "Soft cotton onesie"], ["kids", "Kids (4&ndash;10 years)", "Playful, practical clothing that survives an active day.", "Playful printed t-shirt"], ["teens", "Teens (10&ndash;19 years)", "Contemporary styles that help young people feel confident.", "Oversized hoodie"], ["adults", "Adults (20&ndash;65 years)", "Timeless basics and statement pieces for every occasion.", "Timeless wool coat"], ["seniors", "Seniors (65+ years)", "Comfortable elegance with attention to fit and wearability.", "Comfortable linen blouse"]], segProducts: {
    baby: ["Soft cotton onesie", "Breathable sleep sack", "Playful baby jumpsuit", "Soft baby hat", "Newborn gift clothing set"],
    kids: ["Playful printed t-shirt", "Comfortable jogger", "Hooded rain jacket", "Colourful sweater", "Sporty shorts"],
    teens: ["Oversized hoodie", "Slim-fit jeans", "Graphic t-shirt", "Bomber jacket", "Sneaker sock set"],
    adults: ["Timeless wool coat", "Classic shirt", "Elegant blazer", "Comfortable chinos", "Silk scarf"],
    seniors: ["Comfortable linen blouse", "Soft cardigan", "Elastic-waist trousers", "Breathable raincoat", "Warm fleece jumper"]
  }, whyTitle: "Why AURA LUXE Clothing", why: [["&#10022;", "One quality standard", "The same care as our beauty collections, now applied to clothing."], ["&#128230;", "Original imagery per segment", "Every age group gets on-topic imagery, never generic stock photos."], ["&#9989;", "Transparent delivery", "Delivery always shown before checkout, for every segment."], ["&#128274;", "Safe & trusted", "You buy directly and securely from the retailer itself; we simply point you there, honestly."]] }
    },
    trust: ["100% independent advice", "Compared across 5+ premium retailers", "Always the sharpest price", "Delivery via your chosen retailer"],
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
  },
  de: {
    nav: { home: "Home", shop: "Shop", psy: "Psychologie", cons: "Consultancy", cro: "Fractional CRO", graf: "Grafikbranche", chat: "Kundenservice" },
    hero: { tag: "Unabh\u00e4ngige Beauty-Beratung \u00b7 BE / NL / FR / DE", h1b: "Luxury Beauty", h1c: "die wir ehrlich f\u00fcr Sie testen", sub: "Wir vergleichen Hautpflege, Parfum und Make-up bei Top-H\u00e4ndlern wie Douglas, Lookfantastic und Rituals \u2014 damit Sie immer die beste Wahl treffen, zum besten Preis.", cta1: "Unsere Top Picks entdecken", cta2: "So arbeiten wir" },
    cats: ["Hautpflege", "Parfum", "Make-up", "Accessoires", "Home & Wellness", "Kleidung"],
    catDesc: ["Ritual f\u00fcr jeden Tag", "Eine Signatur, kein Duft", "Verfeinert, nie zu viel", "Der letzte, durchdachte Akzent", "Luxus, der zu Hause bleibt", "F\u00fcr die ganze Familie"],
    shopCats: {
      skincare: { tag: "AURA LUXE &middot; Hautpflege", h1: "Hautpflege", sub: "Hautpflege als t\u00e4gliches Ritual, nicht als Pflicht", badge: "Kollektion im Aufbau", intro: "Unsere Hautpflege-Auswahl dreht sich um Produkte, die wirken &mdash; und einen Moment der Ruhe in den Tag bringen. Keine \u00fcberladenen Routinen mit zwanzig Schritten, sondern eine durchdachte Auswahl an Reinigung, Pflege und Schutz &mdash; abgestimmt auf das, was die Haut wirklich braucht. Jede Marke wird nach wirksamen Inhaltsstoffen, Herkunft und Ergebnis ausgew\u00e4hlt, nicht nur nach der Verpackung.", segTitle: "Was Sie bei Hautpflege finden", segSub: "Drei S\u00e4ulen, eine Philosophie: Pflege, die wirkt", segs: [["beauty", "Gesichtspflege", "Reiniger, Seren und Cremes f\u00fcr jeden Hauttyp &mdash; von Feuchtigkeit bis Anti-Aging.", "Feuchtigkeitsspendende Tagescreme"], ["rituals", "Rituale & Texturen", "Produkte, die den Pflegemoment selbst zu einem Erlebnis machen.", "Beruhigendes Gesichtsserum"], ["home", "Bodycare & Wellness", "K\u00f6rperpflege auf demselben Qualit\u00e4tsniveau wie f\u00fcrs Gesicht.", "Pflegende Body Lotion"]], products: [["beauty", "Feuchtigkeitsspendende Tagescreme"], ["rituals", "Beruhigendes Gesichtsserum"], ["home", "Pflegende Body Lotion"], ["beauty", "Reinigendes Mizellen-Gel"], ["rituals", "N\u00e4hrende Nachtcreme"]], whyTitle: "Warum AURA LUXE Hautpflege", why: [["&#10022;", "Sorgf\u00e4ltig ausgew\u00e4hlt", "Jedes Produkt wird vor Aufnahme in die Kollektion auf Inhaltsstoffe, Wirksamkeit und Herkunft gepr\u00fcft."], ["&#128230;", "Kein Copy-Paste-Katalog", "Eigene Produktbeschreibungen und Bildmaterial &mdash; nie unver\u00e4ndert vom Lieferanten \u00fcbernommen."], ["&#9989;", "Transparente Lieferzeit", "Klarheit \u00fcber die Lieferung vor dem Bezahlen, keine \u00dcberraschungen danach."], ["&#128274;", "Sicher & vertrauensw\u00fcrdig", "Sie kaufen direkt und sicher beim H\u00e4ndler selbst; wir verweisen Sie lediglich ehrlich weiter."]] },
      parfum: { tag: "AURA LUXE &middot; Parfum", h1: "Parfum", sub: "Eine Signatur, kein Duft, der morgen schon verflogen ist", badge: "Kollektion im Aufbau", intro: "Parfum ist der pers\u00f6nlichste Teil einer Pflegeroutine &mdash; er bleibt, nachdem Sie den Raum bereits verlassen haben. Unsere Auswahl konzentriert sich auf Duft mit Charakter: von zeitlosen Klassikern bis zu Nischenkompositionen, die auffallen, ohne zu \u00fcberw\u00e4ltigen. Keine endlosen Testerregale, sondern eine kuratierte Auswahl, die den Unterschied macht.", segTitle: "Was Sie bei Parfum finden", segSub: "F\u00fcr jeden Moment der passende Duft", segs: [["parfum", "Signature Eau de Parfum", "Kraftvolle, langanhaltende Kompositionen f\u00fcr alle, die einen wiedererkennbaren Duft w\u00fcnschen.", "Signature Eau de Parfum 50ml"], ["rituals", "Duftrituale & Body Mist", "Leichtere Texturen zum Auffrischen \u00fcber den Tag, ohne zu \u00fcberladen.", "Erfrischender Body Mist"], ["beauty", "Duftsets & Miniaturen", "Ideal, um einen neuen Duft zu entdecken oder zu verschenken.", "Entdeckungsset Miniaturen"]], products: [["parfum", "Signature Eau de Parfum 50ml"], ["rituals", "Erfrischender Body Mist"], ["beauty", "Entdeckungsset Miniaturen"], ["parfum", "Duftkerze Raumduft"], ["rituals", "Roll-on Parfum Reisegr\u00f6\u00dfe"]], whyTitle: "Warum AURA LUXE Parfum", why: [["&#10022;", "Charakter statt Trend", "Wir w\u00e4hlen D\u00fcfte, die auch morgen noch \u00fcberzeugen, nicht nur, was heute gerade angesagt ist."], ["&#128230;", "Authentische Produktinformation", "Duftfamilie, Haltbarkeit und Anwendung klar beschrieben &mdash; keine vage Marketingsprache."], ["&#9989;", "Transparente Lieferzeit", "Lieferfrist immer sichtbar vor dem Bezahlen."], ["&#128274;", "Sicher & vertrauensw\u00fcrdig", "Sie kaufen direkt und sicher beim H\u00e4ndler selbst; wir verweisen Sie lediglich ehrlich weiter."]] },
      makeup: { tag: "AURA LUXE &middot; Make-up", h1: "Make-up", sub: "Verfeinert, nie zu viel &mdash; Make-up, das die Haut respektiert", badge: "Kollektion im Aufbau", intro: "Make-up, das gut aussieht, beginnt mit einer guten Formel. Unsere Auswahl kombiniert Deckkraft und Pigmentierung mit hautfreundlichen Inhaltsstoffen, damit das Ergebnis sch\u00f6n ist &mdash; und die Haut nicht belastet. Vom nat\u00fcrlichen Tageslook bis zum ausdrucksstarken Abendlook &mdash; stets mit Produkten, die ihr Versprechen halten.", segTitle: "Was Sie bei Make-up finden", segSub: "Von der Basis bis zum letzten Schliff", segs: [["makeup", "Teint & Basis", "Foundation, Concealer und Puder f\u00fcr einen ebenm\u00e4\u00dfigen, atmenden Teint.", "Langanhaltende Foundation"], ["beauty", "Augen & Lippen", "Farbe, die h\u00e4lt, von dezent bis ausdrucksstark.", "Pr\u00e4zisions-Mascara"], ["rituals", "Tools & Zubeh\u00f6r", "Pinsel, Schw\u00e4mme und Zubeh\u00f6r f\u00fcr ein professionelles Ergebnis zu Hause.", "Professionelles Pinselset"]], products: [["makeup", "Langanhaltende Foundation"], ["beauty", "Pr\u00e4zisions-Mascara"], ["rituals", "Professionelles Pinselset"], ["makeup", "Mattierendes Puder"], ["beauty", "Pflegender Lippenbalsam mit Farbe"]], whyTitle: "Warum AURA LUXE Make-up", why: [["&#10022;", "Qualit\u00e4t statt Quantit\u00e4t", "Eine gezielte Auswahl statt eines endlosen Angebots, das die Wahl erschwert."], ["&#128230;", "Eigenes Bildmaterial", "Jeder Swatch und jedes Produktfoto im eigenen Stil &mdash; keine Lieferantenbilder."], ["&#9989;", "Transparente Lieferzeit", "Lieferung immer sichtbar vor dem Bezahlen."], ["&#128274;", "Sicher & vertrauensw\u00fcrdig", "Sie kaufen direkt und sicher beim H\u00e4ndler selbst; wir verweisen Sie lediglich ehrlich weiter."]] },
      accessoires: { tag: "AURA LUXE &middot; Accessoires", h1: "Accessoires", sub: "Der letzte, durchdachte Akzent, der einen Look vollendet", badge: "Kollektion im Aufbau", intro: "Accessoires machen den Unterschied zwischen fertig und fast fertig \u2014 eine Tasche, ein Schmuckst\u00fcck, eine Sonnenbrille, die genau den richtigen Charakter hinzuf\u00fcgt. Unsere Auswahl setzt auf zeitlose, hochwertige St\u00fccke statt Wegwerftrends. Jedes St\u00fcck wird nach Verarbeitung, Material und Herkunft ausgew\u00e4hlt.", segTitle: "Das finden Sie bei Accessoires", segSub: "Drei Kategorien, ein Blick f\u00fcr Qualit\u00e4t", segs: [["rituals", "Taschen", "Handtaschen und Clutches, funktional und zeitlos zugleich.", "Ledertasche mit Schulterriemen"], ["fashion", "Schmuck", "Ketten, Ohrringe und Ringe, die ein Outfit dezent abrunden.", "Feine Goldkette"], ["beauty", "Sonnenbrillen & G\u00fcrtel", "Die Details, die eine Silhouette vervollst\u00e4ndigen.", "Klassische Sonnenbrille"]], products: [["rituals", "Ledertasche mit Schulterriemen"], ["fashion", "Feine Goldkette"], ["beauty", "Klassische Sonnenbrille"], ["rituals", "Ledergürtel"], ["fashion", "Perlenohrringe"]], whyTitle: "Warum AURA LUXE Accessoires", why: [["&#10022;", "Sorgf\u00e4ltig ausgew\u00e4hlt", "Jedes St\u00fcck wird vor Aufnahme in die Kollektion auf Material, Verarbeitung und Herkunft gepr\u00fcft."], ["&#128230;", "Kein Copy-Paste-Katalog", "Eigene Produktbeschreibungen und Bilder \u2014 nie einfach vom Lieferanten \u00fcbernommen."], ["&#9989;", "Transparente Lieferzeit", "Lieferfrist immer sichtbar vor dem Bezahlen."], ["&#128274;", "Sicher & vertrauensw\u00fcrdig", "Sie kaufen direkt und sicher beim H\u00e4ndler selbst; wir verweisen Sie lediglich ehrlich weiter."]] },
      home: { tag: "AURA LUXE &middot; Home & Wellness", h1: "Home & Wellness", sub: "Luxus, der zu Hause bleibt, auch nachdem sich die T\u00fcr hinter Ihnen schlie\u00dft", badge: "Kollektion im Aufbau", intro: "Wohlbefinden endet nicht am Badezimmerspiegel. Unsere Home & Wellness-Auswahl bringt dieselbe Raffinesse in den Rest des Hauses &mdash; Duftkerzen, Bad- und Dusch-Essentials und kleine Rituale, die einen gew\u00f6hnlichen Abend etwas besonderer machen. Ausgew\u00e4hlt nach Qualit\u00e4t, Duft und Verarbeitung.", segTitle: "Was Sie bei Home & Wellness finden", segSub: "Ruhe und Raffinesse f\u00fcrs Zuhause", segs: [["home", "Duftkerzen & Diffuser", "Signaturd\u00fcfte f\u00fcrs Zuhause, langanhaltend und subtil.", "Signatur-Duftkerze"], ["rituals", "Bad & Dusch-Rituale", "Pflegende Essentials f\u00fcr einen Moment der Entspannung.", "Pflegendes Duschgel"], ["beauty", "Kleine Luxus-Akzente", "Details, die ein Interieur noch etwas raffinierter machen.", "Dekoratives Luxus-Accessoire"]], products: [["home", "Signatur-Duftkerze"], ["rituals", "Pflegendes Duschgel"], ["beauty", "Dekoratives Luxus-Accessoire"], ["home", "Aromatisches Diffuser-\u00d6l"], ["rituals", "Weiches Badehandtuch-Set"]], whyTitle: "Warum AURA LUXE Home & Wellness", why: [["&#10022;", "Ausgew\u00e4hlt nach Duft & Verarbeitung", "Nur Produkte, die zu Hause wirklich einen Unterschied machen."], ["&#128230;", "Kein Copy-Paste-Katalog", "Eigene Beschreibungen, keine wortw\u00f6rtlichen Lieferantentexte."], ["&#9989;", "Transparente Lieferzeit", "Lieferung klar sichtbar vor dem Bezahlen."], ["&#128274;", "Sicher & vertrauensw\u00fcrdig", "Sie kaufen direkt und sicher beim H\u00e4ndler selbst; wir verweisen Sie lediglich ehrlich weiter."]] },
      kleding: { tag: "AURA LUXE &middot; Kleidung", h1: "Kleidung f\u00fcr die ganze Familie", sub: "Vom ersten Strampler bis zur zeitlosen Eleganz &mdash; 0 bis 65+ Jahre", badge: "Kollektion im Aufbau", intro: "Kleidung ist die neueste Erweiterung von AURA LUXE: hochwertig und sorgf\u00e4ltig gefertigte Kleidung f\u00fcr die ganze Familie, vom Baby bis zum Senior. Derselbe Qualit\u00e4tsstandard wie unsere Beauty-Kollektionen &mdash; sorgf\u00e4ltig ausgew\u00e4hlte Marken, ehrliche Materialien und eine Passform, die stimmt &mdash; jetzt auch f\u00fcr das, was Sie tragen, nicht nur f\u00fcr das, was Sie auf die Haut auftragen.", segTitle: "Kleidung nach Lebensphase", segSub: "F\u00fcnf Altersgruppen, stets dieselbe Sorgfalt", segs: [["baby", "Baby & Kleinkind (0&ndash;4 Jahre)", "Weiche, hautfreundliche Stoffe f\u00fcr die Kleinsten.", "Weicher Baumwoll-Strampler"], ["kids", "Kids (4&ndash;10 Jahre)", "Verspielte, praktische Kleidung, die einen aktiven Tag \u00fcbersteht.", "Verspieltes T-Shirt mit Print"], ["teens", "Teenager (10&ndash;19 Jahre)", "Zeitgem\u00e4\u00dfe Styles, mit denen sich Jugendliche selbstbewusst f\u00fchlen.", "Oversized Hoodie"], ["adults", "Erwachsene (20&ndash;65 Jahre)", "Zeitlose Basics und Statement-St\u00fccke f\u00fcr jeden Anlass.", "Zeitloser Wollmantel"], ["seniors", "Senioren (65+ Jahre)", "Komfortable Eleganz mit Blick auf Passform und Tragekomfort.", "Komfortable Leinenbluse"]], segProducts: {
    baby: ["Weicher Baumwoll-Strampler", "Atmungsaktiver Schlafsack", "Verspielter Baby-Overall", "Weiche Baby-M\u00fctze", "Geschenkset Baby-Kleidung"],
    kids: ["Verspieltes T-Shirt mit Print", "Bequemer Jogger", "Regenjacke mit Kapuze", "Farbenfroher Pullover", "Sportliche Shorts"],
    teens: ["Oversized Hoodie", "Slim-Fit Jeans", "Grafisches T-Shirt", "Bomberjacke", "Sneakersocken-Set"],
    adults: ["Zeitloser Wollmantel", "Klassisches Hemd", "Elegante Blazer", "Bequeme Chino", "Seidenschal"],
    seniors: ["Komfortable Leinenbluse", "Weiche Strickjacke", "Hose mit elastischem Bund", "Atmungsaktive Regenjacke", "Warmer Fleecepullover"]
  }, whyTitle: "Warum AURA LUXE Kleidung", why: [["&#10022;", "Ein Qualit\u00e4tsstandard", "Dieselbe Sorgfalt wie bei unseren Beauty-Kollektionen, jetzt auch f\u00fcr Kleidung."], ["&#128230;", "Eigenes Bildmaterial pro Segment", "Jede Altersgruppe erh\u00e4lt passendes Bildmaterial, keine generischen Stockfotos."], ["&#9989;", "Transparente Lieferzeit", "Lieferung f\u00fcr jedes Segment immer sichtbar vor dem Bezahlen."], ["&#128274;", "Sicher & vertrauensw\u00fcrdig", "Sie kaufen direkt und sicher beim H\u00e4ndler selbst; wir verweisen Sie lediglich ehrlich weiter."]] }
    },
    trust: ["100% unabh\u00e4ngige Beratung", "Verglichen bei 5+ Top-H\u00e4ndlern", "Immer der beste Preis", "Lieferung \u00fcber den H\u00e4ndler Ihrer Wahl"],
    more: "Mehr erfahren \u2192",
    brands: "Unsere Marken",
    brandsSub: "Ausgew\u00e4hlte Premium-Partner",
    services: "Revenue Agency",
    chatWelcome: "Willkommen bei AURA LUXE! Ich bin Ihr pers\u00f6nlicher Assistent und helfe Ihnen 24 Stunden am Tag, 7 Tage die Woche. Wie kann ich Ihnen helfen?",
    chatPlaceholder: "Stellen Sie Ihre Frage...",
    chatSend: "Senden",
    chatTitle: "\ud83d\udc51 AURA LUXE \u2014 Kundenservice 24/7",
    chatSubtitle: "Immer verf\u00fcgbar \u00b7 Ihre Sprache \u00b7 Spezialisierte Hilfe",
    psy: { hero: "Ihr Wohlbefinden steht im Mittelpunkt", heroSub: "Online-Begleitung per gesichertem Chat. Vollst\u00e4ndig vertraulich und professionell.", book: "Sitzung buchen & bezahlen", chatTitle: "Chat nach Bezahlung", chatInfo: "Nach der Bezahlung erhalten Sie sofortigen Zugang zum gesicherten Chat mit Ihrem Psychologen.", howTitle: "Wie funktioniert es?", steps: ["W\u00e4hlen Sie Ihre Sitzungsdauer und bezahlen Sie \u00fcber Stripe", "Nach Best\u00e4tigung: sofortiger Zugang zum gesicherten Chat", "Chatten Sie mit Ihrem Psychologen zum vereinbarten Zeitpunkt", "Vollst\u00e4ndig vertraulich \u00b7 DSGVO-konform"], sessions: [["30 Minuten", "Erstes Kennenlernen oder kurze Nachbesprechung"], ["60 Minuten", "Standard-Therapiegespr\u00e4ch"], ["90 Minuten", "Vertiefende Sitzung oder Erstgespr\u00e4ch"]], s: [["\ud83e\udde0", "Einzeltherapie", "Begleitung bei Stress, Angst, Burnout und Lebensfragen."], ["\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67", "Familientherapie", "Unterst\u00fctzung f\u00fcr Familien, Paare und Eltern."], ["\ud83e\uddd2", "Jugendpsychologie", "Begleitung f\u00fcr Kinder und Jugendliche (6\u201325 Jahre)."], ["\ud83d\udcbc", "Betriebspsychologie", "Burnout-Pr\u00e4vention, Wiedereingliederung und F\u00fchrungscoaching."], ["\ud83c\udf31", "Life Coaching", "Pers\u00f6nliches Wachstum, Ziele und Sinnfindung."], ["\ud83e\udde9", "Traumaverarbeitung", "EMDR \u00b7 PTBS \u00b7 komplexes Trauma \u00b7 unter Supervision."]], email: "psy@bierinckx.com", privacy: "\ud83d\udd12 Vollst\u00e4ndig vertraulich \u00b7 DSGVO-konform \u00b7 Ende-zu-Ende verschl\u00fcsselt" },
    cons: { hero: "Optimieren Sie Ihre Organisation", heroSub: "Ergebnisorientierte Begleitung f\u00fcr KMU in den Benelux-L\u00e4ndern. Preis stets ma\u00dfgeschneidert per Angebot.", cta: "Unverbindliches Gespr\u00e4ch vereinbaren", dienstenTitle: "Unsere Leistungen", diensten: [["\ud83d\udd0d", "Prozessanalyse & -optimierung", "Vollst\u00e4ndige Durchleuchtung Ihrer Gesch\u00e4ftsprozesse. As-is-Mapping, Engpasserkennung und To-be-Design."], ["\ud83d\udc65", "Mitarbeitergespr\u00e4che", "Professionelle Vorbereitung, Begleitung und Nachverfolgung von Mitarbeiter- und 360\u00b0-Bewertungen."], ["\ud83c\udfaf", "Stellenoptimierung & -analyse", "Gr\u00fcndliche Analyse von Stellen, Rollen und Verantwortlichkeiten. RACI-Matrizen und Organigramm-Optimierung."], ["\ud83e\udd16", "KI-Einf\u00fchrung & Implementierung", "KI-Reifegradanalyse, LLM-Auswahl und Implementierungsbegleitung."], ["\ud83d\udcc8", "Lean Six Sigma", "Verschwendungsreduktion, DMAIC, Kaizen-Events und kontinuierliche Verbesserungszyklen."], ["\ud83c\udf93", "Teamentwicklung & Training", "Schulungsprogramme und Wissenssicherung nach jedem Projekt."]], aanpakTitle: "Unser Vorgehen", steps: ["Kostenloses Erstgespr\u00e4ch (60 Min.)", "Ma\u00dfgeschneiderte Analyse", "Angebot nach dem Erstgespr\u00e4ch", "Nach Zusage: Bezahlung \u00fcber Stripe", "Projektstart \u00b7 Nachbetreuung nach 30 & 90 Tagen"], email: "consultancy@bierinckx.com", prijsNote: "Alle Tarife werden in einem pers\u00f6nlichen Angebot nach dem Erstgespr\u00e4ch festgelegt. Keine \u00dcberraschungen." },
    cro: { hero: "Wachstum ohne die Kosten einer Vollzeit-CRO", heroSub: "Strategische Revenue-F\u00fchrung f\u00fcr AI/SaaS Scale-ups in BE \u00b7 NL \u00b7 DE.", what: "Was ist ein Fractional CRO?", whatTxt: "Ein Chief Revenue Officer auf Teilzeitbasis. Tarife werden gemeinsam festgelegt und in einem ma\u00dfgeschneiderten Angebot fixiert.", fasesTitle: "Unsere Phasen", fases: [["Phase 1 \u2014 Audit & Aufbau", "Strategisches Audit \u00b7 Pipeline-Aufbau \u00b7 erste Ergebnisse."], ["Phase 2+ \u2014 Skalierung", "Team-Leadership \u00b7 internationales Wachstum \u00b7 wiederkehrender Umsatz."]], targets: ["AI/SaaS-Unternehmen \u00b7 10\u201350 FTE", "Series A/B-Finanzierung", "T\u00e4tig in BE \u00b7 NL \u00b7 DE \u00b7 international", "Bereit f\u00fcr die n\u00e4chste Wachstumsphase"], email: "sales@bierinckx.com", cta: "Strategiegespr\u00e4ch anfragen", prijsNote: "Tarife werden in einem pers\u00f6nlichen Angebot nach einem Erstgespr\u00e4ch festgelegt." },
    graf: { hero: "Ersatzteile und Verbrauchsmaterial ohne Aufwand", heroSub: "Druckereien, Reprografie, Verpackung und Beschilderung in BE \u00b7 NL \u00b7 LU \u2014 marktgerechte Preise, schnelle Lieferung, immer das richtige Ersatzteil.", cta: "Preisvergleich anfragen", dienstenTitle: "Unsere Leistungen", diensten: [["\ud83d\udda8\ufe0f", "Verbrauchsmaterial & Ersatzteile", "Toner, Trommeln, Tinte und Ersatzteile f\u00fcr g\u00e4ngige Druckmaschinen und Gro\u00dfformatdrucker. Marktgerechte Preise durch direkten Gro\u00dfhandelseinkauf."], ["\ud83d\udce6", "Schnelle Lieferung Benelux", "Standardbestellungen liefern wir innerhalb von 24\u201348 Std. in BE/NL/LU. Eilbestellungen nach Absprache m\u00f6glich."], ["\ud83d\udd27", "Kompatibilit\u00e4tspr\u00fcfung vorab", "Wir pr\u00fcfen Maschinen- und Typennummer vor der Lieferung, sodass nie ein falsches Teil bestellt wird."], ["\ud83d\udcb6", "Kosteneinsparung ohne Qualit\u00e4tsverlust", "Vergleichbare Qualit\u00e4t zu einem niedrigeren Preis dank Skaleneffekten beim Einkauf \u2014 kein Kompromiss bei kritischen Teilen wie Druckwalzen."], ["\ud83d\udccb", "Fester Ansprechpartner", "Ein Ansprechpartner f\u00fcr Nachbestellungen, kein Callcenter."]], aanpakTitle: "So funktioniert es", steps: ["Senden Sie uns Ihren Maschinentyp + aktuellen Lieferanten/Preis", "Ma\u00dfgeschneiderter Preisvergleich, meist innerhalb von 24 Std.", "Erstbestellung zur Qualit\u00e4ts- und Lieferzeitkontrolle", "Feste Lieferabsprachen passend zu Ihrem Verbrauch"], email: "sales@bierinckx.com", prijsNote: "Preise sind marktgerecht und volumenabh\u00e4ngig \u2014 wir senden immer zuerst einen Vergleich mit Ihrem aktuellen Lieferanten, unverbindlich." }
  },
};
var PHOTOS = {
  hero: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=90&fit=crop",
  baby: "https://images.unsplash.com/photo-1617210251994-8ded7981d27a?w=600&q=85&fit=crop",
  kids: "https://images.unsplash.com/photo-1627859774205-83c1279a6382?w=600&q=85&fit=crop",
  teens: "https://images.unsplash.com/photo-1611817757591-c3f345024273?w=600&q=85&fit=crop",
  adults: "https://images.unsplash.com/photo-1620247405612-18f042ea68cf?w=600&q=85&fit=crop",
  seniors: "https://images.unsplash.com/photo-1616286608358-0e1b143f7d2f?w=600&q=85&fit=crop",
  home: "https://images.unsplash.com/photo-1630398777649-cdfc7c5e8a24?w=600&q=85&fit=crop",
  beauty: "https://images.unsplash.com/photo-1622618991227-412b19e4fef9?w=800&q=85&fit=crop",
  parfum: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?w=800&q=85&fit=crop",
  makeup: "https://images.unsplash.com/photo-1739950839930-ef45c078f316?w=800&q=85&fit=crop",
  rituals: "https://images.unsplash.com/photo-1748543668676-ea8241cb3886?w=800&q=85&fit=crop",
  fashion: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=85&fit=crop",
  lookfantastic: "https://images.unsplash.com/photo-1755699192991-1f49f76a8f0d?w=800&q=85&fit=crop"
};
var CAT_ICONS = [
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="20" r="10" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M14 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/><circle cx="22" cy="18" r="1.5" fill="#8B1A2B"/><circle cx="30" cy="18" r="1.5" fill="#8B1A2B"/><path d="M22 24c1 1.5 3 1.5 4 0" stroke="#8B1A2B" stroke-width="1.2" stroke-linecap="round"/><circle cx="34" cy="8" r="3" fill="#F5F3EE" stroke="#C9A96E" stroke-width="1.2"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="16" r="8" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M18 36v-6c0-3.314 3.582-6 8-6s8 2.686 8 6v6" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/><path d="M18 32l-4 6M34 32l4 6" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="15" r="9" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M17 38v-8a9 9 0 0118 0v8" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/><path d="M17 8c4-4 10-2 12 0" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><path d="M14 22h24l2 20a2 2 0 01-2 2H14a2 2 0 01-2-2l2-20z" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5" stroke-linejoin="round"/><path d="M19 22v-4a7 7 0 0114 0v4" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="14" r="9" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M12 42c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/><path d="M23 18c1.2 1.5 3.6 1.5 4.8 0" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="14" r="9" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.5"/><path d="M14 42c0-7 5.373-12 12-12s12 5 12 12" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 52 52" fill="none"><path d="M8 26L26 10l18 16" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 22v18h24V22" stroke="#8B1A2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="21" y="30" width="10" height="10" rx="1" fill="#F5F3EE" stroke="#8B1A2B" stroke-width="1.2"/></svg>`
];
var CAT_KEYS = ["skincare", "parfum", "makeup", "accessoires", "home", "kleding"];
// Affiliate link cloaking: /go/{slug} -> lange Awin/affiliate-tracking-URL.
// Nog LEEG — wordt gevuld zodra Awin-account + eerste goedgekeurde partners actief zijn.
// Formaat: "product-slug": "https://www.awin1.com/cread.php?awinmid=...&awinaffid=...&ued=https%3A%2F%2Fmerchant.com%2Fproduct"
var AFFILIATE_LINKS = {};
var CAT_PHOTO_KEYS = ["beauty", "parfum", "makeup", "rituals", "home", "fashion"];
var CAT_SLUGS = {
  nl: ["skincare", "parfum", "make-up", "accessoires", "home-wellness", "kleding"],
  fr: ["soins", "parfum", "maquillage", "accessoires", "maison-bien-etre", "vetements"],
  en: ["skincare", "fragrance", "make-up", "accessories", "home-wellness", "clothing"],
  de: ["hautpflege", "parfum", "make-up", "accessoires", "home-wellness", "kleidung"]
};
var CAT_SLUG_TO_KEY = { nl: {}, fr: {}, en: {}, de: {} };
["nl", "fr", "en", "de"].forEach((l) => CAT_SLUGS[l].forEach((slug, i) => CAT_SLUG_TO_KEY[l][slug] = CAT_KEYS[i]));
var SEG_KEYS = ["baby", "kids", "teens", "adults", "seniors"];
var SEG_SLUGS = {
  nl: ["baby-peuter", "kids", "tieners", "volwassenen", "senioren"],
  fr: ["bebe-bambin", "enfants", "adolescents", "adultes", "seniors"],
  en: ["baby-toddler", "kids", "teens", "adults", "seniors"],
  de: ["baby-kleinkind", "kids", "teenager", "erwachsene", "senioren"]
};
var SEG_SLUG_TO_KEY = { nl: {}, fr: {}, en: {}, de: {} };
var SEG_KEY_TO_SLUG = { nl: {}, fr: {}, en: {}, de: {} };
["nl", "fr", "en", "de"].forEach((l) => SEG_SLUGS[l].forEach((slug, i) => { SEG_SLUG_TO_KEY[l][slug] = SEG_KEYS[i]; SEG_KEY_TO_SLUG[l][SEG_KEYS[i]] = slug; }));
var CART_SLUGS = { nl: "winkelwagen", fr: "panier", en: "cart", de: "warenkorb" };
var GEN_SEG_SLUGS = {
  skincare: {
    nl: ["gezichtsverzorging", "rituelen-texturen", "bodycare-wellness"],
    fr: ["soins-du-visage", "rituels-textures", "soins-corps-bien-etre"],
    en: ["face-care", "rituals-textures", "bodycare-wellness"],
    de: ["gesichtspflege", "rituale-texturen", "bodycare-wellness"]
  },
  parfum: {
    nl: ["eau-de-parfum-signature", "geurrituelen-body-mist", "geursets-miniaturen"],
    fr: ["eau-de-parfum-signature", "rituels-olfactifs-brumes", "coffrets-miniatures"],
    en: ["signature-eau-de-parfum", "scent-rituals-body-mist", "discovery-sets-miniatures"],
    de: ["signature-eau-de-parfum", "duftrituale-body-mist", "duftsets-miniaturen"]
  },
  makeup: {
    nl: ["teint-basis", "ogen-lippen", "tools-accessoires"],
    fr: ["teint-base", "yeux-levres", "outils-accessoires"],
    en: ["complexion-base", "eyes-lips", "tools-accessories"],
    de: ["teint-basis", "augen-lippen", "tools-zubehoer"]
  },
  accessoires: {
    nl: ["tassen", "sieraden", "zonnebrillen-riemen"],
    fr: ["sacs", "bijoux", "lunettes-ceintures"],
    en: ["bags", "jewelry", "sunglasses-belts"],
    de: ["taschen", "schmuck", "sonnenbrillen-guertel"]
  },
  home: {
    nl: ["geurkaarsen-diffusers", "bad-douche-rituelen", "kleine-luxe-accenten"],
    fr: ["bougies-diffuseurs", "rituels-bain-douche", "petits-accents-luxe"],
    en: ["candles-diffusers", "bath-shower-rituals", "small-luxury-accents"],
    de: ["duftkerzen-diffuser", "bad-dusch-rituale", "kleine-luxus-akzente"]
  }
};
var GEN_SEG_SLUG_TO_IDX = {};
var GEN_SEG_IDX_TO_SLUG = {};
Object.keys(GEN_SEG_SLUGS).forEach((catKey) => {
  GEN_SEG_SLUG_TO_IDX[catKey] = { nl: {}, fr: {}, en: {}, de: {} };
  GEN_SEG_IDX_TO_SLUG[catKey] = { nl: {}, fr: {}, en: {}, de: {} };
  ["nl", "fr", "en", "de"].forEach((l) => GEN_SEG_SLUGS[catKey][l].forEach((slug, i) => {
    GEN_SEG_SLUG_TO_IDX[catKey][l][slug] = i;
    GEN_SEG_IDX_TO_SLUG[catKey][l][i] = slug;
  }));
});
var FAVICON_SVG = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">&#128081;</text></svg>')}`;
var CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
:root{--cr:#FAF9F6;--iv:#F5F3EE;--bu:#8B1A2B;--bd:#6B1421;--bk:#1a1a1a;--gr:#555;--lt:#e8e0d0;--go:#C9A96E;--gd:#876932}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:system-ui,-apple-system,sans-serif;background:var(--cr);color:var(--bk);min-height:100vh}
nav{background:var(--cr);border-bottom:1px solid var(--lt);padding:0 2rem;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;height:64px}
.logo{font-family:'Playfair Display',Georgia,serif;font-size:1.35rem;font-weight:700;text-decoration:none;color:var(--bk);letter-spacing:.05em;display:flex;align-items:center;gap:.4rem}
.logo .cr{color:var(--go)}.logo span{color:var(--bu)}
.nl{display:flex;align-items:center;gap:1.2rem}
.hamburger{display:none;background:none;border:none;font-size:1.5rem;cursor:pointer;color:var(--ink)}
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
.stag{font-size:.65rem;letter-spacing:.25em;text-transform:uppercase;color:var(--gd);display:block;margin-bottom:.5rem}
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
.sg{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;max-width:1000px;margin:0 auto;background:var(--lt);border:1px solid var(--lt)}
.sc{padding:1.75rem 1.5rem;background:var(--cr);transition:all .22s;cursor:pointer;position:relative}
.sc::after{content:'';position:absolute;bottom:0;left:1.5rem;right:1.5rem;height:1px;background:var(--go);transform:scaleX(0);transition:transform .22s;transform-origin:left}
.sc:hover{background:var(--iv)}
.sc:hover::after{transform:scaleX(1)}
.si{font-size:1.4rem;margin-bottom:.75rem;opacity:.8}
.sct{font-family:'Playfair Display',Georgia,serif;font-size:1.02rem;font-weight:600;letter-spacing:.02em;margin-bottom:.45rem;color:var(--bk)}
.scd{font-size:.8rem;color:var(--gr);line-height:1.55;margin-bottom:.85rem}
.sl{font-size:.72rem;color:var(--bu);letter-spacing:.04em;display:flex;align-items:center;gap:.3rem}
.brands-row{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;max-width:1000px;margin:0 auto;border:1px solid var(--lt)}
.brand-card{padding:2rem 1rem;text-align:center;border-right:1px solid var(--lt);background:var(--cr);transition:all .22s;overflow:hidden}
.brand-card:last-child{border-right:none}
.brand-card:hover{background:var(--iv)}
.brand-img{width:100%;height:140px;object-fit:cover;margin-bottom:1rem;border-radius:1px}
.brand-name{font-family:'Playfair Display',Georgia,serif;font-size:.88rem;letter-spacing:.08em;color:var(--bk);text-transform:uppercase}
.brand-pct{font-size:.72rem;color:var(--gd);margin-top:.25rem}
.brand-card-type{padding:2.75rem 1rem;display:flex;align-items:center;justify-content:center;min-height:140px}
.brand-name-type{font-family:'Playfair Display',Georgia,serif;font-size:1rem;letter-spacing:.1em;color:var(--bk);text-transform:uppercase;position:relative;padding-bottom:.9rem}
.brand-name-type::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:28px;height:1px;background:var(--go)}
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
.prod-btn.active{cursor:pointer;background:var(--ac);color:#fff;border-color:var(--ac)}
.prod-btn.active:hover{opacity:.9}
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
@media(max-width:768px){.hamburger{display:block}.nl{display:none;position:absolute;top:100%;left:0;right:0;background:#fff;flex-direction:column;align-items:flex-start;gap:0;padding:.5rem 1.5rem 1rem;border-top:1px solid var(--lt);box-shadow:0 8px 16px rgba(0,0,0,.06);z-index:50}.nl.open{display:flex}.nl a,.nl>a{padding:.6rem 0;width:100%}.nl .ls{padding:.6rem 0}.trust{gap:1.5rem}.g6{grid-template-columns:repeat(2,1fr)}.sg{grid-template-columns:repeat(2,1fr)}.sc2{grid-template-columns:repeat(2,1fr)}.chat-window{width:calc(100vw - 2rem);right:1rem}}
@media(max-width:480px){.g6,.sc2,.sg{grid-template-columns:1fr}.feature-grid{grid-template-columns:1fr}}
`;
var CHAT_JS = /* @__PURE__ */ ((lang, welcome, placeholder, send, title2, subtitle) => `
<script>
(function(){
  const LANG = '${lang}';
  const WELCOME = ${JSON.stringify(welcome)};
  const SYSTEM_PROMPT = [
    'You are a specialized luxury lifestyle customer service agent for AURA LUXE by Bierinckx Revenue Agency.',
    'You speak the language of the user automatically (NL/FR/EN/DE).',
    'AURA LUXE is a mid-to-high end luxury beauty & lifestyle webshop for the whole family, in BE/NL/FR/DE.',
    'Categories: Skincare, Fragrance (Parfum), Make-up, Accessories, Home & Wellness, and Clothing (Kleding) for the whole family, ages 0-65+.',
    'Affiliate partners: Lookfantastic, Parfumdreams, Boozt, Douglas, Rituals. Never disclose partner fees, percentages, or arrangements to customers.',
    'AURA LUXE is a pure affiliate platform: we never process payment, delivery or returns ourselves. Customers complete purchase, delivery and any return directly on the retailer\\'s own website, under that retailer\\'s terms. We only serve BE, NL, FR, DE.',
    'Other services: Consultancy via consultancy@bierinckx.com, Fractional CRO via sales@bierinckx.com, Graphics industry parts & consumables via sales@bierinckx.com.',
    'Always be warm, professional and helpful. Answer in the same language the user writes in.',
    'If you cannot answer, direct the user to auraluxe@bierinckx.com.',
    'Keep responses concise, friendly and professional. Max 3 sentences unless more detail is needed.'
  ].join(' ');

  let history = [];
  let isOpen = false;

  const QUICK_OPTIONS = LANG === 'fr' ? [
    ['AURA LUXE (beaut\u00e9 & lifestyle)', 'auraluxe@bierinckx.com'],
    ['Psychologie', 'info@bierinckx.com'],
    ['Consultance', 'consultancy@bierinckx.com'],
    ['Fractional CRO', 'sales@bierinckx.com'],
    ['Industrie graphique', 'sales@bierinckx.com'],
    ['Autre chose', 'info@bierinckx.com']
  ] : LANG === 'en' ? [
    ['AURA LUXE (beauty & lifestyle)', 'auraluxe@bierinckx.com'],
    ['Psychology', 'info@bierinckx.com'],
    ['Consultancy', 'consultancy@bierinckx.com'],
    ['Fractional CRO', 'sales@bierinckx.com'],
    ['Graphics industry', 'sales@bierinckx.com'],
    ['Something else', 'info@bierinckx.com']
  ] : LANG === 'de' ? [
    ['AURA LUXE (Beauty & Lifestyle)', 'auraluxe@bierinckx.com'],
    ['Psychologie', 'info@bierinckx.com'],
    ['Consultancy', 'consultancy@bierinckx.com'],
    ['Fractional CRO', 'sales@bierinckx.com'],
    ['Grafikbranche', 'sales@bierinckx.com'],
    ['Etwas anderes', 'info@bierinckx.com']
  ] : [
    ['AURA LUXE (beauty & lifestyle)', 'auraluxe@bierinckx.com'],
    ['Psychologie', 'info@bierinckx.com'],
    ['Consultancy', 'consultancy@bierinckx.com'],
    ['Fractional CRO', 'sales@bierinckx.com'],
    ['Grafische Nijverheid', 'sales@bierinckx.com'],
    ['Iets anders', 'info@bierinckx.com']
  ];

  var CAT_NAMES = LANG === 'fr' ? ["Soins", "Parfum", "Maquillage", "Accessoires", "Maison & Bien-\u00eatre", "V\u00eatements"] :
    LANG === 'en' ? ["Skincare", "Fragrance", "Make-up", "Accessories", "Home & Wellness", "Clothing"] :
    LANG === 'de' ? ["Hautpflege", "Parfum", "Make-up", "Accessoires", "Home & Wellness", "Kleidung"] :
    ["Skincare", "Parfum", "Make-up", "Accessoires", "Home & Wellness", "Kleding"];
  var CAT_TAGLINES = LANG === 'fr' ? ["Un rituel au quotidien", "Une signature, pas un simple parfum", "Raffin\u00e9, jamais trop", "La touche finale, pens\u00e9e avec soin", "Le luxe qui reste \u00e0 la maison", "Pour toute la famille"] :
    LANG === 'en' ? ["A ritual for every day", "A signature, not just a scent", "Refined, never too much", "The final, considered touch", "Luxury that stays home", "For the whole family"] :
    LANG === 'de' ? ["Ritual f\u00fcr jeden Tag", "Eine Signatur, kein Duft", "Verfeinert, nie zu viel", "Der letzte, durchdachte Akzent", "Luxus, der zu Hause bleibt", "F\u00fcr die ganze Familie"] :
    ["Ritueel voor elke dag", "Een signatuur, geen geur", "Verfijnd, nooit te veel", "De laatste, doordachte toets", "Luxe die thuis blijft", "Voor het hele gezin"];

  function auraLuxeReply() {
    if (LANG === 'fr') return "AURA LUXE compare la beaut\u00e9 et le lifestyle premium (soins, parfum, maquillage, accessoires, maison et bien-\u00eatre, v\u00eatements) chez des revendeurs comme Douglas, Lookfantastic et Rituals, toujours en segment moyen \u00e0 haut de gamme. Pour quelle cat\u00e9gorie puis-je vous renseigner\u00a0?";
    if (LANG === 'en') return "AURA LUXE compares premium beauty and lifestyle (skincare, fragrance, make-up, accessories, home and wellness, clothing) at retailers like Douglas, Lookfantastic and Rituals, always mid-to-high end. Which category can I help you with?";
    if (LANG === 'de') return "AURA LUXE vergleicht Premium-Beauty und Lifestyle (Hautpflege, Parfum, Make-up, Accessoires, Home und Wellness, Kleidung) bei H\u00e4ndlern wie Douglas, Lookfantastic und Rituals, stets im mittleren bis h\u00f6heren Segment. F\u00fcr welche Kategorie kann ich Ihnen weiterhelfen?";
    return "AURA LUXE vergelijkt premium beauty en lifestyle (skincare, parfum, make-up, accessoires, home en wellness, kleding) bij retailers als Douglas, Lookfantastic en Rituals, altijd in het midden- tot hogere segment. Voor welke categorie kan ik u helpen?";
  }

  function categoryReply(i) {
    var name = CAT_NAMES[i], tag = CAT_TAGLINES[i];
    if (LANG === 'fr') return name + " \u2014 " + tag + ". Nous s\u00e9lectionnons uniquement des marques milieu \u00e0 haut de gamme chez des revendeurs de confiance, jamais d\u2019entr\u00e9e de gamme. Les liens d\u2019achat directs seront actifs d\u00e8s que nos partenariats affili\u00e9s (Awin, Daisycon) le seront \u2014 en attendant, d\u00e9couvrez la collection sur la page " + name + ", ou \u00e9crivez-nous \u00e0 auraluxe@bierinckx.com.";
    if (LANG === 'en') return name + " \u2014 " + tag + ". We only select mid-to-high end brands from trusted retailers, never entry-level. Direct purchase links go live as soon as our affiliate partnerships (Awin, Daisycon) are active \u2014 for now, explore the " + name + " page, or email auraluxe@bierinckx.com.";
    if (LANG === 'de') return name + " \u2014 " + tag + ". Wir w\u00e4hlen ausschlie\u00dflich Marken im mittleren bis h\u00f6heren Segment bei vertrauensw\u00fcrdigen H\u00e4ndlern, nie Einstiegsmarken. Direkte Kauflinks gehen online, sobald unsere Affiliate-Partnerschaften (Awin, Daisycon) aktiv sind \u2014 schauen Sie inzwischen auf der Seite " + name + " vorbei, oder schreiben Sie an auraluxe@bierinckx.com.";
    return name + " \u2014 " + tag + ". We selecteren uitsluitend merken in het midden- tot hogere segment bij vertrouwde retailers, nooit instapmerken. Directe aankooplinks gaan live zodra onze affiliate-samenwerkingen (Awin, Daisycon) actief zijn \u2014 bekijk intussen de pagina " + name + ", of mail naar auraluxe@bierinckx.com.";
  }

  
function otherServiceReply(key) {
    var H = { psy: { nl: ["Jouw welzijn staat centraal", "Online begeleiding via beveiligde chat. Volledig vertrouwelijk en professioneel."], fr: ["Votre bien-\u00eatre est notre priorit\u00e9", "Accompagnement en ligne via chat s\u00e9curis\u00e9. Enti\u00e8rement confidentiel et professionnel."], en: ["Your wellbeing is our priority", "Online support via secure chat. Fully confidential and professional."], de: ["Ihr Wohlbefinden steht im Mittelpunkt", "Online-Begleitung per gesichertem Chat. Vollst\u00e4ndig vertraulich und professionell."] },
      cons: { nl: ["Optimaliseer uw organisatie", "Resultaatgerichte begeleiding voor KMO\u2019s in de Benelux. Prijs altijd op maat via offerte."], fr: ["Optimisez votre organisation", "Accompagnement orient\u00e9 r\u00e9sultats pour les PME. Prix toujours sur devis."], en: ["Optimise your organisation", "Results-driven guidance for SMEs. Pricing always tailored via a personal quote."], de: ["Optimieren Sie Ihre Organisation", "Ergebnisorientierte Begleitung f\u00fcr KMU in den Benelux-L\u00e4ndern. Preis stets ma\u00dfgeschneidert per Angebot."] },
      cro: { nl: ["Groei zonder de kosten van een voltijdse CRO", "Strategisch revenue leiderschap voor AI/SaaS scale-ups in BE, NL, DE."], fr: ["Croissance sans le co\u00fbt d\u2019un CRO \u00e0 temps plein", "Leadership revenue pour scale-ups AI/SaaS en BE, NL, DE."], en: ["Growth without the cost of a full-time CRO", "Strategic revenue leadership for AI/SaaS scale-ups in BE, NL, DE."], de: ["Wachstum ohne die Kosten einer Vollzeit-CRO", "Strategische Revenue-F\u00fchrung f\u00fcr AI/SaaS Scale-ups in BE, NL, DE."] },
      graf: { nl: ["Onderdelen en consumables zonder gedoe", "Drukkerijen, repro, verpakking en sign in BE, NL, LU \u2014 marktconforme prijzen, snelle levering."], fr: ["Pi\u00e8ces et consommables sans tracas", "Imprimeries, repro, emballage et signal\u00e9tique en BE, NL, LU \u2014 prix comp\u00e9titifs, livraison rapide."], en: ["Parts and consumables without the hassle", "Printing houses, repro, packaging and signage in BE, NL, LU \u2014 market-rate pricing, fast delivery."], de: ["Ersatzteile und Verbrauchsmaterial ohne Aufwand", "Druckereien, Reprografie, Verpackung und Beschilderung in BE, NL, LU \u2014 marktgerechte Preise, schnelle Lieferung."] }
    };
    var d = H[key][LANG] || H[key].nl;
    return d[0] + ". " + d[1];
  }

  function selectService(idx) {
    var opt = QUICK_OPTIONS[idx];
    addMsg(opt[0], 'user');
    var qo = document.getElementById('quick-options-w');
    if (qo) qo.remove();
    if (idx === 0) {
      addMsg(auraLuxeReply(), 'bot');
      renderCategoryOptions();
      setActiveService('aura', null);
      return;
    }
    var keys = ['', 'psy', 'cons', 'cro', 'graf'];
    if (idx >= 1 && idx <= 4) {
      var key = keys[idx];
      addMsg(otherServiceReply(key), 'bot');
      addMsg(redirectNotice(), 'bot');
      setActiveService(key, key);
    } else {
      addMsg(LANG === 'fr' ? "Bien s\u00fbr, dites-m\u2019en plus ci-dessous ou \u00e9crivez \u00e0 info@bierinckx.com." : LANG === 'en' ? "Of course \u2014 tell me more below, or email info@bierinckx.com." : LANG === 'de' ? "Gerne \u2014 schreiben Sie mir unten mehr, oder mailen Sie an info@bierinckx.com." : "Vertel gerust meer hieronder, of mail naar info@bierinckx.com.", 'bot');
      setActiveService('other', null);
    }
  }
  window.selectService = selectService;

  function selectCategory(i) {
    addMsg(CAT_NAMES[i], 'user');
    var qo = document.getElementById('cat-options-w');
    if (qo) qo.remove();
    addMsg(categoryReply(i), 'bot');
    var internalKeys = ['skincare', 'parfum', 'makeup', 'accessoires', 'home', 'kleding'];
    addMsg(redirectNotice(), 'bot');
    setActiveService('aura', 'shop-' + internalKeys[i]);
  }
  window.selectCategory = selectCategory;

  var SERVICE_EMAIL = { aura: 'auraluxe@bierinckx.com', psy: 'spy@bierinckx.com', cons: 'consultancy@bierinckx.com', cro: 'sales@bierinckx.com', graf: 'sales@bierinckx.com', other: 'info@bierinckx.com' };
  var activeEmail = SERVICE_EMAIL.other;
  var navTimer = null;

  function redirectNotice() {
    if (LANG === 'fr') return "Vous \u00eates redirig\u00e9(e) automatiquement vers la page correspondante dans un instant \u2014 vous pouvez aussi taper votre question ci-dessous avant \u00e7a.";
    if (LANG === 'en') return "You'll be redirected to the matching page automatically in a moment \u2014 feel free to type your question below first.";
    if (LANG === 'de') return "Sie werden gleich automatisch zur passenden Seite weitergeleitet \u2014 Sie k\u00f6nnen aber gerne vorher unten Ihre Frage eingeben.";
    return "U wordt zo automatisch doorgestuurd naar de bijhorende pagina \u2014 u kan hieronder gerust eerst nog uw vraag typen.";
  }

  function setActiveService(key, navPage) {
    activeEmail = SERVICE_EMAIL[key] || SERVICE_EMAIL.other;
    if (navTimer) { clearTimeout(navTimer); navTimer = null; }
    if (navPage) {
      navTimer = setTimeout(function () {
        go(LANG, navPage);
      }, 4000);
    }
  }

  function cancelPendingNav() {
    if (navTimer) { clearTimeout(navTimer); navTimer = null; }
  }

  

function renderButtonRow(id, labels, onClick) {
    var msgs = document.getElementById('chat-msgs-w');
    var wrap = document.createElement('div');
    wrap.id = id;
    wrap.style.cssText = 'display:flex;flex-wrap:wrap;gap:.4rem;margin:.5rem 0 .8rem';
    labels.forEach(function(label, i) {
      var btn = document.createElement('button');
      btn.textContent = label;
      btn.style.cssText = 'font-size:.72rem;padding:.4rem .7rem;border:1px solid var(--lt,#ddd);background:#fff;border-radius:999px;cursor:pointer;color:inherit';
      btn.onclick = function(){ onClick(i); };
      wrap.appendChild(btn);
    });
    msgs.appendChild(wrap);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function renderQuickOptions() {
    renderButtonRow('quick-options-w', QUICK_OPTIONS.map(function(o){ return o[0]; }), selectService);
  }

  function renderCategoryOptions() {
    renderButtonRow('cat-options-w', CAT_NAMES, selectCategory);
  }

  function toggleChat() {
    isOpen = !isOpen;
    document.getElementById('chat-win').classList.toggle('open', isOpen);
    if (!isOpen) cancelPendingNav();
    if(isOpen && history.length === 0) {
      addMsg(WELCOME, 'bot');
      renderQuickOptions();
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
    cancelPendingNav();
    const inp = document.getElementById('chat-inp-w');
    const text = inp.value.trim();
    if (!text) return;
    inp.value = '';
    addMsg(text, 'user');
    history.push({ role: 'user', content: text });

    try {
      var subj = LANG === 'fr' ? 'Question via le chat AURA LUXE' : LANG === 'en' ? 'Question via AURA LUXE chat' : LANG === 'de' ? 'Frage \u00fcber den AURA LUXE Chat' : 'Vraag via AURA LUXE-chat';
      var mailUrl = 'mailto:' + activeEmail + '?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(text);
      var mailLink = document.createElement('a');
      mailLink.href = mailUrl;
      mailLink.style.display = 'none';
      document.body.appendChild(mailLink);
      mailLink.click();
      document.body.removeChild(mailLink);
      addMsg((LANG === 'fr' ? "Votre message est pr\u00eat \u00e0 \u00eatre envoy\u00e9 \u00e0 " : LANG === 'en' ? "Your message is ready to send to " : LANG === 'de' ? "Ihre Nachricht ist bereit zum Versenden an " : "Uw bericht staat klaar om verzonden te worden naar ") + activeEmail + (LANG === 'fr' ? " via votre messagerie." : LANG === 'en' ? " via your email app." : LANG === 'de' ? " \u00fcber Ihr E-Mail-Programm." : " via uw eigen mailprogramma."), 'bot');
    } catch (e) {}

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
      const reply = data.reply || (LANG === 'nl' ? 'Excuses, er is een technisch probleem. Contacteer ons via auraluxe@bierinckx.com' : LANG === 'fr' ? 'D\u00e9sol\u00e9, erreur technique. Contactez-nous via auraluxe@bierinckx.com' : 'Sorry, technical error. Contact us at auraluxe@bierinckx.com');
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
    if (i && document.activeElement === i) {
      cancelPendingNav();
      if (e.key === 'Enter') sendMsg();
    }
  });
})();
function go(lang,page){const map={'':'',shop:'shop',psy:'psychologie',cons:'consultancy',cro:'cro',graf:'grafische-nijverheid',chat:'klantenservice','shop-skincare':'skincare','shop-parfum':'parfum','shop-makeup':'make-up','shop-accessoires':'accessoires','shop-home':'home-wellness','shop-kleding':'kleding'};const frMap={psy:'psychologie',cons:'consultance',cro:'cro',graf:'industrie-graphique',chat:'service-client','shop-skincare':'soins','shop-parfum':'parfum','shop-makeup':'maquillage','shop-accessoires':'accessoires','shop-home':'maison-bien-etre','shop-kleding':'vetements'};const enMap={psy:'psychology',cons:'consultancy',cro:'cro',graf:'graphics-industry',chat:'customer-service','shop-skincare':'skincare','shop-parfum':'fragrance','shop-makeup':'make-up','shop-accessoires':'accessories','shop-home':'home-wellness','shop-kleding':'clothing'};const deMap={psy:'psychologie',cons:'consultancy',cro:'cro',graf:'grafikbranche',chat:'kundenservice','shop-skincare':'hautpflege','shop-parfum':'parfum','shop-makeup':'make-up','shop-accessoires':'accessoires','shop-home':'home-wellness','shop-kleding':'kleidung'};let slug=map[page]||page;if(lang==='fr'&&frMap[page])slug=frMap[page];if(lang==='en'&&enMap[page])slug=enMap[page];if(lang==='de'&&deMap[page])slug=deMap[page];window.location.href='/'+lang+(slug?'/'+slug:'');}
function setLang(lang,cur){go(lang,cur);}
<\/script>`);
var CHAT_WIDGET = /* @__PURE__ */ ((t, lang) => `
<div class="chat-widget">
  <button class="chat-fab" onclick="toggleChat()" title="${t.chatTitle}" aria-label="${t.chatTitle}">&#128081;</button>
  <div class="chat-window" id="chat-win">
    <div class="chat-head">
      <div class="chat-head-info">
        <div class="chat-status"></div>
        <div><h4>${t.chatTitle}</h4><p>${t.chatSubtitle}</p></div>
      </div>
      <button class="chat-close" onclick="toggleChat()" aria-label="${lang === 'nl' ? 'Sluiten' : lang === 'fr' ? 'Fermer' : 'Close'}">&#10005;</button>
    </div>
    <div class="chat-msgs" id="chat-msgs-w"></div>
    <div class="chat-in">
      <input id="chat-inp-w" type="text" placeholder="${t.chatPlaceholder}">
      <button onclick="sendChatW()">${t.chatSend}</button>
    </div>
  </div>
</div>`);
var CART_TXT = {
  nl: { title: "Testwinkelwagen", navLabel: "Winkelwagen", perItem: "per stuk", empty: "Je winkelwagen is leeg.", emptySub: "Voeg producten toe via een van onze collecties om ze hier te zien verschijnen.", browseCta: "Bekijk de collecties", remove: "Verwijderen", total: "Totaal", itemsLabel: "artikelen", checkout: "Naar afrekenen (test)", checkoutNote: "Dit is een testomgeving — er wordt niets besteld of afgerekend. Zodra onze affiliate-partners actief zijn, koopt u rechtstreeks bij hen via een beveiligde link.", checkoutDone: "Bedankt voor het testen!", checkoutDoneSub: "In de echte winkel zou u hier worden doorgestuurd naar de betaalpagina van onze partner. Momenteel zijn er nog geen actieve partnerlinks.", backToCart: "Terug naar winkelwagen", add: "Voeg toe aan winkelwagen", added: "Toegevoegd!", close: "Sluiten", continue: "Verder winkelen", pageTitle: "Uw winkelwagen" },
  fr: { title: "Panier de test", navLabel: "Panier", perItem: "l’unité", empty: "Votre panier est vide.", emptySub: "Ajoutez des produits depuis l’une de nos collections pour les voir apparaître ici.", browseCta: "Voir les collections", remove: "Retirer", total: "Total", itemsLabel: "articles", checkout: "Passer au paiement (test)", checkoutNote: "Ceci est un environnement de test — aucune commande n’est passée. Dès que nos partenaires affiliés seront actifs, vous achèterez directement chez eux via un lien sécurisé.", checkoutDone: "Merci d’avoir testé !", checkoutDoneSub: "Dans la boutique réelle, vous seriez maintenant redirigé vers la page de paiement de notre partenaire. Aucun lien partenaire actif pour le moment.", backToCart: "Retour au panier", add: "Ajouter au panier", added: "Ajouté !", close: "Fermer", continue: "Continuer mes achats", pageTitle: "Votre panier" },
  en: { title: "Test cart", navLabel: "Cart", perItem: "each", empty: "Your cart is empty.", emptySub: "Add products from one of our collections to see them here.", browseCta: "Browse collections", remove: "Remove", total: "Total", itemsLabel: "items", checkout: "Go to checkout (test)", checkoutNote: "This is a test environment — nothing is ordered or charged. Once our affiliate partners are active, you’ll purchase directly from them via a secure link.", checkoutDone: "Thanks for testing!", checkoutDoneSub: "In the real store, you would now be redirected to our partner’s payment page. No active partner links yet.", backToCart: "Back to cart", add: "Add to cart", added: "Added!", close: "Close", continue: "Continue shopping", pageTitle: "Your cart" },
  de: { title: "Test-Warenkorb", navLabel: "Warenkorb", perItem: "pro St\u00fcck", empty: "Ihr Warenkorb ist leer.", emptySub: "F\u00fcgen Sie Produkte aus einer unserer Kollektionen hinzu, um sie hier zu sehen.", browseCta: "Kollektionen ansehen", remove: "Entfernen", total: "Gesamt", itemsLabel: "Artikel", checkout: "Zur Kasse (Test)", checkoutNote: "Dies ist eine Testumgebung \u2014 es wird nichts bestellt oder berechnet. Sobald unsere Affiliate-Partner aktiv sind, kaufen Sie direkt bei ihnen \u00fcber einen gesicherten Link.", checkoutDone: "Danke f\u00fcrs Testen!", checkoutDoneSub: "Im echten Shop w\u00fcrden Sie jetzt zur Zahlungsseite unseres Partners weitergeleitet. Aktuell sind noch keine Partnerlinks aktiv.", backToCart: "Zur\u00fcck zum Warenkorb", add: "In den Warenkorb", added: "Hinzugef\u00fcgt!", close: "Schlie\u00dfen", continue: "Weiter einkaufen", pageTitle: "Ihr Warenkorb" }
};
function cartJS(lang) {
  const c = CART_TXT[lang];
  return `<script>
var CART_TXT_JS = ${JSON.stringify(c)};
function testPrice(name){
  var h = 0;
  for (var k = 0; k < name.length; k++) { h = (h * 31 + name.charCodeAt(k)) >>> 0; }
  return 15 + (h % 80) + 0.95;
}
function cartGet(){ try { return JSON.parse(localStorage.getItem("auraluxe_cart")||"[]"); } catch(e){ return []; } }
function cartSave(items){ localStorage.setItem("auraluxe_cart", JSON.stringify(items)); cartRender(); }
function addToCart(id, name, img, btn){
  var items = cartGet();
  var existing = items.find(function(i){ return i.id === id; });
  if (existing) { existing.qty += 1; } else { items.push({ id: id, name: name, img: img, qty: 1 }); }
  cartSave(items);
  if (btn) { var orig = btn.textContent; btn.textContent = CART_TXT_JS.added; btn.disabled = true; setTimeout(function(){ btn.textContent = orig; btn.disabled = false; }, 1200); }
}
function removeFromCart(id){ cartSave(cartGet().filter(function(i){ return i.id !== id; })); }
function cartChangeQty(id, delta){
  var items = cartGet();
  var item = items.find(function(i){ return i.id === id; });
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { items = items.filter(function(i){ return i.id !== id; }); }
  cartSave(items);
}
function cartRender(){
  var items = cartGet();
  var badge = document.getElementById("cart-badge");
  var count = items.reduce(function(n,i){ return n + i.qty; }, 0);
  if (badge) { badge.textContent = count; badge.style.display = count > 0 ? "flex" : "none"; badge.style.alignItems = "center"; badge.style.justifyContent = "center"; }
  var countEl = document.getElementById("cart-count");
  var grandTotal = items.reduce(function(sum,i){ return sum + testPrice(i.name) * i.qty; }, 0);
  if (countEl) countEl.textContent = count + " " + CART_TXT_JS.itemsLabel + " \u2014 \u20ac" + grandTotal.toFixed(2);
  var itemsEl = document.getElementById("cart-items");
  var emptyEl = document.getElementById("cart-empty");
  var summaryEl = document.getElementById("cart-summary");
  if (!itemsEl) return;
  if (items.length === 0) {
    itemsEl.innerHTML = "";
    if (emptyEl) emptyEl.style.display = "block";
    if (summaryEl) summaryEl.style.display = "none";
    return;
  }
  if (emptyEl) emptyEl.style.display = "none";
  if (summaryEl) summaryEl.style.display = "block";
  itemsEl.innerHTML = items.map(function(i){
    var price = testPrice(i.name);
    return "<div style='display:flex;gap:1rem;padding:1rem 0;border-bottom:1px solid var(--lt);align-items:center'>" +
      "<img src='" + i.img + "' alt='" + i.name + "' style='width:72px;height:72px;object-fit:cover;border-radius:2px;flex-shrink:0'>" +
      "<div style='flex:1'>" +
        "<div style='font-size:.95rem;margin-bottom:.3rem'>" + i.name + "</div>" +
        "<div style='font-size:.8rem;color:var(--gr);margin-bottom:.5rem'>&euro;" + price.toFixed(2) + " " + CART_TXT_JS.perItem + "</div>" +
        "<div style='display:flex;align-items:center;gap:.5rem'>" +
          "<button onclick=\\"cartChangeQty('" + i.id + "',-1)\\" style='width:26px;height:26px;border:1px solid var(--lt);background:#fff;cursor:pointer;border-radius:2px;font-size:.9rem;line-height:1'>&minus;</button>" +
          "<span style='min-width:22px;text-align:center;font-size:.85rem'>" + i.qty + "</span>" +
          "<button onclick=\\"cartChangeQty('" + i.id + "',1)\\" style='width:26px;height:26px;border:1px solid var(--lt);background:#fff;cursor:pointer;border-radius:2px;font-size:.9rem;line-height:1'>+</button>" +
        "</div>" +
      "</div>" +
      "<div style='text-align:right'>" +
        "<div style='font-size:.95rem;font-weight:600;margin-bottom:.6rem'>&euro;" + (price * i.qty).toFixed(2) + "</div>" +
        "<button onclick=\\"removeFromCart('" + i.id + "')\\" style='background:none;border:1px solid var(--lt);padding:.4rem .8rem;border-radius:2px;color:var(--gr);font-size:.7rem;letter-spacing:.05em;text-transform:uppercase;cursor:pointer'>" + CART_TXT_JS.remove + "</button>" +
      "</div>" +
    "</div>";
  }).join("");
}
function cartCheckout(){
  var listView = document.getElementById("cart-list-view");
  var doneView = document.getElementById("cart-done-view");
  if (listView) listView.style.display = "none";
  if (doneView) doneView.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function cartBackToList(){
  var listView = document.getElementById("cart-list-view");
  var doneView = document.getElementById("cart-done-view");
  if (listView) listView.style.display = "block";
  if (doneView) doneView.style.display = "none";
}
function toggleMobileNav(){
  var nl = document.getElementById("main-nl");
  if (nl) nl.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", cartRender);
<\/script>`;
}
function nav(t, lang, cur) {
  return `<nav>
<a class="logo" href="/${lang}">&#128081; AURA <span>LUXE</span></a>
<button class="hamburger" onclick="toggleMobileNav()" aria-label="menu">&#9776;</button>
<div class="nl" id="main-nl">
  <a onclick="go('${lang}','')" class="${cur === "" ? "ac" : ""}">` + t.nav.home + `</a>
  <a onclick="go('${lang}','shop')" class="${cur === "shop" ? "ac" : ""}">` + t.nav.shop + `</a>
  <a onclick="go('${lang}','cons')" class="${cur === "cons" ? "ac" : ""}">` + t.nav.cons + `</a>
  <a onclick="go('${lang}','cro')" class="${cur === "cro" ? "ac" : ""}">` + t.nav.cro + `</a>
  <a onclick="go('${lang}','graf')" class="${cur === "graf" ? "ac" : ""}">` + t.nav.graf + `</a>
  <div class="ls">
    <button class="lb ${lang === "nl" ? "ac" : ""}" onclick="setLang('nl','${cur}')">NL</button>
    <button class="lb ${lang === "fr" ? "ac" : ""}" onclick="setLang('fr','${cur}')">FR</button>
    <button class="lb ${lang === "en" ? "ac" : ""}" onclick="setLang('en','${cur}')">EN</button>
    <button class="lb ${lang === "de" ? "ac" : ""}" onclick="setLang('de','${cur}')">DE</button>
  </div>
</div>
</nav>`;
}
function foot(t, lang) {
  const footTxt = lang === "nl" ? "Mid-to-high end Luxury Beauty &middot; Skincare &middot; Parfum &middot; Make-up &middot; BE / NL / FR / DE" : lang === "fr" ? "Luxury Beauty haut de gamme &middot; Soins &middot; Parfum &middot; Maquillage &middot; BE / NL / FR / DE" : lang === "de" ? "Mid-to-high-end Luxury Beauty &middot; Hautpflege &middot; Parfum &middot; Make-up &middot; BE / NL / FR / DE" : "Mid-to-high end Luxury Beauty &middot; Skincare &middot; Fragrance &middot; Make-up &middot; BE / NL / FR / DE";
  const svcLabel = lang === "nl" ? "Diensten" : lang === "de" ? "Dienstleistungen" : "Services";
  return `<footer>
<div class="fg">
  <div class="fb"><div class="fl">&#128081; AURA <span>LUXE</span></div><p>${footTxt}</p></div>
  <div class="fc"><h4>Shop</h4>${t.cats.map((c, i) => `<a onclick="go('${lang}','shop-${CAT_KEYS[i]}')">${c}</a>`).join("")}</div>
  <div class="fc"><h4>${svcLabel}</h4><a onclick="go('${lang}','cons')">${t.nav.cons}</a><a onclick="go('${lang}','cro')">${t.nav.cro}</a><a onclick="go('${lang}','graf')">${t.nav.graf}</a></div>
  <div class="fc"><h4>Contact</h4><a href="mailto:auraluxe@bierinckx.com">auraluxe@bierinckx.com</a><a href="mailto:consultancy@bierinckx.com">consultancy@bierinckx.com</a><a href="mailto:sales@bierinckx.com">sales@bierinckx.com</a></div>
  <div class="fc"><h4>${LEGAL_TXT[lang].footLegalTitle}</h4><a href="/${lang}/${legalSlug('privacy',lang)}">${LEGAL_TXT[lang].privacyTitle}</a><a href="/${lang}/${legalSlug('terms',lang)}">${LEGAL_TXT[lang].termsTitle}</a></div>
</div>
<div class="fb2"><span>&copy; 2026 Bierinckx Revenue Agency &mdash; Kessel, Belgi&euml;</span></div>
<div class="fb2" style="opacity:.7;font-size:.7rem">${lang === "nl" ? "Deze website kan commissie ontvangen wanneer u via partnerlinks een aankoop doet bij geselecteerde retailers, zonder meerkosten voor u." : lang === "fr" ? "Ce site peut percevoir une commission lorsque vous effectuez un achat via des liens partenaires chez des d\u00e9taillants s\u00e9lectionn\u00e9s, sans co\u00fbt suppl\u00e9mentaire pour vous." : lang === "de" ? "Diese Website kann eine Provision erhalten, wenn Sie \u00fcber Partnerlinks bei ausgew\u00e4hlten H\u00e4ndlern einkaufen, ohne Mehrkosten f\u00fcr Sie." : "This website may earn a commission when you make a purchase via partner links to selected retailers, at no extra cost to you."}</span></div>
</footer>`;
}

var LEGAL_TXT = {
  nl: {
    privacyTitle: "Privacybeleid",
    privacyIntro: "Laatst bijgewerkt: 12 juli 2026.",
    privacyBody: [
      "Bierinckx Revenue Agency (eenmanszaak in oprichting, Kessel, Belgi\u00eb) beheert AURA LUXE via bierinckx.com. Contact: auraluxe@bierinckx.com. Ons ondernemingsnummer en BTW-nummer zijn in aanvraag en worden hier aangevuld zodra beschikbaar.",
      "AURA LUXE is een affiliate-platform: wij verkopen zelf niets en verwerken geen bestel- of betaalgegevens. Wanneer u via een link doorklikt naar een retailer, gelden vanaf dat moment het privacybeleid en de voorwaarden van die retailer.",
      "Welke gegevens verwerken wij zelf: (1) technische gegevens zoals IP-adres en browsertype voor de goede werking van de site, (2) berichten die u typt in onze chatwidget \u2014 deze worden verwerkt door de Claude API van Anthropic om u te helpen, en niet gebruikt voor andere doeleinden, (3) taalvoorkeur en winkelmandje-inhoud, lokaal opgeslagen in uw browser (localStorage), niet op onze servers.",
      "Wij gebruiken momenteel geen eigen advertentie- of trackingcookies. Zodra bezoekersstatistieken (Fase 1, Cloudflare Web Analytics / GA4) actief worden, updaten wij dit beleid en de cookiebanner.",
      "Affiliate-netwerken (Awin, Daisycon) en retailers kunnen bij het doorklikken hun eigen cookies plaatsen om de verwijzing te herkennen. Dit gebeurt op hun domein, niet op bierinckx.com.",
      "U heeft steeds recht op inzage, correctie en verwijdering van uw gegevens. Neem hiervoor contact op via auraluxe@bierinckx.com. U kan ook een klacht indienen bij de Belgische Gegevensbeschermingsautoriteit (gegevensbeschermingsautoriteit.be)."
    ],
    termsTitle: "Algemene voorwaarden",
    termsIntro: "Laatst bijgewerkt: 12 juli 2026.",
    termsBody: [
      "AURA LUXE (bierinckx.com), uitgebaat door Bierinckx Revenue Agency (eenmanszaak in oprichting, Kessel, Belgi\u00eb), is een onafhankelijk vergelijkings- en affiliateplatform voor beauty, parfum, make-up, accessoires, home & wellness en kleding. Ondernemings- en BTW-nummer zijn in aanvraag en worden hier aangevuld zodra actief.",
      "AURA LUXE verkoopt zelf geen producten en houdt geen voorraad aan. Elke aankoop, betaling, levering, klachtenafhandeling en retour verloopt uitsluitend rechtstreeks bij de betrokken retailer, onder diens eigen voorwaarden, herroepingsrecht en garantiebeleid.",
      "AURA LUXE kan een commissie ontvangen wanneer u via een partnerlink een aankoop doet, zonder meerkosten voor u. Zie ook onze affiliate-disclosure onderaan elke pagina.",
      "Wij doen ons best om prijzen, beschikbaarheid en productinformatie correct weer te geven, maar kunnen niet garanderen dat deze op elk moment overeenstemmen met de website van de retailer \u2014 die laatste is steeds bepalend.",
      "Alle content, teksten en vormgeving op bierinckx.com zijn eigendom van Bierinckx Revenue Agency, tenzij anders aangegeven. Overname zonder toestemming is niet toegestaan.",
      "Deze voorwaarden kunnen worden aangepast; de meest recente versie staat steeds op deze pagina. Op deze voorwaarden is het Belgisch recht van toepassing; geschillen worden voorgelegd aan de bevoegde rechtbanken van het arrondissement waar Bierinckx Revenue Agency gevestigd is."
    ],
    cookieText: "Wij gebruiken enkel functionele cookies (taal, winkelmandje) die lokaal in uw browser blijven. Meer info in ons",
    cookiePrivacyLink: "privacybeleid",
    cookieAccept: "Begrepen",
    footLegalTitle: "Juridisch"
  },
  fr: {
    privacyTitle: "Politique de confidentialit\u00e9",
    privacyIntro: "Derni\u00e8re mise \u00e0 jour\u00a0: 12 juillet 2026.",
    privacyBody: [
      "Bierinckx Revenue Agency (entreprise individuelle en cours de constitution, Kessel, Belgique) g\u00e8re AURA LUXE via bierinckx.com. Contact\u00a0: auraluxe@bierinckx.com. Notre num\u00e9ro d'entreprise et notre num\u00e9ro de TVA sont en cours de demande et seront ajout\u00e9s ici d\u00e8s qu'ils seront disponibles.",
      "AURA LUXE est une plateforme d'affiliation\u00a0: nous ne vendons rien nous-m\u00eames et ne traitons aucune donn\u00e9e de commande ou de paiement. Lorsque vous cliquez vers un d\u00e9taillant, sa propre politique de confidentialit\u00e9 et ses propres conditions s'appliquent.",
      "Donn\u00e9es que nous traitons nous-m\u00eames\u00a0: (1) donn\u00e9es techniques telles que l'adresse IP et le type de navigateur, (2) messages saisis dans notre chat \u2014 trait\u00e9s par l'API Claude d'Anthropic pour vous aider, (3) pr\u00e9f\u00e9rence de langue et contenu du panier, stock\u00e9s localement dans votre navigateur (localStorage), pas sur nos serveurs.",
      "Nous n'utilisons actuellement aucun cookie publicitaire ou de suivi propre. D\u00e8s que des statistiques de visite (Phase 1, Cloudflare Web Analytics / GA4) seront actives, nous mettrons \u00e0 jour cette politique et la banni\u00e8re de cookies.",
      "Les r\u00e9seaux d'affiliation (Awin, Daisycon) et les d\u00e9taillants peuvent placer leurs propres cookies lors du clic, sur leur propre domaine, pas sur bierinckx.com.",
      "Vous disposez d'un droit d'acc\u00e8s, de rectification et de suppression de vos donn\u00e9es. Contactez-nous \u00e0 auraluxe@bierinckx.com. Vous pouvez \u00e9galement d\u00e9poser une plainte aupr\u00e8s de l'Autorit\u00e9 belge de protection des donn\u00e9es (autoriteprotectiondonnees.be)."
    ],
    termsTitle: "Conditions g\u00e9n\u00e9rales",
    termsIntro: "Derni\u00e8re mise \u00e0 jour\u00a0: 12 juillet 2026.",
    termsBody: [
      "AURA LUXE (bierinckx.com), exploit\u00e9 par Bierinckx Revenue Agency (entreprise individuelle en cours de constitution, Kessel, Belgique), est une plateforme ind\u00e9pendante de comparaison et d'affiliation pour la beaut\u00e9, le parfum, le maquillage, les accessoires, la maison & bien-\u00eatre et les v\u00eatements. Num\u00e9ro d'entreprise et de TVA en cours de demande.",
      "AURA LUXE ne vend aucun produit et ne d\u00e9tient aucun stock. Tout achat, paiement, livraison, r\u00e9clamation et retour se fait exclusivement directement chez le d\u00e9taillant concern\u00e9, selon ses propres conditions, droit de r\u00e9tractation et politique de garantie.",
      "AURA LUXE peut percevoir une commission lorsque vous effectuez un achat via un lien partenaire, sans co\u00fbt suppl\u00e9mentaire pour vous. Voir aussi notre mention d'affiliation en bas de chaque page.",
      "Nous nous efforçons de pr\u00e9senter des prix et informations produits corrects, sans pouvoir garantir leur concordance permanente avec le site du d\u00e9taillant \u2014 ce dernier fait toujours foi.",
      "Tout le contenu de bierinckx.com est la propri\u00e9t\u00e9 de Bierinckx Revenue Agency, sauf mention contraire. Toute reproduction sans autorisation est interdite.",
      "Ces conditions peuvent \u00eatre modifi\u00e9es\u00a0; la version la plus r\u00e9cente figure toujours sur cette page. Le droit belge s'applique\u00a0; tout litige rel\u00e8ve des tribunaux comp\u00e9tents de l'arrondissement du si\u00e8ge de Bierinckx Revenue Agency."
    ],
    cookieText: "Nous utilisons uniquement des cookies fonctionnels (langue, panier) conserv\u00e9s localement dans votre navigateur. Plus d'infos dans notre",
    cookiePrivacyLink: "politique de confidentialit\u00e9",
    cookieAccept: "Compris",
    footLegalTitle: "Mentions l\u00e9gales"
  },
  en: {
    privacyTitle: "Privacy Policy",
    privacyIntro: "Last updated: 12 July 2026.",
    privacyBody: [
      "Bierinckx Revenue Agency (sole proprietorship in formation, Kessel, Belgium) operates AURA LUXE via bierinckx.com. Contact: auraluxe@bierinckx.com. Our company and VAT number are pending registration and will be added here once available.",
      "AURA LUXE is an affiliate platform: we do not sell anything ourselves and do not process any order or payment data. When you click through to a retailer, that retailer's own privacy policy and terms apply from that point on.",
      "Data we process ourselves: (1) technical data such as IP address and browser type, (2) messages typed into our chat widget \u2014 processed by Anthropic's Claude API to assist you, (3) language preference and cart contents, stored locally in your browser (localStorage), not on our servers.",
      "We currently do not use any advertising or tracking cookies of our own. Once visitor analytics (Phase 1, Cloudflare Web Analytics / GA4) go live, we will update this policy and the cookie banner accordingly.",
      "Affiliate networks (Awin, Daisycon) and retailers may set their own cookies once you click through, on their own domain, not on bierinckx.com.",
      "You have the right to access, correct and delete your data at any time. Contact us at auraluxe@bierinckx.com. You may also file a complaint with the Belgian Data Protection Authority (dataprotectionauthority.be)."
    ],
    termsTitle: "Terms and Conditions",
    termsIntro: "Last updated: 12 July 2026.",
    termsBody: [
      "AURA LUXE (bierinckx.com), operated by Bierinckx Revenue Agency (sole proprietorship in formation, Kessel, Belgium), is an independent comparison and affiliate platform for beauty, fragrance, make-up, accessories, home & wellness and clothing. Company and VAT number are pending registration.",
      "AURA LUXE does not sell any products and holds no stock. Every purchase, payment, delivery, complaint and return is handled exclusively and directly by the relevant retailer, under that retailer's own terms, right of withdrawal and warranty policy.",
      "AURA LUXE may earn a commission when you make a purchase via a partner link, at no extra cost to you. See our affiliate disclosure at the bottom of every page.",
      "We aim to display accurate prices and product information but cannot guarantee it always matches the retailer's own website \u2014 the retailer's site is always authoritative.",
      "All content on bierinckx.com is the property of Bierinckx Revenue Agency unless stated otherwise. Reproduction without permission is not allowed.",
      "These terms may be updated; the most recent version always applies on this page. Belgian law applies; disputes fall under the competent courts of the district where Bierinckx Revenue Agency is established."
    ],
    cookieText: "We only use functional cookies (language, cart) kept locally in your browser. More info in our",
    cookiePrivacyLink: "privacy policy",
    cookieAccept: "Got it",
    footLegalTitle: "Legal"
  },
  de: {
    privacyTitle: "Datenschutzerkl\u00e4rung",
    privacyIntro: "Letzte Aktualisierung: 12. Juli 2026.",
    privacyBody: [
      "Bierinckx Revenue Agency (Einzelunternehmen in Gr\u00fcndung, Kessel, Belgien) betreibt AURA LUXE \u00fcber bierinckx.com. Kontakt: auraluxe@bierinckx.com. Unsere Unternehmens- und Umsatzsteuer-Identifikationsnummer sind beantragt und werden hier erg\u00e4nzt, sobald verf\u00fcgbar.",
      "AURA LUXE ist eine Affiliate-Plattform: Wir verkaufen selbst nichts und verarbeiten keine Bestell- oder Zahlungsdaten. Wenn Sie zu einem H\u00e4ndler weiterklicken, gelten ab diesem Zeitpunkt dessen eigene Datenschutzerkl\u00e4rung und Bedingungen.",
      "Daten, die wir selbst verarbeiten: (1) technische Daten wie IP-Adresse und Browsertyp, (2) Nachrichten, die Sie in unser Chat-Widget eingeben \u2014 verarbeitet \u00fcber die Claude-API von Anthropic, um Ihnen zu helfen, (3) Sprachpr\u00e4ferenz und Warenkorbinhalt, lokal in Ihrem Browser gespeichert (localStorage), nicht auf unseren Servern.",
      "Wir verwenden derzeit keine eigenen Werbe- oder Tracking-Cookies. Sobald Besucherstatistiken (Phase 1, Cloudflare Web Analytics / GA4) aktiv werden, aktualisieren wir diese Erkl\u00e4rung und den Cookie-Hinweis entsprechend.",
      "Affiliate-Netzwerke (Awin, Daisycon) und H\u00e4ndler k\u00f6nnen beim Weiterklicken eigene Cookies setzen \u2014 auf deren eigener Domain, nicht auf bierinckx.com.",
      "Sie haben jederzeit das Recht auf Auskunft, Berichtigung und L\u00f6schung Ihrer Daten. Kontaktieren Sie uns unter auraluxe@bierinckx.com. Sie k\u00f6nnen sich auch bei der belgischen Datenschutzbeh\u00f6rde beschweren (gegevensbeschermingsautoriteit.be)."
    ],
    termsTitle: "Allgemeine Gesch\u00e4ftsbedingungen",
    termsIntro: "Letzte Aktualisierung: 12. Juli 2026.",
    termsBody: [
      "AURA LUXE (bierinckx.com), betrieben von Bierinckx Revenue Agency (Einzelunternehmen in Gr\u00fcndung, Kessel, Belgien), ist eine unabh\u00e4ngige Vergleichs- und Affiliate-Plattform f\u00fcr Beauty, Parfum, Make-up, Accessoires, Home & Wellness und Kleidung. Unternehmens- und USt-IdNr. sind beantragt.",
      "AURA LUXE verkauft selbst keine Produkte und h\u00e4lt keinen Lagerbestand. Jeder Kauf, jede Zahlung, Lieferung, Reklamation und R\u00fcckgabe erfolgt ausschlie\u00dflich direkt beim jeweiligen H\u00e4ndler, nach dessen eigenen Bedingungen, Widerrufsrecht und Garantiebestimmungen.",
      "AURA LUXE kann eine Provision erhalten, wenn Sie \u00fcber einen Partnerlink einkaufen, ohne Mehrkosten f\u00fcr Sie. Siehe auch unseren Affiliate-Hinweis am Ende jeder Seite.",
      "Wir bem\u00fchen uns um korrekte Preise und Produktinformationen, k\u00f6nnen jedoch keine st\u00e4ndige \u00dcbereinstimmung mit der Website des H\u00e4ndlers garantieren \u2014 dessen Website ist stets ma\u00dfgeblich.",
      "Alle Inhalte auf bierinckx.com sind Eigentum von Bierinckx Revenue Agency, sofern nicht anders angegeben. Eine Vervielf\u00e4ltigung ohne Genehmigung ist nicht gestattet.",
      "Diese Bedingungen k\u00f6nnen aktualisiert werden; es gilt stets die aktuellste Fassung auf dieser Seite. Es gilt belgisches Recht; f\u00fcr Streitigkeiten sind die zust\u00e4ndigen Gerichte des Bezirks des Sitzes von Bierinckx Revenue Agency zust\u00e4ndig."
    ],
    cookieText: "Wir verwenden ausschlie\u00dflich funktionale Cookies (Sprache, Warenkorb), die lokal in Ihrem Browser bleiben. Mehr dazu in unserer",
    cookiePrivacyLink: "Datenschutzerkl\u00e4rung",
    cookieAccept: "Verstanden",
    footLegalTitle: "Rechtliches"
  }
};
function legalSlug(kind, lang) {
  const map = {
    privacy: { nl: "privacybeleid", fr: "confidentialite", en: "privacy-policy", de: "datenschutz" },
    terms: { nl: "algemene-voorwaarden", fr: "conditions-generales", en: "terms-and-conditions", de: "agb" }
  };
  return map[kind][lang];
}
function buildLegalPage(t, lang, kind) {
  const L = LEGAL_TXT[lang];
  const title2 = kind === "privacy" ? L.privacyTitle : L.termsTitle;
  const intro = kind === "privacy" ? L.privacyIntro : L.termsIntro;
  const paras = (kind === "privacy" ? L.privacyBody : L.termsBody).map((p) => `<p style="margin-bottom:1.1em">${p}</p>`).join("");
  const body = nav(t, lang, "") + `\n<section class="sec"><div class="sh"><h1>${title2}</h1><p style="opacity:.65;font-size:.85rem">${intro}</p></div><div style="max-width:760px;margin:0 auto;line-height:1.75;font-size:.95rem">${paras}</div></section>\n` + foot(t, lang);
  return page(`${title2} | AURA LUXE`, title2, lang, body);
}
function buildPrivacy(t, lang) { return buildLegalPage(t, lang, "privacy"); }
function buildTerms(t, lang) { return buildLegalPage(t, lang, "terms"); }
function cookieBanner(lang) {
  const L = LEGAL_TXT[lang];
  const href = "/" + lang + "/" + legalSlug("privacy", lang);
  return `<div id="cookie-banner" style="display:none;position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#1a1a1a;color:#fff;padding:.9rem 1.2rem;font-size:.78rem;line-height:1.5;display:flex;flex-wrap:wrap;gap:.8rem;align-items:center;justify-content:space-between">
  <span>${L.cookieText} <a href="${href}" style="color:#fff;text-decoration:underline">${L.cookiePrivacyLink}</a>.</span>
  <button onclick="document.getElementById('cookie-banner').style.display='none';try{localStorage.setItem('auraluxe_cookie_ack','1')}catch(e){}" style="background:#fff;color:#1a1a1a;border:none;padding:.45rem 1rem;font-size:.75rem;letter-spacing:.04em;text-transform:uppercase;cursor:pointer;white-space:nowrap">${L.cookieAccept}</button>
</div>
<script>(function(){try{if(!localStorage.getItem('auraluxe_cookie_ack')){document.addEventListener('DOMContentLoaded',function(){var b=document.getElementById('cookie-banner');if(b)b.style.display='flex';});}}catch(e){}})();</script>`;
}

function page(title2, desc, lang, body, cur = "") {
  const hl = ["nl", "fr", "en", "de"].map((l) => `<link rel="alternate" hreflang="${l}" href="https://bierinckx.com/${l}">`).join("");
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
${cartJS(lang)}
${cookieBanner(lang)}
</body></html>`;
}
function cartButton(id, name, img, lang) {
  const c = CART_TXT[lang];
  const safeName = name.replace(/'/g, "\\'");
  return `<button onclick="addToCart('${id}','${safeName}','${img}',this)" style="width:100%;padding:.55rem;margin-top:.4rem;font-size:.68rem;letter-spacing:.06em;text-transform:uppercase;border:1px solid var(--ac);background:#fff;color:var(--ac);cursor:pointer">${c.add}</button>`;
}
function buildCartPage(t, lang) {
  const c = CART_TXT[lang];
  const breadcrumbHome = lang === "nl" ? "Home" : lang === "fr" ? "Accueil" : lang === "de" ? "Startseite" : "Home";
  const body = nav(t, lang, "cart") + `
<section class="sec" style="max-width:760px;margin:0 auto;padding-top:2.5rem">
  <nav style="font-size:.8rem;color:var(--gr);margin-bottom:1.5rem">
    <a onclick="go('${lang}','')" style="cursor:pointer;color:var(--gr);text-decoration:none">${breadcrumbHome}</a>
    &nbsp;/&nbsp;<span style="color:var(--ink)">${c.pageTitle}</span>
  </nav>
  <h1 class="stitle" style="text-align:left;margin-bottom:.25rem">${c.pageTitle}</h1>
  <p id="cart-count" style="color:var(--gr);font-size:.85rem;margin-bottom:2rem">0 ${c.itemsLabel}</p>

  <div id="cart-list-view">
    <div id="cart-empty" style="display:none;text-align:center;padding:3rem 1rem;border:1px solid var(--lt)">
      <p style="font-size:1rem;margin-bottom:.5rem">${c.empty}</p>
      <p style="color:var(--gr);font-size:.85rem;margin-bottom:1.5rem">${c.emptySub}</p>
      <button class="btn bp" onclick="go('${lang}','shop')">${c.browseCta}</button>
    </div>
    <div id="cart-items"></div>
    <div id="cart-summary" style="display:none;margin-top:2rem;padding-top:1.5rem;border-top:2px solid var(--ink)">
      <button onclick="cartCheckout()" style="width:100%;padding:.9rem;background:var(--ac);color:#fff;border:none;border-radius:2px;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;margin-bottom:.75rem">${c.checkout}</button>
      <p style="font-size:.75rem;color:var(--gr);text-align:center;margin:0">${c.checkoutNote}</p>
    </div>
  </div>

  <div id="cart-done-view" style="display:none;text-align:center;padding:3rem 1rem;border:1px solid var(--lt)">
    <p style="font-size:1.3rem;font-family:'Playfair Display',Georgia,serif;margin-bottom:.75rem">${c.checkoutDone}</p>
    <p style="color:var(--gr);font-size:.9rem;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto">${c.checkoutDoneSub}</p>
    <button class="btn bs" onclick="cartBackToList()">${c.backToCart}</button>
  </div>
</section>
` + foot(t, lang);
  return page(`${c.pageTitle} | AURA LUXE`, c.emptySub, lang, body, "cart");
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
    ["🎯", t.nav.cons, lang === "nl" ? "Procesoptimalisatie, functioneringsgesprekken en functie-analyse." : lang === "fr" ? "Optimisation, entretiens d'évaluation et analyse." : lang === "de" ? "Prozessoptimierung, Mitarbeitergespräche und Stellenanalyse." : "Process optimisation, performance reviews and role analysis.", "cons", lang === "nl" ? "Plan een gesprek →" : lang === "fr" ? "Planifier un échange →" : "Book a call →"],
    ["📈", t.nav.cro, lang === "nl" ? "Revenue leiderschap voor AI/SaaS scale-ups. Prijs op offerte." : lang === "fr" ? "Leadership revenue pour scale-ups. Prix sur devis." : lang === "de" ? "Revenue-Führung für AI/SaaS Scale-ups. Preis auf Anfrage." : "Revenue leadership for AI/SaaS scale-ups. Price on request.", "cro", lang === "nl" ? "Boek een strategiegesprek →" : lang === "fr" ? "Réserver un entretien →" : "Book a strategy call →"],
    ["🖨️", t.nav.graf, lang === "nl" ? "Onderdelen & consumables voor drukkerijen, repro en verpakking. Marktconforme prijzen." : lang === "fr" ? "Pièces & consommables pour imprimeries et emballage. Prix compétitifs." : lang === "de" ? "Ersatzteile & Verbrauchsmaterial für Druckereien, Reprografie und Verpackung. Marktgerechte Preise." : "Parts & consumables for printing, repro and packaging. Market-rate pricing.", "graf", lang === "nl" ? "Vraag een offerte aan →" : lang === "fr" ? "Demander un devis →" : "Request a quote →"],
    ["✨", "AURA LUXE", lang === "nl" ? "Mid-to-high end luxury beauty — skincare, parfum, make-up en home & wellness." : lang === "fr" ? "Luxury beauty haut de gamme — soins, parfum, maquillage et maison & bien-être." : lang === "de" ? "Mid-to-high-end Luxury Beauty — Hautpflege, Parfum, Make-up und Home & Wellness." : "Mid-to-high end luxury beauty — skincare, fragrance, make-up and home & wellness.", "shop", lang === "nl" ? "Bekijk de collectie →" : lang === "fr" ? "Voir la collection →" : "Browse the collection →"]
  ].map(([i, t2, d, p, cta]) => `<div class="sc" onclick="go('${lang}','${p}')"><div class="si">${i}</div><div class="sct">${t2}</div><div class="scd">${d}</div><div class="sl">${cta}</div></div>`).join("");
  const brands = [
    { name: "Lookfantastic" },
    { name: "Douglas" },
    { name: "Rituals" },
    { name: "Boozt" },
    { name: "Parfumdreams" }
  ].map((b) => `<div class="brand-card brand-card-type"><div class="brand-name-type">${b.name}</div></div>`).join("");
  const features2 = [
    { img: PHOTOS.beauty, title: lang === "nl" ? "Luxury Beauty" : lang === "fr" ? "Beauté Luxe" : lang === "de" ? "Luxury Beauty" : "Luxury Beauty", desc: lang === "nl" ? "Curated premium beauty. Elk product geselecteerd op kwaliteit en merkwaarde." : lang === "de" ? "Curated premium beauty. Jedes Produkt ausgewählt nach Qualität und Markenwert." : lang === "fr" ? "Beauté premium sélectionnée. Chaque produit choisi pour sa qualité." : "Curated premium beauty. Every product selected for quality and brand value." },
    { img: PHOTOS.fashion, title: lang === "nl" ? "Mode & Stijl" : lang === "de" ? "Mode & Stil" : "Mode & Style", desc: lang === "nl" ? "Premium mode voor elke leeftijd. Van eerste stapjes tot tijdloze elegantie." : lang === "de" ? "Premium-Mode für jedes Alter. Von den ersten Schritten bis zur zeitlosen Eleganz." : lang === "fr" ? "Mode premium pour tous les âges. Des premiers pas à l'élégance intemporelle." : "Premium fashion for every age. From first steps to timeless elegance." }
  ].map((f) => `<div class="feature-item"><img src="${f.img}" alt="${f.title}" loading="lazy"><div class="feature-overlay"><div class="feature-text"><h3>${f.title}</h3><p>${f.desc}</p><button class="btn bg" onclick="go('${lang}','shop')">${t.hero.cta1}</button></div></div></div>`).join("");
  const body = nav(t, lang, "") + `
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hc">
    <span class="htag">&#128081; ${t.hero.tag}</span>
    <h1 class="h1">Premium <strong>${t.hero.h1b}</strong><br>${t.hero.h1c}</h1>
    <p class="hsub">${t.hero.sub}</p>
    <p class="hsub2">${t.cats[0]} &bull; ${t.cats[1]} &bull; ${t.cats[2]} &bull; ${t.cats[3]} &bull; ${t.cats[4]} &bull; BE / NL / FR / DE</p>
    <div class="btns">
      <button class="btn bp" onclick="go('${lang}','shop')">${t.hero.cta1}</button>
      <button class="btn bs" onclick="document.getElementById('sv').scrollIntoView({behavior:'smooth'})">${t.hero.cta2}</button>
    </div>
  </div>
</section>
<div class="trust">${trust}</div>
<section class="sec">
  <div class="sh"><span class="stag">&#10022; AURA LUXE</span><h2 class="stitle">${lang === "nl" ? "Onze collecties" : lang === "fr" ? "Nos collections" : lang === "de" ? "Unsere Kollektionen" : "Our collections"}</h2><p class="ssub">${lang === "nl" ? "Skincare · Parfum · Make-up · Home & Wellness · Kleding" : lang === "de" ? "Hautpflege · Parfum · Make-up · Home & Wellness · Kleidung" : lang === "fr" ? "Soins · Parfum · Maquillage · Maison & Bien-être · Vêtements" : "Skincare · Fragrance · Make-up · Home & Wellness · Clothing"}</p></div>
  <div class="g6">${cats}</div>
</section>
<section class="sec sec-alt">
  <div class="feature-grid">${features2}</div>
</section>
<section class="sec">
  <div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Partners" : lang === "de" ? "Partner" : "Partners"}</span><h2 class="stitle">${t.brands}</h2><p class="ssub">${t.brandsSub}</p></div>
  <div class="brands-row">${brands}</div>
</section>
<section class="sec">
  <div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Werkwijze" : lang === "fr" ? "Notre approche" : lang === "de" ? "Vorgehensweise" : "Our approach"}</span><h2 class="stitle">${lang === "nl" ? "Waarom AURA LUXE" : lang === "fr" ? "Pourquoi AURA LUXE" : lang === "de" ? "Warum AURA LUXE" : "Why AURA LUXE"}</h2></div>
  <div class="sg">${[
    ["&#9878;", lang === "nl" ? "Onafhankelijk advies" : lang === "fr" ? "Avis indépendant" : lang === "de" ? "Unabhängige Beratung" : "Independent advice", lang === "nl" ? "Wij zijn aan geen enkel merk verplicht. Onze keuzes staan los van wie het meeste commissie betaalt." : lang === "de" ? "Wir sind keiner Marke verpflichtet. Unsere Auswahl ist unabhängig davon, wer die höchste Provision zahlt." : lang === "fr" ? "Nous ne sommes liés à aucune marque. Nos choix sont indépendants de la commission versée." : "We're not tied to any single brand. Our picks are independent of who pays the highest commission."],
    ["&#128269;", lang === "nl" ? "Vergeleken, niet gegokt" : lang === "fr" ? "Comparé, pas improvisé" : lang === "de" ? "Verglichen, nicht geraten" : "Compared, not guessed", lang === "nl" ? "Elk product wordt afgezet tegen het aanbod van meerdere geverifieerde retailers." : lang === "fr" ? "Chaque produit est comparé à l'offre de plusieurs détaillants vérifiés." : lang === "de" ? "Jedes Produkt wird mit dem Angebot mehrerer geprüfter Händler verglichen." : "Every product is checked against the offer from multiple verified retailers."],
    ["&#128274;", lang === "nl" ? "Transparant model" : lang === "fr" ? "Modèle transparent" : lang === "de" ? "Transparentes Modell" : "Transparent model", lang === "nl" ? "We zijn open over ons affiliate-model: geen verborgen kosten, geen meerprijs voor u." : lang === "fr" ? "Nous sommes transparents sur notre modèle d'affiliation : aucun coût caché, aucun surcoût pour vous." : lang === "de" ? "Wir sind transparent über unser Affiliate-Modell: keine versteckten Kosten, kein Aufpreis für Sie." : "We're upfront about our affiliate model: no hidden fees, no extra cost to you."],
    ["&#9993;", lang === "nl" ? "Altijd bereikbaar" : lang === "fr" ? "Toujours disponible" : lang === "de" ? "Immer erreichbar" : "Always reachable", lang === "nl" ? "Vraag over een product of bestelling? Mail naar auraluxe@bierinckx.com, we antwoorden persoonlijk." : lang === "fr" ? "Une question sur un produit ou une commande ? Écrivez à auraluxe@bierinckx.com, nous répondons personnellement." : lang === "de" ? "Frage zu einem Produkt oder einer Bestellung? Schreiben Sie an auraluxe@bierinckx.com, wir antworten persönlich." : "Question about a product or order? Email auraluxe@bierinckx.com — we reply personally."]
  ].map(([i, t2, d]) => `<div class="sc"><div class="si">${i}</div><div class="sct">${t2}</div><div class="scd">${d}</div></div>`).join("")}</div>
</section>
<section class="sec sec-alt" id="sv">
  <div class="sh"><span class="stag">&#10022; Bierinckx</span><h2 class="stitle">${t.services}</h2></div>
  <div class="sg">${svcs}</div>
</section>
` + foot(t, lang);
  const metaDesc = lang === "nl" ? `Mid-to-high end luxury beauty. Skincare, parfum, make-up en home & wellness. BE/NL/FR/DE.` : lang === "fr" ? `Luxury beauty haut de gamme. Soins, parfum, maquillage et maison & bien-être. BE/NL/FR/DE.` : lang === "de" ? `Mid-to-high-end Luxury Beauty. Hautpflege, Parfum, Make-up und Home & Wellness. BE/NL/FR/DE.` : `Mid-to-high end luxury beauty. Skincare, fragrance, make-up and home & wellness. BE/NL/FR/DE.`;
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
    <div class="sb">${lang === "nl" ? "Voorbeeldcollectie" : lang === "fr" ? "Collection exemple" : lang === "de" ? "Beispielkollektion" : "Example collection"}</div>
    <h1 class="stitle" style="font-family:'Playfair Display',Georgia,serif;margin-bottom:1rem">${lang === "nl" ? "Onze zes collecties" : lang === "fr" ? "Nos six collections" : lang === "de" ? "Unsere sechs Kollektionen" : "Our six collections"}</h1>
    <p class="ssub">${lang === "nl" ? "Elke collectie toont nu voorbeeldproducten ter test. Echte partnerlinks volgen zodra onze affiliate-samenwerkingen zijn goedgekeurd." : lang === "fr" ? "Chaque collection présente désormais des produits exemple à titre de test. Les vrais liens partenaires arrivent dès que nos collaborations affiliées seront approuvées." : lang === "de" ? "Jede Kollektion zeigt derzeit Beispielprodukte zu Testzwecken. Echte Partnerlinks folgen, sobald unsere Affiliate-Partnerschaften genehmigt sind." : "Every collection now shows example products for testing. Real partner links follow once our affiliate partnerships are approved."}<br>${lang === "nl" ? "Skincare · Parfum · Make-up · Home & Wellness · Kleding · BE / NL / FR / DE" : lang === "fr" ? "Soins · Parfum · Maquillage · Maison & Bien-être · Vêtements · BE / NL / FR / DE" : lang === "de" ? "Hautpflege · Parfum · Make-up · Home & Wellness · Kleidung · BE / NL / FR / DE" : "Skincare · Fragrance · Make-up · Home & Wellness · Clothing · BE / NL / FR / DE"}</p>
  </div>
  <div class="sc2">${cats}</div>
  <div style="margin-top:3rem"><button class="btn bp" onclick="window.location='mailto:auraluxe@bierinckx.com'">auraluxe@bierinckx.com &mdash; ${lang === "nl" ? "Vroege toegang" : lang === "fr" ? "Accès anticipé" : lang === "de" ? "Fr\u00fcher Zugang" : "Early access"}</button></div>
</section>
` + foot(t, lang);
  return page(`Shop | AURA LUXE`, `Mid-to-high end luxury beauty & kleding — skincare, parfum, make-up, home & wellness en kleding voor het hele gezin (0-65+ jaar).`, lang, body);
}
function goLink(slug) {
  return "/go/" + slug;
}
// prodCTA: geef bij voorkeur goLink(slug) mee i.p.v. de rauwe affiliate-URL (AFFILIATE_LINKS[slug]
// moet dan wel gevuld zijn) — dat verbergt lange Awin-tracking-links achter een nette bierinckx.com/go/... URL.
function prodCTA(affUrl, comingSoonBtn, viewOfferLabel) {
  return affUrl
    ? `<a class="prod-btn active" href="${affUrl}" target="_blank" rel="nofollow sponsored noopener" style="display:block;text-align:center;text-decoration:none">${viewOfferLabel}</a>`
    : `<button class="prod-btn" disabled>${comingSoonBtn}</button>`;
}
function buildCatPage(t, lang, key) {
  const c = t.shopCats[key];
  const idx = CAT_KEYS.indexOf(key);
  const mainImg = PHOTOS[CAT_PHOTO_KEYS[idx]];
  const testBadge = lang === "nl" ? "Voorbeeld · test" : lang === "fr" ? "Exemple · test" : lang === "de" ? "Beispiel · Test" : "Example · test";
  const comingSoonBtn = lang === "nl" ? "Binnenkort beschikbaar" : lang === "fr" ? "Bient\u00f4t disponible" : lang === "de" ? "Demn\u00e4chst verf\u00fcgbar" : "Coming soon";
  const viewOfferLabel = lang === "nl" ? "Bekijk aanbieding" : lang === "fr" ? "Voir l\'offre" : lang === "de" ? "Angebot ansehen" : "View offer";
  const viewSegLabel = lang === "nl" ? "Bekijk collectie" : lang === "fr" ? "Voir la collection" : lang === "de" ? "Kollektion ansehen" : "View collection";
  const segs = key === "kleding" ? c.segs.map(([imgKey, name, desc, demoProduct, affUrl], si) => `
    <div class="seg-block">
      <a href="/${lang}/${CAT_SLUGS[lang][CAT_KEYS.indexOf("kleding")]}/${SEG_KEY_TO_SLUG[lang][SEG_KEYS[si]]}" style="display:flex;text-decoration:none;color:inherit" class="seg-head">
        <img class="seg-img" src="${PHOTOS[imgKey]}" alt="${name}" loading="lazy">
        <div class="seg-info"><div class="seg-name">${name}</div><div class="seg-desc">${desc}</div></div>
      </a>
      <div class="prod-grid">
        <div class="prod-card">
          <div class="prod-badge">${testBadge}</div>
          <img class="prod-img" src="${PHOTOS[imgKey]}" alt="${demoProduct}" loading="lazy">
          <div class="prod-name">${demoProduct}</div>
          <div class="prod-price">&mdash;</div>
          ${prodCTA(affUrl, comingSoonBtn, viewOfferLabel)}
        </div>
      </div>
      <div style="text-align:center;margin-top:.75rem">
        <a href="/${lang}/${CAT_SLUGS[lang][CAT_KEYS.indexOf("kleding")]}/${SEG_KEY_TO_SLUG[lang][SEG_KEYS[si]]}" style="display:inline-block;border:1px solid var(--lt);padding:.5rem 1.1rem;border-radius:2px;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;color:var(--gr);text-decoration:none">${viewSegLabel} &rarr;</a>
      </div>
    </div>`).join("") : c.segs.map(([imgKey, name, desc], si) => `
    <a href="/${lang}/${CAT_SLUGS[lang][idx]}/${GEN_SEG_IDX_TO_SLUG[key] ? GEN_SEG_IDX_TO_SLUG[key][lang][si] : ""}" class="scat" style="display:block;text-decoration:none;color:inherit">
      <img class="scat-img" src="${PHOTOS[imgKey]}" alt="${name}" loading="lazy">
      <div class="scat-body"><div class="scat-name">${name}</div><div class="scat-desc">${desc}</div></div>
    </a>`).join("");
  const why = c.why.map(([icon, title2, desc]) => `<div class="d-card"><div class="d-icon">${icon}</div><div class="d-title">${title2}</div><div class="d-desc">${desc}</div></div>`).join("");
  const pillStyle = "display:inline-block;border:1px solid var(--lt);padding:.55rem 1.15rem;border-radius:2px;font-size:.75rem;letter-spacing:.06em;text-transform:uppercase;color:var(--gr);text-decoration:none;cursor:pointer";
  const otherCats = CAT_KEYS.map((k, i) => k === key ? "" : `<a onclick="go('${lang}','shop-${k}')" style="${pillStyle}">${t.cats[i]}</a>`).join("");
  const earlyAccessLabel = lang === "nl" ? "Vroege toegang" : lang === "fr" ? "Accès anticipé" : lang === "de" ? "Fr\u00fcher Zugang" : "Early access";
  const allCollectionsLabel = lang === "nl" ? "Alle collecties" : lang === "fr" ? "Toutes les collections" : lang === "de" ? "Alle Kollektionen" : "All collections";
  const rangeLabel = lang === "nl" ? "Aanbod" : lang === "fr" ? "Offre" : lang === "de" ? "Angebot" : "Range";
  const exampleProductsTitle = lang === "nl" ? "Voorbeeldproducten" : lang === "fr" ? "Produits exemple" : lang === "de" ? "Beispielprodukte" : "Example products";
  const exampleProductsSub = lang === "nl" ? "Een eerste greep uit het toekomstige aanbod \u2014 nu nog ter test" : lang === "fr" ? "Un premier aper\u00e7u de l\'offre \u00e0 venir \u2014 encore \u00e0 titre de test" : lang === "de" ? "Ein erster Einblick in das k\u00fcnftige Angebot \u2014 aktuell noch zu Testzwecken" : "A first look at the upcoming range \u2014 for testing purposes";
  const otherCatsTitle = lang === "nl" ? "Ontdek ook onze andere collecties" : lang === "fr" ? "Découvrez aussi nos autres collections" : lang === "de" ? "Entdecken Sie auch unsere anderen Kollektionen" : "Explore our other collections";
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
${key !== "kleding" && c.products ? `
<section class="sec">
  <div class="sh"><span class="stag">&#10022; ${rangeLabel}</span><h2 class="stitle">${exampleProductsTitle}</h2><p class="ssub">${exampleProductsSub}</p></div>
  <div class="prod-grid" style="max-width:1050px;margin:2.5rem auto 0">${c.products.map(([imgKey, pname], pi) => `
    <div class="prod-card">
      <div class="prod-badge">${testBadge}</div>
      <img class="prod-img" src="${PHOTOS[imgKey]}" alt="${pname}" loading="lazy">
      <div class="prod-name">${pname}</div>
      <div class="prod-price">&mdash;</div>
      ${prodCTA(c.productLinks && c.productLinks[pi], comingSoonBtn, viewOfferLabel)}
    </div>`).join("")}</div>
</section>` : ""}
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

function buildKledingSegPage(t, lang, segKey) {
  const idx = SEG_KEYS.indexOf(segKey);
  const [imgKey, name, desc, demoProduct, affUrl] = t.shopCats.kleding.segs[idx];
  const kledingSlug = CAT_SLUGS[lang][CAT_KEYS.indexOf("kleding")];
  const img = PHOTOS[imgKey];
  const testBadge = lang === "nl" ? "Voorbeeld \u00b7 test" : lang === "fr" ? "Exemple \u00b7 test" : lang === "de" ? "Beispiel \u00b7 Test" : "Example \u00b7 test";
  const comingSoonBtn = lang === "nl" ? "Binnenkort beschikbaar" : lang === "fr" ? "Bient\u00f4t disponible" : lang === "de" ? "Demn\u00e4chst verf\u00fcgbar" : "Coming soon";
  const viewOfferLabel = lang === "nl" ? "Bekijk aanbieding" : lang === "fr" ? "Voir l\'offre" : lang === "de" ? "Angebot ansehen" : "View offer";
  const kledingLabel = t.cats[4];
  const breadcrumbHome = lang === "nl" ? "Home" : lang === "fr" ? "Accueil" : lang === "de" ? "Startseite" : "Home";
  const otherAgesTitle = lang === "nl" ? "Andere leeftijdsgroepen" : lang === "fr" ? "Autres tranches d'\u00e2ge" : lang === "de" ? "Andere Altersgruppen" : "Other age groups";
  const backToKleding = lang === "nl" ? "Alle leeftijden bekijken" : lang === "fr" ? "Voir tous les \u00e2ges" : lang === "de" ? "Alle Altersgruppen ansehen" : "View all ages";
  const segPill = "display:inline-block;border:1px solid var(--lt);padding:.55rem 1.15rem;border-radius:2px;font-size:.75rem;letter-spacing:.06em;text-transform:uppercase;color:var(--gr);text-decoration:none;cursor:pointer";
  const segPillActive = segPill + ";background:var(--ac);color:#fff;border-color:var(--ac)";
  const switcher = SEG_KEYS.map((k, i) => {
    const label = t.shopCats.kleding.segs[i][1];
    const href = `/${lang}/${kledingSlug}/${SEG_KEY_TO_SLUG[lang][k]}`;
    return `<a href="${href}" style="${k === segKey ? segPillActive : segPill}">${label}</a>`;
  }).join("");
  const whyKleding = t.shopCats.kleding.why.map(([icon, title2, wd]) => `<div class="d-card"><div class="d-icon">${icon}</div><div class="d-title">${title2}</div><div class="d-desc">${wd}</div></div>`).join("");
  const body = nav(t, lang, "shop") + `
<section class="hero" style="min-height:50vh">
  <div class="hero-bg" style="background-image:url('${img}')"></div>
  <div class="hero-overlay"></div>
  <div class="hc">
    <span class="htag">&#128081; ${kledingLabel}</span>
    <h1 class="h1">${name}</h1>
    <p class="hsub">${desc}</p>
    <div class="btns">
      <button class="btn bs" onclick="go('${lang}','kleding')">${backToKleding}</button>
    </div>
  </div>
</section>
<nav style="max-width:1050px;margin:1.5rem auto 0;padding:0 1.5rem;font-size:.8rem;color:var(--gr)">
  <a onclick="go('${lang}','')" style="cursor:pointer;color:var(--gr);text-decoration:none">${breadcrumbHome}</a>
  &nbsp;/&nbsp;
  <a onclick="go('${lang}','kleding')" style="cursor:pointer;color:var(--gr);text-decoration:none">${kledingLabel}</a>
  &nbsp;/&nbsp;
  <span style="color:var(--ink)">${name}</span>
</nav>
<section class="sec">
  <div class="sh"><span class="stag">&#10022; ${kledingLabel}</span><h2 class="stitle">${name}</h2><p class="ssub">${desc}</p></div>
  <div class="prod-grid" style="max-width:1050px;margin:2rem auto 0">${(t.shopCats.kleding.segProducts[segKey] || [demoProduct]).map((pname, pi) => `
    <div class="prod-card">
      <div class="prod-badge">${testBadge}</div>
      <img class="prod-img" src="${img}" alt="${pname}" loading="lazy">
      <div class="prod-name">${pname}</div>
      <div class="prod-price">&mdash;</div>
      ${prodCTA(pi === 0 ? affUrl : null, comingSoonBtn, viewOfferLabel)}
    </div>`).join("")}</div>
</section>
<section class="sec sec-alt">
  <div class="sh"><span class="stag">&#10022; AURA LUXE</span><h2 class="stitle">${t.shopCats.kleding.whyTitle}</h2></div>
  <div class="d-grid">${whyKleding}</div>
</section>
<section class="sec" style="text-align:center">
  <div class="sh"><h2 class="stitle">${otherAgesTitle}</h2></div>
  <div style="display:flex;gap:.75rem;flex-wrap:wrap;justify-content:center;margin-bottom:1rem">${switcher}</div>
</section>
` + foot(t, lang);
  const metaDesc = desc.replace(/&[a-z]+;/g, " ").slice(0, 155);
  return page(`${name} | ${kledingLabel} | AURA LUXE`, metaDesc, lang, body, "shop");
}

function buildGenSegPage(t, lang, catKey, idx) {
  const c = t.shopCats[catKey];
  const [imgKey, name, desc, demoProduct, affUrl] = c.segs[idx];
  const catIdx = CAT_KEYS.indexOf(catKey);
  const catSlug = CAT_SLUGS[lang][catIdx];
  const catLabel = t.cats[catIdx];
  const img = PHOTOS[imgKey];
  const testBadge = lang === "nl" ? "Voorbeeld \u00b7 test" : lang === "fr" ? "Exemple \u00b7 test" : lang === "de" ? "Beispiel \u00b7 Test" : "Example \u00b7 test";
  const comingSoonBtn = lang === "nl" ? "Binnenkort beschikbaar" : lang === "fr" ? "Bient\u00f4t disponible" : lang === "de" ? "Demn\u00e4chst verf\u00fcgbar" : "Coming soon";
  const viewOfferLabel = lang === "nl" ? "Bekijk aanbieding" : lang === "fr" ? "Voir l\'offre" : lang === "de" ? "Angebot ansehen" : "View offer";
  const breadcrumbHome = lang === "nl" ? "Home" : lang === "fr" ? "Accueil" : lang === "de" ? "Startseite" : "Home";
  const otherSegsTitle = lang === "nl" ? `Meer uit ${catLabel}` : lang === "fr" ? `Plus dans ${catLabel}` : lang === "de" ? `Mehr aus ${catLabel}` : `More from ${catLabel}`;
  const backToCat = lang === "nl" ? `Volledige ${catLabel}-collectie` : lang === "fr" ? `Toute la collection ${catLabel}` : lang === "de" ? `Vollst\u00e4ndige ${catLabel}-Kollektion` : `Full ${catLabel} collection`;
  const segPill = "display:inline-block;border:1px solid var(--lt);padding:.55rem 1.15rem;border-radius:2px;font-size:.75rem;letter-spacing:.06em;text-transform:uppercase;color:var(--gr);text-decoration:none;cursor:pointer";
  const segPillActive = segPill + ";background:var(--ac);color:#fff;border-color:var(--ac)";
  const switcher = c.segs.map(([, segName], i) => {
    const href = `/${lang}/${catSlug}/${GEN_SEG_IDX_TO_SLUG[catKey][lang][i]}`;
    return `<a href="${href}" style="${i === idx ? segPillActive : segPill}">${segName}</a>`;
  }).join("");
  const why = c.why.map(([icon, title2, wd]) => `<div class="d-card"><div class="d-icon">${icon}</div><div class="d-title">${title2}</div><div class="d-desc">${wd}</div></div>`).join("");
  const body = nav(t, lang, "shop") + `
<section class="hero" style="min-height:50vh">
  <div class="hero-bg" style="background-image:url('${img}')"></div>
  <div class="hero-overlay"></div>
  <div class="hc">
    <span class="htag">&#128081; ${catLabel}</span>
    <h1 class="h1">${name}</h1>
    <p class="hsub">${desc}</p>
    <div class="btns">
      <button class="btn bs" onclick="go('${lang}','shop-${catKey}')">${backToCat}</button>
    </div>
  </div>
</section>
<nav style="max-width:1050px;margin:1.5rem auto 0;padding:0 1.5rem;font-size:.8rem;color:var(--gr)">
  <a onclick="go('${lang}','')" style="cursor:pointer;color:var(--gr);text-decoration:none">${breadcrumbHome}</a>
  &nbsp;/&nbsp;
  <a onclick="go('${lang}','shop-${catKey}')" style="cursor:pointer;color:var(--gr);text-decoration:none">${catLabel}</a>
  &nbsp;/&nbsp;
  <span style="color:var(--ink)">${name}</span>
</nav>
<section class="sec">
  <div class="sh"><span class="stag">&#10022; ${catLabel}</span><h2 class="stitle">${name}</h2><p class="ssub">${desc}</p></div>
  <div class="prod-grid" style="max-width:1050px;margin:2rem auto 0">${(c.products || [[imgKey, demoProduct]]).map(([pImgKey, pname], pi) => `
    <div class="prod-card">
      <div class="prod-badge">${testBadge}</div>
      <img class="prod-img" src="${PHOTOS[pImgKey]}" alt="${pname}" loading="lazy">
      <div class="prod-name">${pname}</div>
      <div class="prod-price">&mdash;</div>
      ${prodCTA(pi === 0 ? affUrl : (c.productLinks && c.productLinks[pi]), comingSoonBtn, viewOfferLabel)}
    </div>`).join("")}</div>
</section>
<section class="sec sec-alt">
  <div class="sh"><span class="stag">&#10022; AURA LUXE</span><h2 class="stitle">${c.whyTitle}</h2></div>
  <div class="d-grid">${why}</div>
</section>
<section class="sec" style="text-align:center">
  <div class="sh"><h2 class="stitle">${otherSegsTitle}</h2></div>
  <div style="display:flex;gap:.75rem;flex-wrap:wrap;justify-content:center;margin-bottom:1rem">${switcher}</div>
</section>
` + foot(t, lang);
  const metaDesc2 = desc.replace(/&[a-z]+;/g, " ").slice(0, 155);
  return page(`${name} | ${catLabel} | AURA LUXE`, metaDesc2, lang, body, "shop");
}
function buildPsy(t, lang) {
  const p = t.psy;
  const svcs = p.s.map(([i, tt, d]) => `<div class="sc" style="cursor:default"><div class="si">${i}</div><div class="sct">${tt}</div><div class="scd">${d}</div></div>`).join("");
  const steps = p.steps.map((s, i) => `<div class="step"><div class="sn">${i + 1}</div><div class="st">${s}</div></div>`).join("");
  const sessions = p.sessions.map(([dur, desc]) => `<div class="sess" onclick="this.classList.toggle('sel')"><div class="sess-dur">${dur}</div><div class="sess-desc">${desc}</div></div>`).join("");
  const body = nav(t, lang, "psy") + `
<section class="ph ph-p"><h1>${p.hero}</h1><p>${p.heroSub}</p><button class="btn bg" onclick="document.getElementById('sess-kies').scrollIntoView({behavior:'smooth'})">${p.book}</button></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Ons aanbod" : lang === "fr" ? "Notre offre" : lang === "de" ? "Unser Angebot" : "Our services"}</span><h2 class="stitle">${lang === "nl" ? "Psychologie & Welzijn" : lang === "fr" ? "Psychologie & Bien-être" : lang === "de" ? "Psychologie & Wohlbefinden" : "Psychology & Wellbeing"}</h2></div><div class="sg">${svcs}</div></section>
<section class="sec" id="sess-kies"><div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Stap 1" : lang === "de" ? "Schritt 1" : "Step 1"}</span><h2 class="stitle">${lang === "nl" ? "Kies uw sessieduur" : lang === "fr" ? "Choisissez la durée" : lang === "de" ? "W\u00e4hlen Sie Ihre Sitzungsdauer" : "Choose your session duration"}</h2><p class="ssub">${lang === "nl" ? "Na betaling ontvangt u directe toegang tot de beveiligde chat" : lang === "fr" ? "Après paiement, accès direct au chat" : "After payment you receive immediate access to the secure chat"}</p></div><div class="sess-grid">${sessions}</div><div style="text-align:center;margin-top:2rem"><button class="btn bp" onclick="window.location='mailto:${p.email}'">${p.book}</button><p style="margin-top:1rem;font-size:.82rem;color:var(--gr)">${p.privacy}</p></div></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; Chat</span><h2 class="stitle">${p.chatTitle}</h2><p class="ssub">${p.chatInfo}</p></div><div class="chat-locked"><p>&#128274; ${lang === "nl" ? "De chat wordt automatisch ontgrendeld na betaling van uw sessie." : lang === "fr" ? "Le chat est automatiquement débloqué après paiement." : lang === "de" ? "Der Chat wird nach Bezahlung Ihrer Sitzung automatisch freigeschaltet." : "The chat is automatically unlocked after payment."}</p><button class="btn bp" onclick="window.location='mailto:${p.email}'">${p.book}</button></div></section>
<section class="sec"><div class="sh"><span class="stag">&#10022; Process</span><h2 class="stitle">${p.howTitle}</h2></div><div class="steps">${steps}</div></section>
` + foot(t, lang);
  return page(`${lang === "nl" ? "Psychologie" : lang === "de" ? "Psychologie" : "Psychology"} | Bierinckx`, p.heroSub, lang, body);
}
function buildCons(t, lang) {
  const c = t.cons;
  const diensten = c.diensten.map(([icon, title2, desc]) => `<div class="d-card"><div class="d-icon">${icon}</div><div class="d-title">${title2}</div><div class="d-desc">${desc}</div></div>`).join("");
  const steps = c.steps.map((s, i) => `<div class="step"><div class="sn">${i + 1}</div><div class="st">${s}</div></div>`).join("");
  const body = nav(t, lang, "cons") + `
<section class="ph ph-c"><h1>${c.hero}</h1><p>${c.heroSub}</p><button class="btn bg" onclick="window.location='mailto:${c.email}'">${c.cta}</button></section>
<section class="sec"><div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Wat we doen" : lang === "fr" ? "Ce que nous faisons" : lang === "de" ? "Was wir tun" : "What we do"}</span><h2 class="stitle">${c.dienstenTitle}</h2></div><div class="d-grid">${diensten}</div></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Aanpak" : lang === "fr" ? "Approche" : lang === "de" ? "Vorgehen" : "Approach"}</span><h2 class="stitle">${c.aanpakTitle}</h2></div><div class="steps">${steps}</div><div class="price-note">${c.prijsNote}</div></section>
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
<section class="sec"><div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Fasen" : lang === "de" ? "Phasen" : "Phases"}</span><h2 class="stitle">${c.fasesTitle}</h2></div><div class="fase-grid">${fases}</div><div class="price-note">${c.prijsNote}</div></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; ICP</span><h2 class="stitle">${lang === "nl" ? "Voor wie?" : lang === "fr" ? "Pour qui?" : lang === "de" ? "F\u00fcr wen?" : "Who is it for?"}</h2></div><ul class="tl">${targets}</ul></section>
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
<section class="sec"><div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Wat we doen" : lang === "fr" ? "Ce que nous faisons" : lang === "de" ? "Was wir tun" : "What we do"}</span><h2 class="stitle">${g.dienstenTitle}</h2></div><div class="d-grid">${diensten}</div></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; ${lang === "nl" ? "Aanpak" : lang === "fr" ? "Approche" : lang === "de" ? "Vorgehen" : "Approach"}</span><h2 class="stitle">${g.aanpakTitle}</h2></div><div class="steps">${steps}</div><div class="price-note">${g.prijsNote}</div></section>
<section class="sec"><div class="sh"><h2 class="stitle">${g.cta}</h2></div><div class="ib"><p>&#128231; <a class="ea" href="mailto:${g.email}">${g.email}</a></p><button class="btn bp">${g.cta}</button></div></section>
` + foot(t, lang);
  return page(`${lang === "nl" ? "Grafische Nijverheid" : lang === "fr" ? "Industrie Graphique" : lang === "de" ? "Grafikbranche" : "Graphics Industry"} | Bierinckx`, g.heroSub, lang, body);
}
function detectLang(request) {
  const url = new URL(request.url);
  const parts = url.pathname.split("/").filter(Boolean);
  const langs = ["nl", "fr", "en", "de"];
  if (langs.includes(parts[0]))
    return { lang: parts[0], rest: parts.slice(1) };
  const accept = request.headers.get("accept-language") || "";
  if (accept.toLowerCase().startsWith("fr"))
    return { lang: "fr", rest: parts };
  if (accept.toLowerCase().startsWith("de"))
    return { lang: "de", rest: parts };
  if (accept.toLowerCase().startsWith("en"))
    return { lang: "en", rest: parts };
  return { lang: "nl", rest: parts };
}
var worker_default = {
  async fetch(request, env3, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET,POST,OPTIONS", "Access-Control-Allow-Headers": "Content-Type" };
    if (request.method === "OPTIONS")
      return new Response(null, { status: 204, headers: cors });
    if (path.startsWith("/go/")) {
      const slug = decodeURIComponent(path.slice(4).split("?")[0].replace(/\/$/, ""));
      const target = AFFILIATE_LINKS[slug];
      if (target) {
        return Response.redirect(target, 302);
      }
      return Response.redirect(new URL("/nl/shop", url.origin).toString(), 302);
    }
    if (path === "/api/chat" && request.method === "POST") {
      const clientIp = request.headers.get("CF-Connecting-IP") || "unknown";
      if (env3.RATE_LIMIT_KV) {
        const rlKey = `chat:${clientIp}`;
        const current = parseInt((await env3.RATE_LIMIT_KV.get(rlKey)) || "0", 10);
        if (current >= 20) {
          return new Response(JSON.stringify({ error: "Too many requests", reply: "U heeft het maximum aantal berichten voor dit moment bereikt. Probeer het over enkele minuten opnieuw of mail naar auraluxe@bierinckx.com." }), { status: 429, headers: { ...cors, "Content-Type": "application/json" } });
        }
        await env3.RATE_LIMIT_KV.put(rlKey, String(current + 1), { expirationTtl: 60 });
      }
      let body;
      try {
        body = await request.json();
      } catch {
        return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400, headers: cors });
      }
      const { message, history = [], system, lang: lang2 = "nl" } = body;
      if (!message)
        return new Response(JSON.stringify({ error: "No message" }), { status: 400, headers: cors });
      if (message.length > 2000)
        return new Response(JSON.stringify({ error: "Message too long" }), { status: 400, headers: cors });
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
    if (path === "/38abd3718d95d50.html")
      return new Response("0b3260fbad7718ddbbbd3718d95d50cd9da14f139fbe99bc9296638abd3718d95d50cd9da14f13fc48c09d4f3ca291e4f0de0632d54df640d1ffb390adfa3b0b3260fbad7718ddbb98560f8aeb1d89819a9fbe99bc98f2f80b96fd90954d25f34", { headers: { "Content-Type": "text/html" } });
    if (path === "/robots.txt")
      return new Response("User-agent: *\nAllow: /\nSitemap: https://bierinckx.com/sitemap.xml\n", { headers: { "Content-Type": "text/plain" } });
    if (path === "/sitemap.xml")
      return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://bierinckx.com/nl</loc><priority>1.0</priority></url><url><loc>https://bierinckx.com/fr</loc><priority>1.0</priority></url><url><loc>https://bierinckx.com/en</loc><priority>1.0</priority></url><url><loc>https://bierinckx.com/nl/shop</loc><priority>0.9</priority></url><url><loc>https://bierinckx.com/nl/skincare</loc><priority>0.85</priority></url><url><loc>https://bierinckx.com/nl/parfum</loc><priority>0.85</priority></url><url><loc>https://bierinckx.com/nl/make-up</loc><priority>0.85</priority></url><url><loc>https://bierinckx.com/nl/home-wellness</loc><priority>0.85</priority></url><url><loc>https://bierinckx.com/nl/kleding</loc><priority>0.85</priority></url><url><loc>https://bierinckx.com/nl/winkelwagen</loc><priority>0.4</priority></url><url><loc>https://bierinckx.com/nl/skincare/gezichtsverzorging</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/skincare/rituelen-texturen</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/skincare/bodycare-wellness</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/parfum/eau-de-parfum-signature</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/parfum/geurrituelen-body-mist</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/parfum/geursets-miniaturen</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/make-up/teint-basis</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/make-up/ogen-lippen</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/make-up/tools-accessoires</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/accessoires</loc><priority>0.85</priority></url><url><loc>https://bierinckx.com/nl/accessoires/tassen</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/accessoires/sieraden</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/accessoires/zonnebrillen-riemen</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/home-wellness/geurkaarsen-diffusers</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/home-wellness/bad-douche-rituelen</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/home-wellness/kleine-luxe-accenten</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/kleding/baby-peuter</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/kleding/kids</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/kleding/tieners</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/kleding/volwassenen</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/kleding/senioren</loc><priority>0.75</priority></url><url><loc>https://bierinckx.com/nl/consultancy</loc><priority>0.8</priority></url><url><loc>https://bierinckx.com/nl/cro</loc><priority>0.8</priority></url><url><loc>https://bierinckx.com/nl/grafische-nijverheid</loc><priority>0.8</priority></url></urlset>`, { headers: { "Content-Type": "application/xml" } });
    if (path === "/" || path === "") {
      const accept = request.headers.get("accept-language") || "";
      const lang2 = accept.toLowerCase().startsWith("fr") ? "fr" : accept.toLowerCase().startsWith("en") ? "en" : "nl";
      return new Response(buildHome(T[lang2], lang2), { headers: { "Content-Type": "text/html;charset=UTF-8" } });
    }
    const { lang, rest } = detectLang(request);
    const t = T[lang];
    const p = rest[0] || "";
    const h = /* @__PURE__ */ ((html) => new Response(html, { headers: { "Content-Type": "text/html;charset=UTF-8" } }));
    if (p === "")
      return h(buildHome(t, lang));
    if (p === "shop")
      return h(buildShop(t, lang));
    if (p === CART_SLUGS[lang])
      return h(buildCartPage(t, lang));
    if (CAT_SLUG_TO_KEY[lang][p] === "kleding" && rest[1] && SEG_SLUG_TO_KEY[lang][rest[1]])
      return h(buildKledingSegPage(t, lang, SEG_SLUG_TO_KEY[lang][rest[1]]));
    if (GEN_SEG_SLUGS[CAT_SLUG_TO_KEY[lang][p]] && rest[1] && GEN_SEG_SLUG_TO_IDX[CAT_SLUG_TO_KEY[lang][p]][lang][rest[1]] !== undefined)
      return h(buildGenSegPage(t, lang, CAT_SLUG_TO_KEY[lang][p], GEN_SEG_SLUG_TO_IDX[CAT_SLUG_TO_KEY[lang][p]][lang][rest[1]]));
    if (CAT_SLUG_TO_KEY[lang][p])
      return h(buildCatPage(t, lang, CAT_SLUG_TO_KEY[lang][p]));
    if (["psychologie", "psychology", "psy"].includes(p))
      return h(buildPsy(t, lang));
    if (["consultancy", "consultance", "cons"].includes(p))
      return h(buildCons(t, lang));
    if (["cro", "fractional-cro"].includes(p))
      return h(buildCRO(t, lang));
    if (["grafische-nijverheid", "industrie-graphique", "graphics-industry", "grafikbranche", "graf"].includes(p))
      return h(buildGraf(t, lang));
    if (p === legalSlug("privacy", lang))
      return h(buildPrivacy(t, lang));
    if (p === legalSlug("terms", lang))
      return h(buildTerms(t, lang));
    if (["bedankt", "merci", "thank-you", "chat", "klantenservice", "service-client", "customer-service", "kundenservice"].includes(p)) {
      const paid = url.searchParams.get("paid") === "1";
      const chatContent = paid ? `<div class="chat-locked"><p>&#10003; ${lang === "nl" ? "Uw sessie is bevestigd. De chat is beschikbaar via de knop rechtsonder op elke pagina." : lang === "fr" ? "Votre session est confirmée. Le chat est disponible via le bouton en bas à droite." : lang === "de" ? "Ihre Sitzung ist best\u00e4tigt. Der Chat ist \u00fcber die Schaltfl\u00e4che unten rechts auf jeder Seite verf\u00fcgbar." : "Your session is confirmed. Chat is available via the button at the bottom right."}</p></div>` : `<div class="chat-locked"><p>&#128274; ${lang === "nl" ? "Nog geen actieve sessie. Betaal eerst om toegang te krijgen." : lang === "fr" ? "Pas encore de session. Payez d'abord." : lang === "de" ? "Noch keine aktive Sitzung. Bitte bezahlen Sie zuerst." : "No active session yet. Please pay first."}</p><button class="btn bp" onclick="window.location='/'+('${lang}')+'/psychologie'">${lang === "nl" ? "Sessie boeken" : "Book a session"}</button></div>`;
      return h(page(`Chat | Bierinckx`, `Klantenservice AURA LUXE`, lang, nav(t, lang, "psy") + `<section class="sec"><div class="sh"><span class="stag">&#10022; Chat</span><h2 class="stitle">${t.chatTitle}</h2><p class="ssub">${t.chatSubtitle}</p></div>${chatContent}</section>` + foot(t, lang)));
    }
    return new Response(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>404</title></head><body style="font-family:system-ui;background:#FAF9F6;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center"><div><h1 style="font-weight:300;margin-bottom:1rem">404</h1><a href="/${lang}" style="color:#8B1A2B">← Home</a></div></body></html>`, { status: 404, headers: { "Content-Type": "text/html;charset=UTF-8" } });
  }
};
export default worker_default;
