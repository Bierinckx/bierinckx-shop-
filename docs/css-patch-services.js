// Patch voor services sectie CSS — compact modern luxury stijl
// Dit bestand patcht de worker CSS voor de services cards
// Wordt gemerged in de main worker door IT-team

/*
VERVANG in CSS:
.sg { display:grid; grid-template-columns:repeat(auto-fit,minmax(230px,1fr)); gap:1.75rem; max-width:1000px; margin:0 auto }
.sc { padding:2.25rem 2rem; border:1px solid var(--lt); background:var(--cr); transition:all .28s; cursor:pointer }
.sc:hover { border-color:var(--go) }
.si { font-size:1.8rem; margin-bottom:.85rem }
.sct { font-family:'Playfair Display',Georgia,serif; font-size:1.05rem; margin-bottom:.6rem; font-weight:600 }
.scd { font-size:.85rem; color:var(--gr); line-height:1.55; margin-bottom:1rem }
.sl { font-size:.75rem; letter-spacing:.1em; text-transform:uppercase; color:var(--bu) }

MET:
.sg { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; max-width:1000px; margin:0 auto; background:var(--lt); border:1px solid var(--lt) }
.sc { padding:1.75rem 1.5rem; background:var(--cr); transition:all .22s; cursor:pointer; position:relative }
.sc::after { content:''; position:absolute; bottom:0; left:1.5rem; right:1.5rem; height:1px; background:var(--go); transform:scaleX(0); transition:transform .22s; transform-origin:left }
.sc:hover { background:var(--iv) }
.sc:hover::after { transform:scaleX(1) }
.si { font-size:1.4rem; margin-bottom:.75rem; opacity:.8 }
.sct { font-size:.9rem; font-weight:600; letter-spacing:.04em; margin-bottom:.45rem; color:var(--bk) }
.scd { font-size:.8rem; color:var(--gr); line-height:1.55; margin-bottom:.85rem }
.sl { font-size:.72rem; color:var(--bu); display:flex; align-items:center; gap:.3rem }
*/

export default {};
