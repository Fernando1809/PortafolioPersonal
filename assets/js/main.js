/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
// Función para calcular la edad
function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = fechaActual.getFullYear() - nacimiento.getFullYear();
    const mesActual = fechaActual.getMonth();
    const mesNacimiento = nacimiento.getMonth();
    
    // Restar un año si el mes actual es menor que el mes de nacimiento
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && fechaActual.getDate() < nacimiento.getDate())) {
        edad--;
    }
    
    return edad;
}

// Función para actualizar el span con la edad
function actualizarEdad() {
    const fechaNacimiento = '2001-09-18'; // Tu fecha de nacimiento
    const edadSpan = document.querySelector('.EdadFG'); // Selecciona el span por su clase

    const edad = calcularEdad(fechaNacimiento); // Calcula la edad
    edadSpan.textContent = edad; // Actualiza el texto del span
}

// Llama a la función al cargar la página
actualizarEdad();

// Llama a la función cada año
setInterval(actualizarEdad, 1000 * 60 * 60 * 24 * 365); // Ejecuta la función cada año

function descargarArchivo() {
    var url = 'cv/CV.pdf';
  
    var link = document.createElement('a');
    link.href = url;
    link.download = 'CV.pdf';
  
    document.body.appendChild(link);
  
    link.click();
  
    document.body.removeChild(link);
  }
  window.onload = function() {
    document.body.classList.add('dark-mode');
};