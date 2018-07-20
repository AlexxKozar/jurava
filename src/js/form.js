import $ from 'jquery';

/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('.basket_form_select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
        // $('.select').classList.toggle('mb50');
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        // $('.basket_form_select-wrap')[0].classList.toggle('mb50');
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
        $('.basket_form_select-wrap')[0].classList.remove('mb50');
    });


});

	// function Change(seln) {
	// 	console.log(123);
	// 	selNum = seln.type.selectedIndex;
	// 	value = seln.type.options[selNum].value;
	// 	if (value==1){
	// 	 $('.basket_form_delivery').hide("slow", function() {
	// 	 $('.basket_form_delivery_nov').show("slow");
	// 	 });
	// 	}else{
	// 	 $('.basket_form_delivery_nov').hide("slow", function() {
	// 	 $('.basket_form_delivery').show("slow");
	// 	 });
	// 	 }
	// }