$(document).ready(function() {
    "use strict";

    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;


    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);

    //-------- Active Sticky Js ----------//
    $(".default-header").sticky({
        topSpacing: 0
    });


    if (document.getElementById("default-select")) {
        $('select').niceSelect();
    };

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    // Select all links with hashes
    $('.navbar-nav a[href*="#"]:not([href="#"]):not([href="#0"])').on('click', function(event) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    
        if (target.length) {
            event.preventDefault();
    
            $('html, body').animate({
                scrollTop: target.offset().top - 50
            }, 800, function() {
                target.focus();
                if (!target.is(":focus")) {
                    target.attr('tabindex', '-1').focus();
                }
            });
        }
    });
    


    $(document).ready(function() {

        $('html, body').hide();

        if (window.location.hash) {

            setTimeout(function() {

                $('html, body').scrollTop(0).show();

                $('html, body').animate({

                    scrollTop: $(window.location.hash).offset().top

                }, 1000)

            }, 0);

        } else {

            $('html, body').show();

        }

    });



    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });


    $('.filters ul li').click(function() {
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });


    if (document.getElementById("portfolio")) {
        var $grid = $(".grid").isotope({
            itemSelector: ".all",
            percentPosition: true,
            masonry: {
                columnWidth: ".all"
            }
        })
    };






});