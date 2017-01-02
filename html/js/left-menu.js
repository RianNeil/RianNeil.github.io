$(document).ready(function() {
	// left-menu
	$('.sub-menu').css({'display':'none'});
	$('#bs-example-navbar-collapse-1 li').click(function(){
		$('#bs-example-navbar-collapse-1 li').removeClass('active');
		$(this).addClass('active');
		if($(this).hasClass('send-a-package'))
		{
			$('.sub-menu').slideDown('normal');
		}
		else
		{
			$('.sub-menu').slideUp('normal');
		}
	});
});