import './src/index.scss'

const burgerButton = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger__menu')
const navBar = document.querySelector('.nav__menu').cloneNode(true)
const overlay = document.querySelector('.overlay')

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active')
  burgerMenu.classList.toggle('active')
  overlay.classList.toggle('active')
  burgerMenu.append(navBar)
})
document.addEventListener('click', e => {
  if (e.target.closest('.menu__link')) {
    burgerButton.classList.remove('active')
    burgerMenu.classList.remove('active')
    overlay.classList.remove('active')
  }
})

