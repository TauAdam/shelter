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
  }
})

// const burger = <HTMLButtonElement>document.querySelector('.burger-menu');
// const popup = document.querySelector('.popup') as HTMLDivElement;
// const navBar = <HTMLDivElement>(
//   document.querySelector('.header__list')?.cloneNode(true)
// );

// burger.onclick = (e: Event) => {
//   e.preventDefault();
//   popup?.classList.toggle('active');
//   burger.classList.toggle('active');
//   popup?.appendChild(navBar);
// };

// document.addEventListener('click', e => {
//   if (e.target instanceof HTMLElement && e.target.closest('.menu__item')) {
//     popup?.classList.remove('active');
//     burger?.classList.remove('active');
//   }
// });
