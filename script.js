function irAPagina(idPagina) {
  const paginas = document.querySelectorAll('.page');
  paginas.forEach(pagina => pagina.classList.remove('active'));
  document.getElementById(idPagina).classList.add('active');
}
