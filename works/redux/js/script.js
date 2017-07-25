$( document ).ready(/*function(){*/);
	$(".logo button").click(function(){
		$(".top_nav").fadeToggle("fast");
	});

	// $(".dropdown").fadeOut();

	$("li").hover(
	  function(){
		$(this).find(".dropdown").fadeIn();
		$(".dropdown").mouseleave(function(){
	  		$(this).fadeOut("fast");
	  	});
      },
      function(){
        // $(".dropdown").fadeOut();
    });

  	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:5,
	    nav:true,
	    // items:1,
	    // autoWidth:true,
	    // animateIn: true,
	    center: true,
	    autoplay: true,
	    navText : ["<i class='fa fa-angle-left moi'></i>","<i class='fa fa-angle-right'></i>"],
	    responsive:{
	        0:{
	            items:1,
	            autoplay: true,
	            center: false,
	            // nav:false
	        },
	        320:{
	            items:1,
	            autoplay: true,
	            center: false,
	            margin: 15
	            // nav:false
	        },
	        480:{
	            items:1,
	            center: false,
	            margin: 10,
	            // center: false
	        },
    		768:{
    			items: 2,
	            margin: 5,
	            center: false
    		},
    		992:{
    			items:3,
    			// margin: 0
    		},
    		1200:{
    			items:3
    		}
	    }
	})
// });