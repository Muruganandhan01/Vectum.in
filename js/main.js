;(function () {

    'use strict';

    var carousels = function() {
        $(".owl-carousel1").owlCarousel(
            {
                loop:true,
                center: true,
                margin:0,
                responsiveClass:true,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:false
                    }
                }
            }
        );

        $(".owl-carousel2").owlCarousel(
            {
                loop:true,
                center: false,
                margin:0,
                responsiveClass:true,
                nav:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:2,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:true
                    }
                }
            }
        );
    }

var carousels2 = function() {
         $(".owl-carousel3").owlCarousel({
             loop:true,
			 center:true,
			 margin:10,
			 items: 1,
			 singleItem: true,
			 responsiveClass:true,
			 nav:false,
			 // autoplay: true,
			 // dots:true,
		// autoplayTimeout: 1000,
		// smartSpeed: 250,
		// autoplayHoverPause: true,
		lazyLoad:true,
		//navText: ['<i class="fa fa-angle-left" style="width:2rem" aria-hidden="true"></i>', '<i class="fa fa-angle-right" style="width:2rem" aria-hidden="true"></i>']
         });
}
    // svg responsive in mobile mode
    var checkPosition = function() {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");

        }
    };

    (function($) {
        carousels();
		carousels2();
		$('.gtco-testimonials .owl-dots button')[1].click()
        checkPosition();
    })(jQuery);


}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}


function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "one891104@gmail.com",
        Password: "TESTing123",
        //To: 'Angrown@gmail.com',
        To: 'pandi.furious04@gmail.com',
        From: "one891104@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
    }