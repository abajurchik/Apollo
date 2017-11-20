$(document).ready(function() {



	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	// Создаем переменые для кнопки и для меню
	var pull = $('#button-toggle');
	var menu = $('#drop-down__list');

	// Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){

	    // Отменяем стандартное поведение ссылки в браузере
	    e.preventDefault();

	    // Открываем/Скрываем меню
	    menu.slideToggle();

	    // Добавляем модификатор --active
	    $(this).toggleClass('special_button--active');
	    
	});



	// При изменении размера окна, в большую сторону, если меню было скрыто, показываем его
	// И у кнопки убираем модификатор --active
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 992) {
	        menu.removeAttr('style');
	        pull.removeClass('special_button--active');
	    } else {

	    }
	});

	// Скрываем меню при клике на него на смартфоне и планцете
	// По клику на ссылку в меню запускаем ф-ю fnstart();
	$('nav.nav a').on("click", function(){
		fnstart();
	});

	// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
	// тогда убираем класс модификатор --active у кнопки pull
	// и сворачиваем/скрываем меню 
	function fnstart(){	
		if ( $("#button-toggle").hasClass("special_button--active")  ) {
   			pull.toggleClass('special_button--active');
			menu.slideToggle();
		}
	};


//owl-carousel

    $("#first-slider").owlCarousel({
        singleItem: true,
        slideSpeed: 500,
        navigation: true,
        navigationText: ["", ""],
        theme: "top__slider-theme"

    });

    //slide2id

    $(".nav a").mPageScroll2id({
    highlightSelector:".nav a"
    });

		
});



















