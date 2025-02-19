document.addEventListener('DOMContentLoaded', function() {
    const library = document.getElementById('library');
    const imageFolder = 'src/';
    const images = [
        "Bonsaicaring.jpg",
        "bonsaiinright.jpg",
        "bonsaitree2.jpeg",
        "cay-si.jpg",
        "Caybode.jpg",
        "Cayduoi.jpg",
        "caykimthanhmai.jpg",
        "Caylinhsam.jpg",
        "caylocvung.jpg",
        "caytracbachdiep.jpg",
        "chamsoccay.jpg",
        "heroimagemain.jpg",
        "item2.jpg",
        "item3.jpg",
        "item4.jpg",
        "item5.jpg",
        "item6.jpg",
        "Maichieuthuy.jpg",
        "nghethuat.jpg",
        "TungLaHan.jpg"
        // Add all image filenames here
    ];

    images.forEach(image => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        const imgElement = document.createElement('img');
        imgElement.src = `${imageFolder}${image}`;
        imgElement.alt = 'libraryitem';

        itemDiv.appendChild(imgElement);
        library.appendChild(itemDiv);
    });
});
