

const carrusel = document.querySelector(".anuncios");

let intervalo = null;
let step = 5;

const start = () => {
    intervalo = setInterval(function (params){
        carrusel.scrollLeft = carrusel.scrollLeft + 10 + step;
    }, 10);
};

const stop = () => {

}