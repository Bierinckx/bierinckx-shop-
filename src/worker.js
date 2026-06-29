// BIERINCKX REVENUE AGENCY — CLOUDFLARE WORKER v2.0
// NL/FR/EN | AURA LUXE 0-70j | Psy | Consultancy | CRO
// Deadline: 1 augustus 2026

const T = {
  nl: {
    nav: { home: 'Home', shop: 'Shop', psy: 'Psychologie', cons: 'Consultancy', cro: 'Fractional CRO' },
    hero: { tag: 'Premium Luxury Lifestyle', h1a: 'Premium', h1b: 'Luxury Lifestyle', h1c: 'voor het hele gezin', sub: 'Van pasgeboren baby tot senior van 70 jaar', cta1: 'Ontdek de collectie', cta2: 'Meer info' },
    cats: ['Baby & Peuter','Kids','Tieners','Volwassenen','Senioren','Home & Wellness'],
    catDesc: ['0\u20133 jaar \u00b7 Zacht, veilig en luxueus','4\u201312 jaar \u00b7 Premium voor actieve kinderen','13\u201317 jaar \u00b7 Stijlvol en eigentijds','18\u201350 jaar \u00b7 Luxury lifestyle','50\u201370 jaar \u00b7 Elegantie en comfort','Voor het hele gezin \u00b7 Woondecor & welzijn'],
    trust: ['Gratis retour binnen 30 dagen','Veilig betalen via Stripe','Levering in BE \u00b7 NL \u00b7 FR','Klantenservice 7/7'],
    more: 'Meer info \u2192',
    psy: { hero: 'Jouw welzijn staat centraal', heroSub: 'Online sessies met erkende psychologen. Veilig, professioneel en toegankelijk.', book: 'Sessie boeken', price: '\u20ac30 / 30 minuten', s: [['\ud83e\udde0','Individuele therapie','Persoonlijke begeleiding bij stress, angst, burn-out en levensvragen.'],['\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67','Gezinstherapie','Ondersteuning voor gezinnen, koppels en ouders.'],['\ud83e\uddd2','Jeugdpsychologie','Specialistische begeleiding voor kinderen en jongeren (6\u201325 jaar).'],['\ud83d\udcbc','Bedrijfspsychologie','Burn-out preventie, re-integratie en leiderschapscoaching.']], how: 'Hoe werkt het?', steps: ['Neem contact op via psy@bierinckx.com','Ontvang uw persoonlijke Stripe-betaallink','Na betaling: sessie direct ingepland','Online via Whereby of Zoom'], email: 'psy@bierinckx.com', privacy: '\ud83d\udd12 Volledig vertrouwelijk \u00b7 GDPR-conform \u00b7 End-to-end versleuteld' },
    cons: { hero: 'Optimaliseer uw organisatie', heroSub: 'Resultaatgerichte procesoptimalisatie voor KMO\u2019s in de Benelux.', cta: 'Vrijblijvend gesprek plannen', pkgs: [['Quick Scan','\u20ac1.950 \u2013 \u20ac2.800','1\u20132 werkdagen \u00b7 Snelle doorlichting van uw processen.'],['Volledige Analyse','\u20ac6.500 \u2013 \u20ac9.500','2\u20134 weken \u00b7 Grondige analyse en concrete aanbevelingen.',true],['End-to-end','\u20ac18.000 \u2013 \u20ac35.000','3\u20136 maanden \u00b7 Volledige implementatie en opvolging.']], steps: ['Gratis intakegesprek (60 min)','Offerte op maat','Na akkoord: betaling via Stripe','30 & 90 dagen opvolging'], email: 'consultancy@bierinckx.com' },
    cro: { hero: 'Groei zonder de kosten van een voltijdse CRO', heroSub: 'Strategisch revenue leiderschap voor AI/SaaS scale-ups in BE \u00b7 NL \u00b7 DE.', what: 'Wat is een Fractional CRO?', whatTxt: 'Een Chief Revenue Officer op deeltijdse basis. U krijgt topexpertise aan een fractie van de kostprijs.', pkgs: [['Fase 1','\u20ac5.000 \u2013 \u20ac8.000/mnd','Strategische audit \u00b7 pipeline opbouw \u00b7 eerste resultaten.'],['Fase 2+','\u20ac10.000 \u2013 \u20ac15.000/mnd','Schaling \u00b7 team leadership \u00b7 internationale groei.',true]], targets: ['AI/SaaS bedrijven \u00b7 10\u201350 FTE','Series A/B financiering','Actief in BE \u00b7 NL \u00b7 DE \u00b7 internationaal','Klaar voor de volgende groeifase'], email: 'sales@bierinckx.com', cta: 'Strategiegesprek aanvragen' }
  },
  fr: {
    nav: { home: 'Accueil', shop: 'Boutique', psy: 'Psychologie', cons: 'Consultance', cro: 'Fractional CRO' },
    hero: { tag: 'Premium Luxury Lifestyle', h1a: 'Premium', h1b: 'Luxury Lifestyle', h1c: 'pour toute la famille', sub: 'Du nouveau-n\u00e9 au senior de 70 ans', cta1: 'D\u00e9couvrir la collection', cta2: 'En savoir plus' },
    cats: ['B\u00e9b\u00e9 & Tout-petit','Enfants','Adolescents','Adultes','Seniors','Maison & Bien-\u00eatre'],
    catDesc: ['0\u20133 ans \u00b7 Doux, s\u00fbr et luxueux','4\u201312 ans \u00b7 Premium pour enfants actifs','13\u201317 ans \u00b7 Sty l\u00e9 et moderne','18\u201350 ans \u00b7 Lifestyle luxe','50\u201370 ans \u00b7 \u00c9l\u00e9gance et confort','Pour toute la famille \u00b7 D\u00e9co & bien-\u00eatre'],
    trust: ['Retour gratuit 30 jours','Paiement s\u00e9curis\u00e9 Stripe','Livraison BE \u00b7 NL \u00b7 FR','Service client 7/7'],
    more: 'En savoir plus \u2192',
    psy: { hero: 'Votre bien-\u00eatre est notre priorit\u00e9', heroSub: 'Sessions en ligne avec des psychologues agr\u00e9\u00e9s. S\u00fbr, professionnel et accessible.', book: 'R\u00e9server une session', price: '\u20ac30 / 30 minutes', s: [['\ud83e\udde0','Th\u00e9rapie individuelle','Accompagnement personnel pour le stress, l\u2019anxi\u00e9t\u00e9, le burn-out.'],['\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67','Th\u00e9rapie familiale','Soutien pour les familles, couples et parents.'],['\ud83e\uddd2','Psychologie jeunesse','Accompagnement sp\u00e9cialis\u00e9 pour enfants et jeunes (6\u201325 ans).'],['\ud83d\udcbc','Psychologie d\u2019entreprise','Pr\u00e9vention burn-out, r\u00e9int\u00e9gration et coaching.']], how: 'Comment \u00e7a marche?', steps: ['Contactez-nous via psy@bierinckx.com','Recevez votre lien de paiement Stripe','Apr\u00e8s paiement: session planifi\u00e9e','En ligne via Whereby ou Zoom'], email: 'psy@bierinckx.com', privacy: '\ud83d\udd12 Enti\u00e8rement confidentiel \u00b7 RGPD \u00b7 Chiffrement bout en bout' },
    cons: { hero: 'Optimisez votre organisation', heroSub: 'Optimisation des processus orient\u00e9e r\u00e9sultats pour les PME du Benelux.', cta: 'Planifier un entretien', pkgs: [['Quick Scan','\u20ac1.950 \u2013 \u20ac2.800','1\u20132 jours \u00b7 Audit rapide de vos processus.'],['Analyse compl\u00e8te','\u20ac6.500 \u2013 \u20ac9.500','2\u20134 semaines \u00b7 Analyse approfondie et recommandations.',true],['End-to-end','\u20ac18.000 \u2013 \u20ac35.000','3\u20136 mois \u00b7 Impl\u00e9mentation compl\u00e8te et suivi.']], steps: ['Entretien gratuit (60 min)','Offre sur mesure','Apr\u00e8s accord: paiement Stripe','Suivi \u00e0 30 & 90 jours'], email: 'consultancy@bierinckx.com' },
    cro: { hero: 'Croissance sans le co\u00fbt d\u2019un CRO \u00e0 temps plein', heroSub: 'Leadership revenue strat\u00e9gique pour scale-ups AI/SaaS en BE \u00b7 NL \u00b7 DE.', what: 'Qu\u2019est-ce qu\u2019un Fractional CRO?', whatTxt: 'Un Chief Revenue Officer \u00e0 temps partiel. Expertise de haut niveau \u00e0 une fraction du co\u00fbt.', pkgs: [['Phase 1','\u20ac5.000 \u2013 \u20ac8.000/mois','Audit strat\u00e9gique \u00b7 pipeline \u00b7 premiers r\u00e9sultats.'],['Phase 2+','\u20ac10.000 \u2013 \u20ac15.000/mois','Scaling \u00b7 leadership \u00b7 croissance internationale.',true]], targets: ['Entreprises AI/SaaS \u00b7 10\u201350 ETP','Financement Series A/B','Actif en BE \u00b7 NL \u00b7 DE \u00b7 international','Pr\u00eat pour la prochaine phase'], email: 'sales@bierinckx.com', cta: 'Demander un entretien' }
  },
  en: {
    nav: { home: 'Home', shop: 'Shop', psy: 'Psychology', cons: 'Consultancy', cro: 'Fractional CRO' },
    hero: { tag: 'Premium Luxury Lifestyle', h1a: 'Premium', h1b: 'Luxury Lifestyle', h1c: 'for the whole family', sub: 'From newborn to senior aged 70', cta1: 'Discover the collection', cta2: 'Learn more' },
    cats: ['Baby & Toddler','Kids','Teens','Adults','Seniors','Home & Wellness'],
    catDesc: ['0\u20133 years \u00b7 Soft, safe and luxurious','4\u201312 years \u00b7 Premium for active children','13\u201317 years \u00b7 Stylish and contemporary','18\u201350 years \u00b7 Luxury lifestyle','50\u201370 years \u00b7 Elegance and comfort','For the whole family \u00b7 Home d\u00e9cor & wellness'],
    trust: ['Free returns within 30 days','Secure payment via Stripe','Delivery in BE \u00b7 NL \u00b7 FR','Customer service 7/7'],
    more: 'Learn more \u2192',
    psy: { hero: 'Your wellbeing is our priority', heroSub: 'Online sessions with certified psychologists. Safe, professional and accessible.', book: 'Book a session', price: '\u20ac30 / 30 minutes', s: [['\ud83e\udde0','Individual therapy','Personal guidance for stress, anxiety, burnout and life questions.'],['\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67','Family therapy','Support for families, couples and parents.'],['\ud83e\uddd2','Youth psychology','Specialist guidance for children and young people (6\u201325 years).'],['\ud83d\udcbc','Corporate psychology','Burnout prevention, reintegration and leadership coaching.']], how: 'How does it work?', steps: ['Contact us via psy@bierinckx.com','Receive your personal Stripe payment link','After payment: session scheduled immediately','Online via Whereby or Zoom'], email: 'psy@bierinckx.com', privacy: '\ud83d\udd12 Fully confidential \u00b7 GDPR compliant \u00b7 End-to-end encrypted' },
    cons: { hero: 'Optimise your organisation', heroSub: 'Results-driven process optimisation for SMEs in the Benelux.', cta: 'Schedule a free consultation', pkgs: [['Quick Scan','\u20ac1,950 \u2013 \u20ac2,800','1\u20132 working days \u00b7 Quick audit of your processes.'],['Full Analysis','\u20ac6,500 \u2013 \u20ac9,500','2\u20134 weeks \u00b7 In-depth analysis and recommendations.',true],['End-to-end','\u20ac18,000 \u2013 \u20ac35,000','3\u20136 months \u00b7 Full implementation and follow-up.']], steps: ['Free intake meeting (60 min)','Tailored proposal','After agreement: payment via Stripe','Follow-up at 30 & 90 days'], email: 'consultancy@bierinckx.com' },
    cro: { hero: 'Growth without the cost of a full-time CRO', heroSub: 'Strategic revenue leadership for AI/SaaS scale-ups in BE \u00b7 NL \u00b7 DE.', what: 'What is a Fractional CRO?', whatTxt: 'A part-time Chief Revenue Officer. Top-level expertise at a fraction of the cost of a full-time hire.', pkgs: [['Phase 1','\u20ac5,000 \u2013 \u20ac8,000/month','Strategic audit \u00b7 pipeline building \u00b7 first results.'],['Phase 2+','\u20ac10,000 \u2013 \u20ac15,000/month','Scaling \u00b7 team leadership \u00b7 international growth.',true]], targets: ['AI/SaaS companies \u00b7 10\u201350 FTE','Series A/B funding','Active in BE \u00b7 NL \u00b7 DE \u00b7 internationally','Ready for the next growth phase'], email: 'sales@bierinckx.com', cta: 'Request a strategy call' }
  }
};

