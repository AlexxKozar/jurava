import $ from 'jquery';

var allPanels = $('.faq_item_content').hide();
    
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