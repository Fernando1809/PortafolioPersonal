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
    var url = './cv/CV.pdf'; // Ruta del archivo PDF en español

    var link = document.createElement('a');
    link.href = url;
    link.download = 'CV.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

document.getElementById('downloadButton').addEventListener('click', descargarArchivo);

document.querySelector('form').addEventListener('submit', function(event) {
    var valid = true;
    var inputs = this.querySelectorAll('input, textarea');
    inputs.forEach(function(input) {
      if (!input.value) {
        valid = false;
        input.classList.add('is-invalid');
      } else {
        input.classList.remove('is-invalid');
      }
    });

    if (!valid) {
      event.preventDefault();
      alert('Por favor, complete todos los campos.');
    }
  });
  function showSuccessMessage(event) {
    event.preventDefault(); // Prevent the form from submitting the usual way
    document.getElementById('success-message').style.display = 'block';
    setTimeout(function() {
        event.target.submit(); // Submit the form after showing the message
    }, 2000); // Wait for 2 seconds before submitting the form
}
document.addEventListener('DOMContentLoaded', () => {
    const certificateModal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');

    document.querySelectorAll('[data-bs-img-src]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita comportamiento por defecto del enlace
        const imgSrc = link.getAttribute('data-bs-img-src');
        modalImage.setAttribute('src', imgSrc);
      });
    });
  });