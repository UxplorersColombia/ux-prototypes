// Navegación por teclado del acordeón (.sk-acc-r): ↑/↓ entre cabeceras, Home/End. Copiado de la plantilla de sk-elements-html.
function iniciarAcordeones() {
  document.querySelectorAll('.sk-acc-r').forEach((g) => g.addEventListener('keydown', (e) => {
    const heads = [...g.querySelectorAll(':scope > details > summary')], i = heads.indexOf(document.activeElement); if (i < 0) return;
    const destino = { ArrowDown: heads[(i + 1) % heads.length], ArrowUp: heads[(i - 1 + heads.length) % heads.length], Home: heads[0], End: heads[heads.length - 1] }[e.key];
    if (destino) { e.preventDefault(); destino.focus(); }
  }));
}
