// Barra de filtros horizontal (listado y ficha): opciones y "Limpiar". Es solo interfaz; no filtra los resultados.
function iniciarFiltros(ui) {
  const opciones = {
    'f-equipo': ['Ventas', 'Tecnología', 'Servicio al Cliente', 'Operaciones', 'Talento Humano'],
    'f-modalidad': ['Presencial', 'Híbrido', 'Remoto'],
    'f-contrato': ['Término indefinido', 'Término fijo', 'Aprendizaje'],
    'f-nivel': ['Junior', 'Semi Senior', 'Senior'],
  };
  Object.entries(opciones).forEach(([id, lista]) => {
    ui.querySelector('#' + id).options = lista.map((l) => ({ label: l, value: l }));
  });
  ui.querySelector('#f-modalidad').value = ['Híbrido'];
  ui.querySelector('#f-limpiar').addEventListener('skClick', () => {
    // El fragmento ya está montado: se busca en el documento
    document.getElementById('f-buscar').value = '';
    Object.keys(opciones).forEach((id) => (document.getElementById(id).value = []));
  });
}
