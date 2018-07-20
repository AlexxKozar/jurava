import $ from "jquery";





$(function() {

	let buttonNum  = $('.buttonNum'); // Buttons with a counter
	let buttonsNum  = $('.buttonsNum'); // Container of buttons 
	let buttonOpenNum = $('.buttonOpenNum'); // Buttons wich open counter


    buttonNum.each(function() {
        let asd = $(this);
        asd.find('a.minus').click(function(e) {
        	e.preventDefault();
            var data = asd.find('input').val();
            if(data > 0) {
                asd.find('input').val(function(i, oldval){return --oldval;});
            }
            return false
        });
        asd.find('a.plus').click(function(e) {
        	e.preventDefault();
            asd.find('input').val(function(i, oldval){return ++oldval;});
            return false
        });
    });

    buttonsNum.each(function() {
        let asd = $(this);
        let buttonClick = asd.find('a.buttonOpenNum');
        let buttonShow = asd.find('div.button-num')[0];
        buttonClick.click(function(e) {
        	e.preventDefault();
            buttonShow.classList.toggle('flex');
            buttonClick[0].classList.toggle('none');
            return false
        });
    });
});