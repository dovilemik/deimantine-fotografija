const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function (event) {
  event.stopPropagation();
  menu.classList.toggle('show');
  burger.classList.toggle('change');
});

const links = document.querySelectorAll('li a');

links.forEach(link => {
  link.addEventListener('click', function (event) {
    hideBurgerIcon()
  });
});

document.addEventListener('click', function (event) {
  if (!menu.contains(event.target) && menu.classList.contains('show')) {
    hideBurgerIcon()
  }
});

function hideBurgerIcon() {
  menu.classList.remove('show')
  burger.classList.remove('change');
}
