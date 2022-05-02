/* eslint-disable import/extensions */
import { BASE_URL } from './modules/config.js';
import { renderCards } from './modules/html.js';

const cardContainerEl = document.querySelector('.cards-container');
// const addBntEl = document.querySelector('.btn-add');

async function getServices() {
  try {
    const resp = await fetch(`${BASE_URL}/cars`);
    console.log('resp ===', resp);
    // fetch nepermeta kodo i catch bloka jei status yra klaidos
    if (resp.ok === false) throw new Error('something is wrong');

    const servicesArr = await resp.json();
    console.log('servicesArr ===', servicesArr);
    console.log('piesiam korteles');
    renderCards(servicesArr, cardContainerEl);
    // createCard(servicesArr[0]);
  } catch (error) {
    console.warn('error ===', error);
    console.log('atvaizduojam klaida');
  }
}

getServices();
