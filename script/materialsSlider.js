$('.materialsSlider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots:true,
    appendDots: $('.materialsSliderDots'),
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
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
              slidesToShow: 1.5,
              slidesToScroll: 1,
              variableWidth: true,
            },
          },
      ],
});
      