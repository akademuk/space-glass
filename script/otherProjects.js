$('.otherProjectsSlider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    arrows: false,
    appendDots: $('.otherProjectsSliderDots'),
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
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
          breakpoint: 767,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
          },
        },
        {
            breakpoint: 576,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
            },
          },
      ],
});
      