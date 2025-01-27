import './../scss/gallery.scss';

document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeBtn = document.getElementById("close");


const imageContext = require.context('../images', false, /\.(svg|png|jpg)$/);


const images = imageContext.keys().map(imageContext);


images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("gallery-image");
    gallery.appendChild(img);
});


    document.querySelectorAll(".gallery-image").forEach(image => {
        image.addEventListener("click", function() {
            modal.style.display = "block";
            modalImage.src = this.src;
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

});
