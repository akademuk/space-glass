$('.slider-for').slick({
    arrows: false,
    asNavFor: '.slider-nav,.slider-x',
    variableWidth: false,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  $('.slider-x').slick({
    arrows: false,
    asNavFor: '.slider-for,.slider-nav',
    variableWidth: false,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  $('.slider-nav').slick({
    arrows: true,
    dots:true,
    asNavFor: '.slider-for,.slider-x',
    slidesToShow: 1,
    variableWidth: false,
    adaptiveHeight: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.bannerPrev'),
    nextArrow: $('.bannerNext'),
    appendDots: $('.bannerDots'),
    customPaging: function (slider,index) { 
        return '0' + (index + 1); 
        },
  });