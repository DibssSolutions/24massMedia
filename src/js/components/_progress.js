import { ACTIVE } from '../constants';
const h = document.documentElement;
const b = document.body;
const st = 'scrollTop';
const sh = 'scrollHeight';
const progress = document.querySelector('.js-progress');
let scroll;

if (progress) {
  document.addEventListener('scroll', function() {
	  scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
	  progress.style.setProperty('--scroll', scroll + '%');
	  (scroll > 0)
	  	? progress.classList.add(ACTIVE)
	  	: progress.classList.remove(ACTIVE);
  });
}

