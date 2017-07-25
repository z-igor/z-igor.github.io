$( document ).ready()

$(".dropleft nav").hide();
$("single").hide();

$(".dropleft").on("click", function(){
	$(".dropleft nav").toggle();
	$(this).toggleClass("close");
	// if ($(".dropleft nav").hasClass("active")) {
	// 	$(".dropleft").css({
	// 		"background":"#f8c255 url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDE0LjI5OCA0MTQuMjk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MTQuMjk4IDQxNC4yOTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMy42NjMsNDEwLjYzN2MyLjQ0MSwyLjQ0LDUuNjQsMy42NjEsOC44MzksMy42NjFjMy4xOTksMCw2LjM5OC0xLjIyMSw4LjgzOS0zLjY2MWwxODUuODA5LTE4NS44MWwxODUuODEsMTg1LjgxMSAgIGMyLjQ0LDIuNDQsNS42NDEsMy42NjEsOC44NCwzLjY2MWMzLjE5OCwwLDYuMzk3LTEuMjIxLDguODM5LTMuNjYxYzQuODgxLTQuODgxLDQuODgxLTEyLjc5NiwwLTE3LjY3OWwtMTg1LjgxMS0xODUuODEgICBsMTg1LjgxMS0xODUuODFjNC44ODEtNC44ODIsNC44ODEtMTIuNzk2LDAtMTcuNjc4Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc5LDBsLTE4NS44MSwxODUuODFMMjEuMzQsMy42NjMgICBjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODIsNC44ODEtNC44ODIsMTIuNzk2LDAsMTcuNjc4bDE4NS44MSwxODUuODA5TDMuNjYzLDM5Mi45NTkgICBDLTEuMjE5LDM5Ny44NDEtMS4yMTksNDA1Ljc1NiwzLjY2Myw0MTAuNjM3eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=) no-repeat center / contain",
	// 		"background-size":"40%"
	// 	})
	// }
});

$(".preview").hide();

$(".view").on("click", function(){
	$(".unsingle").toggle();
	$(".preview").toggle();
});

$(".krest").on("click", function(){
	$(".preview").toggle();
	$(".unsingle").toggle();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    // items: 3,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

function initMap() {
	var myLatLng = {lat: 55.755826, lng: 37.6173};

	var styleArray = [
	{
		featureType: "all",
		stylers: [
			{ hue: "#7ACEC3" }
		]
	}
];

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('googleMap'), {
	center: myLatLng,
	scrollwheel: false,
	styles: styleArray,
	zoom: 10
	});

	// Create a marker and set its position.
	var marker = new google.maps.Marker({
	map: map,
	position: myLatLng,
	title: 'Москва'
	});
	}
	google.maps.event.addDomListener(window, 'load', initMap);

