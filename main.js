'use strict';

const faceEl = document.querySelector('.js-btn');
const btnEl = document.querySelector('.js-btn');

function handleButtonClick(event) {
  event.preventDefault();
  if (event.type === 'click') {
    faceEl.innerHTML = ';)';
  } else {
    faceEl.innerHTML = ':)';
  }
}
btnEl.addEventListener('click', handleButtonClick);
