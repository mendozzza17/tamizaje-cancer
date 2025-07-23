function irAPagina(idPagina) {
  const paginas = document.querySelectorAll('.page');
  paginas.forEach(p => p.classList.remove('active'));
  document.getElementById(idPagina).classList.add('active');
}
