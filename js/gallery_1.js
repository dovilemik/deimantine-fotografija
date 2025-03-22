document.addEventListener('DOMContentLoaded', () => {
  const gallery1Class = '.album-grid'
  const gallery1Images = [
    'Portfolio/Grey/solo1.jpeg', 'Portfolio/Grey/solo2.jpeg', 'Portfolio/Grey/solo3.jpeg', 
    'Portfolio/Grey/solo4.jpeg', 'Portfolio/Grey/solo5.jpeg', 'Portfolio/Grey/solo6.jpeg', 'Portfolio/Grey/solo7.jpeg'
  ];

    populateImages(gallery1Class, gallery1Images);
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