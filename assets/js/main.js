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
    // slidesPerView: "auto",
    // centeredSlides: true,
    // spaceBetween: 30,
    loop: true, 
    cssMode: true,
            spaceBetween: 10,
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

// let swiperInstance;

// function initSwiper() {
//     // Destroy previous instance if it exists
//     if (swiperInstance) swiperInstance.destroy(true, true);

//     if (window.innerWidth <= 768) {
//         // Mobile Swiper
//         swiperInstance = new Swiper(".mobile-swiper", {
//             loop: true,
//             cssMode: true,
//             navigation: {
//                 nextEl: ".mobile-swiper .swiper-button-next",
//                 prevEl: ".mobile-swiper .swiper-button-prev",
//             },
//             pagination: {
//                 el: ".mobile-swiper .swiper-pagination",
//                 clickable: true,
//             },
//             slidesPerView: 1,
//             spaceBetween: 10,
//         });
//     } else {
//         // Tablet & Desktop Swiper
//         swiperInstance = new Swiper(".desktop-swiper", {
//             loop: true,
//             // cssMode: true,
//             navigation: {
//                 nextEl: ".desktop-swiper .swiper-button-next",
//                 prevEl: ".desktop-swiper .swiper-button-prev",
//             },
//             // pagination: {
//             //     el: ".desktop-swiper .swiper-pagination",
//             //     clickable: true,
//             // },
//             // slidesPerView: 1, // or 3 for desktop
//             // spaceBetween: 20,
//         });
//     }
// }

// // Initialize on page load
// initSwiper();

// // Re-initialize on window resize
// window.addEventListener("resize", () => {
//     initSwiper();
// });



/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/  