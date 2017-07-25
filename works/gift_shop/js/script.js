// (function(document, window, $) {
$(document).ready(function() {
    $('.new_prod .slider').slick({
        prevArrow: '.new_prod .prev',
        nextArrow: '.new_prod .next',
        centerMode: true,
        centerPadding: '10px',
        dots: false,
        infinite: true,
        slidesToShow: 3
    });

    $('.features_prod .slider').slick({
        prevArrow: '.features_prod .prev',
        nextArrow: '.features_prod .next',
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
    });

    // $("li").hover(
    //   function(){
    //     $(this).find(".dropdown").fadeToggle(300);
    //   },
    //   function(){
    //     $(".nav_menu ~ ul").fadeOut(100);
    // });

});
// })(document, window, jQuery);