document.addEventListener('DOMContentLoaded', () => {
  const gallery1Class = '.album-grid'
  const gallery2Images = [
    'Portfolio/Sand/sand1.jpeg', 'Portfolio/Sand/sand2.jpeg', 'Portfolio/Sand/sand3.jpeg', 
    'Portfolio/Sand/sand4.jpeg', 'Portfolio/Sand/sand5.jpeg', 'Portfolio/Sand/sand6.jpeg', 'Portfolio/Sand/sand7.jpeg', 'Portfolio/Sand/sand8.jpeg'
  ];

    populateImages(gallery1Class, gallery2Images);
  });

  function populateImages(galleryClass, images) {
    const gallery = document.querySelector(galleryClass);

    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = `img/${image}`;
      imgElement.alt = 'Fotografija';
      gallery.appendChild(imgElement);
    });
  }