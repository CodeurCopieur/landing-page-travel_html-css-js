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

// CONTROLS