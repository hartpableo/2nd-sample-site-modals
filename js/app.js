//  auto-update year in footer
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();

// modal-style feature of images on click
const modal = document.querySelector('.modal');
const previewImgs = document.querySelectorAll('.imgsGrid img');
const modalImgs = document.querySelector('.modalImg');
const caption = document.querySelector('.modalText');

previewImgs.forEach(function(preview) {
    preview.addEventListener('click',function() {
        modal.classList.add('open');
        modalImgs.classList.add('open');
        // change img and text of modal accordingly
        const origSrc = preview.getAttribute('data-original');
        modalImgs.src = `${origSrc}`;
        const altText = preview.alt;
        caption.innerHTML = altText;
    });
});

modal.addEventListener('click',function(event) {
    if (event.target.classList.contains('modal')) {
        modal.classList.remove('open');
        modalImgs.classList.remove('open');
    }
});