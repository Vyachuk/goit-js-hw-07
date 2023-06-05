import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryHtml = galleryItems.map(img => {
    return `<li class='gallery__item'>
        <a class='gallery__link' href="${img.original}">
            <img class='gallery__image' src='${img.preview}' alt='${img.description}' data-original='${img.original}' />
        </a>
    </li>`
}).join('');
gallery.innerHTML = galleryHtml;


const modal = basicLightbox.create(`
    <img class="modal-image" width="1400" height="900" >
`);

gallery.addEventListener('click', e => {
    if (e.target.nodeName === 'IMG') {
        e.preventDefault();
        modal.show();

        const image = modal.element().querySelector('.modal-image');
        image.src = e.target.dataset.original;
        image.alt = e.target.alt;
    }
})

window.addEventListener('keydown', e => {
    if (e.code === "Escape" && modal.visible()) {
        modal.close();
    }
});
