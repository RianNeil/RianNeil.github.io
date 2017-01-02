
$(document).ready(function() {
	//height responsive
	resize_page();
	window.onresize = function(event){
		resize_page();
	}
	function resize_page () {
		var w_height = $(window).height();
		$('.get-quote').css({'height':w_height});
		$('body').css({'height':w_height});
		$('.view-body').css({'height':w_height-160-$('.view-body').position().top});
	}
	$('#all-check').click(function(){
		if($(this).is(":checked"))
		{
			$('.view-body input[type=checkbox]').prop('checked',true);
		}
		else 
		{
			$('.view-body input[type=checkbox]').prop('checked',false);
		}
	});
	$('a[data-toggle=modal]').click(function(){
		var data_target = $(this).attr('data-target');
		$('#'+data_target.split('%')[1]).css({'display':'block'});
	});
	$('.modal .close,.modal .btn-close').click(function(){
		$('.modal').css('display','none');
	});
	$(window).click(function(event){
		if($(event.target).hasClass('modal'))
		{
			$('.modal').css('display','none');	
		}
	});
});


//init
// (function() {
// 	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
// 		new SelectFx(el);
// 	} );
// })();
