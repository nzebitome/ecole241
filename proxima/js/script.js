(function ($) {
    "use strict";
    
    $(document).ready(function() {

        /*=================================*/
            /* mobilemenu-trigger */
        /*=================================*/

        var windowWidth = $(window).width();
 
        if (windowWidth <= 767) {
            $('#main-navigation li.menu-item-has-children').prepend('<span class="fa fa-angle-down"></span>');
            $('#main-navigation li.menu-item-has-children ul').hide();
            $('#main-navigation li.menu-item-has-children span.fa-angle-down').on('click', function(){
                $(this).siblings('#main-navigation li.menu-item-has-children ul').slideToggle(500);
            });
        };


        /*====================================
        // menu-fix
        ======================================*/

        jQuery(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.menu').addClass("affix");
            } else {
                $('.menu').removeClass("affix");
            }
        });


        /*====================================
        // main-slider
        ======================================*/
          

        var slider_pulse = $('.main-slider');
            slider_pulse.owlCarousel({
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                loop: true,
                nav: true,
                autoplay: true,
                autoplayTimeout: 7000,
                mouseDrag: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
            
            // Owl Carousel Animation
            slider_pulse.on('translate.owl.carousel', function () {
                $('.carousel-caption h2, .carousel-caption p').removeClass('animated fadeInUp').css('opacity', '0');
                $('.carousel-caption a').removeClass('animated fadeInDown').css('opacity', '0');
            });
            slider_pulse.on('translated.owl.carousel', function () {
                $('.carousel-caption h2, .carousel-caption p').addClass('animated fadeInUp').css('opacity', '1');
                $('.carousel-caption a').addClass('animated fadeInDown').css('opacity', '1');
            });
         
        /*====================================
        // testimonial-carousel
        ======================================*/


        $('.testimonial-carousel.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                },
                1170:{
                    items:3
                }
            }
        });

        /*====================================
        // news-carousel
        ======================================*/


        $('.news-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            navText : [
              "<i class='fa fa-angle-left'></i>",
              "<i class='fa fa-angle-right'></i>"
              ],
            responsive: {
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                768:{
                    items:2
                },
            }
        });

        /*====================================
        // team carousel
        ======================================*/

        $('.team-carousel').owlCarousel({
            items:5,
            loop:true,
            margin:20,
            dots:false,
            nav: true,
            responsiveClass:true,
            navText : [
              "<i class='fa fa-angle-left'></i>",
              "<i class='fa fa-angle-right'></i>"
              ],
            responsive:{
                0:{
                    items:1,
                },
                480:{
                    items:2,
                },
                768:{
                    items:3,
                },
                992:{
                    items:4,
                }

            },
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true
        });

        /*====================================
        // happy clients
        ======================================*/

        $('.happy-clients').owlCarousel({
            items:5,
            loop:true,
            margin:20,
            dots:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                },
                480:{
                    items:3,
                },
                768:{
                    items:5,
                },

            },
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true
        });

        /*====================================
        // counter
        ======================================*/

          $('.counter').counterUp({
           delay: 10,
           time: 1000
          });

        /*====================================
        // video popup
        ======================================*/

        $('.video-popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });

        /*====================================
        // MixItUp JS
        ======================================*/  
       
        $('#project-wrapper').mixItUp();

        /*====================================
        // MagnificPopup 
        ======================================*/   
        $('.single-project-item a.project-priview').magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }          
        });



        /*=================================*/
            /* search popup */
        /*=================================*/

        $('.header-search .top-search').on('click', function() { 
            $('.header-search .search-popup').toggleClass('active'); 
        }); 

        $('.ak-search .close').on('click', function() { 
            $('.search-icon .ak-search').removeClass('active'); 
        });

        $('.search-overlay').on('click', function() { 
            $('.header-search .search-popup').removeClass('active'); 
        });


        
        
        /*=================================*/
            /* toggle-nav */
        /*=================================*/
        
        $('.header-nav-search .toggle-button').on('click', function() {
            $('body').addClass('menu-active');
        });
        $('.close-icon').on('click', function() {
            $('body').removeClass('menu-active');
        });

        

        /*====================================
        // scroll top
        ======================================*/

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scroll-top').on('click',function() {
            $('html, body').animate({ scrollTop: 0 }, 900);
            return false;
        });



        /*=================================*/
        /* WOW */
        /*=================================*/
      
         new WOW().init();

    });
})(jQuery);

