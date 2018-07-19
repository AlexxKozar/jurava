import $ from "jquery";
import 'slick-carousel';

$('.product_list_items').slick({
	infinite: true,
  	slidesToShow: 5,
  	slidesToScroll: 1,
  	dots: true,
  	prevArrow: $('.product_list_controls_prev_button'),
	nextArrow: $('.product_list_controls_next_button')
});
$('.product_list_items').on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));

	$('.slick-dots').appendTo('.product_list_controls_scroll');
