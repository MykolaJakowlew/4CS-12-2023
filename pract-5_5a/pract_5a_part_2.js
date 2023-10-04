const swapLeft = () => {
  const images = document.getElementsByClassName('slider-item');

  let prevIndex = null;
  for (let i = 0; i < images.length; i += 1) {
    if (images[i].classList.contains('selected')) {
      prevIndex = i - 1;
    }
  }

  // const selectedImages = document.getElementsByClassName('selected');
  // const selectedImage = selectedImages[0];
  const [selectedImage] = document.getElementsByClassName('selected');
  selectedImage.classList.toggle('selected');

  if (prevIndex == -1) {
    images[images.length - 1].classList.toggle('selected');
  } else {
    images[prevIndex].classList.toggle('selected');
  }
};

/***
 * 2000 => 2s
 */
// setInterval(() => { swapLeft(); }, 2000);

document.getElementById('left').addEventListener('click', swapLeft);
document.getElementById('right');