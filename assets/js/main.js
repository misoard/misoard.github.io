/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// const navMenu = document.getElementById('nav-menu'),
//     navToggle = document.getElementById('nav-toggle'),
//     navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
// if(navToggle){
//     navToggle.addEventListener('click', () =>{
//         navMenu.classList.add('show-menu')
//     } )
// }


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

// if(navClose){
//     navClose.addEventListener('click', () =>{
//         navMenu.classList.remove('show-menu')
//     })
// }

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/

let swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 30,
    loop: false, 
    cssMode: true,
    navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    pagination: {
            el: ".swiper-pagination",
            clickable: true
        },


    //   mousewheel: true,
    //   keyboard: true,
    });



/*==================== PUBLICATIONS SWIPER  ====================*/

let swiper_pub = new Swiper(".publication__container", {
    // slidesPerView: 2,
    // // centeredSlides: true,
    // spaceBetween: 300,
    // loop: true, 
    // cssMode: true,

    slidesPerView: "auto",      // let Swiper adapt to screen width
    spaceBetween: 30,           // spacing between slides
    centeredSlides: false,      // keep slides aligned to left
    loop: true,                // optional: true if you want infinite loop
    cssMode: true,             // needed for this style to work properly
    grabCursor: true,           // makes UX smoother
    pagination: {
            el: ".swiper-pagination",
        },


    //   mousewheel: true,
    //   keyboard: true,
    });


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/  