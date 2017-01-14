;(function($){
	"use strict";

	$('.ba-container-slider').slick({
		slide: '.ba-container-slider__slide',
		prevArrow: ".ba-arrow__prev",
		nextArrow: ".ba-arrow__next",
		// infinite: true,
		// slidesToShow: 4,
		// slidesToScroll: 1,
		// dots: false,
		// speed: 300,
		// centerMode: true,
		// initialSlide: 4,
		// variableWidth: true
	});


})(jQuery);

;(function($){
	"use strict";

	$('.ba-container-slider-two').slick({
		slide: '.ba-container-slider-slide',
		slidesToShow: 1,
		slidesToScroll: 1,
		// arrows: false,
		fade: true,
		asNavFor: '.ba-container-slider-three',
		prevArrow: ".ba-arrow__prev",
		nextArrow: ".ba-arrow__next",

	});
	$('.ba-container-slider-three').slick({
		slide: '.ba-container-slider-slide',

		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.ba-container-slider-two',
		// dots: true,
		centerMode: true,
		focusOnSelect: true,
		prevArrow: ".ba-arrow__prev",
		nextArrow: ".ba-arrow__next",
	});


})(jQuery);
