document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.album-grid');
  
    const images = [
      'Portfolio/Grey/solo1.jpeg', 'Portfolio/Grey/solo2.jpeg', 'Portfolio/Grey/solo3.jpeg', 
      'Portfolio/Grey/solo4.jpeg', 'Portfolio/Grey/solo5.jpeg', 'Portfolio/Grey/solo6.jpeg', 'Portfolio/Grey/solo7.jpeg'
    ];
  
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = `img/${image}`;
      imgElement.alt = 'Fotografija';
      gallery.appendChild(imgElement);
    });
  });

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', function(event) {
    event.stopPropagation();  
    menu.classList.toggle('show');
    burger.classList.toggle('change');
  });

const links = document.querySelectorAll('li a');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    // event.preventDefault();
    hideBurgerIcon()
  });
});

document.addEventListener('click', function(event) {
  if (!menu.contains(event.target) && menu.classList.contains('show')) {
    hideBurgerIcon()
  }
});

function hideBurgerIcon() {
    menu.classList.remove('show')
    burger.classList.remove('change');
}