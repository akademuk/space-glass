$('.blogSlider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    prevArrow: $('.blogPrev'),
    nextArrow: $('.blogNext'),
    appendDots: $('.blogDots'),
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
          },
        },
      ],
});
      