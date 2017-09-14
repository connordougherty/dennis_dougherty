$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.parallax').parallax();
	$('.scrollspy').scrollSpy();
	$('.scrollspy').on('scrollSpy:enter', function() {
		$('.navbar-fixed').find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active'); //add active class to the li of the nav link
	});
	$('.scrollspy').on('scrollSpy:exit', function() {
		$('.navbar-fixed').find('a[href="#'+$(this).attr('id')+'"]').parent().removeClass('active'); //remove active class to the li of the nav link
	});
})