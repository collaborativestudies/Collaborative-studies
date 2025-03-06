// Slideshow Functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Fullscreen Image Viewer
function openFullscreen(imageSrc) {
    document.getElementById("fullscreenViewer").style.display = "flex";
    document.getElementById("fullscreenImg").src = imageSrc;
}

function closeFullscreen() {
    document.getElementById("fullscreenViewer").style.display = "none";
}
