$(document).ready(function(){

	 $(window).scroll(function(){
			var scroll = $(this).scrollTop();

		if (scroll > 475){
			$(".fix").css({
			'opacity' : '1'});
			console.log(scroll);			
		}

		else {
			$(".fix").css({
			'opacity' : '0'});
		}
	});

});