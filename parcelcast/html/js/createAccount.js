
$(document).ready(function() {
	var status_index = 0;
	//height responsive
	resize_page();
	window.onresize = function(event){
		resize_page();
	}
	function resize_page () {
		var w_height = $(window).height();
		var main_body = $('.status-body').height();
		//ship-review page
		$('body').css({'height':w_height});
		$('.status-body').css({'height':w_height-200,'overflow-y':'scroll','overflow-x':'hidden'});


	}
});