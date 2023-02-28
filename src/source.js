$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items:1,
	    loop:true,
	    margin:0,
	    center:true,
	    nav:true,
	    dots: true,
	})

	$('.tabs__tab').on('click', function(){
		$(this).addClass('flagged');
		$(this).siblings().removeClass('flagged');
		let iD = $(this).attr("id");
		iD = iD.slice(1);
		iD = 'b'+ iD;
		$('#' + iD).addClass('flagged');
		$('#' + iD).siblings().removeClass('flagged');
	})
	$('.description__button').on('click', function(){
		$('.popUp').addClass('flagged');
		$('main').addClass('flagged');
	})
	$('.cross').on('click', function(){
		$('.popUp').removeClass('flagged');
		$('main').removeClass('flagged');
	})
});
