var slickopts = {
    slidesToShow: 6,
    slidesToScroll: 1,
    rows: 2,
    prevArrow: $('.landingCardFotoSliderPrev'),
    nextArrow: $('.landingCardFotoSliderNext'),
    responsive: [
      { breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      { breakpoint: 776,
        settings: {
          slidesToShow: 2,
          rows: 1 
        }
      }]
  };
  
  $('.landingCardFotoSlider').slick(slickopts);