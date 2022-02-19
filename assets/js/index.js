const btnMobile = document.querySelector('.btn-mobile');
function toogleMenu(){
    const navegador = document.querySelector('.navegador');
    navegador.classList.toggle('active');
}

btnMobile.addEventListener('click', toogleMenu);
 