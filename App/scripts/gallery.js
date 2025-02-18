import './../scss/gallery.scss';

document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeBtn = document.getElementById("close");


    const imageContext = require.context('../images', false, /\.(svg|png|jpg|jpeg|gif)$/);


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

    document.getElementById('uploadForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const fileInput = document.getElementById('imageInput');
        const formData = new FormData();
    
        if (fileInput.files.length > 0) {
            formData.append("image", fileInput.files[0]);
    
            fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
        } else {
            alert('Please select an image to upload');
        }
    });

});
