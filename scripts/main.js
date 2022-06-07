const arrowDown = document.querySelector("header div img")
const main = document.querySelector('main')
arrowDown.addEventListener('click', () => {
  main.scrollIntoView({behavior: "smooth"});
})