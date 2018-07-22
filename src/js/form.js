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
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        console.log($this.val());


        if($this.val()==1){
             document.getElementById("basketFormDelivery").innerHTML = `<div class="basket_form_delivery_shop">
                            <p><img src="./img/facebook-logo-button.png" alt="">г. Киев, ул. Евгения Сверстюка<br> 21, оф. 102</p>
                            <p><img src="./img/facebook-logo-button.png" alt="">Пн.-Пт. 10:00 - 15:00</p>
                        </div>`;  
        } else if($this.val()==2){
             document.getElementById("basketFormDelivery").innerHTML = `<div class="basket_form_delivery_nov">
                            <input type="text" placeholder="Город:">
                            <select class="basket_form_select basket_form_selectInner" id="mounth">
                                <option value="hide">Номер отделения НП</option>
                                <option value="1" rel="icon-temperature">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select> 
                        </div>`;
                        innerSelectFunc();
        } else if ($this.val()==3){
             document.getElementById("basketFormDelivery").innerHTML = `<div class="basket_form_delivery_door">
                            <input type="text" placeholder="Город:">
                            <input type="text" placeholder="Улиица:">
                            <div>
                                <input type="text" placeholder="Дом:">
                                <input type="text" placeholder="Квартира:">
                            </div>
                        </div>`;
        }
        $list.hide();
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
});





function innerSelectFunc() {
$('.basket_form_selectInner').each(function(){
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
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        console.log($this.val());
        $list.hide();
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });


});


}
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