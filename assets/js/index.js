/* SHOW MENU */
const showMenu = (toggleId, menuId)=> {
  const toggle = document.getElementById(toggleId),
        menu = document.getElementById(menuId);

  //validate that variables exist
  if(toggle, menu) {
    toggle.addEventListener('click', ()=> {
      menu.classList.toggle('show-menu');
    })
  }
}

showMenu('nav-toggle', 'nav-menu');

/* SWIPER JS */
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  slidesPerView: 0
});
var swiper2 = new Swiper(".mySwiper2", {
  effect: 'fade',
  loop: true,
  thumbs: {
    swiper: swiper,
  },
});


/* POPUP */
const btnOpenVideo = document.querySelectorAll('.islands__video-content'),
      btnCloseVideo = document.getElementById('popup-close'),
      islandsPopup = document.getElementById('popup');
      

function popup() {
  islandsPopup.classList.add('show-popup');
}

btnOpenVideo.forEach( b => b.addEventListener('click', popup));
btnCloseVideo.addEventListener('click', ()=> {
  islandsPopup.classList.remove('show-popup');
})

/* GSAP Animation */

const controlsImg = document.querySelectorAll('.controls__img');

function scrollAnimation() {
  gsap.from(
    '.test1, .test2, .test3, .test4, .test5', 
    {
      opacity: 0,
      duration: .2,
      delay: .2,
      y: -20,
      ease: "power2.out",
      stagger: {
        amount: 1.5
      }
    }, "-=.5");

    if(islandsPopup.classList.contains('show-popup')){
      islandsPopup.classList.remove('show-popup');
    }
    
}


controlsImg.forEach( img => img.addEventListener('click', scrollAnimation))