const CSS = `
:root{--cr:#FAF9F6;--iv:#F5F3EE;--bu:#8B1A2B;--bd:#6B1421;--bk:#1a1a1a;--gr:#555;--lt:#e8e0d0;--go:#C9A96E}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:system-ui,-apple-system,sans-serif;background:var(--cr);color:var(--bk);min-height:100vh}
nav{background:var(--cr);border-bottom:1px solid var(--lt);padding:0 2rem;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;height:64px}
.logo{font-family:'Playfair Display',Georgia,serif;font-size:1.4rem;font-weight:700;text-decoration:none;color:var(--bk);letter-spacing:.05em;display:flex;align-items:center;gap:.4rem}
.logo .cr{color:var(--go)}.logo span{color:var(--bu)}
.nl{display:flex;align-items:center;gap:1.5rem}
.nl a{text-decoration:none;color:var(--gr);font-size:.82rem;letter-spacing:.08em;text-transform:uppercase;transition:color .2s;padding:.25rem 0;border-bottom:2px solid transparent;cursor:pointer}
.nl a:hover,.nl a.ac{color:var(--bu);border-bottom-color:var(--bu)}
.ls{display:flex;gap:.4rem;margin-left:1rem;padding-left:1rem;border-left:1px solid var(--lt)}
.lb{background:none;border:none;cursor:pointer;font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gr);padding:.25rem .5rem;border-radius:2px;transition:all .2s}
.lb.ac,.lb:hover{background:var(--bu);color:#fff}
.hero{background:linear-gradient(135deg,var(--iv) 0%,var(--cr) 60%,#f0ebe0 100%);min-height:88vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:4rem 2rem}
.hc{max-width:780px}
.htag{display:inline-block;font-size:.72rem;letter-spacing:.25em;text-transform:uppercase;color:var(--go);margin-bottom:1.5rem;font-weight:500}
.h1{font-family:'Playfair Display',Georgia,serif;font-size:clamp(2.4rem,6vw,4.8rem);font-weight:400;line-height:1.1;margin-bottom:1.5rem}
.h1 strong{color:var(--bu);font-weight:700}
.hsub{font-size:1.1rem;color:var(--gr);line-height:1.7;margin-bottom:.5rem;max-width:540px;margin-left:auto;margin-right:auto}
.hsub2{font-size:.85rem;color:#aaa;letter-spacing:.08em;margin-bottom:2.5rem}
.btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.btn{padding:.88rem 2.4rem;font-size:.82rem;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;border-radius:1px;transition:all .22s;font-weight:500;display:inline-block;cursor:pointer;border:none}
.bp{background:var(--bu);color:#fff}.bp:hover{background:var(--bd);transform:translateY(-1px)}
.bs{border:1.5px solid var(--bk);color:var(--bk);background:none}.bs:hover{background:var(--bk);color:#fff}
.bg{background:var(--go);color:#fff}.bg:hover{background:#b8935a}
.trust{background:var(--bk);padding:1rem 2rem;display:flex;justify-content:center;gap:3rem;flex-wrap:wrap}
.ti{color:rgba(255,255,255,.75);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:.4rem}
.ti::before{content:'\u2713';color:var(--go)}
.sec{padding:5rem 2rem}.sec-alt{background:#fff}
.sh{text-align:center;margin-bottom:3rem}
.stag{font-size:.68rem;letter-spacing:.25em;text-transform:uppercase;color:var(--go);display:block;margin-bottom:.6rem}
.stitle{font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.7rem,4vw,2.8rem);font-weight:400;margin-bottom:.6rem}
.ssub{color:var(--gr);font-size:.95rem;line-height:1.6}
.g6{display:grid;grid-template-columns:repeat(auto-fit,minmax(185px,1fr));gap:1.5rem;max-width:1100px;margin:0 auto}
.cc{border:1px solid var(--lt);padding:2.5rem 1.5rem;text-align:center;transition:all .28s;cursor:pointer;background:var(--cr)}
.cc:hover{border-color:var(--bu);transform:translateY(-4px);box-shadow:0 8px 28px rgba(139,26,43,.1)}
.ci{font-size:2.4rem;margin-bottom:.9rem;display:block}
.cn{font-family:'Playfair Display',Georgia,serif;font-size:1.02rem;font-weight:600;margin-bottom:.4rem}
.cd{font-size:.82rem;color:var(--gr);line-height:1.5}
.sg{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1.75rem;max-width:1000px;margin:0 auto}
.sc{padding:2.25rem 2rem;border:1px solid var(--lt);background:var(--cr);transition:all .28s;cursor:pointer}
.sc:hover{border-color:var(--go)}
.si{font-size:1.8rem;margin-bottom:.85rem}
.sct{font-family:'Playfair Display',Georgia,serif;font-size:1.05rem;margin-bottom:.6rem;font-weight:600}
.scd{font-size:.85rem;color:var(--gr);line-height:1.55;margin-bottom:1rem}
.sl{font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--bu)}
.br{display:flex;justify-content:center;gap:2.5rem;flex-wrap:wrap;max-width:800px;margin:1.75rem auto 0;opacity:.65}
.bn{font-family:'Playfair Display',Georgia,serif;font-size:1rem;letter-spacing:.1em;color:var(--gr);text-transform:uppercase}
.ph{color:#fff;padding:5.5rem 2rem;text-align:center}
.ph-p{background:linear-gradient(135deg,#1a2744,#2d3f6b)}
.ph-c{background:linear-gradient(135deg,#1a3344,#2d5266)}
.ph-r{background:linear-gradient(135deg,#1a1a1a,#3d1a1a)}
.ph h1{font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.9rem,5vw,3.8rem);font-weight:400;margin-bottom:1rem}
.ph p{font-size:1.05rem;opacity:.85;max-width:580px;margin:0 auto 2rem}
.pg{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1.75rem;max-width:900px;margin:0 auto}
.pk{border:1px solid var(--lt);padding:2.25rem 2rem;transition:all .28s}
.pk.ft{border-color:var(--bu);background:var(--iv)}
.pk:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,0,0,.08)}
.ptag{font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:var(--go);margin-bottom:.4rem;display:block}
.pp{font-size:1.4rem;font-weight:700;color:var(--bu);margin-bottom:.6rem}
.pd{font-size:.85rem;color:var(--gr);line-height:1.5}
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.25rem;max-width:900px;margin:0 auto}
.step{background:#fff;border:1px solid var(--lt);padding:1.75rem;text-align:center}
.sn{width:38px;height:38px;background:var(--bu);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;margin:0 auto .85rem;font-size:.85rem}
.st{font-size:.85rem;color:var(--gr);line-height:1.5}
.ib{background:var(--iv);border:1px solid var(--lt);padding:2.25rem;max-width:560px;margin:0 auto;text-align:center}
.ib p{font-size:.88rem;color:var(--gr);line-height:1.6;margin-bottom:1.1rem}
.ea{color:var(--bu);text-decoration:none;font-weight:600}.ea:hover{text-decoration:underline}
.pn{font-size:.75rem;color:var(--gr);margin-top:1rem;opacity:.7}
.tl{list-style:none;max-width:480px;margin:0 auto}
.tl li{padding:.55rem 0;border-bottom:1px solid var(--lt);font-size:.92rem;display:flex;align-items:center;gap:.6rem}
.tl li::before{content:'\u2192';color:var(--bu);font-weight:700}
.shop-h{text-align:center;padding:5.5rem 2rem;max-width:780px;margin:0 auto}
.sb{display:inline-block;background:var(--bu);color:#fff;padding:.55rem 1.75rem;font-size:.72rem;letter-spacing:.25em;text-transform:uppercase;margin-bottom:1.75rem}
.sc2{display:flex;flex-wrap:wrap;gap:.75rem;justify-content:center;margin:2rem 0}
.sc2 span{padding:.45rem 1.25rem;border:1.5px solid var(--lt);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gr);transition:all .2s;cursor:pointer}
.sc2 span:hover{border-color:var(--bu);color:var(--bu)}
footer{background:var(--bk);color:rgba(255,255,255,.65);padding:3rem 2rem 2rem}
.fg{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:2rem;max-width:1100px;margin:0 auto 2rem}
.fb .fl{font-family:'Playfair Display',Georgia,serif;font-size:1.15rem;color:#fff;margin-bottom:.65rem}
.fb .fl span{color:var(--go)}
.fb p{font-size:.82rem;line-height:1.6}
.fc h4{font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:var(--go);margin-bottom:.9rem}
.fc a{display:block;text-decoration:none;color:rgba(255,255,255,.55);font-size:.82rem;margin-bottom:.45rem;transition:color .2s;cursor:pointer}
.fc a:hover{color:#fff}
.fb2{border-top:1px solid rgba(255,255,255,.12);padding-top:1.4rem;text-align:center;font-size:.75rem;display:flex;justify-content:center;gap:2rem;flex-wrap:wrap}
@media(max-width:768px){.nl{display:none}.trust{gap:1.5rem}}
`;

