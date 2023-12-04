// JavaScript for image gallery with dynamic focus changes
const gallery = document.getElementById('gallery');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
let currentIndex = 0;

function changeFocus() {
    gallery.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeFocus, 4000);
