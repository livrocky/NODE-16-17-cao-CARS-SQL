/* eslint-disable import/prefer-default-export */
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

    const carsArr = await resp.json();
    console.log('servicesArr ===', carsArr);
    console.log('piesiam korteles');
    renderCards(carsArr, cardContainerEl);
    // createCard(servicesArr[0]);
  } catch (error) {
    console.warn('error ===', error);
    console.log('atvaizduojam klaida');
  }
}
export async function deleteService(idToDelete) {
  try {
    const resp = await fetch(`${BASE_URL}/cars/${idToDelete}`, { method: 'DELETE' });
    console.log('resp ===', resp);
    // fetch nepermeta kodo i catch bloka jei status yra klaidos
    if (resp.ok === false) throw new Error('error deleting');
    getServices();
    // createCard(servicesArr[0]);
  } catch (error) {
    console.warn('error ===', error);
    console.log('atvaizduojam klaida');
  }
}

getServices();
