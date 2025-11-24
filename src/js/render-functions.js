import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElement = document.querySelector('.gallery');
const loaderElement = document.querySelector('.js-loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images = []) {
  if (!galleryElement || !Array.isArray(images) || images.length === 0) {
    return;
  }

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="gallery-meta">
            <span>${likes}<b>likes</b></span>
            <span>${views}<b>views</b></span>
            <span>${comments}<b>comments</b></span>
            <span>${downloads}<b>downloads</b></span>
          </div>
        </li>`
    )
    .join('');

  galleryElement.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  if (galleryElement) {
    galleryElement.innerHTML = '';
    lightbox.refresh();
  }
}

export function showLoader() {
  loaderElement?.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderElement?.classList.add('is-hidden');
}
