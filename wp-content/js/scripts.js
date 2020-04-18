var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
var $=jQuery.noConflict();

$(document).ready(function () {
                $("#owl-example").owlCarousel({
                    items: 3,
                    responsive: {
                        320: {
                            items: 1
                        },
                        480: {
                            items: 1
                        },
                        640: {
                            items: 1
                        },
                        767: {
                            items: 2
                        },
                        979: {
                            items: 2
                        },
						1200: {
                            items: 3
                        }
                    },
                    margin: 52,
                    loop: true,
                    autoplay: false,
                    nav: true,
                    dots: false,
					lazyContent: false
                });
				$("#clients").owlCarousel({
                    items: 5,
                    responsive: {
                        320: {
                            items: 1
                        },
                        480: {
                            items: 2
                        },
                        640: {
                            items: 2
                        },
                        767: {
                            items: 3
                        },
                        979: {
                            items: 4
                        },
						1200: {
                            items: 5
                        }
                    },
                    margin: 30,
                    loop: true,
                    autoplay: false,
                    nav: true,
                    dots: true,
					lazyContent: false
                });
				 $("#owl-main").owlCarousel({
                     singleItem: true,
                     items: 1,
                     nav: false,
                     dots: false,                    
                     autoplay: true,
                     animateOut: 'fadeOut'
                 });
                $("#owl-prof").owlCarousel({
                    singleItem: true,
                    items: 1,
                    nav: false,
                    dots: false,                    
                    autoplay: true,
                    animateOut: 'fadeOut'
                });
				
				 $("#owl-reviews").owlCarousel({
                    singleItem: true,
                    items: 1,
                    nav: true,
                    dots: true,                    
                    autoplay: true,
					animateIn: 'fadeIn',
                    animateOut: 'fadeOut',
                    loop: true
                });
				
				$(".city-select").fancybox();
				
				$(".hide-show").click(function() {
					$(this).prev(".option-text").slideToggle().removeClass("show");
					if($(this).text()=="Показать") {
						$(this).text("Скрыть");
					} else {
						$(this).text("Показать");
					}
					
				});
				
				$(".order-online").fancybox({
				'type' : 'inline',
		'autoDimensions' : true,
		'easingIn' : 'easeOutBack',
		'easingOut' : 'easeInBack',
		'hideOnContentClick' : false
				});
				$(".commerz, .free-cons, .find-cost").fancybox({maxWidth: 940, 'type' : 'inline',
		'autoDimensions' : true,
		'easingIn' : 'easeOutBack',
		'easingOut' : 'easeInBack',
		'hideOnContentClick' : false,
		'scrolling': false,
		'autoScale' : true
		});
				$(".find-conc").fancybox(
				{
					maxWidth: 940, 
					scrolling: 'no',
					'type' : 'inline',
		'autoDimensions' : true,
		'easingIn' : 'easeOutBack',
		'easingOut' : 'easeInBack',
		'hideOnContentClick' : false
		
					
				});
				$("#conc-link").blur(function() {
					if($(this).val()!='') {
						$("#site-url").val($(this).val());
					}
				});
				$("input[type=tel]").mask("+7 (999) 999-99-99");
				
				var nav = $('.nav-container');
    //if($(window).width()>767) { 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
	//}
	
	$(".portfolio-img").hover(function() {
		//$(this).find("").fadeOut();
		$(this).find(".dark, .name-folio,.more-folio").fadeIn();
	},function() {
		//$(this).find(".dark, .name-folio").fadeIn();
		$(this).find(".dark, .name-folio,.more-folio").fadeOut();
	}
	);
	$(".item-person").hover(function() {
		$(this).find(".black-person").fadeIn();
	},function() {
		
		$(this).find(".black-person").fadeOut();
	}
	);
	
				
            });
			
			window.onload = function () {
				
				$(".city-select a").click(function() {
		document.cookie="citySelect="+$(this).html();
		
		alert(citySelect);
	});
				
     // var town=(ymaps.geolocation.city);
	 // var reg=(ymaps.geolocation.city);
	  // if(town=="Москва"  || reg=="Московская область")
	  // {
		  // $("#town").text("Москва");
		  // $("#region-phone, .phone-numb.fixed-phone span").text("+7 (499) 346-79-06");
		  
	  // }	  
	  // else if(town=="Тула" ||  reg=="Тульская область")
	  // {
		  // $("#town").text("Тула");
		  // $("#region-phone, .phone-numb.fixed-phone span").text("+7 (4872) 44-04-72");
	  // }
	  // else if(town=="Ростов"  || reg=="Ростовская область")
	  // {
		  // $("#town").text("Ростов");
		  // $("#region-phone, .phone-numb.fixed-phone span").text("+7 (863) 209-85-32");
	  // }
	  // else if(town=="Нижний Новгород"  || reg=="Нижегородская область")
	  // {
		  // $("#town").text("Нижний Новгород");
		  // $("#region-phone, .phone-numb.fixed-phone span").text("+7 (831) 288-93-85");
	  // }
	  // else if(town=="Белгород"  || reg=="Белгородская область")
	  // {
		  // $("#town").text("Белгород");
		  // $("#region-phone, .phone-numb.fixed-phone span").text("+7 (4722) 777-134");
	  // }
	  // else if(town=="Орел"  || reg=="Орловская область")
	  // {
		  // $("#town").text("Орел");
		  // $("#region-phone, .phone-numb.fixed-phone span").text("+7 (4862) 900-751");
	  // }
	  // else if(town=="Липецк"  || reg=="Липецкая область")
	  // {
		  // $("#town").text("Липецк");
		  // $("#region-phone, .phone-numb.fixed-phone span").text("+7 (4742) 200-493");
	  // }
	  
}