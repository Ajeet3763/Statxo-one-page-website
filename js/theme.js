AOS.init();

//Page Loading
$(function () {
    function id(v) {
        return document.getElementById(v);
    }
    function loadbar() {
        var ovrl = id("overlay"),
            prog = id("progress"),
            stat = id("progstat"),
            img = document.images,
            c = 0;
        tot = img.length;

        function imgLoaded() {
            c += 1;
            var perc = ((100 / tot * c) << 0) + "%";
            prog.style.width = perc;
            stat.innerHTML = "Loading " + perc;
            if (c === tot)
                return doneLoading();
        }
        function doneLoading() {
            ovrl.style.opacity = 0;
            setTimeout(function () {
                ovrl.style.display = "none";
            }, 1200);
        }
        for (var i = 0; i < tot; i++) {
            var tImg = new Image();
            tImg.onload = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src = img[i].src;
        }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());


var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('.header').removeClass('fixed');
    }
    else {
        $('.header').addClass('fixed');
    }
    lastScrollTop = st;

    if (st == 0) {
        $('.header').removeClass('fixed');
    }
});

$(document).ready(function () {
    $('#mainNavbar a.onPageLink').click(function (e) {
        var targetHref = $(this).attr('href');
        targetHref = '#' + targetHref.substr(targetHref.indexOf("#") + 1);


        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - 90
        }, 1000);

        e.preventDefault();
    });
});

$('.reasonBlock .showContent').on('click', function () {
    $('.reasonBlockList .reasonBlock').removeClass('show');
    $(this).parent().addClass('show');
});
$('.reasonBlock .hideContent').on('click', function () {
    $(this).parent().removeClass('show');
});

$('.pullUp').on('click', function (e) {
    var chessBlock = $('.section-chessBlocks').offset();
    $('html, body').animate({
        scrollTop: chessBlock.top
    }, 1000);
});

$("#checkBlockCarousel").lightSlider({
    item: 1,
    slideMargin: 0,
    controls: false,
    pager: false,
    speed: 1500, //ms'
    auto: true,
    loop: true,
    slideEndAnimation: true,
    pause: 3000
});
$("#brandsList").lightSlider({
    item: 5,
    slideMargin: 20,
    controls: false,
    pager: false,
    speed: 1500, //ms'
    auto: true,
    loop: true,
    slideEndAnimation: true,
    pause: 3000,
    responsive: [
        {
            breakpoint: 1040,
            settings: { item: 4 }
        },
        {
            breakpoint: 990,
            settings: { item: 3 }
        },
        {
            breakpoint: 767,
            settings: { item: 2 }
        }
    ]
});

$("#topLeadersList").lightSlider({
    item: 4,
    slideMargin: 20,
    controls: false,
    pager: false,
    speed: 1500, //ms'
    auto: true,
    loop: true,
    slideEndAnimation: true,
    pause: 3000,
    responsive: [
        {
            breakpoint: 1040,
            settings: { item: 3 }
        },
        {
            breakpoint: 990,
            settings: { item: 2 }
        },
        {
            breakpoint: 767,
            settings: { item: 1 }
        }
    ]
});



