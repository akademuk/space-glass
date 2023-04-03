function initSlider() {
    $('.whatDoingContainer').slick({
        arrows: false,
        dots:true,
        appendDots: $('.whatDoingContainerDots'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots:true,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots:true,
                },
              },
              {
                breakpoint: Infinity,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots:true,
                },
              },
          ],
    });
}

function destroySlider() {
    if ($('.whatDoingContainer').hasClass('slick-initialized')) {
        $('.whatDoingContainer').slick('unslick');
    }
}

$(document).ready(function() {
    if (window.matchMedia("(min-width: 767px)").matches) {
        destroySlider();
    }
    else {
        initSlider();
    }
});

$(window).resize(function() {
    if (window.matchMedia("(min-width: 767px)").matches) {
        destroySlider();
    }
    else {
        initSlider();
    }
});
