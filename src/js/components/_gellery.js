import { BODY, HIDE, OPEN } from '../constants';

const gelleryModal = $('.js-gellery-modal');
const modalBtn = $('.js-gellery-modal-btn');
const openModal = 'is-open-modal';
const showArrow = 'is-show-arrow';

modalBtn.on('click', function() {
  const that = $(this);
  const textHide = that.data('text-hide');
  const textShow = that.data('text-show');
  const parent = that.parents('.js-gellery-modal');
  const galleryWrap = $('.js-gallery-slider-wrap', parent);
  const galleryNav = $('.js-gallery-nav', parent);
  const modalBtnText = that.find('.js-gellery-modal-btn-text');
  if (!that.hasClass(HIDE)) {
    that.addClass(HIDE);
    modalBtnText.html(textHide);
    galleryNav.slideUp();
    galleryWrap.addClass(showArrow);
  } else {
  	galleryNav.slideDown();
    that.removeClass(HIDE);
    modalBtnText.html(textShow);
    galleryWrap.removeClass(showArrow);
  }
});

BODY.on('click', e => {
  if ($(e.target).closest('.js-gellery-modal-inner').length ) return;
  gelleryModal.removeClass(OPEN);
  BODY.removeClass(openModal);
});
