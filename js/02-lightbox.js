import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector('.gallery');

const galleryHtml = galleryItems.map(img => {
    return `<li class='gallery__item'>
        <a class='gallery__link' href="${img.original}">
            <img class='gallery__image' src='${img.preview}' alt='${img.description}' />
        </a>
    </li>`
}).join('');
galleryBox.innerHTML = galleryHtml;

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});


