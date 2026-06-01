#!/usr/bin/env node
'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT         = __dirname;
const PROJECTS_DIR = path.join(ROOT, 'projects');
const CATALOG_DIR  = path.join(ROOT, 'catalog');
const OUTPUT_FILE  = path.join(CATALOG_DIR, 'index.html');

const STATUS_CONFIG = {
  'en revision':  { color: '#92400e', bg: '#fef3c7' },
  'en iteracion': { color: '#1e40af', bg: '#dbeafe' },
  'aprobado':     { color: '#065f46', bg: '#d1fae5' },
  'handoff':      { color: '#5b21b6', bg: '#ede9fe' },
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
    var cfg = STATUS_CONFIG[key] || { color: '#374151', bg: '#f3f4f6' };
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
    if (p.meta.author  && !authors.includes(p.meta.author))   authors.push(p.meta.author);
    if (p.meta.status  && !statuses.includes(p.meta.status)) statuses.push(p.meta.status);
  });
  authors.sort();
  statuses.sort();

  var authorOpts  = authors.map(function(a)  { return '<option value="' + esc(a) + '">' + esc(a) + '</option>'; }).join('');
  var statusOpts  = statuses.map(function(s) { return '<option value="' + esc(s) + '">' + esc(s) + '</option>'; }).join('');
  var total = projects.length;
  var totalLabel = total + ' prototipo' + (total !== 1 ? 's' : '');
  var cards = buildCards(projects);

  var css = [
    '*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}',
    ':root{--green:#006633;--green-l:#e6f2eb;--text:#111827;--muted:#6b7280;--border:#e5e7eb;--r:12px;--bg:#f9fafb}',
    'body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:var(--bg);color:var(--text);min-height:100vh}',
    'a{color:inherit;text-decoration:none}',
    'header{background:var(--green);color:#fff;padding:1.75rem 2.5rem;display:flex;align-items:center;gap:1rem;justify-content:space-between;flex-wrap:wrap}',
    '.hbrand{display:flex;align-items:center;gap:.75rem}',
    '.hlogo{width:40px;height:40px;background:#fff;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:900;color:var(--green);font-size:.95rem;flex-shrink:0}',
    '.htitle h1{font-size:1.35rem;font-weight:700;line-height:1.2}',
    '.htitle p{font-size:.82rem;opacity:.75;margin-top:2px}',
    '.hcount{background:rgba(255,255,255,.15);border-radius:20px;padding:.3rem .85rem;font-size:.85rem;white-space:nowrap}',
    '.toolbar{padding:1.1rem 2.5rem;background:#fff;border-bottom:1px solid var(--border);display:flex;gap:.6rem;align-items:center;flex-wrap:wrap}',
    '.toolbar label{font-size:.78rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;margin-right:.2rem}',
    'select{border:1px solid var(--border);border-radius:8px;padding:.45rem .8rem;font-size:.88rem;cursor:pointer;background:#fff;color:var(--text)}',
    'select:focus{outline:2px solid var(--green);outline-offset:1px}',
    '.clear-btn{margin-left:auto;border:1px solid var(--border);border-radius:8px;padding:.45rem 1rem;font-size:.84rem;cursor:pointer;background:#fff;color:var(--muted);transition:all .15s}',
    '.clear-btn:hover{border-color:var(--green);color:var(--green)}',
    '.rcount{font-size:.82rem;color:var(--muted)}',
    'main{padding:1.75rem 2.5rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.1rem}',
    '@media(max-width:600px){main{padding:1rem;grid-template-columns:1fr}.toolbar{padding:1rem}}',
    '.card{background:#fff;border:1px solid var(--border);border-radius:var(--r);padding:1.2rem;display:flex;flex-direction:column;gap:.8rem;transition:box-shadow .15s,transform .15s}',
    '.card:hover{box-shadow:0 4px 20px rgba(0,0,0,.08);transform:translateY(-2px)}',
    '.card-top{display:flex;flex-direction:column;gap:.4rem}',
    '.badge{display:inline-block;font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;padding:.22rem .6rem;border-radius:20px;width:fit-content}',
    '.card-top h2{font-size:1rem;font-weight:700;line-height:1.3}',
    '.card-meta{display:grid;grid-template-columns:max-content 1fr;gap:.12rem .65rem;font-size:.8rem}',
    '.card-meta dt{color:var(--muted);font-weight:500}',
    '.card-desc{font-size:.86rem;color:#374151;line-height:1.5;flex:1}',
    '.versions{display:flex;gap:.4rem;flex-wrap:wrap}',
    '.ver-link{display:inline-flex;align-items:center;gap:.25rem;font-size:.8rem;font-weight:600;color:var(--green);background:var(--green-l);border-radius:6px;padding:.25rem .65rem;transition:all .15s}',
    '.ver-link:hover{background:var(--green);color:#fff}',
    '.ver-link::after{content:"↗";font-size:.68rem;opacity:.7}',
    '.no-ver{font-size:.8rem;color:var(--muted);font-style:italic}',
    '.empty{grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted)}',
    '.empty code{background:#f3f4f6;border-radius:4px;padding:.1rem .35rem;font-size:.82rem}',
    '.hidden{display:none!important}',
    'footer{text-align:center;padding:1.75rem;font-size:.78rem;color:var(--muted);border-top:1px solid var(--border);margin-top:1rem}',
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
    '<footer>Generado automáticamente &#183; <a href="https://github.com/UxplorersColombia/ux-prototypes" target="_blank" style="color:#006633">UxplorersColombia/ux-prototypes</a></footer>\n' +
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
