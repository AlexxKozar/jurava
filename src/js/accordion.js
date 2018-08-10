import $ from 'jquery';





$(window).on('load',function(e){



  var allPanels = $('.faq_item_content'),
    openTitleAccordion = $('.mobile_menu_inner_img'),
    content = $('.mobile_menu_inner-list'),
    menu = $('.mobile_menu'),
    pageHeader = $('header');

    allPanels.hide();
  

    $('.faq_item_title').click(function() {
      if($(this).next().css('display') == 'block'){
        $(this).next().slideUp(200);
      }
      else{
        allPanels.slideUp();
        $(this).next().slideDown(200);
        return false;
      }
    }); 


   

    content.hide();
    openTitleAccordion.attr('data-state','none');
    openTitleAccordion.on('click',function(){
     
        if(openTitleAccordion.attr('data-state') == 'none'){
            content.slideDown(200);
            openTitleAccordion.attr('data-state','show');
            this.classList.toggle('rotate');
        }
        else{
          content.slideUp(200);
          openTitleAccordion.attr('data-state','none');
           this.classList.toggle('rotate');
        }
    });



    var openMenuButton = $('.mobile_menu_wrapper');
    openMenuButton.on('click',function(e){
      e.preventDefault();
      if(openMenuButton.attr('data-menustate') == 'none'){
          menu.slideDown(200);
          if(location.pathname == '/'){
             $('.cart_icon img').attr('src','img/cart_black.svg')
             $('.cart_count').css('color','#000');
          }
          $('.menu_button_mobile img').attr('src','img/close.png');
          openMenuButton.attr('data-menustate','show');
          pageHeader.attr('class','header_fixed');
      }
      else{
        menu.slideUp(200);
        if(location.pathname == '/'){
            $('.cart_icon img').attr('src','img/cart_white.svg');
            $('.cart_count').css('color','#fff');
            $('.menu_button_mobile img').attr('src','img/menu-options.svg');
        }
        if(location.pathname != '/'){
          $('.menu_button_mobile img').attr('src','img/menu-options_black.svg');
        }

        openMenuButton.attr('data-menustate','none');
        pageHeader.removeClass('header_fixed');
      }
    });
});


// Distributors roll

var allPanelsDiistributord = $('.distributors_item_content').hide();
    
  $('.distributors_heading').click(function() {
    if($(this).next().css('display') == 'block'){
      $(this).next().slideUp(200);
    }
    else{
      allPanelsDiistributord.slideUp();
      $(this).next().slideDown(200);
      return false;
    }
  }); 

$(window).on('scroll',function(e){
  if(window.pageYOffset > 0){
      $('header').attr('class','header_fixed');
      $('body').attr('class','menu_margin');
      if(location.pathname == '/'){
        $('nav ul li a').css('color','#000');
        $('.cart_icon img').attr('src','img/cart_black.svg');
        $('.world').attr('src','img/globe_black.svg');
        $('.menu_button_mobile img').attr('src','img/menu-options.svg');
      }
  }
  if(window.pageYOffset <= 0){
    $('header').removeClass('header_fixed');
    $('body').removeClass('menu_margin');
    if(location.pathname == '/'){
        $('nav ul li a').css('color','#fff');
        $('.cart_icon img').attr('src','img/cart_white.svg');
        $('.world').attr('src','img/globe_white.svg');
        $('.menu_button_mobile img').attr('src','img/menu-options_black.svg');
    }
  }

});


