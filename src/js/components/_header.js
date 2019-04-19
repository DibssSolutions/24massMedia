import { BODY } from '../constants';
const btn = $('.js-btn-nav');
const nav = $('.js-nav');
const openMenu = 'is-open-menu';

btn.on('click', () => {
  (!BODY.hasClass(openMenu)) 
    ? BODY.addClass(openMenu)
    : BODY.removeClass(openMenu);
});

BODY.on('click', e => {
  if ($(e.target).closest('.js-btn-nav').length ) return;
  BODY.removeClass(openMenu);
});
