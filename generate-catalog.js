#!/usr/bin/env node
'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT         = __dirname;
const PROJECTS_DIR = path.join(ROOT, 'projects');
const CATALOG_DIR  = path.join(ROOT, 'catalog');
const OUTPUT_FILE  = path.join(CATALOG_DIR, 'index.html');

// Colores semánticos del Design System Skandia
const STATUS_CONFIG = {
  'en revision':  { color: '#b45309', bg: '#fff3e0' }, // warning
  'en iteracion': { color: '#0369a1', bg: '#ebf4ff' }, // info
  'aprobado':     { color: '#007c26', bg: '#f6fcf2' }, // primary-d03 sobre primary-l05
  'handoff':      { color: '#29806d', bg: '#edfefa' }, // fiduciaria teal
  'archivado':    { color: '#888888', bg: '#f0f0f0' }, // neutral gris
};

function normalize(s) {
  return String(s || '').toLowerCase()
    .replace(/é/g, 'e').replace(/ó/g, 'o').replace(/í/g, 'i')
    .replace(/á/g, 'a').replace(/ú/g, 'u');
}

function getProjects() {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs.readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter(function(e) { return e.isDirectory() && !e.name.startsWith('.'); })
    .map(function(e) {
      var dir      = path.join(PROJECTS_DIR, e.name);
      var metaPath = path.join(dir, 'meta.json');
      if (!fs.existsSync(metaPath)) return null;
      var meta;
      try { meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8')); }
      catch (err) {
        console.warn('  WARNING: meta.json invalido en ' + e.name + ': ' + err.message);
        return null;
      }
      var versions = fs.readdirSync(dir, { withFileTypes: true })
        .filter(function(d) { return d.isDirectory() && /^v\d+$/.test(d.name); })
        .map(function(d) { return d.name; })
        .sort(function(a, b) { return parseInt(a.slice(1)) - parseInt(b.slice(1)); });
      return { slug: e.name, meta: meta, versions: versions };
    })
    .filter(Boolean)
    .sort(function(a, b) {
      return (b.meta.updated_at || '').localeCompare(a.meta.updated_at || '');
    });
}

function esc(str) {
  return String(str || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildCards(projects) {
  if (!projects.length) {
    return '<p class="empty">No hay prototipos todavia. Agrega tu primer proyecto en <code>projects/</code>.</p>';
  }
  return projects.map(function(p) {
    var key = normalize(p.meta.status || '');
    var cfg = STATUS_CONFIG[key] || { color: '#444444', bg: '#f5f5f5' };
    var links = p.versions.length
      ? p.versions.map(function(v) {
          return '<a href="../projects/' + esc(p.slug) + '/' + v + '/" class="ver-link" target="_blank">' + v + '</a>';
        }).join('')
      : '<span class="no-ver">Sin versiones aun</span>';
    return '<article class="card" data-author="' + esc(p.meta.author) + '" data-status="' + esc(p.meta.status) + '">' +
      '<div class="card-top">' +
        '<span class="badge" style="color:' + cfg.color + ';background:' + cfg.bg + '">' + esc(p.meta.status || 'sin estado') + '</span>' +
        '<h2>' + esc(p.meta.name || p.slug) + '</h2>' +
      '</div>' +
      '<dl class="card-meta">' +
        '<dt>Autor</dt><dd>' + esc(p.meta.author || '-') + '</dd>' +
        '<dt>Proyecto</dt><dd>' + esc(p.meta.project || '-') + '</dd>' +
        '<dt>Actualizado</dt><dd>' + esc(p.meta.updated_at || '-') + '</dd>' +
      '</dl>' +
      '<p class="card-desc">' + esc(p.meta.description || '') + '</p>' +
      '<div class="versions">' + links + '</div>' +
    '</article>';
  }).join('\n');
}

function buildHTML(projects) {
  var authors  = [];
  var statuses = [];
  projects.forEach(function(p) {
    if (p.meta.author && !authors.includes(p.meta.author))   authors.push(p.meta.author);
    if (p.meta.status && !statuses.includes(p.meta.status)) statuses.push(p.meta.status);
  });
  authors.sort();
  statuses.sort();

  var authorOpts = authors.map(function(a)  { return '<option value="' + esc(a) + '">' + esc(a) + '</option>'; }).join('');
  var statusOpts = statuses.map(function(s) { return '<option value="' + esc(s) + '">' + esc(s) + '</option>'; }).join('');
  var total      = projects.length;
  var totalLabel = total + ' prototipo' + (total !== 1 ? 's' : '');
  var cards      = buildCards(projects);

  // ── Design tokens Skandia ──────────────────────────────────────────────────
  var css = [
    '*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}',
    ':root{',
    '  --brand:#00c73d;--brand-hover:#03a835;',
    '  --brand-light:#f6fcf2;--brand-border:#caf9cb;',
    '  --text-dark:#404040;--text-med:#666666;--text-light:#a5a5a5;',
    '  --border:#dddddd;--surface:#fff;--bg:#f7f7f7;',
    '  --r-card:16px;--r-pill:100px;--r-input:4px;',
    '}',
    'body{font-family:"Open Sans",system-ui,sans-serif;background:var(--bg);color:var(--text-dark);min-height:100vh;-webkit-font-smoothing:antialiased}',
    'a{color:inherit;text-decoration:none}',

    // Header — gradiente de marca Skandia
    'header{background:linear-gradient(135deg,#00c73d 0%,#8fe000 100%);color:#fff;padding:1.75rem 2.5rem;display:flex;align-items:center;gap:1rem;justify-content:space-between;flex-wrap:wrap}',
    '.hbrand{display:flex;align-items:center;gap:.75rem}',
    '.hlogo{width:40px;height:40px;background:rgba(255,255,255,.2);border:1.5px solid rgba(255,255,255,.35);border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff;font-family:"Montserrat",sans-serif;font-weight:700;font-size:.9rem;flex-shrink:0}',
    '.htitle h1{font-family:"Montserrat",sans-serif;font-size:1.35rem;font-weight:700;line-height:1.2}',
    '.htitle p{font-size:.82rem;opacity:.8;margin-top:2px}',
    '.hcount{background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.3);border-radius:var(--r-pill);padding:.3rem .9rem;font-size:.82rem;white-space:nowrap;font-family:"Montserrat",sans-serif;font-weight:600}',

    // Toolbar
    '.toolbar{padding:1rem 2.5rem;background:var(--surface);border-bottom:1px solid var(--border);display:flex;gap:.75rem;align-items:center;flex-wrap:wrap}',
    '.toolbar label{font-size:.72rem;font-weight:700;color:var(--text-med);text-transform:uppercase;letter-spacing:.06em;font-family:"Montserrat",sans-serif}',
    'select{border:1px solid var(--border);border-radius:var(--r-input);padding:.45rem .8rem;font-size:.88rem;font-family:"Open Sans",system-ui,sans-serif;cursor:pointer;background:var(--surface);color:var(--text-dark)}',
    'select:focus{outline:2px solid var(--brand);outline-offset:1px}',
    '.clear-btn{margin-left:auto;border:1.5px solid var(--border);border-radius:var(--r-pill);padding:.4rem 1.1rem;font-size:.82rem;cursor:pointer;background:var(--surface);color:var(--text-med);font-family:"Open Sans",system-ui,sans-serif;transition:all .15s}',
    '.clear-btn:hover{border-color:var(--brand);color:var(--brand)}',
    '.rcount{font-size:.82rem;color:var(--text-light)}',

    // Grid
    'main{padding:1.75rem 2.5rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.25rem}',
    '@media(max-width:600px){main{padding:1rem;grid-template-columns:1fr}header{padding:1.25rem 1rem}.toolbar{padding:1rem}}',

    // Card — hover verde sutil
    '.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-card);padding:1.25rem;display:flex;flex-direction:column;gap:.85rem;transition:box-shadow .2s,transform .2s,border-color .2s}',
    '.card:hover{box-shadow:0 8px 24px rgba(0,199,61,.12);transform:translateY(-2px);border-color:var(--brand-border)}',
    '.card-top{display:flex;flex-direction:column;gap:.5rem}',

    // Badge — pill shape, Montserrat uppercase
    '.badge{display:inline-block;font-family:"Montserrat",sans-serif;font-size:.63rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:.25rem .65rem;border-radius:var(--r-pill);width:fit-content}',
    '.card-top h2{font-family:"Montserrat",sans-serif;font-size:1rem;font-weight:700;line-height:1.3;color:var(--text-dark)}',

    // Meta table
    '.card-meta{display:grid;grid-template-columns:max-content 1fr;gap:.12rem .65rem;font-size:.8rem}',
    '.card-meta dt{color:var(--text-light);font-weight:700;font-family:"Montserrat",sans-serif;font-size:.68rem;text-transform:uppercase;letter-spacing:.04em}',
    '.card-meta dd{color:var(--text-med)}',
    '.card-desc{font-size:.86rem;color:var(--text-med);line-height:1.55;flex:1}',

    // Version links — botón pill Skandia verde
    '.versions{display:flex;gap:.4rem;flex-wrap:wrap;margin-top:.1rem}',
    '.ver-link{display:inline-flex;align-items:center;gap:.3rem;font-size:.78rem;font-weight:700;font-family:"Montserrat",sans-serif;color:#fff;background:var(--brand);border-radius:var(--r-pill);padding:.3rem .85rem;transition:background .15s,transform .1s}',
    '.ver-link:hover{background:var(--brand-hover);transform:translateY(-1px)}',
    '.ver-link::after{content:"↗";font-size:.7rem;opacity:.85}',
    '.no-ver{font-size:.8rem;color:var(--text-light);font-style:italic}',

    // Empty state & utils
    '.empty{grid-column:1/-1;text-align:center;padding:4rem 2rem;color:var(--text-light)}',
    '.empty code{background:var(--bg);border-radius:var(--r-input);padding:.15rem .4rem;font-size:.82rem}',
    '.hidden{display:none!important}',
    'footer{text-align:center;padding:1.75rem;font-size:.78rem;color:var(--text-light);border-top:1px solid var(--border);margin-top:.5rem}',
  ].join('\n');

  var js = [
    'function applyFilters(){',
    '  var a=document.getElementById("fa").value,s=document.getElementById("fs").value;',
    '  var cards=document.querySelectorAll(".card"),v=0;',
    '  cards.forEach(function(c){var ok=(!a||c.dataset.author===a)&&(!s||c.dataset.status===s);c.classList.toggle("hidden",!ok);if(ok)v++;});',
    '  document.getElementById("rcount").textContent=a||s?v+" resultado"+(v!==1?"s":""):"";',
    '  document.getElementById("total-count").textContent=v+" prototipo"+(v!==1?"s":"");',
    '}',
    'function clearFilters(){document.getElementById("fa").value="";document.getElementById("fs").value="";applyFilters();}',
  ].join('\n');

  return '<!DOCTYPE html>\n' +
    '<html lang="es">\n' +
    '<head>\n' +
    '<meta charset="UTF-8">\n' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">\n' +
    '<title>UX Prototypes &#8212; Skandia</title>\n' +
    '<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
    '<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">\n' +
    '<style>\n' + css + '\n</style>\n' +
    '</head>\n' +
    '<body>\n' +
    '<header>\n' +
    '  <div class="hbrand">\n' +
    '    <div class="hlogo">UX</div>\n' +
    '    <div class="htitle"><h1>UX Prototypes</h1><p>Skandia Colombia &#8212; Catálogo de artefactos</p></div>\n' +
    '  </div>\n' +
    '  <span class="hcount" id="total-count">' + totalLabel + '</span>\n' +
    '</header>\n' +
    '<div class="toolbar">\n' +
    '  <label for="fa">Autor</label>\n' +
    '  <select id="fa" onchange="applyFilters()"><option value="">Todos</option>' + authorOpts + '</select>\n' +
    '  <label for="fs">Estado</label>\n' +
    '  <select id="fs" onchange="applyFilters()"><option value="">Todos</option>' + statusOpts + '</select>\n' +
    '  <button class="clear-btn" onclick="clearFilters()">Limpiar filtros</button>\n' +
    '  <span class="rcount" id="rcount"></span>\n' +
    '</div>\n' +
    '<main id="grid">\n' + cards + '\n</main>\n' +
    '<footer>Generado automáticamente &#183; <a href="https://github.com/UxplorersColombia/ux-prototypes" target="_blank" style="color:var(--brand)">UxplorersColombia/ux-prototypes</a></footer>\n' +
    '<script>\n' + js + '\n<\/script>\n' +
    '</body>\n</html>';
}

// ── Main ──────────────────────────────────────────────────────────────────────
var projects = getProjects();
console.log('\n  Proyectos encontrados: ' + projects.length);
projects.forEach(function(p) {
  console.log('  * ' + p.slug + ' (' + (p.versions.join(', ') || 'sin versiones') + ')');
});

if (!fs.existsSync(CATALOG_DIR)) {
  fs.mkdirSync(CATALOG_DIR, { recursive: true });
}

var html = buildHTML(projects);
fs.writeFileSync(OUTPUT_FILE, html, 'utf-8');
console.log('\n  Catalogo generado: catalog/index.html');
console.log('  ' + projects.length + ' prototipo(s) incluidos\n');
