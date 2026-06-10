/* ════════════════════════════════════════════════════════════════════
   Simulador de Flujo de Caja · Skandia v3 · lógica
   ════════════════════════════════════════════════════════════════════ */

// ─── Límites ──────────────────────────────────────────────────────────
const MAX_FUENTES = 5;
const MAX_OTROS   = 5;

// ─── Defaults ─────────────────────────────────────────────────────────
window.SIM_DEFAULTS = {
  channel: 'cliente',
  perfilDemo: 'auto',
  clientName: 'Usuario',
  salarioPrecargado: 4500000
};

// ─── Estado ───────────────────────────────────────────────────────────
const state = {
  channel: window.SIM_DEFAULTS.channel,
  perfilDemo: window.SIM_DEFAULTS.perfilDemo,
  clientName: window.SIM_DEFAULTS.clientName,
  salarioPrecargado: window.SIM_DEFAULTS.salarioPrecargado,
  salario: 0,
  fuentes: [],
  lead: { nombre: '', email: '', telefono: '', indicativo: '+57', esCliente: false, capturado: false },
  vitales:    30,
  deudas:     20,
  gustos:     15,
  cotidianos: 10,
  futuro:     10,
  periodicidades: { vitales: 'mensual', deudas: 'mensual', gustos: 'mensual', cotidianos: 'mensual', futuro: 'mensual' },
  otros: [],
  _nextFuenteId: 1,
  _nextOtroId:   1,
  _carouselIdx:  0,
  _futuroPesos:  0,
  _carouselItems: []
};

// ─── Categorías ───────────────────────────────────────────────────────
const CATEGORIAS = [
  {
    key: 'vitales',
    title: 'Gastos vitales',
    sublabel: 'Lo que pagas sí o sí cada mes',
    examples: '',
    tooltip: 'Arriendo o cuota de vivienda, transporte, servicios públicos, salud y seguros. Lo que no puedes dejar de pagar.',
    color: 'var(--c-vitales)'
  },
  {
    key: 'deudas',
    title: 'Deudas',
    sublabel: 'Lo que le debes al banco o a un crédito',
    examples: '',
    tooltip: 'Cuota mínima de tarjetas de crédito, créditos de consumo, libranzas. Si tienes varios, suma todas las cuotas mensuales.',
    color: 'var(--c-deudas)'
  },
  {
    key: 'gustos',
    title: 'Gustos',
    sublabel: 'Lo que disfrutas y eliges gastar',
    examples: 'Ej: restaurantes, ropa, Netflix, Spotify, salidas',
    tooltip: 'Salidas, restaurantes, ropa, entretenimiento, suscripciones digitales. Lo que gastas porque quieres, no porque toca.',
    color: 'var(--c-gustos)'
  },
  {
    key: 'cotidianos',
    title: 'Gastos pequeños cotidianos',
    sublabel: 'Lo que se te va sin darte cuenta',
    examples: 'Ej: domicilios, cafés, snacks, cuidado personal',
    tooltip: 'Cafés, snacks, domicilios pequeños, compras de impulso. Si no sabes cuánto es, multiplica lo que gastas en una semana por 4.',
    color: 'var(--c-cotidianos)'
  },
  {
    key: 'futuro',
    title: 'Futuro',
    sublabel: 'Lo que guardas para ti',
    examples: '',
    tooltip: 'Ahorro programado, fondos de inversión, fondo de emergencia. Incluye lo que ya tienes en Skandia y lo que ahorras por fuera. Plata que separas cada mes y no tocas — es tuyo.',
    color: 'var(--c-futuro)'
  }
];

// ─── Periodicidad ─────────────────────────────────────────────────────
const PERIODICIDAD_FACTOR = {
  quincenal:  2,
  mensual:    1,
  bimestral:  0.5,
  semestral:  1 / 6,
  anual:      1 / 12
};

const PERIODICIDAD_LABELS = {
  quincenal:  'por quincena',
  mensual:    'al mes',
  bimestral:  'cada 2 meses',
  semestral:  'cada semestre',
  anual:      'al año'
};

function normalizarAMensual(monto, periodicidad) {
  return Math.round(monto * (PERIODICIDAD_FACTOR[periodicidad] || 1));
}

function desnormalizarDeMensual(mensual, periodicidad) {
  const factor = PERIODICIDAD_FACTOR[periodicidad] || 1;
  return Math.round(mensual / factor);
}

// ─── Formato ──────────────────────────────────────────────────────────
function formatCOP(n) {
  const abs = Math.abs(Math.round(n));
  return (n < 0 ? '−' : '') + '$ ' + abs.toLocaleString('es-CO');
}

// ─── Ingreso total normalizado ────────────────────────────────────────
function recalcularSalario() {
  state.salario = state.fuentes.reduce(
    (sum, f) => sum + normalizarAMensual(f.monto, f.periodicidad), 0
  );
}

// ─── Navegación ──────────────────────────────────────────────────────
function ir(id) {
  if (!window._navHistory) window._navHistory = ['s-entrada'];
  if (window._navHistory[window._navHistory.length - 1] !== id) {
    window._navHistory.push(id);
  }
  const current = document.querySelector('.screen--active');
  if (current && current.id !== id) {
    current.classList.add('screen--leaving');
    setTimeout(() => {
      current.classList.remove('screen--active', 'screen--leaving');
      _showScreen(id);
    }, 150);
  } else {
    _showScreen(id);
  }
}
window.ir = ir;

