const gallery = document.querySelector('.gallery');
const imageContainers = document.querySelectorAll('.image-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

function showPrevImage() {
  if (currentIndex === 0) {
    currentIndex = imageContainers.length - 1;
  } else {
    currentIndex--;
  }
  updateGallery();
}

function showNextImage() {
  if (currentIndex === imageContainers.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateGallery();
}

function updateGallery() {
  const transformValue = `translateX(-${currentIndex * 100}%)`;
  gallery.style.transform = transformValue;
}