function nav(t, lang, cur) {
  return `<nav>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
<a class="logo" href="/${lang}"><span class="cr">&#9819;</span> AURA <span>LUXE</span></a>
<div class="nl">
  <a onclick="go('${lang}','')" class="${cur===''?'ac':''}">` + t.nav.home + `</a>
  <a onclick="go('${lang}','shop')" class="${cur==='shop'?'ac':''}">` + t.nav.shop + `</a>
  <a onclick="go('${lang}','psy')" class="${cur==='psy'?'ac':''}">` + t.nav.psy + `</a>
  <a onclick="go('${lang}','cons')" class="${cur==='cons'?'ac':''}">` + t.nav.cons + `</a>
  <a onclick="go('${lang}','cro')" class="${cur==='cro'?'ac':''}">` + t.nav.cro + `</a>
  <div class="ls">
    <button class="lb ${lang==='nl'?'ac':''}" onclick="setLang('nl')">NL</button>
    <button class="lb ${lang==='fr'?'ac':''}" onclick="setLang('fr')">FR</button>
    <button class="lb ${lang==='en'?'ac':''}" onclick="setLang('en')">EN</button>
  </div>
</div>
</nav>`;
}

function foot(t, lang) {
  return `<footer>
<div class="fg">
  <div class="fb"><div class="fl">&#9819; AURA <span>LUXE</span></div><p>Premium Luxury Lifestyle voor het hele gezin &middot; 0 tot 70 jaar &middot; BE / NL / FR</p></div>
  <div class="fc"><h4>Shop</h4><a onclick="go('${lang}','shop')">Baby & Peuter</a><a onclick="go('${lang}','shop')">Kids</a><a onclick="go('${lang}','shop')">Tieners</a><a onclick="go('${lang}','shop')">Volwassenen</a><a onclick="go('${lang}','shop')">Senioren</a></div>
  <div class="fc"><h4>${lang==='nl'?'Diensten':lang==='fr'?'Services':'Services'}</h4><a onclick="go('${lang}','psy')">${t.nav.psy}</a><a onclick="go('${lang}','cons')">${t.nav.cons}</a><a onclick="go('${lang}','cro')">${t.nav.cro}</a></div>
  <div class="fc"><h4>Contact</h4><a>auraluxe@bierinckx.com</a><a>psy@bierinckx.com</a><a>consultancy@bierinckx.com</a><a>sales@bierinckx.com</a></div>
</div>
<div class="fb2"><span>&copy; 2026 Bierinckx Revenue Agency &mdash; Kessel, Belgi&euml;</span></div>
</footer>`;
}

