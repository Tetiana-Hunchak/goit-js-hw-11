
import './css/styles.css'; 
import 'izitoast/dist/css/iziToast.min.css';

import iziToast from 'izitoast';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchValue = form.elements['search-text'].value.trim();

  
  if (!searchValue) {
    iziToast.warning({
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchValue)
    .then(data => {
      hideLoader();

      const { hits } = data;

      if (!hits || hits.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(hits);
    })
    .catch(() => {
      hideLoader();
      iziToast.error({
        message: 'Oops! Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
     
      form.reset();
    });
}
