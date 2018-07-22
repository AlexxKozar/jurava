import $ from "jquery";


$(function() {

// All close buttons in basket
let basketItem = $('.basket_item');
let basketItemNum = basketItem.length;

 basketItem.each(function() {

        let asd = $(this);
        let basketButtonClose = asd.find('img.basket_item_close'); 
       
        basketButtonClose.click(function(e) {
        	let basketItemToClose = asd.find('div.basket_item');
        	basketItemToClose.prevObject[0].classList.toggle('none');
        	basketItemNum--;
        	 if(basketItemNum==1){
        	 	$('.basket_item-total')[0].classList.toggle('none');
        	 	$('.basket_form-wrap')[0].classList.toggle('none');
        	 	$('.basketHeadingInner')[0].innerHTML = 'Корзина пуста :(';
        	 	$('.basketHeadingInner')[0].style.textAlign = "center";
        	 }
            return false
        });
    });



});