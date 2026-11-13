// Barra de filtros horizontal (listado y ficha): opciones y "Limpiar". Es solo interfaz; no filtra los resultados.
function iniciarFiltros(ui) {
  const listas = {
    equipo: ['Ventas', 'Tecnología', 'Servicio al Cliente', 'Operaciones', 'Talento Humano'],
    modalidad: ['Presencial', 'Híbrido', 'Remoto'],
    contrato: ['Término indefinido', 'Término fijo', 'Aprendizaje'],
    nivel: ['Junior', 'Semi Senior', 'Senior'],
  };

  // Desktop
  Object.entries(listas).forEach(([key, lista]) => {
    const el = ui.querySelector('#f-' + key);
    if (el) el.options = lista.map((l) => ({ label: l, value: l }));
  });
  const fModalidad = ui.querySelector('#f-modalidad');
  if (fModalidad) fModalidad.value = ['Híbrido'];
  const fLimpiar = ui.querySelector('#f-limpiar');
  if (fLimpiar) fLimpiar.addEventListener('skClick', () => {
    document.getElementById('f-buscar').value = '';
    Object.keys(listas).forEach((key) => { const el = document.getElementById('f-' + key); if (el) el.value = []; });
  });

  // Mobile
  Object.entries(listas).forEach(([key, lista]) => {
    const el = ui.querySelector('#fm-' + key);
    if (el) el.options = lista.map((l) => ({ label: l, value: l }));
  });

  const btn = ui.querySelector('#filtro-movil-btn');
  const panel = ui.querySelector('#filtro-movil-panel');
  const overlay = ui.querySelector('#filtro-movil-overlay');
  const cerrar = ui.querySelector('#filtro-movil-cerrar');
  const aplicar = ui.querySelector('#fm-aplicar');

  function abrirFiltros() {
    panel.hidden = false;
    overlay.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
  }
  function cerrarFiltros() {
    panel.hidden = true;
    overlay.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
  }

  if (btn) btn.addEventListener('click', abrirFiltros);
  if (cerrar) cerrar.addEventListener('click', cerrarFiltros);
  if (overlay) overlay.addEventListener('click', cerrarFiltros);
  if (aplicar) aplicar.addEventListener('skClick', cerrarFiltros);
}
