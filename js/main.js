$(function(){

    $('.featured__wrapper').slick({
      dots: true,
    speed: 900,
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
   

    $('.stories__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
       autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
            }
          },
          
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      

    });



      $('.header__button').on('click',function(){
        $('.nav__menu ul').slideToggle();
    });

   

});
