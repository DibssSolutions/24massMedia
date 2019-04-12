import slick from 'slick-carousel';

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
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: false
});
