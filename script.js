// Script para mostrar/ocultar el menú en móviles
document.getElementById('nav-toggle').addEventListener('click', function () {
    var menu = document.querySelector('.nav ul');
    menu.classList.toggle('show');
});
