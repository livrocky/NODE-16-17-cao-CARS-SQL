/* eslint-disable import/extensions */
import { BASE_URL } from './modules/config.js';

const idEl = document.getElementById('id');
const titleEl = document.getElementById('title');
const imgEl = document.getElementById('image');
const priceEl = document.getElementById('price');
const numberplatesEl = document.getElementById('numberPlates');

const formEl = document.forms[0];
console.log('formEl ===', formEl);

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('js is in control');
  const newCarObj = {
    id: idEl.value,
    title: titleEl.value,
    img: imgEl.value,
    price: priceEl.value,
    numberplates: numberplatesEl.value,
  };
  console.log('newCarObj===', newCarObj);
  // eslint-disable-next-line no-use-before-define
  createCar(newCarObj);
});

async function createCar(obj) {
  const resp = await fetch(`${BASE_URL}/cars/post`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });
  console.log('resp===', resp);

  if (resp.status === 200) {
    // sukurta sekmingai
    window.location.href = 'index.html';
  } else {
    console.log('something went wrong');
  }
}
