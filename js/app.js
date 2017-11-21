var mostraOcultar = function(event) {
  var tabSeleccionado = event.target.dataset.tabSeleccionado;
  var desayuno = document.getElementById('desayuno');
  var comida = document.getElementById('comida');
  var cena = document.getElementById('cena');
  if (tabSeleccionado === 'tabDesayuno') {
    console.log('Vamos a desayunar');
    // ocultar comida y Cena
    comida.style.display = 'none';
    cena.style.display = 'none';
    // mostrar desayuno
    desayuno.style.display = 'block';
  } else if (tabSeleccionado === 'tabComida') {
    console.log('Vamos a comer');
    // ocultar desayuno y Cena
    desayuno.style.display = 'none';
    cena.style.display = 'none';
    // mostrar comida
    comida.style.display = 'block';
  } else if (tabSeleccionado === 'tabCena') {
    console.log('Vamos a cenar');
    // ocultar desayuno y comida
    desayuno.style.display = 'none';
    comida.style.display = 'none';
    // mostrar cena
    cena.style.display = 'block';
  }
};
var cargarPagina = function() {
  var desayuno = document.getElementById('desayuno');
  var comida = document.getElementById('comida');
  var cena = document.getElementById('cena');
  desayuno.style.display = 'none';
  comida.style.display = 'none';
  cena.style.display = 'none';
  var elementosTab = document.getElementsByClassName('tab');
  for (var i = 0; i < elementosTab.length; i++) {
    elementosTab[i].addEventListener('click', mostraOcultar);
  }
};
cargarPagina();
