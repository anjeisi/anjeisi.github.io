//MENU

/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
var button = document.querySelector('.btn-menu');
var nav = document.querySelector('.nav');
button.addEventListener('click', function () {
    nav.classList.toggle('activo');
});


//ANIMATIONS de entradas

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    
    // reset: true // Animations repeat
})

sr.reveal(`.image__cover, .image_curriculum,.last-name`, {origin: 'right'})
sr.reveal(`.text__cover,.tittle_curriculum`, {origin: 'left'})

sr.reveal(`.proyecto, .box__card-primary, .cover button`, {interval: 50})