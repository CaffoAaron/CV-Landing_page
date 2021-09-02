/*=========================================

Template Name: Diesel - Responsive vCard / CV Resume / Portfolio Template
Author: Theme_Choices
Version: 1.0
Design and Developed by: Theme_Choices

=========================================*/

(function($) {
    "use strict";

    var $window = $(window),
            $body = $('body');
		
     /*=================================
            ANIMATED SCROLLING 
     ==================================*/

		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top -60
			}, 1000);
			e.preventDefault();
		});
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

     /*=================================
            NAVBAR
     ==================================*/

		$('.header').sticky({
			topSpacing: 0
		});
		$('body').scrollspy({
			target: '.navbar-inverse',
			offset: 70
		});
		
	/*=================================
            NAVBAR MENU SCROLL IN MOBILE
     ==================================*/
	$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-right").height() + "px" });

     /*=================================
            Bootstrap menu fix
     ==================================*/
        $(".navbar-toggle").on("click", function(){
            $body.addClass("mobile-menu-activated");
        });
        $("ul.nav.navbar-nav li a").on("click", function(){
            $(".navbar-collapse").removeClass("in");  
        });

    /*=================================
              PREALOADER JS
       ==================================*/
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#st-preloader').delay(350).fadeOut('slow');
	    });
	
	 /*=================================
        CAROUSEL TESTIMONIAL
       ==================================*/
		$('.carousel').carousel({
	   interval: 2000
	  });
	
    /*======================================
        MagnificPopup
    ========================================*/
    var magnifPopup = function() {
        $('.image-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
            }
        });
    };
    // Call the functions 
    magnifPopup();

    /*=========================================
                jQuery mixItUp
    =======================================*/
    
    $('.portfolio-wrapper').mixItUp();

    /*==========================
            Intro typer
    ============================*/
        var win = $(window),
        foo = $('#typer');
        foo.typer([' BACKEND',' FRONTEND', ' MOVIL' ]);
            win.resize(function(){
              var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));
              foo.css({
              fontSize: fontSize * 0.12 + 'px'
            });
        }).resize();
		
		    /* Skills */
    $('.skills .skills-item').each(function() {
        var progress = $(this).data('progress');
        $(this).css('width', progress + '%');
    });
		
    /*==========================
            Back To Top
    ============================*/
	$(".back-to-top").hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 400) {
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});
		$('.back-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
	/*==========================
           Header Slider
    ============================*/
		$('.vegas-slider').vegas({
		delay: 5000,
		slides: [
			{src : 'images/slides/slides-1.jpg'},
			{src : 'images/slides/slides-2.jpg'},
			{src : 'images/slides/slides-3.jpg'},
			{src : 'images/slides/slides-4.jpg'}
		],
		animation: 'kenburns'
	});
		
    /*=============================
            JQUERY FORM VALIDATION
    ==============================*/
		$("form").validate();
	
    /*=============================
            WOW js
    ==============================*/
        new WOW({ mobile: false }).init();


})(jQuery);
