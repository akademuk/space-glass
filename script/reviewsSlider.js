$('.reviewsSlider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    prevArrow: $('.reviewsPrev'),
    nextArrow: $('.reviewsNext'),
    appendDots: $('.reviewsDots'),
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1.5,
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
      