const JS = `
<script>
const R={'nl':{},'fr':{},'en':{}};
function go(lang,page){
  const paths={'':'','shop':'shop','psy':'psychologie','cons':'consultancy','cro':'cro'};
  window.location.href='/'+lang+'/'+(paths[page]||page);
}
function setLang(lang){
  const path=window.location.pathname;
  const parts=path.split('/').filter(Boolean);
  const langs=['nl','fr','en'];
  const pageMap={'psychologie':'psy','consultancy':'cons','cro':'cro','shop':'shop','psychologie-bien-etre':'psy','psychology':'psy','consultance':'cons'};
  if(langs.includes(parts[0]))parts[0]=lang;
  else parts.unshift(lang);
  window.location.href='/'+parts.join('/');
}
<\/script>`;

function page(title, desc, lang, body) {
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="${desc}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta name="robots" content="index,follow">
<link rel="alternate" hreflang="nl" href="https://bierinckx.com/nl">
<link rel="alternate" hreflang="fr" href="https://bierinckx.com/fr">
<link rel="alternate" hreflang="en" href="https://bierinckx.com/en">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
<title>${title}</title>
<style>${CSS}</style>
</head>
<body>
${body}
${JS}
</body>
</html>`;
}

const icons = ['\ud83d\udc76','\ud83d\udc66','\ud83d\udc83','\ud83d\udc8e','\ud83c\udf1f','\ud83c\udfe0'];

function buildHome(t, lang) {
  const cats = t.cats.map((name,i) =>
    `<div class="cc"><span class="ci">${icons[i]}</span><div class="cn">${name}</div><div class="cd">${t.catDesc[i]}</div></div>`
  ).join('');
  const trust = t.trust.map(x => `<div class="ti">${x}</div>`).join('');
  const svcs = [
    ['\ud83e\udde0', t.nav.psy, lang==='nl'?'Professionele online begeleiding door erkende psychologen.':lang==='fr'?'Accompagnement en ligne par des psychologues agr\u00e9\u00e9s.':'Online support by certified psychologists.', 'psy'],
    ['\ud83c\udfaf', t.nav.cons, lang==='nl'?'Procesoptimalisatie voor KMO\u2019s in de Benelux.':lang==='fr'?'Optimisation des processus pour les PME du Benelux.':'Process optimisation for SMEs in the Benelux.', 'cons'],
    ['\ud83d\udcc8', t.nav.cro, lang==='nl'?'Revenue leiderschap voor AI/SaaS scale-ups.':lang==='fr'?'Leadership revenue pour scale-ups AI/SaaS.':'Revenue leadership for AI/SaaS scale-ups.', 'cro'],
    ['\u2728', 'AURA LUXE', lang==='nl'?'Premium lifestyle webshop voor het hele gezin \u2014 0 tot 70 jaar.':lang==='fr'?'Boutique lifestyle premium pour toute la famille.':'Premium lifestyle webshop for the whole family.', 'shop'],
  ].map(([i,t2,d,p]) => `<div class="sc" onclick="go('${lang}','${p}')"><div class="si">${i}</div><div class="sct">${t2}</div><div class="scd">${d}</div><div class="sl">${t.more}</div></div>`).join('');

  const body = nav(t,lang,'') + `
<section class="hero">
  <div class="hc">
    <span class="htag">&#9819; ${t.hero.tag}</span>
    <h1 class="h1">${t.hero.h1a} <strong>${t.hero.h1b}</strong><br>${t.hero.h1c}</h1>
    <p class="hsub">${t.hero.sub}</p>
    <p class="hsub2">Baby &bull; Kids &bull; ${lang==='nl'?'Tieners':lang==='fr'?'Adolescents':'Teens'} &bull; ${lang==='nl'?'Volwassenen':lang==='fr'?'Adultes':'Adults'} &bull; ${lang==='nl'?'Senioren':'Seniors'} &bull; BE / NL / FR</p>
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
  <div class="sh"><span class="stag">&#10022; ${lang==='nl'?'Partners':lang==='fr'?'Partenaires':'Partners'}</span><h2 class="stitle">${lang==='nl'?'Onze merken':lang==='fr'?'Nos marques':'Our brands'}</h2></div>
  <div class="br"><span class="bn">Lookfantastic</span><span class="bn">Douglas</span><span class="bn">Rituals</span><span class="bn">Boozt</span><span class="bn">Parfumdreams</span></div>
</section>
<section class="sec" id="sv">
  <div class="sh"><span class="stag">&#10022; Bierinckx</span><h2 class="stitle">${lang==='nl'?'Revenue Agency':lang==='fr'?'Revenue Agency':'Revenue Agency'}</h2></div>
  <div class="sg">${svcs}</div>
</section>
` + foot(t,lang);

  return page(`AURA LUXE | ${t.hero.h1c} \u2014 Bierinckx`, `Premium luxury lifestyle ${t.hero.h1c}. Van 0 tot 70 jaar. BE/NL/FR.`, lang, body);
}

function buildShop(t, lang) {
  const cats = t.cats.map((c,i) => `<span>${icons[i]} ${c}</span>`).join('');
  const body = nav(t,lang,'shop') + `
<section class="sec" style="text-align:center">
  <div class="shop-h">
    <div class="sb">${lang==='nl'?'Coming Soon':lang==='fr'?'Bient\u00f4t disponible':'Coming Soon'}</div>
    <h1 class="stitle" style="font-family:'Playfair Display',Georgia,serif;margin-bottom:1rem">${lang==='nl'?'Collectie in opbouw':lang==='fr'?'Collection en cours':'Collection coming soon'}</h1>
    <p class="ssub">${lang==='nl'?'Onze premium collectie voor het hele gezin wordt binnenkort gelanceerd.':lang==='fr'?'Notre collection premium sera lanc\u00e9e prochainement.':'Our premium collection will launch soon.'}</p>
    <p class="ssub" style="margin-top:.5rem">${lang==='nl'?'Van 0 tot 70 jaar \u00b7 BE / NL / FR':lang==='fr'?'De 0 \u00e0 70 ans \u00b7 BE / NL / FR':'From 0 to 70 years \u00b7 BE / NL / FR'}</p>
    <div class="sc2">${cats}</div>
    <button class="btn bp" style="margin-top:1rem">auraluxe@bierinckx.com</button>
  </div>
</section>
` + foot(t,lang);
  return page(`Shop | AURA LUXE`, `Premium lifestyle shop voor het hele gezin.`, lang, body);
}

function buildPsy(t, lang) {
  const p = t.psy;
  const svcs = p.s.map(([i,tt,d]) => `<div class="sc"><div class="si">${i}</div><div class="sct">${tt}</div><div class="scd">${d}</div></div>`).join('');
  const steps = p.steps.map((s,i) => `<div class="step"><div class="sn">${i+1}</div><div class="st">${s}</div></div>`).join('');
  const body = nav(t,lang,'psy') + `
<section class="ph ph-p">
  <h1>${p.hero}</h1><p>${p.heroSub}</p>
  <button class="btn bg">${p.book} \u2014 ${p.price}</button>
</section>
<section class="sec sec-alt">
  <div class="sh"><span class="stag">&#10022; ${lang==='nl'?'Ons aanbod':lang==='fr'?'Notre offre':'Our services'}</span><h2 class="stitle">${lang==='nl'?'Psychologie & Welzijn':lang==='fr'?'Psychologie & Bien-\u00eatre':'Psychology & Wellbeing'}</h2></div>
  <div class="sg">${svcs}</div>
</section>
<section class="sec">
  <div class="sh"><span class="stag">&#10022; Process</span><h2 class="stitle">${p.how}</h2></div>
  <div class="steps">${steps}</div>
</section>
<section class="sec sec-alt">
  <div class="sh"><span class="stag">&#10022; Contact</span><h2 class="stitle">${p.book}</h2><p class="ssub">${p.price}</p></div>
  <div class="ib"><p>\ud83d\udce7 <a class="ea" href="mailto:${p.email}">${p.email}</a></p><button class="btn bp">${p.book}</button><p class="pn">${p.privacy}</p></div>
</section>
` + foot(t,lang);
  return page(`${lang==='nl'?'Psychologie':'Psychology'} | Bierinckx`, p.heroSub, lang, body);
}

function buildCons(t, lang) {
  const c = t.cons;
  const pkgs = c.pkgs.map(([tag,price,desc,feat]) =>
    `<div class="pk${feat?' ft':''}"><span class="ptag">${tag}</span><div class="pp">${price}</div><div class="pd">${desc}</div></div>`
  ).join('');
  const steps = c.steps.map((s,i) => `<div class="step"><div class="sn">${i+1}</div><div class="st">${s}</div></div>`).join('');
  const body = nav(t,lang,'cons') + `
<section class="ph ph-c"><h1>${c.hero}</h1><p>${c.heroSub}</p><button class="btn bg">${c.cta}</button></section>
<section class="sec"><div class="sh"><span class="stag">&#10022; ${lang==='nl'?'Pakketten':lang==='fr'?'Formules':'Packages'}</span><h2 class="stitle">${lang==='nl'?'Proces- & Teamconsultancy':lang==='fr'?'Consultance en processus':'Process & Team Consultancy'}</h2></div><div class="pg">${pkgs}</div></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; ${lang==='nl'?'Aanpak':lang==='fr'?'Approche':'Approach'}</span><h2 class="stitle">${lang==='nl'?'Onze aanpak':lang==='fr'?'Notre approche':'Our approach'}</h2></div><div class="steps">${steps}</div></section>
<section class="sec"><div class="sh"><h2 class="stitle">${c.cta}</h2></div><div class="ib"><p>\ud83d\udce7 <a class="ea" href="mailto:${c.email}">${c.email}</a></p><button class="btn bp">${c.cta}</button></div></section>
` + foot(t,lang);
  return page(`Consultancy | Bierinckx`, c.heroSub, lang, body);
}

function buildCRO(t, lang) {
  const c = t.cro;
  const pkgs = c.pkgs.map(([tag,price,desc,feat]) =>
    `<div class="pk${feat?' ft':''}"><span class="ptag">${tag}</span><div class="pp">${price}</div><div class="pd">${desc}</div></div>`
  ).join('');
  const targets = c.targets.map(x => `<li>${x}</li>`).join('');
  const body = nav(t,lang,'cro') + `
<section class="ph ph-r"><h1>${c.hero}</h1><p>${c.heroSub}</p><button class="btn bg">${c.cta}</button></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; Fractional CRO</span><h2 class="stitle">${c.what}</h2><p class="ssub" style="max-width:560px;margin:0 auto">${c.whatTxt}</p></div></section>
<section class="sec"><div class="sh"><span class="stag">&#10022; ${lang==='nl'?'Pakketten':lang==='fr'?'Formules':'Packages'}</span><h2 class="stitle">Fractional CRO</h2></div><div class="pg" style="max-width:680px">${pkgs}</div></section>
<section class="sec sec-alt"><div class="sh"><span class="stag">&#10022; ICP</span><h2 class="stitle">${c.targets?.[0]?lang==='nl'?'Voor wie?':lang==='fr'?'Pour qui?':'Who is it for?':''}</h2></div><ul class="tl">${targets}</ul></section>
<section class="sec"><div class="sh"><h2 class="stitle">${c.cta}</h2></div><div class="ib"><p>\ud83d\udce7 <a class="ea" href="mailto:${c.email}">${c.email}</a></p><button class="btn bp">${c.cta}</button></div></section>
` + foot(t,lang);
  return page(`Fractional CRO | Bierinckx`, c.heroSub, lang, body);
}

function detectLang(request) {
  const url = new URL(request.url);
  const parts = url.pathname.split('/').filter(Boolean);
  const langs = ['nl','fr','en'];
  if (langs.includes(parts[0])) return { lang: parts[0], rest: parts.slice(1) };
  const accept = request.headers.get('accept-language') || '';
  if (accept.toLowerCase().startsWith('fr')) return { lang: 'fr', rest: parts };
  return { lang: 'nl', rest: parts };
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

    if (path === '/api/webhook' && request.method === 'POST') {
      const body = await request.text();
      try {
        const e = JSON.parse(body);
        console.log(`[WH] ${e.type} ${e.data?.object?.metadata?.business_line||''}`);
        return new Response(JSON.stringify({received:true}), {headers:{...cors,'Content-Type':'application/json'}});
      } catch(e) {
        return new Response(JSON.stringify({error:e.message}), {status:400,headers:cors});
      }
    }

    if (path === '/api/create-checkout' && request.method === 'POST') {
      let body; try{body=await request.json();}catch{return new Response(JSON.stringify({error:'Invalid JSON'}),{status:400,headers:cors});}
      const {business_line,product_name,amount_eur,customer_email,locale='nl'} = body;
      if (!business_line||!product_name||!amount_eur) return new Response(JSON.stringify({error:'Missing fields'}),{status:400,headers:cors});
      try {
        const params = new URLSearchParams({'payment_method_types[]':'card','line_items[0][price_data][currency]':'eur','line_items[0][price_data][product_data][name]':product_name,'line_items[0][price_data][unit_amount]':String(Math.round(amount_eur*100)),'line_items[0][quantity]':'1','mode':'payment','locale':locale,'automatic_tax[enabled]':'true','metadata[business_line]':business_line,'success_url':`https://bierinckx.com/${locale}/bedankt?session={CHECKOUT_SESSION_ID}`,'cancel_url':`https://bierinckx.com/${locale}`});
        if (customer_email) params.set('customer_email', customer_email);
        const resp = await fetch('https://api.stripe.com/v1/checkout/sessions',{method:'POST',headers:{'Authorization':`Bearer ${env.STRIPE_SECRET_KEY}`,'Content-Type':'application/x-www-form-urlencoded'},body:params});
        const session = await resp.json();
        if (!resp.ok) throw new Error(session.error?.message||'Stripe error');
        return new Response(JSON.stringify({url:session.url}),{headers:{...cors,'Content-Type':'application/json'}});
      } catch(e) {
        return new Response(JSON.stringify({error:e.message}),{status:500,headers:cors});
      }
    }

    if (path === '/robots.txt') return new Response('User-agent: *\nAllow: /\nSitemap: https://bierinckx.com/sitemap.xml\n', {headers:{'Content-Type':'text/plain'}});
    if (path === '/sitemap.xml') return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://bierinckx.com/nl</loc><priority>1.0</priority></url><url><loc>https://bierinckx.com/fr</loc><priority>1.0</priority></url><url><loc>https://bierinckx.com/en</loc><priority>1.0</priority></url><url><loc>https://bierinckx.com/nl/shop</loc><priority>0.9</priority></url><url><loc>https://bierinckx.com/nl/psychologie</loc><priority>0.8</priority></url><url><loc>https://bierinckx.com/nl/consultancy</loc><priority>0.8</priority></url><url><loc>https://bierinckx.com/nl/cro</loc><priority>0.8</priority></url></urlset>`,{headers:{'Content-Type':'application/xml'}});

    if (path === '/' || path === '') {
      const accept = request.headers.get('accept-language') || '';
      const lang = accept.toLowerCase().startsWith('fr') ? 'fr' : 'nl';
      return Response.redirect(`https://bierinckx.com/${lang}`, 302);
    }

    const { lang, rest } = detectLang(request);
    const t = T[lang];
    const p = rest[0] || '';

    const h = (html) => new Response(html, {headers:{'Content-Type':'text/html;charset=UTF-8'}});

    if (p === '') return h(buildHome(t, lang));
    if (p === 'shop') return h(buildShop(t, lang));
    if (['psychologie','psychology','psychologie-bien-etre','psy'].includes(p)) return h(buildPsy(t, lang));
    if (['consultancy','consultance','cons'].includes(p)) return h(buildCons(t, lang));
    if (['cro','fractional-cro'].includes(p)) return h(buildCRO(t, lang));
    if (['bedankt','merci','thank-you'].includes(p)) return h(`<!DOCTYPE html><html lang="${lang}"><head><meta charset="UTF-8"><title>${lang==='nl'?'Bedankt':lang==='fr'?'Merci':'Thank you'} | AURA LUXE</title><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"><style>body{font-family:system-ui,sans-serif;background:#FAF9F6;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center}h1{font-family:'Playfair Display',Georgia,serif;font-weight:400;margin-bottom:1rem}p{color:#777;margin-bottom:2rem}a{color:#8B1A2B}</style></head><body><div><h1>&#9819; ${lang==='nl'?'Bedankt voor uw aankoop!':lang==='fr'?'Merci pour votre achat!':'Thank you for your purchase!'}</h1><p>${lang==='nl'?'Uw bestelling is bevestigd.':lang==='fr'?'Votre commande est confirm\u00e9e.':'Your order is confirmed.'}</p><a href="/${lang}">\u2190 ${lang==='nl'?'Terug naar home':lang==='fr'?'Retour':'Back to home'}</a></div></body></html>`);

    return new Response(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>404</title></head><body style="font-family:system-ui;background:#FAF9F6;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center"><div><h1 style="font-weight:300;margin-bottom:1rem">404</h1><a href="/${lang}" style="color:#8B1A2B">\u2190 Home</a></div></body></html>`, {status:404,headers:{'Content-Type':'text/html;charset=UTF-8'}});
  }
};
