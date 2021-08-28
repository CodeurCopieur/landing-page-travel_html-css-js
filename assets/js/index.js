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

showMenu('nav-toggle', 'nav-menu')