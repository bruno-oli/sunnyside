function scrollToMain() {
  const arrowDown = document.querySelector("header div img")
  const main = document.querySelector('main')
  arrowDown.addEventListener('click', () => {
    main.scrollIntoView({behavior: "smooth"});
  })
}

function mobileMenu() {
  const btnMenu = document.querySelector('header nav img:nth-child(2)')
  const menu = document.querySelector('.mobile-menu')
  btnMenu.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      menu.classList.toggle("show")
      setTimeout(() => {
        menu.classList.toggle("active")
      }, 300)
    } else {
      menu.classList.toggle("active")
      setTimeout(() => {
        menu.classList.toggle("show")
      }, 1) 
    }
  })
}

scrollToMain()
mobileMenu()
