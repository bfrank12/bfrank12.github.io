const carouselList = document.querySelector('.carousel-list');
const imageArray = []; 

function fetchAndDisplayImages() {
    fetch('e5.json')
        .then(response => response.json())
        .then(data => {
            const imageUrls = data.images; 

            imageUrls.forEach(imageUrl => {
                const image = new Image();
                image.src = imageUrl;

                image.onload = () => {
                    imageArray.push(image);
                    carouselList.appendChild(image);
                    displayCarousel();
                };
            });
        })
        .catch(error => console.error('Error fetching images:', error));
}

function displayCarousel() {
    let currentImageIndex = 0;

    setInterval(() => {
        carouselList.style.transform = `translateX(-${currentImageIndex * 500}px)`;
        currentImageIndex = (currentImageIndex + 1) % imageArray.length;
    }, 3000); 
}

fetchAndDisplayImages();