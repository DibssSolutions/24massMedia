import { SCROLL_TO } from '../utils';
const links = $('.js-nav-list a');
const header = $('.header');
links.each((i,el) => {
  const link = $(el);
  const id = link.attr('href');
  if ($(id).length) {
  	const offset = $(id).offset().top;
  	const headerHeight = header.outerHeight();
  	link.click(() => {SCROLL_TO(offset-headerHeight-30);});
  }
});
