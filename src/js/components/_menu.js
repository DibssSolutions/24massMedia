import { mediaWidth } from '../utils';
import { OPEN, BODY } from '../constants';
const list = $('.js-menu-list');

list.each((i,el) => { $(el).parents('li').addClass('has-list'); });
  
const menuLink = $('.has-list .js-nav-link');
menuLink.on('click', function(e) {
  if (!mediaWidth(1024)) return;
  e.preventDefault();
  const parent = $(this).parents('.has-list');
  $('.has-list').removeClass(OPEN);
  (!parent.hasClass(OPEN))
    	? parent.addClass(OPEN)
    	: parent.removeClass(OPEN);
});

BODY.on('click', e => {
  if ($(e.target).closest('.has-list .js-nav-link').length || $(e.target).closest('.js-menu-list').length ) return;
  $('.has-list').removeClass(OPEN);
});
