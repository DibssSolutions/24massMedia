import slick from 'slick-carousel';
import { mediaWidth } from '../utils';
import { WIN } from '../constants';

const heroSlider = $('.js-hero-slider');
heroSlider.slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 800,
  fade: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnHover: false,
  customPaging: (slider, pageIndex) => {
    return $(`<button class="hero-slider__dot">
    	<span></span>
		<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<circle stroke="#F15145" stroke-width="2" cx="20" cy="20" r="19"></circle>
			</g>
		</svg>
		</button>`);
  }
});


const celebritiesSlider = $('.js-celebrities-slider');
celebritiesSlider.slick({
  arrows: false,
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: false,
  responsive: [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 2
    }

  }, {
    breakpoint: 1023,
    settings: {
      centerMode: true,
      variableWidth: true,
      slidesToShow: 1
    }

  }, {
    breakpoint: 767,
    settings: {
      dots: false,
      centerMode: false,
      variableWidth: true,
      slidesToShow: 1
    }

  }]
});

const sliderWrap = $('.js-gallery-slider-wrap');
sliderWrap.each((i,el) => {
  const wrap = $(el);
  const slider = $('.js-gallery-slider', sliderWrap);
  const sliderNav = $('.js-gallery-nav', sliderWrap);
  const currentIdContainer = $('.js-gallery-slider-current');
  const amountContainer = $('.js-gallery-slider-all');
  const prev = $('.js-gallery-slider-prev', sliderWrap);
  const next = $('.js-gallery-slider-next', sliderWrap);
  const slidesAll = $('.js-gallery-slider-slide', sliderWrap).length;
  let sliderOption = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    // infinite: false,
  };
  if (sliderNav.length) sliderOption.asNavFor = sliderNav;
  
  slider
    .on('init', () => {
      currentIdContainer.text(1);
      amountContainer.text(slidesAll);
    })
    .slick(sliderOption)
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      currentIdContainer.text(nextSlide + 1);
    });

  prev.on('click', () => slider.slick('slickPrev'));
  next.on('click', () => slider.slick('slickNext'));

  sliderNav.slick({
    // infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: slider,
    centerMode: true,
    prevArrow: '<button class="gallery-nav__prev" type="button"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9461 10.9413L11.9463 10.9411L13.0003 11.9999L1.05436 23.9999L0.000307424 22.9411L10.892 12.0001L0 1.05882L1.05405 0L11.9461 10.9413Z" fill="white"/></svg></button>',
    nextArrow: '<button class="gallery-nav__next" type="button"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9461 10.9413L11.9463 10.9411L13.0003 11.9999L1.05436 23.9999L0.000307424 22.9411L10.892 12.0001L0 1.05882L1.05405 0L11.9461 10.9413Z" fill="white"/></svg></button>',
    variableWidth: true,
    focusOnSelect: true
  });
});

const stripSlider = $('.js-strip-slider');
let stripSliderOption = {
  slidesToShow: 3,
  arrows: false,
  dots: false,
  // centerMode: true,
  infinite: true,
  variableWidth: true,
  responsive: [{
    breakpoint: 820,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1
    }
  }]
};

const mobSlider = $('[data-mob-slider]');
let mobSliderOption = {
  slidesToShow: 2,
  arrows: false,
  dots: true,
  // centerMode: true,
  infinite: true,
  variableWidth: true,
  responsive: [{
    breakpoint: 479,
    settings: {
      slidesToShow: 1
    }
  }]
};


const tabletSlider = $('[data-tablet-slider]');

const initStripSlider = (container, option, widht) => {
  if (mediaWidth(widht)) {
    if (container.hasClass('slick-initialized')) return;
    container.slick(option);
  }
  else {
    if (!container.hasClass('slick-initialized')) return;
    container.slick('unslick');
  }
};

initStripSlider(stripSlider, stripSliderOption, 1024);
initStripSlider(mobSlider, mobSliderOption, 767);
let tabletSliderOption = mobSliderOption;
tabletSliderOption.dots = false;
initStripSlider(tabletSlider, tabletSliderOption, 1024);

const mobImagesSlider = $('.js-images-mob-slider');
const arrowIcon = `<svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9461 10.9413L11.9463 10.9411L13.0003 11.9999L1.05436 23.9999L0.000307424 22.9411L10.892 12.0001L0 1.05882L1.05405 0L11.9461 10.9413Z" fill="white"/>
</svg>`;
let mobImagesSliderOption = {
  slidesToShow: 1,
  dots: false,
  prevArrow: `<botton class="images__prev">${arrowIcon}</button>`,
  nextArrow: `<botton class="images__next">${arrowIcon}</button>`
};
initStripSlider(mobImagesSlider, mobImagesSliderOption, 767);

let timeout;
WIN.on('resize', () => {
  clearTimeout(timeout);
  timeout = setTimeout( () => {
    initStripSlider(stripSlider, stripSliderOption, 1024);
    initStripSlider(tabletSlider, tabletSliderOption, 1024);
    initStripSlider(mobSlider, mobSliderOption, 767);
    initStripSlider(mobImagesSlider, mobImagesSliderOption, 429);
  }, 200);
});


