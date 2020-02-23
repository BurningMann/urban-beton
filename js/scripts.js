window.onload= function(){
    $('.main-slider_block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slick_prev_custom"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" style="overflow: hidden; position: relative; fill: white;"><path stroke="none" d="M140.206,1140.93L152,1151.86l-2.133,2.13L136,1141.13l0.137-.13-0.131-.14L149.869,1127l2.132,2.13Z" transform="translate(-136 -1127)"></path></svg></div>',
        nextArrow: '<div class="slick_next_custom"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" style="overflow: hidden; position: relative; fill: white;"><path stroke="none" d="M2815,1141.13l-13.86,12.86-2.13-2.13,11.78-10.93-11.79-11.8,2.13-2.13,13.86,13.86-0.13.14Z" transform="translate(-2799 -1127)"></path></svg></div>',
        asNavFor: '.main-slider_list'
      });
      $('.main-slider_list').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        verticalSwiping: true,
        asNavFor: '.main-slider_block',
/*         centerMode: true, */
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              vertical: false,
              slidesToShow: 4,
              focusOnSelect: false,
            }
          },
        ]
      });

      
      $('.categoty_slider_block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slick_prev_custom"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" style="overflow: hidden; position: relative; fill: white;"><path stroke="none" d="M140.206,1140.93L152,1151.86l-2.133,2.13L136,1141.13l0.137-.13-0.131-.14L149.869,1127l2.132,2.13Z" transform="translate(-136 -1127)"></path></svg></div>',
        nextArrow: '<div class="slick_next_custom"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" style="overflow: hidden; position: relative; fill: white;"><path stroke="none" d="M2815,1141.13l-13.86,12.86-2.13-2.13,11.78-10.93-11.79-11.8,2.13-2.13,13.86,13.86-0.13.14Z" transform="translate(-2799 -1127)"></path></svg></div>',
      });
      $(".main-slider_block").animate({opacity:"1"}, 1500, "linear")
      $(".main-slider_list").animate({opacity:"1"}, 1500, "linear")
      $(document).ready(function () {
        $('input,textarea').focus(function(){
          $(this).data('placeholder',$(this).attr('placeholder'))
          $(this).attr('placeholder','');
        });
        $('input,textarea').blur(function(){
          $(this).attr('placeholder',$(this).data('placeholder'));
        });
        });
/*         $(window).scroll(function(){
          console.log($(".scroll_fade"))
        })
        $(".offer_block_wraper").addClass("animated fadeInUp") */
};
