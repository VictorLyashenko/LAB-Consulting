$(function () {

    // Menu opener hamburger
    $('.bars').click(function () {
        $('.menu-visible').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('bars-open');
    });

    // плавное перемещение страницы к нужному блоку
    $("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr('href');
        destination = $(elementClick).offset().top;
        $('body,html').animate({scrollTop: destination }, 800);
    });

    // Всплывающие окно
    $('.nav__btn').click(function (e) {
    	e.preventDefault();
    	$('#exampleModal').arcticmodal();
    });

    //Слайдер-услуги

	$('.slider-reviews').slick({
	    dots: true,
	    autoplay: true,
	    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
	});

	lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
});