// Fixed navbar
this.window.addEventListener("scroll", function() {
  const header = document.querySelector('#header')

  if (this.window.scrollY > header.offsetTop) {
    header.classList.add("nav-fixed")
  } else {
    header.classList.remove("nav-fixed")
  }
})


// Hamburger menu
const hamburger = document.querySelector("#hamburger")
const navMenu = document.querySelector("#nav-menu")

hamburger.addEventListener("click", function() {
  navMenu.classList.add("menu-transition")
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("menu-close")
})

this.window.addEventListener("resize", function() {
  navMenu.classList.remove("menu-transition")
})