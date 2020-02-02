$(document).ready(function(){
    $("#about-slide").owlCarousel({
        items: 3,
        loop:true,
        nav:true,
        navText:true,
        margin:35,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            900: {
                items:2
            },
            1200: {
                items:3
            },
            1400: {
                items:3

            }

        }
    });
});
$(document).ready(function(){
    $("#rev-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        margin:35,
        responsive: {
            0: {
                items:1,
                dots: false,
            },
            600: {
                items:1,
            },
            900: {
                items:1
            },
            1200: {
                items:1
            },
            1400: {
                items:1

            }

        }
    });
});
$(document).ready(function(){
    $("#cop-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText:true,
        stagePadding:100,
        responsive: {
            0: {
                items:1,
                dots: false,
                stagePadding: 0
            },
            600: {
                items:1,
                stagePadding: 0
            },
            900: {
                items:1,
                stagePadding: 0
            },
            1200: {
                items:1
            },
            1400: {
                items:1

            }

        }
    });
});
$(document).ready(function(){
    $(".partners-box").owlCarousel({
        items: 5,
        loop:true,
        nav:false,
        navText:true,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:2
            },
            900: {
                items:3
            },
            1200: {
                items:5
            },
            1400: {
                items:5

            }

        }
    });
});
$(document).ready(function(){
    $(".news-wrapper").owlCarousel({
        items: 3,
        loop:true,
        nav:false,
        margin:30,
        navText:true,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            900: {
                items:2
            },
            1200: {
                items:3
            },
            1400: {
                items:3

            }

        }
    });
});
$('.mobile-btn').on(  'click',function (e) {
    e.preventDefault();
    $('.mobile-btn').toggleClass('active')
    $('.nav-menu').toggleClass('active')
})
$('.nav-menu  li').on('click',function () {
    $('.mobile-btn').removeClass('active')
    $('.nav-menu').removeClass('active')
});

window.onscroll = function showHeader() {
    let header =    document.querySelector(".header");
    if (window.pageYOffset > 200) {
        header.classList.add("header-fixed")
    }
    else  {
        header.classList.remove("header-fixed")
    }
}
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});