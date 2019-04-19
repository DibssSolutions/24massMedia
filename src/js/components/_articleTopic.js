import { WIN, DOC, SHOW } from '../constants';

const wrap = $('.js-article-wrap');
const topic = $('.js-article-topic');
if ( wrap.length && topic.length ) {
  WIN.on('scroll', function() {
	  const offset = wrap.offset().top + 20;
	  const scrolTop = DOC.scrollTop();
	  (scrolTop >= offset) 
	  	? topic.addClass(SHOW)
	  	: topic.removeClass(SHOW);
  });	
}

