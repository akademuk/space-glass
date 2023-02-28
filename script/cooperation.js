$('.cooperationSlider').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots:true,
    arrows: false,
    appendDots: $('.cooperationSliderDots'),
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
      ],
});
      