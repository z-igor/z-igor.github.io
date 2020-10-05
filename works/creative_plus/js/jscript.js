$(document).ready(function () {
  let headerH = $(".header").innerHeight();
  let mainH = $(".main").innerHeight();
  let footerH = $(".footer").innerHeight();
  let screenH = $(window).height();
  let withoutFooterH = Math.floor(headerH + mainH);

  let scroll = $(this).scrollTop();

  $(window).scroll(function () {
    scroll = $(this).scrollTop();

    if (scroll >= headerH && scroll <= withoutFooterH) {
      $(".float-media").removeClass("float-media--hide");
    } else {
      $(".float-media").addClass("float-media--hide");
    }
  });
});
