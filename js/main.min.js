	$(document).ready(function() {

	    $('.menu-mobile a').on('click', function(e) {
	        if ($(this).parent().hasClass('item-has-children')) {
	            e.preventDefault();
	            $(this).toggleClass('-active');
	            $(this).next().slideToggle();

	        }
	    });

	    /* header fixed top */
	    var f = true;
	    $(window).on('scroll', function() {

	        var scrTop = $(window).scrollTop();
	        var headerHeight = $('.header').height();

	        if (scrTop > headerHeight && f) {
	            f = false;

	            $('.header').addClass('header_fixed');
	            $('.section-1').css({
	                marginTop: headerHeight
	            })
	        } else if (scrTop <= headerHeight && !f) {
	            f = true;
	            $('.header').removeClass('header_fixed');
	            $('.section-1').removeAttr('style');
	        }

	    });


	    /* mobile check */
	    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	    // $('html, body').css('min-width', '1320px').addClass('mobile');
	    // $('html').css('width', window.innerWidth + 'px');
	    // }

	    // focusInput
	    var focusInput = $('.search').click(function() {
	        $(this).toggleClass('focus');
	    });
	    // remove-focusInput
	    $(document).mouseup(function(e) {
	        if ($('.search').hasClass('focus')) {
	            $('.search').removeClass('focus');
	        }
	    });

	    // hamburger toggle

	    $('.hamburger').on('click', function(e) {
	        e.preventDefault();
	        $(this).toggleClass('is-active');
	        $('.wrap-menu-m').toggleClass('-active');
	    });

	    // Forms

	    $(".send").on('click', function(e) {
	        e.preventDefault();

	        var form = $(this).parents("form");

	        form.find("input").each(function() {

	            var inp = $(this);
	            var req = $(this).data("req");
	            if (inp.attr('type') === 'email', 'text') {
	                var em = inp.val();

	                if (!validateEmail(em)) {
	                    inp.addClass("error");
	                } else {
	                    inp.removeClass("error");
	                }
	            } else if (req === 1 && !inp.val().length) {
	                inp.addClass("error");
	            } else {
	                inp.removeClass("error");
	            }

	        });

	        if (form.find(".error").length) {
	            return false;
	        } else {
	            $.ajax({
	                type: "POST",
	                url: form.attr('action'),
	                data: form.serialize(),
	                success: function(response) {

	                    $(':input')
	                        .not(':button, :submit, :reset, :hidden')
	                        .val('')
	                        .removeAttr('checked')
	                        .removeAttr('selected');

	                    $.fancybox.close();
	                    var message = $('.modal');
	                    $.fancybox.open(message);

	                }
	            });
	        }
	    });






	    // /*SCROLL TO*/
	    var headerH = $('.header ').height();
	    $('.js-scroll a[href^="#"]').on('click', function(event) {
	        var target = $($(this).attr('href'));
	        if (target.length) {
	            event.preventDefault();
	            event.stopImmediatePropagation();
	            $('html, body').animate({
	                scrollTop: target.offset().top - headerH
	            }, 600, function() {
	                if ($('.wrap-menu-m').hasClass('-active')) {
	                    $('.wrap-menu-m').removeClass('-active');
	                    $('.hamburger').removeClass('is-active');
	                }
	            });
	        }

	    });




	    // Scroll to and add class active


	    $(window).scroll(function() {
	        var scrollDistance = $(window).scrollTop();

	        $('.js-section-scroll').each(function(i) {
	            var distance = $(this).offset().top;
	            var windowHeight = $(window).height();
	            var elHeight = $(this).outerHeight();
	            if (distance - windowHeight <= scrollDistance && scrollDistance + elHeight < distance + elHeight) {

	                var sectionID = $(this).attr('id');
	                // console.log(sectionID);
	                $('#nav-menu-one li a').each(function() {
	                    var target = $(this).attr("href");
	                    if (target == '#' + sectionID) {
	                        $(this).parent("li").addClass('active-li');
	                    } else {
	                        $(this).parent("li").removeClass('active-li');
	                    }
	                });

	                // mobile-nav-menu-add-class-active
	                $('#nav-menu-two li a').each(function() {
	                    var target = $(this).attr("href");
	                    if (target == '#' + sectionID) {
	                        $(this).parent("li").addClass('active-menu-li');
	                    } else {
	                        $(this).parent("li").removeClass('active-menu-li');
	                    }
	                })
	            }
	        });
	    });



	    // up-button

	    $('.up-button').on('click', function(e) {
	        e.preventDefault();
	        $('html, body').animate({
	            scrollTop: 0
	        }, 700);

	    });

	    if ($('.up-button').length) {
	        window.onscroll = function() {
	            var topToDocument = window.pageYOffset || document.documentElement.scrollTop;
	            if (topToDocument > 800) {
	                $('.up-button').addClass('up-button_show');
	            } else {
	                $('.up-button').removeClass('up-button_show');
	            }
	        }
	    }





	    /* SLICK_SLIDER */
	    if ($('.section-1').length) {
	        $('.section-1').slick({
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            dots: true,
	            // centerMode: false,
	            prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;"></button>',
	            nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"></button>',
	            centerPadding: '30px',
	            infinite: true,
	            speed: 700,
	            fade: true,
	            cssEase: 'linear',
	            autoplay: true,
	            autoplaySpeed: 5000,
	            responsive: [{
	                    breakpoint: 992,
	                    settings: {
	                        // dots: false,
	                        dots: true,
	                        slidesToShow: 1,
	                        slidesToScroll: 1
	                    }
	                },
	                {
	                    breakpoint: 668,
	                    settings: {
	                        // dots: false,
	                        dots: true,
	                        slidesToShow: 1,
	                        slidesToScroll: 1,
	                        arrows: false,

	                    }
	                },
	                {
	                    breakpoint: 470,
	                    settings: {
	                        // dots: false,
	                        dots: true,
	                        slidesToShow: 1,
	                        slidesToScroll: 1,
	                        arrows: false,
	                    }
	                }
	            ]
	        });
	    };


	    /* SLICK_SLIDER */
	    if ($('.section-products-slider').length) {
	        $('.section-products-slider').slick({
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            dots: true,
	            arrows: false,

	            centerPadding: '30px',
	            speed: 700,
	            autoplay: true,
	            autoplaySpeed: 5000,
	            responsive: [{
	                    breakpoint: 992,
	                    settings: {
	                        dots: true,
	                        slidesToShow: 1,
	                        slidesToScroll: 1
	                    }
	                },
	                {
	                    breakpoint: 668,
	                    settings: {
	                        dots: true,
	                        slidesToShow: 1,
	                        slidesToScroll: 1
	                    }
	                }
	            ]
	        });
	    };





	    /*MASK JQUERY*/
	    $('input[type=tel]').mask("+7 (999) 999-99-99");


	    /*HIDE PLACEHOLDER*/
	    $('input,textarea').focus(function() {
	        $(this).data('placeholder', $(this).attr('placeholder'))
	            .attr('placeholder', '');
	    }).blur(function() {
	        $(this).attr('placeholder', $(this).data('placeholder'));
	    });



	    function validateEmail(email) {
	        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	        return re.test(email);
	    }


	});