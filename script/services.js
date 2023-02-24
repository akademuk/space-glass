
$slickGreen = false;
function greenSlider(){    
    if($(window).width() < 576){
        if(!$slickGreen){
          $('.servicesSlider').slick({
            infinite: false,
            slidesToShow: 1.5,
            slidesToScroll: 1,
            arrows:false,
            });
            $slickGreen = true;
        }
    } else if($(window).width() > 577){
        if($slickGreen){
            $('.greenSlider').slick('unslick');
            $slickGreen = false;
        }
    }
};

$(document).ready(function(){
    greenSlider();
});
$(window).on('resize', function(){
     greenSlider();
});