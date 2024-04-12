$(document).foundation();

$(document).ready(function() {

    var sts = window.pageYOffset || document.documentElement.scrollTop;
    stss = sts - 2
    console.log(sts)
    window.scrollTo({
        top: stss,
        behavior: 'smooth'
    });

    $('.entry p iframe').parent().addClass('has-video')


    document.addEventListener('wpcf7mailsent', function(event) {
        if ('2473' == event.detail.contactFormId) {
            // document.getElementById('invite-form').style.display = 'none';
            document.getElementById('formSuccess').style.display = 'block';
        }
        if ('2439' == event.detail.contactFormId) {
            // document.getElementById('invite-form').style.display = 'none';
            document.getElementById('formSuccess').style.display = 'block';
        }
    }, false);

    // main-speakers show more

    $('.speakers-main-list ul li:lt(6)').show();

    speakerItems = $(".speakers-main-list ul li").length;
    if (speakerItems < 7) {
        $('.js-more-speakers-main').parent().hide();
    } else {
        $('.js-more-speakers-main').parent().show();
    }

    $('.js-more-speakers-main').click(function() {
        speakersShown = $('.speakers-main-list ul li:visible').length + 6;
        if (speakersShown < speakerItems) {
            $('.speakers-main-list ul li:lt(' + speakersShown + ')').show();
        } else {
            $('.speakers-main-list ul li:lt(' + speakerItems + ')').show();
            $('.js-more-speakers-main').parent().hide();
        }
    });

    // exhibition show more

    $('.exhibition-list ul li:lt(6)').show();

    exhibitionItems = $(".exhibition-list ul li").length;
    if (exhibitionItems < 7) {
        $('.js-more-exhibition').parent().hide();
    } else {
        $('.js-more-exhibition').parent().show();
    }

    $('.js-more-exhibition').click(function() {
        exhibitionShown = $('.exhibition-list ul li:visible').length + 6;
        if (exhibitionShown < exhibitionItems) {
            $('.exhibition-list ul li:lt(' + exhibitionShown + ')').show();
        } else {
            $('.exhibition-list ul li:lt(' + exhibitionItems + ')').show();
            $('.js-more-exhibition').parent().hide();
        }
    });

    setTimeout(function() {
        $('.intro-anim-content').addClass('close')
        $('.intro-anim-image').addClass('close')
    }, 500);

    $('.copy-link a').on('click', function(ee) {
        ee.preventDefault();
        $('.copy-link span').addClass('close');
        $('.copy-link input').select();
        document.execCommand("copy");
        setTimeout(function() {
            $('.copy-link span').removeClass('close');
        }, 1000);
    })

    $('.career-about-features ul li').mouseenter(function() {
        $(this).find('.caf-text').slideDown()
    })
    $('.career-about-features ul li').mouseleave(function() {
        $('.caf-text').slideUp()
    })

    // trigger click

    $(".hamburger").click(function() {
        $(".hamburger").toggleClass('is-active')
        $('.mob-nav-hold').toggleClass('close');
    });

    // Entry table scroll wrap
    $(".entry table").wrap("<div class='table-scroll'></div>");

    // #ScrollToTop

    // $("a[href='#top']").click(function() {
    //   $("html, body").animate({ scrollTop: 0 }, "slow");
    //   return false;
    // });


    $('.why-acc ul li').on('click', function() {
        whyNr = $(this).attr('data-why')
        if ($(this).hasClass('active')) {

        } else {
            $('.why-acc ul li').removeClass('active')
            $('.why-image img').removeClass('active')
            $('.why-acc-content').slideUp()
            $(this).addClass('active')
            $(this).find('.why-acc-content').slideDown()
            $('.why-image img[data-why=' + whyNr + ']').addClass('active')
        }
    })





    var lastId,
        topMenu = $(".sticky-nav"),
        topMenuHeight = topMenu.outerHeight() + 16,
        menuItems = topMenu.find("a"),
        // menuImg = $('.about-it-content-hold'),
        scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    menuItems.click(function(e) {
        var href = $(this).attr("href"),
            // offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
            offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 700);
        e.preventDefault();
    });

    $(window).scroll(function() {
        wHeight = $(window).height()
        var fromTop = $(this).scrollTop() + topMenuHeight + wHeight / 2;

        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if ($('.home-about-section').length > 0) {
            if (lastId !== id) {
                lastId = id;

                menuItems
                    .parent().removeClass("active")
                    .end().filter("[href='#" + id + "']").parent().addClass("active");
                $('.sc-image').removeClass("active");
                $('.' + id).addClass("active");
            }
        }

        var st = $(window).scrollTop();
        if ($('.home-about-section').length > 0) {
            var scT = $('.home-about-section').offset().top
            var scH = $('.home-about-section').outerHeight();
            var scB = scT + scH - wHeight

            if (st > scT) {
                $('.home-about-section').addClass('add-grad')
            } else {
                $('.home-about-section').removeClass('add-grad')
            }

            if (st > scB) {
                $('.home-about-section').addClass('scroll-grad')
            } else {
                $('.home-about-section').removeClass('scroll-grad')
            }

        }


        // var stt = $(window).scrollTop() + 300;
        // var sttt = $(window).scrollTop() ;
        // $('.take-control-item').each(function() {
        //     tciNr = $(this).attr('data-tci')
        //     tciTop = $(this).offset().top


        //     // console.log(tciTop)

        //     if (stt > tciTop) {
        //         $('.tci-image-'+tciNr).addClass('active')
        //     } else {
        //         $('.tci-image-'+tciNr).removeClass('active')
        //     }
        // })

        // if ($('.take-control-section').length > 0) {
        //     nextSection = $('.take-control-section').next();
        //     nextSectionTop = nextSection.offset().top
        //     tciH = $('.tk-image img:first-child').outerHeight();
        //     console.log(nextSectionTop)
        //     console.log(stt)
        //     console.log(tciH)
        //     if (sttt > nextSectionTop - tciH - 100) {
        //         $('.tk-image').addClass('reached')
        //     } else {
        //         $('.tk-image').removeClass('reached')
        //     }
        // }
    });

    // #href scroll //

    $('a.scroll-to[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 700, 'swing', function() {
            window.location.hash = target;
        });
    });

    $('a.scrl-to[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 700, 'swing', function() {});
    });

    var lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > 1) {
            $('header').addClass('scrolled')
        } else {
            $('header').removeClass('scrolled')
        }

        if (st > lastScrollTop) {
            $('header').addClass('scrolling-down')
            $('header').removeClass('scrolling-up')
            // downscroll code
        } else {
            $('header').removeClass('scrolling-down')
            $('header').addClass('scrolling-up')
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);


    // animations
    var $animation_elements = $('.animation-element');
    var $window = $(window);
    $vHeight = $(window).height();

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top + $vHeight / 8;
            var element_bottom_position = (element_top_position + element_height);
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                setTimeout(function() {
                    $element.addClass('in-view');
                }, 300);
            }
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');





    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 5; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        // autoplay: true,
        dots: false,
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        autoHeight: true,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            margin: 40,
            nav: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100,
            autoWidth: true,
            // responsive:{
            //     0:{
            //         items: 3
            //     },
            //     640:{
            //         items:slidesPerPage
            //     }
            // },
            navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count)  {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });


    teamCarousel = $(".owl-carousel.team-carousel");
    teamCarousel.owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: false,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        responsive: {
            0: {
                margin: 24,
                items: 1,
            },
            540: {
                margin: 30,
                items: 2,
            },
            768: {
                margin: 30,
                items: 3,
            },
            1201: {
                margin: 40,
                items: 4,
            }
        }
    });

    logos1Carousel = $(".owl-carousel.logos1-carousel");
    logos1Carousel.owlCarousel({
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 3000,
        slideTransition: 'linear',
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 2,
            },
            540: {
                items: 3,
            },
            768: {
                items: 4,
            },
            // 1024:{
            //     items:4,
            // },
            1201: {
                items: 5,
            },
            1441: {
                items: 6,
            },
            1601: {
                items: 7,
            }
        }
    });

    logos2Carousel = $(".owl-carousel.logos2-carousel");
    logos2Carousel.owlCarousel({
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 3000,
        slideTransition: 'linear',
        loop: true,
        rtl: true,
        margin: 20,
        responsive: {
            0: {
                items: 2,
            },
            540: {
                items: 3,
            },
            768: {
                items: 4,
            },
            // 1024:{
            //     items:4,
            // },
            1201: {
                items: 5,
            },
            1441: {
                items: 6,
            },
            1601: {
                items: 7,
            }
        }
    });

    clientsCarousel = $(".owl-carousel.clients-carousel");
    clientsCarousel.owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 5,
        items: 1,
        autoHeight: true,
        navText: ['<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.84199 16.5L0 8.5L7.84199 0.5L9 1.68135L2.29571 8.5L9 15.3187L7.84199 16.5Z" fill="black"/></svg>', '<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.15801 16.5L0 15.3187L6.68397 8.5L0 1.68135L1.15801 0.5L9 8.5L1.15801 16.5Z" fill="black"/></svg>'],
    });

    testimonialsCarousel = $(".owl-carousel.testimonials-carousel");
    testimonialsCarousel.owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 5,
        items: 1,
        autoHeight: true,
        navText: ['<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.84199 16.5L0 8.5L7.84199 0.5L9 1.68135L2.29571 8.5L9 15.3187L7.84199 16.5Z" fill="black"/></svg>', '<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.15801 16.5L0 15.3187L6.68397 8.5L0 1.68135L1.15801 0.5L9 8.5L1.15801 16.5Z" fill="black"/></svg>'],
    });


    galleryCarousel = $(".owl-carousel.gallery-carousel");
    galleryCarousel.owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 0,
        items: 1,
        navText: ['<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.84199 16.5L0 8.5L7.84199 0.5L9 1.68135L2.29571 8.5L9 15.3187L7.84199 16.5Z" fill="black"/></svg>', '<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.15801 16.5L0 15.3187L6.68397 8.5L0 1.68135L1.15801 0.5L9 8.5L1.15801 16.5Z" fill="black"/></svg>'],
    });

    // news filter

    if ($('.join-container').length > 0) {

        var $containerJoin = $('.join-container').isotope({
            itemSelector: '.join-item',
            layoutMode: 'fitRows'
        });

        // filter functions
        var filterFns = {};

        // bind filter button click
        $('#filters-join').on('click', 'a', function() {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $containerJoin.isotope({
                filter: filterValue
            });
        });


        // change is-checked class on buttons
        $('.button-group-join').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'a', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });



    }


    // agenda filter

    if ($('.agenda-fitler').length > 0) {

        // init Isotope
        var $container = $('.agenda-list').isotope({
            itemSelector: '.agenda-list-item',
            layoutMode: 'fitRows',
            getSortData: {
                time: function(itemElem) {
                    var time = $(itemElem).find('.agenda-time').text();
                    return parseFloat(time.replace(/[\(\)]/g, ''));
                }
            },
            sortBy: 'time'
        });

        // filter functions
        var filterFns = {};

        // bind filter button click
        $('.agenda-fitler').on('click', 'a', function() {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $container.isotope({
                filter: filterValue
            });
        });

        // bind sort button click
        // $('#sorts').on('click', 'button', function() {
        //   var sortByValue = $(this).attr('data-sort-by');
        //   $container.isotope({
        //     sortBy: sortByValue
        //   });
        // });

        // change is-checked class on buttons
        $('.agenda-fitler').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'a', function() {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        });

        //****************************
        // Isotope Load more button
        //****************************
        var initShow = 6; //number of items loaded on init & onclick load more button
        var counter = initShow; //counter for load more button
        var iso = $container.data('isotope'); // get Isotope instance

        loadMore(initShow); //execute function onload

        function loadMore(toShow) {
            $container.find(".hidden").removeClass("hidden");

            var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
                return item.element;
            });
            $(hiddenElems).addClass('hidden');
            $container.isotope('layout');

            //when no more to load, hide show more button
            if (hiddenElems.length == 0) {
                jQuery("#load-more-agenda").parent().hide();
            } else {
                jQuery("#load-more-agenda").parent().show();
            };

        }

        //append load more button
        $container.after('<div class="small-12 columns nopad text-center agenda-list-more"><button class="link-down rev" id="load-more-agenda"><span class="lang-en">Load more</span><span class="lang-lt">Rodyti daugiau</span></button></div>');

        //when load more button clicked
        $("#load-more-agenda").click(function() {
            if ($('.agenda-fitler').data('clicked')) {
                //when filter button clicked, set initial value for counter
                counter = initShow;
                $('.agenda-fitler').data('clicked', false);
            } else {
                counter = counter;
            };

            counter = counter + initShow;

            loadMore(counter);
        });

        //when filter button clicked
        $(".agenda-fitler").click(function() {
            $(this).data('clicked', true);

            loadMore(initShow);
        });






    }

    $('.speakers-list ul li').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            $('.speaker-content-mob').slideUp()
        } else {
            $('.speakers-list ul li').removeClass('active')
            $('.speaker-content-mob').slideUp()
            $(this).addClass('active')
            $(this).find('.speaker-content-mob').slideDown()
        }
    })

    // sw = window.innerWidth;

    // if (sw < 640) {
    //     $('.agenda-list-item').on('click', function() {
    //         if ($(this).hasClass('active')) {

    //         } else {
    //             $('.agenda-list-item').removeClass('active')
    //             $('.agenda-text').slideUp()
    //             $(this).addClass('active')
    //             $(this).find('.agenda-text').slideDown()
    //         }
    //     })
    // }

    // $(window).on('resize', function(){
    // });


});