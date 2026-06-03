#!/usr/bin/env node
'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT         = __dirname;
const PROJECTS_DIR = path.join(ROOT, 'projects');
const CATALOG_DIR  = path.join(ROOT, 'catalog');
const OUTPUT_FILE  = path.join(CATALOG_DIR, 'index.html');

// Badge class mapping
const STATUS_BADGE = {
  'en revision':  'badge-revision',
  'en iteracion': 'badge-iteracion',
  'aprobado':     'badge-aprobado',
  'handoff':      'badge-handoff',
  'archivado':    'badge-archivado',
};

function normalize(s) {
  return String(s || '').toLowerCase()
    .replace(/é/g, 'e').replace(/ó/g, 'o').replace(/í/g, 'i')
    .replace(/á/g, 'a').replace(/ú/g, 'u').replace(/ñ/g, 'n');
}

function getProjects() {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs.readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter(e => e.isDirectory() && !e.name.startsWith('.'))
    .map(e => {
      const dir      = path.join(PROJECTS_DIR, e.name);
      const metaPath = path.join(dir, 'meta.json');
      if (!fs.existsSync(metaPath)) return null;
      let meta;
      try { meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8')); }
      catch (err) {
        console.warn(`  WARNING: meta.json inválido en ${e.name}: ${err.message}`);
        return null;
      }
      const versions = fs.readdirSync(dir, { withFileTypes: true })
        .filter(d => d.isDirectory() && /^v\d+$/.test(d.name))
        .map(d => d.name)
        .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
      return { slug: e.name, meta, versions };
    })
    .filter(Boolean)
    .sort((a, b) => (b.meta.updated_at || '').localeCompare(a.meta.updated_at || ''));
}

function esc(str) {
  return String(str || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// "2026-06-02" → "2 jun 2026"
const MONTHS = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
function fmtDate(iso) {
  if (!iso) return '–';
  const [y, m, d] = iso.split('-');
  if (!y || !m || !d) return esc(iso);
  return `${parseInt(d)} ${MONTHS[parseInt(m) - 1]} ${y}`;
}

// "María González" → "MG", "Equipo UX Skandia" → "UX"
function initials(name) {
  if (!name) return '?';
  const n = String(name).trim();
  if (n.toLowerCase().includes('equipo')) return 'UX';
  const parts = n.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const ARROW_SVG = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function buildCards(projects) {
  if (!projects.length) {
    return `<div class="empty">
      <div class="empty-icon">◻</div>
      <h3>Sin prototipos</h3>
      <p>Agrega tu primer proyecto en <code>projects/</code>.</p>
    </div>`;
  }
  return projects.map((p, i) => {
    const key        = normalize(p.meta.status || '');
    const badgeClass = STATUS_BADGE[key] || 'badge-archivado';
    const status     = esc(p.meta.status || 'sin estado');
    const initStr    = esc(initials(p.meta.author));
    const links = p.versions.length
      ? p.versions.map(v =>
          `<a href="../projects/${esc(p.slug)}/${v}/" class="ver-link" target="_blank" rel="noopener">${v}${ARROW_SVG}</a>`
        ).join('')
      : '<span class="no-ver">Sin versiones aún</span>';
    // stagger delay capped at 8 cards
    const delay = Math.min(i, 8) * 0.05;
    return `<article class="card" data-author="${esc(p.meta.author)}" data-status="${esc(p.meta.status)}" style="animation-delay:${delay}s">
  <div class="card-header">
    <div class="card-title-block">
      <span class="badge ${badgeClass}">${status}</span>
      <h2>${esc(p.meta.name || p.slug)}</h2>
    </div>
    <div class="author-avatar" aria-label="${esc(p.meta.author)}">${initStr}</div>
  </div>
  <div class="card-meta">
    <div class="meta-row"><span class="meta-key">Autor</span><span class="meta-val">${esc(p.meta.author || '–')}</span></div>
    <div class="meta-row"><span class="meta-key">Proyecto</span><span class="meta-val">${esc(p.meta.project || '–')}</span></div>
    <div class="meta-row"><span class="meta-key">Actualizado</span><span class="meta-val">${fmtDate(p.meta.updated_at)}</span></div>
  </div>
  <p class="card-desc">${esc(p.meta.description || '')}</p>
  <div class="card-divider"></div>
  <div class="versions">${links}</div>
</article>`;
  }).join('\n');
}

function buildHTML(projects) {
  const authors  = [];
  const statuses = [];
  projects.forEach(p => {
    if (p.meta.author && !authors.includes(p.meta.author))   authors.push(p.meta.author);
    if (p.meta.status && !statuses.includes(p.meta.status)) statuses.push(p.meta.status);
  });
  authors.sort();
  const STATUS_ORDER = ['en revisión','en iteración','aprobado','handoff','archivado'];
  const authorOpts = authors.map(a => `<option value="${esc(a)}">${esc(a)}</option>`).join('');
  const statusOpts = STATUS_ORDER.map(s => `<option value="${esc(s)}">${esc(s)}</option>`).join('');
  const activeCount = projects.filter(p => (p.meta.status || '') !== 'archivado').length;
  const cards = buildCards(projects);

  // ── Skandia DS tokens (from SkCo.Fidu.DesignSystem.Lib.UX) ────────────────
  const css = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  /* Primitivos Skandia */
  --primary-00:#00c73d;--primary-d01:#03a835;--primary-d03:#007c26;
  --primary-l04:#caf9cb;--primary-l05:#f6fcf2;
  --comp-00:#8fe000;--comp-d01:#7dc400;
  --fidu-d04:#29806d;--fidu-d05:#1d594c;--fidu-l05:#edfefa;--fidu-l04:#ccfdf2;
  --grey-00:#404040;--grey-l03:#666666;--grey-l05:#a5a5a5;
  --neutral-00:#ffffff;--neutral-l02:#f7f7f7;--neutral-l04:#dddddd;--neutral-l05:#c5c5c5;
  /* Feedback */
  --warn-light:#fff3e0;--warn-dark:#ffae08;
  --info-light:#ebf4ff;--info-dark:#0099de;
  --success-light:#ecfdf3;--success-dark:#16d727;
  --stand-light:#f5f5f5;--stand-dark:#444444;
  /* Semánticos */
  --bg:var(--neutral-l02);
  --surface:var(--neutral-00);
  --text-dark:var(--grey-00);
  --text-med:var(--grey-l03);
  --text-light:var(--grey-l05);
  --border:var(--neutral-l04);
  --border-med:var(--neutral-l05);
  --brand:var(--primary-00);
  --brand-hover:var(--primary-d01);
  --brand-border:var(--primary-l04);
  --brand-light:var(--primary-l05);
  /* DS radius tokens */
  --bordes-s:4px;--bordes-m:16px;--bordes-l:32px;--bordes-xl:104px;
  /* DS shadow tokens */
  --shadow-sm:0 1px 2px rgba(0,0,0,.05);
  --shadow-md:0 4px 6px -1px rgba(0,0,0,.10),0 2px 4px -1px rgba(0,0,0,.06);
  --shadow-lg:0 10px 20px -3px rgba(0,0,0,.10),0 4px 8px -2px rgba(0,0,0,.06);
  --shadow-brand:0 6px 20px rgba(0,199,61,.18);
  /* DS gradient */
  --gradient-brand:linear-gradient(135deg,var(--primary-00) 0%,var(--comp-00) 100%);
  /* DS spacing */
  --sp-xs:8px;--sp-s:12px;--sp-m:16px;--sp-l:24px;--sp-xl:32px;--sp-2xl:40px;
  /* Motion */
  --ease-out:cubic-bezier(0.16,1,0.3,1);
  --ease-std:cubic-bezier(0.4,0,0.2,1);
}
html{scroll-behavior:smooth}
body{font-family:"Open Sans",system-ui,sans-serif;background:var(--bg);color:var(--text-dark);min-height:100vh;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{color:inherit;text-decoration:none}

/* ── HEADER (gradiente canónico Skandia) ── */
header{background:var(--gradient-brand);color:#fff;padding:var(--sp-2xl) 90px;display:flex;align-items:center;justify-content:space-between;gap:var(--sp-l);flex-wrap:wrap;position:relative;overflow:hidden}
header::after{content:"";position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");pointer-events:none}
.header-brand{display:flex;align-items:center;gap:var(--sp-s);position:relative;z-index:1}
.header-logo{width:44px;height:44px;background:rgba(255,255,255,.2);border:1.5px solid rgba(255,255,255,.35);border-radius:var(--bordes-s);display:flex;align-items:center;justify-content:center;font-family:"Montserrat",sans-serif;font-weight:700;font-size:.9rem;flex-shrink:0;backdrop-filter:blur(4px)}
.header-titles h1{font-family:"Montserrat",sans-serif;font-size:1.5rem;font-weight:700;line-height:1.2;letter-spacing:-.01em}
.header-titles p{font-size:.8rem;opacity:.85;margin-top:2px;font-weight:400}
.header-stat{position:relative;z-index:1;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);border-radius:var(--bordes-xl);padding:.5rem 1.25rem;display:flex;align-items:baseline;gap:.4rem;backdrop-filter:blur(4px);transition:background .2s}
.header-stat:hover{background:rgba(255,255,255,.22)}
.stat-num{font-family:"Montserrat",sans-serif;font-size:1.5rem;font-weight:700;line-height:1;font-variant-numeric:tabular-nums}
.stat-label{font-family:"Open Sans",sans-serif;font-size:.75rem;font-weight:500;opacity:.85;text-transform:uppercase;letter-spacing:.08em}

/* ── TOOLBAR (sticky, DS light surface) ── */
.toolbar{position:sticky;top:0;z-index:10;background:rgba(255,255,255,.95);backdrop-filter:blur(12px) saturate(1.8);-webkit-backdrop-filter:blur(12px) saturate(1.8);border-bottom:1px solid var(--border);padding:.875rem 90px;display:flex;gap:var(--sp-l);align-items:center;flex-wrap:wrap;box-shadow:var(--shadow-sm)}
.filter-group{display:flex;align-items:center;gap:.5rem}
.filter-label{font-family:"Montserrat",sans-serif;font-size:.68rem;font-weight:700;color:var(--text-light);text-transform:uppercase;letter-spacing:.1em;white-space:nowrap}
.select-wrap{position:relative}
.select-wrap::after{content:"";position:absolute;right:.75rem;top:50%;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:5px solid var(--text-light);transform:translateY(-30%);pointer-events:none}
select{appearance:none;-webkit-appearance:none;background:var(--surface);border:1px solid var(--border);border-radius:var(--bordes-s);padding:.5rem 2.25rem .5rem .875rem;font-size:.875rem;font-family:"Open Sans",sans-serif;cursor:pointer;color:var(--text-dark);transition:border-color .15s var(--ease-std),box-shadow .15s var(--ease-std);min-width:148px}
select:hover{border-color:var(--border-med)}
select:focus{outline:none;border-color:var(--brand);box-shadow:0 0 0 3px rgba(0,199,61,.15)}
.toolbar-end{margin-left:auto;display:flex;align-items:center;gap:var(--sp-m)}
.result-count{font-size:.8rem;color:var(--text-light);font-variant-numeric:tabular-nums}
.clear-btn{background:var(--surface);border:1.5px solid var(--border);border-radius:var(--bordes-xl);padding:.4rem 1.1rem;font-size:.8rem;cursor:pointer;color:var(--text-med);font-family:"Open Sans",sans-serif;font-weight:600;transition:all .15s var(--ease-std)}
.clear-btn:hover{border-color:var(--brand);color:var(--brand);background:var(--brand-light)}

/* ── MAIN GRID (DS: 24px gutters, 90px margin) ── */
main{padding:var(--sp-xl) 90px;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:var(--sp-l);align-items:start}

/* ── CARDS ── */
.card{position:relative;background:var(--surface);border:1px solid var(--border);border-radius:var(--bordes-m);padding:var(--sp-l);display:flex;flex-direction:column;gap:var(--sp-m);box-shadow:var(--shadow-sm);transition:box-shadow .2s var(--ease-std),border-color .2s var(--ease-std),transform .2s var(--ease-std);will-change:transform;cursor:default;animation:cardEnter .45s var(--ease-out) both}
@keyframes cardEnter{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}
.card:hover{box-shadow:var(--shadow-lg);border-color:var(--brand-border);transform:translateY(-3px)}
/* Accent line top on hover */
.card::before{content:"";position:absolute;top:-1px;left:var(--sp-l);right:var(--sp-l);height:2px;background:var(--gradient-brand);border-radius:0 0 2px 2px;opacity:0;transition:opacity .2s var(--ease-std)}
.card:hover::before{opacity:1}
.card-header{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--sp-s)}
.card-title-block{flex:1;display:flex;flex-direction:column;gap:.45rem}
.card h2{font-family:"Montserrat",sans-serif;font-size:1rem;font-weight:700;line-height:1.3;color:var(--text-dark);letter-spacing:-.01em}
/* Author avatar — DS primary color on light green bg */
.author-avatar{width:36px;height:36px;border-radius:50%;background:var(--brand-light);border:1.5px solid var(--brand-border);display:flex;align-items:center;justify-content:center;font-family:"Montserrat",sans-serif;font-size:.6rem;font-weight:700;color:var(--primary-d03);flex-shrink:0;letter-spacing:.02em;transition:transform .15s var(--ease-std)}
.card:hover .author-avatar{transform:scale(1.08)}

/* ── STATUS BADGES (DS semantic feedback tokens) ── */
.badge{display:inline-flex;align-items:center;gap:.35rem;font-family:"Montserrat",sans-serif;font-size:.63rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:.25rem .7rem;border-radius:var(--bordes-xl);width:fit-content}
.badge::before{content:"";width:5px;height:5px;border-radius:50%;flex-shrink:0}
/* Warning → en revisión */
.badge-revision{color:#b45309;background:var(--warn-light);border:1px solid rgba(255,174,8,.3)}
.badge-revision::before{background:var(--warn-dark);animation:badgePulse 2s ease-in-out infinite}
/* Info → en iteración */
.badge-iteracion{color:#0369a1;background:var(--info-light);border:1px solid rgba(0,153,222,.25)}
.badge-iteracion::before{background:var(--info-dark);animation:badgePulse 2.4s ease-in-out infinite}
/* Success/Brand → aprobado */
.badge-aprobado{color:var(--primary-d03);background:var(--brand-light);border:1px solid var(--brand-border)}
.badge-aprobado::before{background:var(--primary-00)}
/* Fiduciaria teal → handoff */
.badge-handoff{color:var(--fidu-d05);background:var(--fidu-l05);border:1px solid rgba(41,128,109,.25)}
.badge-handoff::before{background:var(--fidu-d04)}
/* Standby → archivado */
.badge-archivado{color:var(--stand-dark);background:var(--stand-light);border:1px solid var(--border)}
.badge-archivado::before{background:var(--grey-l05)}
@keyframes badgePulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.78)}}

/* ── CARD META (DS grid, Montserrat labels) ── */
.card-meta{display:grid;grid-template-columns:max-content 1fr;gap:3px var(--sp-m);font-size:.8rem}
.meta-key{font-family:"Montserrat",sans-serif;font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-light)}
.meta-val{color:var(--text-med)}
.card-desc{font-size:.875rem;color:var(--text-med);line-height:1.6;flex:1}
.card-divider{height:1px;background:var(--border);margin:2px 0}

/* ── VERSIONS (DS button token: brand primary pill) ── */
.versions{display:flex;gap:.5rem;flex-wrap:wrap;align-items:center}
.ver-link{display:inline-flex;align-items:center;gap:.35rem;font-size:.78rem;font-weight:700;font-family:"Montserrat",sans-serif;color:#fff;background:var(--brand);border-radius:var(--bordes-xl);padding:.3rem .9rem;transition:background .15s var(--ease-std),transform .15s var(--ease-std),box-shadow .15s var(--ease-std);position:relative;overflow:hidden}
.ver-link::after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 35%,rgba(255,255,255,.22) 50%,transparent 65%);transform:translateX(-100%);transition:transform .35s var(--ease-out)}
.ver-link:hover::after{transform:translateX(100%)}
.ver-link:hover{background:var(--brand-hover);transform:translateY(-1px);box-shadow:var(--shadow-brand)}
.ver-link:active{transform:translateY(0);box-shadow:none}
.ver-link svg{width:10px;height:10px;opacity:.9;flex-shrink:0}
.no-ver{font-size:.8rem;color:var(--text-light);font-style:italic}

/* ── EMPTY STATE ── */
.empty{grid-column:1/-1;text-align:center;padding:5rem 2rem;color:var(--text-light);animation:cardEnter .4s var(--ease-out)}
.empty-icon{font-size:2rem;margin-bottom:var(--sp-m);opacity:.35;display:block}
.empty h3{font-family:"Montserrat",sans-serif;font-size:1.05rem;font-weight:700;margin-bottom:.35rem;color:var(--text-med)}
.empty p{font-size:.875rem}
.empty code{background:var(--bg);border-radius:var(--bordes-s);padding:.15rem .4rem}

/* ── FOOTER ── */
footer{text-align:center;padding:var(--sp-xl);font-size:.78rem;color:var(--text-light);border-top:1px solid var(--border);margin-top:var(--sp-xs)}
footer a{color:var(--brand);transition:color .15s}
footer a:hover{color:var(--brand-hover)}

/* ── UTILS ── */
.hidden{display:none!important}

/* ── FOCUS (WCAG AA — DS 3px brand ring) ── */
:focus-visible{outline:2px solid var(--brand);outline-offset:3px;border-radius:var(--bordes-s)}

/* ── RESPONSIVE (DS breakpoints: 768 / 1024) ── */
@media(max-width:1023px){
  header{padding:var(--sp-xl) var(--sp-xl)}
  .toolbar{padding:.875rem var(--sp-xl)}
  main{padding:var(--sp-xl);gap:var(--sp-m)}
}
@media(max-width:767px){
  header{padding:var(--sp-l) var(--sp-m)}
  .header-titles h1{font-size:1.2rem}
  .toolbar{padding:.75rem var(--sp-m);gap:var(--sp-s)}
  main{padding:var(--sp-m);grid-template-columns:1fr}
  .filter-label{display:none}
  select{min-width:120px}
}

/* ── REDUCED MOTION (ui-ux-pro-max §7) ── */
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}`;

  // ── JS: microinteracciones (ui-ux-pro-max §7: 150-300ms, transform/opacity) ─
  const js = `
var _noMotion=window.matchMedia('(prefers-reduced-motion:reduce)').matches;

/* Count-up — ease-out cúbico, tabular-nums */
function animateCount(el,from,to,dur){
  if(_noMotion){el.textContent=to;return;}
  var start=performance.now();
  (function tick(now){
    var p=Math.min((now-start)/dur,1),e=1-Math.pow(1-p,3);
    el.textContent=Math.round(from+(to-from)*e);
    if(p<1)requestAnimationFrame(tick);
  })(performance.now());
}

/* Tilt 3D sutil (max 2deg — apropiado enterprise) */
function initTilt(){
  if(_noMotion)return;
  document.querySelectorAll('.card').forEach(function(card){
    card.addEventListener('mousemove',function(e){
      var r=card.getBoundingClientRect();
      var dx=(e.clientX-(r.left+r.width/2))/(r.width/2);
      var dy=(e.clientY-(r.top+r.height/2))/(r.height/2);
      card.style.transform='perspective(900px) rotateY('+dx*2+'deg) rotateX('+(-dy*2)+'deg) translateY(-3px)';
    });
    card.addEventListener('mouseleave',function(){
      card.style.transform='';
    });
  });
}

/* Filtros con re-animación suave (300ms, ease-out) */
function applyFilters(){
  var a=document.getElementById('fa').value,s=document.getElementById('fs').value;
  var cards=document.querySelectorAll('.card'),v=0,delay=0;
  cards.forEach(function(c){
    var archived=c.dataset.status==='archivado';
    var statusOk=s?c.dataset.status===s:!archived;
    var ok=(!a||c.dataset.author===a)&&statusOk;
    if(ok){
      c.classList.remove('hidden');
      if(!_noMotion){
        c.style.animationDelay=delay+'s';
        c.style.animation='none';
        c.offsetHeight;
        c.style.animation='cardEnter .3s cubic-bezier(0.16,1,0.3,1) both';
        delay+=0.04;
      }
      v++;
    }else{
      c.classList.add('hidden');
      c.style.animationDelay='0s';
    }
  });
  var countEl=document.getElementById('total-count');
  var prev=parseInt(countEl.textContent)||0;
  if(prev!==v)animateCount(countEl,prev,v,300);
  document.getElementById('rcount').textContent=(a||s)?v+' resultado'+(v!==1?'s':''):'';
}

function clearFilters(){
  document.getElementById('fa').value='';
  document.getElementById('fs').value='';
  applyFilters();
}

/* Toolbar shadow al hacer scroll */
function initScrollShadow(){
  var toolbar=document.querySelector('.toolbar');
  if(!toolbar)return;
  window.addEventListener('scroll',function(){
    toolbar.style.boxShadow=window.scrollY>10
      ?'0 2px 8px rgba(0,0,0,.10)'
      :'0 1px 2px rgba(0,0,0,.05)';
  },{passive:true});
}

document.addEventListener('DOMContentLoaded',function(){
  applyFilters();
  initTilt();
  initScrollShadow();
  /* Count-up inicial: 0 → N en 900ms */
  var countEl=document.getElementById('total-count');
  var target=parseInt(countEl.textContent)||0;
  animateCount(countEl,0,target,900);
});`;

  // Montserrat (DS --title) + Open Sans (DS --body) — canónico Skandia DS
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>UX Prototypes — Skandia</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>${css}
</style>
</head>
<body>

<header>
  <div class="header-brand">
    <div class="header-logo" aria-hidden="true">UX</div>
    <div class="header-titles">
      <h1>UX Prototypes</h1>
      <p>Skandia Colombia &mdash; Catálogo de artefactos</p>
    </div>
  </div>
  <div class="header-stat" aria-label="${activeCount} prototipo${activeCount !== 1 ? 's' : ''} activos">
    <span class="stat-num" id="total-count">${activeCount}</span>
    <span class="stat-label">prototipo${activeCount !== 1 ? 's' : ''}</span>
  </div>
</header>

<div class="toolbar" role="toolbar" aria-label="Filtros del catálogo">
  <div class="filter-group">
    <label class="filter-label" for="fa">Autor</label>
    <div class="select-wrap">
      <select id="fa" onchange="applyFilters()">
        <option value="">Todos los autores</option>${authorOpts}
      </select>
    </div>
  </div>
  <div class="filter-group">
    <label class="filter-label" for="fs">Estado</label>
    <div class="select-wrap">
      <select id="fs" onchange="applyFilters()">
        <option value="">Todos los estados</option>${statusOpts}
      </select>
    </div>
  </div>
  <div class="toolbar-end">
    <span class="result-count" id="rcount" aria-live="polite"></span>
    <button class="clear-btn" onclick="clearFilters()">Limpiar filtros</button>
  </div>
</div>

<main id="grid">
${cards}
</main>

<footer>
  Generado automáticamente &nbsp;&middot;&nbsp;
  <a href="https://github.com/UxplorersColombia/ux-prototypes" target="_blank" rel="noopener">UxplorersColombia/ux-prototypes</a>
</footer>

<script>${js}
<\/script>
</body>
</html>`;
}

// ── Main ──────────────────────────────────────────────────────────────────────
const projects = getProjects();
console.log(`\n  Proyectos encontrados: ${projects.length}`);
projects.forEach(p => {
  console.log(`  * ${p.slug} (${p.versions.join(', ') || 'sin versiones'})`);
});

if (!fs.existsSync(CATALOG_DIR)) {
  fs.mkdirSync(CATALOG_DIR, { recursive: true });
}

const html = buildHTML(projects);
fs.writeFileSync(OUTPUT_FILE, html, 'utf-8');
console.log(`\n  Catálogo generado: catalog/index.html`);
console.log(`  ${projects.length} prototipo(s) incluidos\n`);
