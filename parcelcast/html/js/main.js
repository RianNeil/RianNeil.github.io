$('.the-carousel').slick({
	centerMode: true,
	speed: 100, 
	centerPadding: '60px',
	slidesToShow: 3,
	responsive: [
	{
	  breakpoint: 992,
	  settings: {
	    arrows: false,
	    centerMode: true,
	    centerPadding: '40px',
	    slidesToShow: 1
	  }
	},
	{
	  breakpoint: 480,
	  settings: {
	    arrows: false,
	    centerMode: true,
	    centerPadding: '40px',
	    slidesToShow: 1
	  }
	}
	]
});

//before slide move, blur items
$('.the-carousel').on('beforeChange', function(){
	$('.carousel-item').removeClass('not-blurred').addClass('blurred');
});

//after move, unblur current item
$('.the-carousel').on('afterChange', function(){
	$('.slick-current').removeClass('blurred').addClass('not-blurred');
});

//on input, change to indicated slide
document.getElementById( 'carousel-slider' ).addEventListener("input", function() {
	$('.the-carousel').slick( 'slickGoTo', $( "#carousel-slider" ).val(), true );
});
