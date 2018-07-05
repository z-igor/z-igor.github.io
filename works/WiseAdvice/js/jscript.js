$(document).ready();

$('#realproj').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});


$('#facts h1').click(function() {
	$(".kasp").toggle();
	// $("#angle").
});


$("#mySliderTabs").sliderTabs({
  	autoplay: false,
  	mousewheel: false
});

$("#works").slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	prevArrow: '<button type="button" class="slick-prev">Previous</button>'
	// adaptiveHeight: true
});