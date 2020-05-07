
/* Scroll Suave */

const menuItens = document.querySelectorAll('.nav-bar a[href^="#"');

menuItens.forEach(itens => {
    itens.addEventListener('click' , scrollSuave);

})

function scrollSuave(event){

    event.preventDefault();


    const element = event.target;
    const id = element.getAttribute('href');
    const toSection = document.querySelector(id).offsetTop;

    window.scroll({
        top: toSection -80,
        behavior: "smooth"
    })


}