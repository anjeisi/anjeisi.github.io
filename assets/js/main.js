/*button mini menu*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('nav__link')
const LinkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))


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