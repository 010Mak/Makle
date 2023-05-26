function changeWallpaper() {
    var imageUrlInput = document.getElementById('image-url-input');
    var imageUrl = imageUrlInput.value;

    // Change the body's background image
    document.body.style.backgroundImage = 'url(' + imageUrl + ')';
    document.body.style.backgroundSize = 'cover'; // Ensures the image covers the whole body

    closePopup();
}