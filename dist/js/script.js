// Fixed navbar
window.addEventListener("scroll", function() {
  const header = document.querySelector('#header')

  if (window.scrollY > header.offsetTop) {
    header.classList.add("nav-fixed")
  } else {
    header.classList.remove("nav-fixed")
  }
})

// Scrolltop
window.addEventListener("scroll", function() {
  const scrolltop = document.querySelector("#scrolltop")

  if (window.scrollY > 500) {
    scrolltop.classList.add("scrolltop-show")
  } else {
    scrolltop.classList.remove("scrolltop-show")
  }
})


// Hamburger menu
const hamburger = document.querySelector("#hamburger")
const navMenu = document.querySelector("#nav-menu")

function toggleMenu() {
  navMenu.classList.add("menu-transition")
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("menu-close")
}

hamburger.addEventListener("click", toggleMenu)

this.window.addEventListener("resize", function() {
  navMenu.classList.remove("menu-transition")
})



// Dark mode
const darkMode = () => (JSON.parse(localStorage.darkMode) || false)
const darkmodeToggle = document.querySelector("#darkmode-toggle")

if (darkMode()) {
  document.documentElement.classList.add('dark')
  darkmodeToggle.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
} else {
  document.documentElement.classList.remove('dark')
  darkmodeToggle.innerHTML = `<i class="bi bi-moon"></i>`
}

darkmodeToggle.addEventListener("click", function () {
  if (darkMode()) {
    document.documentElement.classList.remove('dark')
    darkmodeToggle.innerHTML = `<i class="bi bi-moon"></i>`
  } else {
    document.documentElement.classList.add('dark')
    darkmodeToggle.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
  }

  localStorage.darkMode = !darkMode()
})



// Mobile nav menu
const navMenuLinks = document.querySelectorAll(".nav-menu__link")

navMenuLinks.forEach(link => {
  link.addEventListener("click", function () {
    navMenu.classList.add("menu-transition")
    hamburger.classList.remove("active")
    navMenu.classList.add("menu-close")
  })
})