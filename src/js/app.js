import $ from "jquery";
import 'slick-carousel';

$(window).on('load',function(){
  $('.preloader').hide();

});

$(window).on('resize load',function(){
    $('.product_list_items').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      prevArrow: $('.product_list_controls_prev_button'),
      nextArrow: $('.product_list_controls_next_button'),
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },      
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },     
         {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },        
      ]
    });

    $('.product_list_items').on('wheel', (function(e) {
      e.preventDefault();
      if($(window).width > 768){
        if (e.originalEvent.deltaY < 0) {
          $(this).slick('slickNext');
        } else {
          $(this).slick('slickPrev');
        }
      }
    }));

    $('.product_list_items .slick-dots').appendTo('.product_list_controls_scroll');


});


$(window).on('resize load',function(){
      if($(window).width() <= 768){
        $('.instruction_item_support').remove();
        $('.instruction_row').slick({
          dots: true,
          customPaging : function(slider, i) {
            return '<a class="active_instruction_slide">' + (i + 1 ) + '</a>';
          },
          arrows: false
        });
      }
    });

/*
*
*
    Product card section
    Carousel, open/close buttons
*
*
*/

$('.card_items').slick({
  infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $('.prev_card_button'),
    nextArrow: $('.next_card_button')
});




$(window).on("resize load",function(e){
  if($(window).width() < 768){
     $('.logo').insertAfter($('nav ul li:nth-child(3)'));
     $('.hiddenLink').hide();
     if($('.menu_button_mobile').length == 0){
        let burgerButton = document.createElement('div'),
         burgerImg = document.createElement('img');
         if(location.pathname == '/'){
            burgerImg.setAttribute('src','img/menu-options.svg');
         }
         else{
           burgerImg.setAttribute('src','img/menu-options_black.svg');
         }
         burgerButton.appendChild(burgerImg);
         burgerButton.classList.add('menu_button_mobile');
         document.querySelector('.mobile_menu_wrapper').appendChild(burgerButton);
         $('.mobile_menu_wrapper').insertBefore($('.logo'));
     }
     $('.banner_img').insertAfter($('.banner_text_content_heading'));
  }
  else{
    $('.banner_img').insertAfter($('.banner_text_content'));
    $('.menu_button_mobile').hide();
    $('.hiddenLink').show();
    $('.logo').insertBefore($('nav'));
}
});



$('.banner_scroll_button').on('click',function(e){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".product_path").offset().top
    }, 400);
});




$(window).on('load',function(){
    $('.distributors_item_row').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },      
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },     
         {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },        
      ]
    });
  
});