function _showScreen(id) {
  document.querySelectorAll('.screen--active').forEach(s => s.classList.remove('screen--active'));
  const target = document.getElementById(id);
  if (!target) return;
  target.classList.add('screen--active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 's-entrada')      _syncLeadButtonState();
  if (id === 's-distribucion') updateDistribucion();
  if (id === 's-diagnostico')  renderDiagnostico();
  if (id === 's-ctas')         renderPantallaCTAs();
  refreshIcons();
}

function irAtras() {
  if (!window._navHistory) window._navHistory = ['s-entrada'];
  if (window._navHistory.length > 1) {
    window._navHistory.pop();
    const prev = window._navHistory[window._navHistory.length - 1];
    ir(prev);
  }
}
window.irAtras = irAtras;

// ─── Lead capture (canal público) ────────────────────────────────────
function _isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

function validateLead() {
  const nombre  = (document.getElementById('lead-nombre')?.value  || '').trim();
  const email   = (document.getElementById('lead-email')?.value   || '').trim();
  const tel     = (document.getElementById('lead-telefono')?.value || '').trim();
  const consent = document.getElementById('lead-consent-check')?.checked;
  return nombre.length >= 2 && _isValidEmail(email) && tel.replace(/\D/g, '').length >= 7 && !!consent;
}

function _syncLeadButtonState() {
  if (state.channel !== 'publico') return;
  const ok  = validateLead();
  const btn = document.getElementById('btn-comenzar');
  const hlp = document.getElementById('lead-form-helper');
  if (btn) btn.disabled = !ok;
  if (hlp) hlp.hidden   = ok;
}

function onLeadInput() {
  _syncLeadButtonState();
}
window.onLeadInput = onLeadInput;

function comenzar() {
  if (state.channel === 'publico') {
    if (!validateLead()) return;
    state.lead = {
      nombre:     document.getElementById('lead-nombre').value.trim(),
      email:      document.getElementById('lead-email').value.trim(),
      telefono:   document.getElementById('lead-telefono').value.trim(),
      indicativo: document.getElementById('lead-indicativo').value,
      esCliente:  document.getElementById('lead-es-cliente').checked,
      capturado:  true
    };
  }
  ir('s-ingresos');
}
window.comenzar = comenzar;

// ─── Tooltips ─────────────────────────────────────────────────────────
function toggleTip(btn) {
  const id  = btn.getAttribute('data-tip-for') || btn.nextElementSibling?.id;
  const box = id ? document.getElementById(id) : btn.nextElementSibling;
  if (!box) return;
  const isOpen = box.classList.contains('visible');
  document.querySelectorAll('.tip-pop.visible').forEach(b => b.classList.remove('visible'));
  if (!isOpen) box.classList.add('visible');
}
window.toggleTip = toggleTip;

document.addEventListener('click', (e) => {
  if (!e.target.closest('.tip-trigger') && !e.target.closest('.tip-pop')) {
    document.querySelectorAll('.tip-pop.visible').forEach(b => b.classList.remove('visible'));
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.tip-pop.visible').forEach(b => b.classList.remove('visible'));
  }
});

// ─── Lucide refresh ──────────────────────────────────────────────────
function refreshIcons() {
  if (window.lucide && lucide.createIcons) lucide.createIcons();
}

// ─── Canal ───────────────────────────────────────────────────────────
function setCanal(canal) {
  state.channel = canal;
  document.body.setAttribute('data-channel', canal);

  const firstName = state.clientName.split(' ')[0];
  const avatarEl = document.getElementById('chrome-avatar');
  const nameEl   = document.getElementById('chrome-user-name');
  const bannerEl = document.getElementById('cliente-banner-name');
  if (avatarEl) avatarEl.textContent = state.clientName.split(/\s+/).map(p => p[0]).join('').slice(0, 2).toUpperCase();
  if (nameEl)   nameEl.textContent   = firstName;
  if (bannerEl) bannerEl.textContent = 'Hola, ' + firstName;

  if (canal === 'cliente') {
    state.fuentes = [{ id: 'f0', label: 'Salario principal', monto: state.salarioPrecargado, periodicidad: 'mensual' }];
  } else {
    state.fuentes = [{ id: 'f0', label: 'Ingresos mensuales', monto: 0, periodicidad: 'mensual' }];
  }
  recalcularSalario();
  buildFuentes();
  _syncLeadButtonState();
  refreshIcons();
}
window.setCanal = setCanal;

// ═══════════════════════════════════════════════════════════════════════
//  PANTALLA 1 — INGRESOS (A3: múltiples fuentes)
// ═══════════════════════════════════════════════════════════════════════
function buildFuentes() {
  const list = document.getElementById('fuentes-list');
  if (!list) return;

  let extraCount = 0;
  list.innerHTML = state.fuentes.map((f, i) => {
    const isMain   = i === 0;
    if (!isMain) extraCount++;
    const labelTxt = isMain
      ? (state.channel === 'cliente' ? 'Tu salario mensual estimado' : '¿Cuánto entra a tu cuenta cada mes?')
      : (f.label || `Ingreso adicional ${extraCount}`);
    const tipTxt   = isMain
      ? (state.channel === 'cliente'
          ? 'Este es el dato que tenemos en tu perfil. Si cambió, puedes ajustarlo aquí.'
          : 'Tu sueldo neto mensual, o el promedio de los últimos 3 meses si tu ingreso varía.')
      : 'Ingresa el monto de esta fuente adicional de ingreso.';
    const sublabelHtml = (state.channel === 'cliente' && isMain)
      ? `<p class="field__sublabel"><i data-lucide="sparkles"></i>De tu perfil Skandia · Puedes ajustarlo</p>`
      : '';
    const montoFmt = f.monto > 0 ? f.monto.toLocaleString('es-CO') : '';

    return `
      <div class="fuente-row" id="fuente-${f.id}" data-fuente-id="${f.id}">
        <div class="field">
          <div class="field__label-row">
            <label class="field__label">${labelTxt}</label>
            <button type="button" class="tip-trigger" aria-label="Ver ayuda"
                    data-tip-for="tip-fuente-${f.id}" onclick="toggleTip(this)">
              <i data-lucide="help-circle"></i>
            </button>
            <span class="tip-pop" role="tooltip" id="tip-fuente-${f.id}">${tipTxt}</span>
          </div>
          ${sublabelHtml}
          <div class="fuente-input-row">
            <div class="field__input-wrap fuente-input-wrap">
              <span class="field__prefix">$</span>
              <input
                type="text"
                inputmode="numeric"
                placeholder="0"
                class="field__input fuente-monto"
                value="${montoFmt}"
                autocomplete="off"
                aria-required="${isMain ? 'true' : 'false'}"
                oninput="onFuenteInput('${f.id}', this)"
              >
            </div>
            <select
              class="periodo-select periodo-select--fuente"
              onchange="onFuentePeriodicidad('${f.id}', this.value)"
              aria-label="Periodicidad de este ingreso"
            >
              ${['quincenal','mensual','bimestral','semestral','anual'].map(p =>
                `<option value="${p}"${f.periodicidad === p ? ' selected' : ''}>${p.charAt(0).toUpperCase() + p.slice(1)}</option>`
              ).join('')}
            </select>
            ${!isMain ? `<button type="button" class="fuente-remove" onclick="eliminarFuente('${f.id}')" aria-label="Eliminar fuente"><i data-lucide="x"></i></button>` : ''}
          </div>
          ${isMain ? `<p id="salario-valor" class="field__valor" aria-live="polite"></p>` : ''}
        </div>
      </div>
    `;
  }).join('');

  _updateAgregarFuenteBtn();
  updateSalarioUI();
  updateTotalIngresos();
}

function _updateAgregarFuenteBtn() {
  const btn = document.getElementById('btn-agregar-fuente');
  if (!btn) return;
  const count = state.fuentes.length;
  if (count >= MAX_FUENTES) {
    btn.hidden = true;
  } else {
    btn.hidden = false;
    const extra = count - 1;
    btn.querySelector('span.btn-label').textContent =
      extra === 0 ? 'Agregar otra fuente de ingreso' : `Agregar otra fuente (${extra} de ${MAX_FUENTES - 1} adicionales)`;
  }
}

function onFuenteInput(id, input) {
  const num = parseInt(input.value.replace(/\D/g, ''), 10) || 0;
  input.value = num > 0 ? num.toLocaleString('es-CO') : '';
  const f = state.fuentes.find(f => f.id === id);
  if (f) f.monto = num;
  recalcularSalario();
  updateSalarioUI();
  updateTotalIngresos();
}
window.onFuenteInput = onFuenteInput;

function onFuentePeriodicidad(id, periodicidad) {
  const f = state.fuentes.find(f => f.id === id);
  if (f) f.periodicidad = periodicidad;
  recalcularSalario();
  updateSalarioUI();
  updateTotalIngresos();
}
window.onFuentePeriodicidad = onFuentePeriodicidad;

function updateSalarioUI() {
  const btn      = document.getElementById('btn-continuar');
  const valorEl  = document.getElementById('salario-valor');
  const helperEl = document.getElementById('continuar-helper');
  const f0       = state.fuentes[0];
  if (f0 && f0.monto > 0) {
    if (valorEl) {
      const suffix = f0.periodicidad !== 'mensual'
        ? ` ${PERIODICIDAD_LABELS[f0.periodicidad]} (≈ ${formatCOP(normalizarAMensual(f0.monto, f0.periodicidad))}/mes)`
        : ' al mes';
      valorEl.textContent = formatCOP(f0.monto) + suffix;
    }
    if (btn) btn.disabled = false;
    if (helperEl) helperEl.textContent = '';
  } else {
    if (valorEl) valorEl.textContent = '';
    if (btn) btn.disabled = true;
    if (helperEl) helperEl.textContent = 'Ingresa al menos un monto para continuar';
  }
}

function updateTotalIngresos() {
  const wrap    = document.getElementById('total-ingresos-wrap');
  const totalEl = document.getElementById('total-ingresos-valor');
  if (!wrap) return;
  const show = state.fuentes.length > 1 && state.salario > 0;
  wrap.hidden = !show;
  if (show && totalEl) totalEl.textContent = formatCOP(state.salario) + ' / mes';
}

function agregarFuente() {
  if (state.fuentes.length >= MAX_FUENTES) return;
  const extra = state.fuentes.length; // número de ingresos adicionales que habrá
  const id = 'f' + (++state._nextFuenteId);
  state.fuentes.push({ id, label: `Ingreso adicional ${extra}`, monto: 0, periodicidad: 'mensual' });
  buildFuentes();
  refreshIcons();
  setTimeout(() => {
    const input = document.querySelector(`#fuente-${id} .fuente-monto`);
    if (input) input.focus();
  }, 50);
}
window.agregarFuente = agregarFuente;

function eliminarFuente(id) {
  state.fuentes = state.fuentes.filter(f => f.id !== id);
  recalcularSalario();
  buildFuentes();
  refreshIcons();
}
window.eliminarFuente = eliminarFuente;

// ═══════════════════════════════════════════════════════════════════════
//  PANTALLA 2 — DISTRIBUCIÓN
//  V1: slider + monto siempre visibles (sin toggle global)
//  V2: periodicidad por categoría
//  A2: gasto personalizado
//  A5: ejemplos de categoría
//  A6: tooltip Futuro actualizado
// ═══════════════════════════════════════════════════════════════════════
function buildSliders() {
  const list = document.getElementById('sliders-list');
  if (!list) return;

  list.innerHTML = CATEGORIAS.map(cat => {
    const monthly      = state.salario > 0 ? Math.round(state[cat.key] / 100 * state.salario) : 0;
    const periodicidad = state.periodicidades[cat.key];
    const amtDisplay   = monthly > 0 ? desnormalizarDeMensual(monthly, periodicidad) : 0;
    const suffix       = PERIODICIDAD_LABELS[periodicidad] || 'al mes';
    const examplesHtml = cat.examples
      ? `<p class="slider-row__examples">${cat.examples}</p>` : '';
    const pctStr       = (Math.min(state[cat.key], 80) / 80 * 100).toFixed(1);

    return `
      <div class="slider-row" data-key="${cat.key}" style="--c:${cat.color}; --p:${pctStr}%">
        <div class="slider-row__head">
          <div class="slider-row__meta">
            <div class="slider-row__label-wrap">
              <span class="slider-row__label">${cat.title}</span>
              <button type="button" class="tip-trigger" aria-label="Ver explicación de ${cat.title}"
                      data-tip-for="tip-${cat.key}" onclick="toggleTip(this)">
                <i data-lucide="help-circle"></i>
              </button>
              <span class="tip-pop" role="tooltip" id="tip-${cat.key}">${cat.tooltip}</span>
            </div>
            <p class="slider-row__sublabel">${cat.sublabel}</p>
            ${examplesHtml}
          </div>
          <div class="slider-row__values">
            <span class="slider-row__pct" id="pct-${cat.key}">${state[cat.key]}%</span>
            <span class="slider-row__cop" id="cop-${cat.key}">${monthly > 0 ? formatCOP(monthly) + '/mes' : ''}</span>
          </div>
        </div>

        <input
          type="range"
          class="slider"
          id="sl-${cat.key}"
          min="0" max="80"
          value="${Math.min(state[cat.key], 80)}"
          step="1"
          oninput="onSlider('${cat.key}', this.value)"
          aria-label="${cat.title}"
        >

        <div class="amount-row">
          <div class="amount-input">
            <span class="amount-input__prefix">$</span>
            <input
              type="text"
              inputmode="numeric"
              class="amount-input__field"
              id="amt-${cat.key}"
              placeholder="0"
              value="${amtDisplay > 0 ? amtDisplay.toLocaleString('es-CO') : ''}"
              autocomplete="off"
              oninput="onAmountInput('${cat.key}', this)"
              aria-label="Monto de ${cat.title}"
            >
            <span class="amount-input__suffix" id="suffix-${cat.key}">${suffix}</span>
          </div>
          <select
            class="periodo-select"
            id="per-${cat.key}"
            onchange="onPeriodicidad('${cat.key}', this.value)"
            aria-label="Periodicidad de ${cat.title}"
          >
            ${['quincenal','mensual','bimestral','semestral','anual'].map(p =>
              `<option value="${p}"${periodicidad === p ? ' selected' : ''}>${p.charAt(0).toUpperCase() + p.slice(1)}</option>`
            ).join('')}
          </select>
        </div>
      </div>
    `;
  }).join('');
}

function onSlider(key, val) {
  state[key] = parseInt(val, 10) || 0;
  _syncAmtFromPct(key);
  updateDistribucion();
}
window.onSlider = onSlider;

function onAmountInput(key, input) {
  const num = parseInt(input.value.replace(/\D/g, ''), 10) || 0;
  input.value = num > 0 ? num.toLocaleString('es-CO') : '';
  if (state.salario > 0) {
    const monthly = normalizarAMensual(num, state.periodicidades[key]);
    state[key] = Math.min(100, Math.round(monthly / state.salario * 100));
  } else {
    state[key] = 0;
  }
  const sl = document.getElementById('sl-' + key);
  if (sl) sl.value = Math.min(state[key], 80);
  updateDistribucion();
}
window.onAmountInput = onAmountInput;

function onPeriodicidad(key, periodicidad) {
  state.periodicidades[key] = periodicidad;
  _syncAmtFromPct(key);
  const suffixEl = document.getElementById('suffix-' + key);
  if (suffixEl) suffixEl.textContent = PERIODICIDAD_LABELS[periodicidad] || 'al mes';
}
window.onPeriodicidad = onPeriodicidad;

function _syncAmtFromPct(key) {
  const monthly  = state.salario > 0 ? Math.round(state[key] / 100 * state.salario) : 0;
  const amount   = desnormalizarDeMensual(monthly, state.periodicidades[key]);
  const inputEl  = document.getElementById('amt-' + key);
  if (inputEl && document.activeElement !== inputEl) {
    inputEl.value = amount > 0 ? amount.toLocaleString('es-CO') : '';
  }
  const sl = document.getElementById('sl-' + key);
  if (sl) sl.style.setProperty('--p', (Math.min(state[key], 80) / 80 * 100).toFixed(1) + '%');
}

// ─── Gastos personalizados (A2) ───────────────────────────────────────
function toggleCustomForm() {
  const form = document.getElementById('custom-form');
  if (!form) return;
  form.hidden = !form.hidden;
  if (!form.hidden) {
    const n = document.getElementById('custom-nombre');
    if (n) n.focus();
    setTimeout(() => form.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  }
  refreshIcons();
}
window.toggleCustomForm = toggleCustomForm;

function onCustomMontoInput(input) {
  const num = parseInt(input.value.replace(/\D/g, ''), 10) || 0;
  input.value = num > 0 ? num.toLocaleString('es-CO') : '';
}
window.onCustomMontoInput = onCustomMontoInput;

function agregarGastoPersonalizado() {
  if (state.otros.length >= MAX_OTROS) return;
  const nombre = (document.getElementById('custom-nombre')?.value || '').trim();
  const raw    = (document.getElementById('custom-monto')?.value || '').replace(/\D/g, '');
  const monto  = parseInt(raw, 10) || 0;
  const per    = document.getElementById('custom-periodicidad')?.value || 'mensual';
  if (!nombre || monto <= 0) return;
  state.otros.push({
    id: 'o' + (++state._nextOtroId),
    nombre,
    montoMensual: normalizarAMensual(monto, per)
  });
  const nEl = document.getElementById('custom-nombre');
  const mEl = document.getElementById('custom-monto');
  if (nEl) nEl.value = '';
  if (mEl) mEl.value = '';
  document.getElementById('custom-form').hidden = true;
  renderCustomOtros();
  updateDistribucion();
  refreshIcons();
}
window.agregarGastoPersonalizado = agregarGastoPersonalizado;

function eliminarGastoPersonalizado(id) {
  state.otros = state.otros.filter(o => o.id !== id);
  renderCustomOtros();
  updateDistribucion();
}
window.eliminarGastoPersonalizado = eliminarGastoPersonalizado;

function renderCustomOtros() {
  const list = document.getElementById('custom-otros-list');
  if (!list) return;
  list.innerHTML = state.otros.map(o => `
    <div class="custom-item">
      <span class="custom-item__dot"></span>
      <span class="custom-item__nombre">${o.nombre}</span>
      <span class="custom-item__monto">${formatCOP(o.montoMensual)}/mes</span>
      <button type="button" class="custom-item__remove"
              onclick="eliminarGastoPersonalizado('${o.id}')"
              aria-label="Eliminar ${o.nombre}">
        <i data-lucide="x"></i>
      </button>
    </div>
  `).join('');
  _updateAgregarOtroBtn();
  refreshIcons();
}

function _updateAgregarOtroBtn() {
  const btn = document.getElementById('btn-agregar-otro');
  if (!btn) return;
  const count = state.otros.length;
  if (count >= MAX_OTROS) {
    btn.hidden = true;
  } else {
    btn.hidden = false;
    btn.querySelector('span.btn-label').textContent =
      count === 0 ? 'Agregar gasto sin categoría' : `Agregar otro gasto (${count} de ${MAX_OTROS})`;
  }
}

// ─── Total otros ─────────────────────────────────────────────────────
function getTotalOtros() {
  return state.otros.reduce((s, o) => s + o.montoMensual, 0);
}

// ─── Actualizar visual Pantalla 2 ────────────────────────────────────
function updateDistribucion() {
  const cats       = CATEGORIAS.map(c => c.key);
  const catPct     = cats.reduce((s, k) => s + state[k], 0);
  const otrosPct   = state.salario > 0 ? Math.round(getTotalOtros() / state.salario * 100) : 0;
  const totalPct   = catPct + otrosPct;
  const margenPct  = Math.max(0, 100 - totalPct);
  const enRiesgo   = totalPct > 100;

  cats.forEach(k => {
    const pct     = state[k];
    const monthly = state.salario > 0 ? Math.round(pct / 100 * state.salario) : 0;
    const pctEl   = document.getElementById('pct-' + k);
    const copEl   = document.getElementById('cop-' + k);
    if (pctEl) pctEl.textContent = pct + '%';
    if (copEl) copEl.textContent = state.salario > 0 ? formatCOP(monthly) + '/mes' : '';
    _syncAmtFromPct(k);
  });

  cats.forEach(k => {
    const seg = document.querySelector(`.distro__seg[data-key="${k}"]`);
    if (seg) seg.style.width = Math.min(state[k], 100) + '%';
  });
  const segOtros  = document.querySelector('.distro__seg[data-key="otros"]');
  const segMargen = document.querySelector('.distro__seg[data-key="margen"]');
  if (segOtros)  segOtros.style.width  = Math.min(otrosPct, 100) + '%';
  if (segMargen) segMargen.style.width = (enRiesgo ? 0 : margenPct) + '%';

  const res    = document.getElementById('margen-res');
  if (!res) return;
  const icoEl  = res.querySelector('.margen-res__icon');
  const label  = document.getElementById('margen-label');
  const sub    = document.getElementById('margen-sub');
  const pctEl  = document.getElementById('margen-pct');
  const copEl  = document.getElementById('margen-cop');

  res.classList.remove('margen-res--ok', 'margen-res--ajust', 'margen-res--riesgo');

  if (enRiesgo) {
    res.classList.add('margen-res--riesgo');
    if (icoEl)  icoEl.innerHTML  = '<i data-lucide="alert-triangle"></i>';
    if (label)  label.textContent = 'Tus gastos superan tus ingresos';
    if (sub)    sub.textContent   = 'Ajusta alguna categoría para equilibrar.';
    if (pctEl)  pctEl.textContent = '+' + (totalPct - 100) + '%';
    if (copEl)  copEl.textContent = '';
  } else if (margenPct < 20) {
    res.classList.add('margen-res--ajust');
    if (icoEl)  icoEl.innerHTML  = '<i data-lucide="info"></i>';
    if (label)  label.textContent = 'Margen disponible';
    if (sub)    sub.textContent   = 'Es estrecho. Un imprevisto puede afectarte.';
    if (pctEl)  pctEl.textContent = margenPct + '%';
    if (copEl)  copEl.textContent = state.salario > 0 ? formatCOP(Math.round(margenPct / 100 * state.salario)) : '';
  } else {
    res.classList.add('margen-res--ok');
    if (icoEl)  icoEl.innerHTML  = '<i data-lucide="check-circle-2"></i>';
    if (label)  label.textContent = 'Margen disponible';
    if (sub)    sub.textContent   = 'Lo que queda después de todo lo demás';
    if (pctEl)  pctEl.textContent = margenPct + '%';
    if (copEl)  copEl.textContent = state.salario > 0 ? formatCOP(Math.round(margenPct / 100 * state.salario)) : '';
  }

  _updateAgregarOtroBtn();
  refreshIcons();
}

// ═══════════════════════════════════════════════════════════════════════
//  PANTALLA 3 — DIAGNÓSTICO
//  R1: % Futuro usa state.futuro directamente
//  A1: "Margen disponible (excl. ahorro)" + sublabel con %
//  V5: chips de referencia en alertas
// ═══════════════════════════════════════════════════════════════════════
function calcularPerfil() {
  if (state.perfilDemo && state.perfilDemo !== 'auto') return state.perfilDemo;
  const egPct    = state.vitales + state.deudas + state.gustos + state.cotidianos;
  const otrosPct = state.salario > 0 ? Math.round(getTotalOtros() / state.salario * 100) : 0;
  const margen   = 100 - egPct - state.futuro - otrosPct;
  if (margen < 0)   return 'riesgo';
  if (margen >= 20) return 'saludable';
  return 'ajustado';
}

const PERFILES = {
  saludable: {
    title: 'Tu flujo está saludable',
    sub:   'Tus ingresos cubren tus gastos con margen positivo.',
    cssColor: '#16d727', tone: 'green', icon: 'check-circle-2'
  },
  ajustado: {
    title: 'Tu flujo está ajustado',
    sub:   'Tus ingresos alcanzan, pero el margen es estrecho.',
    cssColor: '#ffae08', tone: 'yellow', icon: 'alert-triangle'
  },
  riesgo: {
    title: 'Tu flujo está en riesgo',
    sub:   'Este mes tus gastos superan tus ingresos.',
    cssColor: '#e03430', tone: 'red', icon: 'alert-circle'
  }
};

function renderDiagnostico() {
  const perfil   = calcularPerfil();
  const p        = PERFILES[perfil];
  const ing      = state.salario;
  const egPct    = state.vitales + state.deudas + state.gustos + state.cotidianos;
  const otrosPct = ing > 0 ? Math.round(getTotalOtros() / ing * 100) : 0;
  const margenPct = 100 - egPct - state.futuro - otrosPct;
  const margenPesos = Math.round(margenPct / 100 * ing);
  const futuroPct   = state.futuro;                          // R1: directo desde state
  const futuroPesos = Math.round(futuroPct / 100 * ing);

  document.getElementById('diag-title').textContent = p.title;
  document.getElementById('diag-sub').textContent   = p.sub;
  const main = document.getElementById('diag-main');
  main.style.setProperty('--diag-color', p.cssColor);

  main.querySelectorAll('.semaforo__dot').forEach(d => d.classList.remove('semaforo__dot--on'));
  const onDot = main.querySelector(`.semaforo__dot[data-tone="${p.tone}"]`);
  if (onDot) onDot.classList.add('semaforo__dot--on');

  // A1: Margen disponible (sin contar el ahorro)
  const labelEl = document.getElementById('diag-margen-label');
  const subEl   = document.getElementById('diag-margen-sub');
  if (labelEl) labelEl.textContent = 'Margen disponible (sin contar el ahorro)';
  if (subEl)   subEl.textContent   = `Ya descuenta tu ahorro de Futuro (${futuroPct}%)`;

  document.getElementById('diag-margen-valor').textContent = ing > 0 ? formatCOP(margenPesos) : '—';
  document.getElementById('diag-margen-pct').textContent   = ing > 0 ? margenPct.toFixed(0) + '%' : '—';

  const bodyInline = document.getElementById('diag-body-inline');
  bodyInline.innerHTML = (perfil === 'riesgo')
    ? `<p class="diag-body-note">Eso no significa que estés en una situación sin salida — este es un buen momento para entender qué está pasando con tu plata y tomar acción antes de que el desbalance se acumule.</p>`
    : '';

  // Alertas + chips de referencia (V5)
  const alertas = generarAlertas(perfil, margenPct, margenPesos);
  document.getElementById('alertas-list').innerHTML = alertas.map(a => `
    <li class="alerta">
      <span class="alerta__icon" style="color:${p.cssColor}">
        <i data-lucide="${p.icon}"></i>
      </span>
      <div class="alerta__body">
        <p class="alerta__text">${a.text}</p>
        ${a.ref ? `<span class="ref-chip">${a.ref}</span>` : ''}
      </div>
    </li>
  `).join('');

  // Proyecciones
  const proy      = document.getElementById('diag-proyecciones');
  const ctasEl    = document.getElementById('diag-ctas');
  const alertasCard = document.getElementById('diag-alertas-card');
  if (perfil !== 'riesgo' && futuroPesos > 0) {
    proy.hidden = false;
    ctasEl.classList.remove('diag-ctas--full-row');
    alertasCard.classList.remove('diag-alertas--full-row');
    document.getElementById('proyecciones-sub').textContent =
      `Con ${formatCOP(futuroPesos)} al mes guardados en Skandia:`;
    state._carouselIdx = 0;
    renderCarousel(futuroPesos);
  } else {
    proy.hidden = true;
    ctasEl.classList.add('diag-ctas--full-row');
    alertasCard.classList.add('diag-alertas--full-row');
  }

  // Mini-CTA que lleva a Pantalla 4 (R2)
  ctasEl.innerHTML = `
    <div class="ctas">
      <div class="ctas__head">
        <h3 class="ctas__title">¿Listo para dar el siguiente paso?</h3>
        <p class="ctas__sub">${perfil === 'riesgo'
          ? 'Entender tu situación es el primer paso. Veamos qué puedes hacer ahora.'
          : 'Con tu diagnóstico listo, puedes convertir ese margen en algo que trabaje por ti.'}</p>
      </div>
      <button type="button" class="btn btn--primary btn--full" onclick="ir('s-ctas')">
        Ver siguiente paso
        <i data-lucide="arrow-right"></i>
      </button>
    </div>
  `;

  refreshIcons();
}

function generarAlertas(perfil, margenPct, margenPesos) {
  const a     = [];
  const ahorro = state.futuro;
  const deuda  = state.deudas;
  const ing    = state.salario;

  if (perfil === 'saludable') {
    if (ahorro < 10) {
      a.push({
        text: `Tu tasa de ahorro es del <strong>${ahorro}%</strong>. El mínimo que suele funcionar bien es el 10% del ingreso.`,
        ref: 'El mínimo recomendado es el 10% del ingreso mensual'
      });
    } else {
      a.push({
        text: `Tu tasa de ahorro es del <strong>${ahorro}%</strong>. Estás por encima del mínimo recomendado.`,
        ref: null
      });
    }
    if (deuda <= 30) {
      a.push({
        text: `Tus deudas representan el <strong>${deuda}%</strong> de tus ingresos. Estás dentro de un rango manejable.`,
        ref: 'El rango manejable suele ser hasta el 30% del ingreso'
      });
    }
    a.push({
      text: `Tu margen está por encima del 20% — tienes un buen colchón ante imprevistos.`,
      ref: 'Tu margen está por encima del 20% — un buen colchón ante imprevistos'
    });

  } else if (perfil === 'ajustado') {
    a.push({
      text: `Tu margen libre es del <strong>${margenPct}%</strong>. Con un imprevisto, ese espacio puede achicarse rápido.`,
      ref: null
    });
    if (state.gustos + state.cotidianos > 20) {
      a.push({
        text: `Tus gustos y gastos cotidianos representan el <strong>${state.gustos + state.cotidianos}%</strong> de tus ingresos. Ahí puede haber espacio para liberar algo.`,
        ref: null
      });
    }
    if (ahorro < 10) {
      a.push({
        text: `Tu tasa de ahorro es del <strong>${ahorro}%</strong>. Fortalecer ese porcentaje puede darte más tranquilidad.`,
        ref: 'El mínimo recomendado es el 10% del ingreso mensual'
      });
    } else {
      a.push({ text: 'Fortalecer tu fondo de emergencia puede darte más tranquilidad ante lo inesperado.', ref: null });
    }

  } else { // riesgo
    if (ing > 0) {
      a.push({
        text: `Tus egresos superan tus ingresos en <strong>${formatCOP(Math.abs(margenPesos))}</strong> este mes.`,
        ref: null
      });
    } else {
      a.push({ text: 'Tus egresos superan tus ingresos este mes.', ref: null });
    }
    if (deuda > 30) {
      a.push({
        text: `Tus deudas representan el <strong>${deuda}%</strong> de tus ingresos.`,
        ref: 'El rango manejable suele ser hasta el 30% del ingreso'
      });
    }
    if (state.vitales > 50) {
      a.push({
        text: `Tus gastos vitales toman el <strong>${state.vitales}%</strong> de lo que entra.`,
        ref: 'Cuando superan 50%, el margen para imprevistos se vuelve muy estrecho'
      });
    } else {
      a.push({
        text: `Tus gastos vitales y deudas juntos toman el <strong>${state.vitales + deuda}%</strong> de lo que entra.`,
        ref: null
      });
    }
  }
  return a;
}

// ─── Carousel ─────────────────────────────────────────────────────────
function renderCarousel(futuroPesos) {
  state._futuroPesos   = futuroPesos;
  const items = [
    { icon: 'sprout', title: 'Tu primer fondo de inversión', hor: '1 año',   monto: futuroPesos * 12, desc: 'Tu plata trabajando para ti en fondos Skandia.', rec: true },
    { icon: 'shield', title: 'Tu fondo de emergencia',       hor: '6 meses', monto: futuroPesos * 6,  desc: 'Un colchón para imprevistos sin endeudarte.', rec: false },
    { icon: 'plane',  title: 'Tu meta de viaje o proyecto',  hor: '2 años',  monto: futuroPesos * 24, desc: 'Ahorra para ese sueño que tienes en mente.', rec: false }
  ];
  state._carouselItems = items;
  const idx     = state._carouselIdx || 0;
  const track   = document.getElementById('proyecciones-list');
  const dots    = document.getElementById('carousel-dots');
  const counter = document.getElementById('carousel-counter');

  if (track) track.innerHTML = items.map((it, i) => `
    <div class="carousel__slide${i === idx ? ' carousel__slide--active' : ''}" data-index="${i}">
      <div class="proyeccion${it.rec ? ' proyeccion--rec' : ''}">
        <div class="proyeccion__head">
          <span class="proyeccion__icon"><i data-lucide="${it.icon}"></i></span>
          <span class="proyeccion__hor">${it.hor}</span>
        </div>
        <p class="proyeccion__title">${it.title}</p>
        <div class="proyeccion__value-rec">
          <p class="proyeccion__monto">${formatCOP(it.monto)}</p>
          ${it.rec ? '<span class="proyeccion__badge">Recomendado</span>' : ''}
        </div>
        <p class="proyeccion__desc">${it.desc}</p>
      </div>
    </div>
  `).join('');

  if (dots) dots.innerHTML = items.map((_, i) => `
    <button class="carousel__dot${i === idx ? ' carousel__dot--active' : ''}"
            onclick="goCarousel(${i})" aria-label="Opción ${i + 1}"></button>
  `).join('');

  if (counter) counter.textContent = `${idx + 1} / ${items.length}`;
  refreshIcons();
}

function shiftCarousel(dir) {
  const n = (state._carouselItems || []).length || 3;
  state._carouselIdx = ((state._carouselIdx || 0) + dir + n) % n;
  const track = document.getElementById('proyecciones-list');
  if (track) track.setAttribute('data-dir', dir > 0 ? '1' : '-1');
  renderCarousel(state._futuroPesos || 0);
}
window.shiftCarousel = shiftCarousel;

function goCarousel(idx) {
  const dir = idx > (state._carouselIdx || 0) ? 1 : -1;
  const track = document.getElementById('proyecciones-list');
  if (track) track.setAttribute('data-dir', dir > 0 ? '1' : '-1');
  state._carouselIdx = idx;
  renderCarousel(state._futuroPesos || 0);
}
window.goCarousel = goCarousel;

// ═══════════════════════════════════════════════════════════════════════
//  PANTALLA 4 — CTAs DE AVANCE (R2)
//  2 CTAs personalizados por perfil + botones de reset secundarios
// ═══════════════════════════════════════════════════════════════════════
const CTA_COPY = {
  saludable: {
    primario:    'Habla con un Financial Planner',
    notaPrimario:'Un Financial Planner puede ayudarte a hacer crecer tu ahorro, sin compromiso.',
    secundario:  'Aprende a hacer crecer tu ahorro',
    notaSecundario: 'Contenido práctico de Skandia para potenciar tu margen.',
    intro: 'Tu flujo está saludable. Es el momento ideal para que tu ahorro trabaje más por ti.'
  },
  ajustado: {
    primario:    'Habla con un Financial Planner',
    notaPrimario:'Hay espacio para mejorar. Un Financial Planner puede mostrarte cómo.',
    secundario:  'Aprende a mejorar tu presupuesto',
    notaSecundario: 'Guías y videos de Skandia para optimizar tu distribución de gastos.',
    intro: 'Tu margen es estrecho, pero hay acciones concretas que puedes tomar hoy.'
  },
  riesgo: {
    primario:    'Habla con un asesor',
    notaPrimario:'No estás solo. Un asesor puede acompañarte con pasos concretos.',
    secundario:  'Aprende a estabilizar tus finanzas',
    notaSecundario: 'Recursos de Skandia para estabilizar tu flujo paso a paso.',
    intro: 'Tus gastos superan tus ingresos. Hay pasos que puedes tomar ahora mismo.'
  }
};

function renderPantallaCTAs() {
  const perfil = calcularPerfil();
  const copy   = CTA_COPY[perfil] || CTA_COPY.ajustado;
  const p      = PERFILES[perfil];
  const el     = document.getElementById('ctas-content');
  if (!el) return;

  el.innerHTML = `
    <div class="ctas-hero">
      <div class="semaforo" aria-hidden="true">
        <span class="semaforo__dot${p.tone === 'red'    ? ' semaforo__dot--on' : ''}" data-tone="red"></span>
        <span class="semaforo__dot${p.tone === 'yellow' ? ' semaforo__dot--on' : ''}" data-tone="yellow"></span>
        <span class="semaforo__dot${p.tone === 'green'  ? ' semaforo__dot--on' : ''}" data-tone="green"></span>
      </div>
      <div>
        <h2 class="ctas-hero__title">${p.title}</h2>
        <p class="ctas-hero__sub">${copy.intro}</p>
      </div>
    </div>

    <div class="ctas-actions">
      <div class="cta-card cta-card--primary">
        <div class="cta-card__icon"><i data-lucide="headphones"></i></div>
        <div class="cta-card__body">
          <p class="cta-card__title">${copy.primario}</p>
          <p class="cta-card__note">${copy.notaPrimario}</p>
        </div>
        <button type="button" class="btn btn--primary btn--small">
          Agendar <i data-lucide="arrow-right"></i>
        </button>
      </div>

      <a href="https://channel.skandia.com.co/" target="_blank" rel="noopener"
         class="cta-card cta-card--secondary"
         aria-label="${copy.secundario} (se abre en pestaña nueva)">
        <div class="cta-card__icon"><i data-lucide="play-circle"></i></div>
        <div class="cta-card__body">
          <p class="cta-card__title">${copy.secundario}</p>
          <p class="cta-card__note">${copy.notaSecundario}</p>
        </div>
        <span class="cta-card__arrow"><i data-lucide="external-link"></i></span>
      </a>
    </div>
  `;
  refreshIcons();
}

// ─── Reiniciar ────────────────────────────────────────────────────────
function reiniciar() {
  if (!window.confirm('¿Seguro que quieres volver a empezar? Se borrarán todos los datos ingresados.')) return;
  state.vitales    = 30;
  state.deudas     = 20;
  state.gustos     = 15;
  state.cotidianos = 10;
  state.futuro     = 10;
  state.periodicidades = { vitales: 'mensual', deudas: 'mensual', gustos: 'mensual', cotidianos: 'mensual', futuro: 'mensual' };
  state.otros = [];
  setCanal(state.channel);
  buildSliders();
  updateDistribucion();
  ir('s-entrada');
}
window.reiniciar = reiniciar;

// ─── Touch swipe carousel ─────────────────────────────────────────────
(function () {
  let startX = 0, dragging = false;
  document.addEventListener('touchstart', e => {
    if (!e.target.closest('.carousel__track')) return;
    startX = e.touches[0].clientX; dragging = true;
  }, { passive: true });
  document.addEventListener('touchend', e => {
    if (!dragging) return; dragging = false;
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 40) diff < 0 ? shiftCarousel(1) : shiftCarousel(-1);
  }, { passive: true });
})();

// ─── Init ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const canal = new URLSearchParams(window.location.search).get('canal');
  if (canal === 'publico' || canal === 'cliente') state.channel = canal;
  buildSliders();
  setCanal(state.channel);
  updateDistribucion();
  refreshIcons();
});
