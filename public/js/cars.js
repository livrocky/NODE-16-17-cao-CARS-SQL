/* eslint-disable import/prefer-default-export */
function makeEl(tagName, text, dest, elClass = null, src = null) {
  const el = document.createElement(tagName);
  el.textContent = text;
  if (elClass) el.className = elClass;
  if (src) el.src = src;
  dest.appendChild(el);
  return el;
}

function createCard(newCarObj) {
  const articleEl = document.createElement('article');

  articleEl.className = 'card-service';
  makeEl('h3', `${newCarObj.numberplates}`, articleEl);
  makeEl('p', `${newCarObj.title}`, articleEl);
  makeEl('img', '', articleEl, '', `${newCarObj.image}`);
  makeEl('hr', '', articleEl, 'hr');

  //   const btn = makeEl('button', '', articleEl, 'btn btn-delete');
  //   makeEl('i', '', btn, 'fa fa-trash');
  //   btn.onclick = () => {
  //     console.log('delete ', newCarObj._id);
  //     deleteService(newCarObj._id);
  //   };

  // console.log('articleEl ===', articleEl);
  return articleEl;
}

export function renderCards(cardArr, dest) {
  // isvalyti dest kad neliktu pries tai buvusiu korteliu
  dest.innerHTML = '';
  // sukti cikla ir irasyti visas gautas korteles
  cardArr.forEach((cObj) => {
    const card = createCard(cObj);
    dest.append(card);
  });
}