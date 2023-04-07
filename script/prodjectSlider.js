$('.prodjectSlider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots:true,
    prevArrow: $('.prodjectSliderPrev'),
    nextArrow: $('.prodjectSliderNext'),
    appendDots: $('.prodjectSliderDots'),
    responsive: [
        {
          breakpoint:992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
            breakpoint:992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
      ],
});
      