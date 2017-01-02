
$(document).ready(function() {
	//height responsive
	resize_page();
	window.onresize = function(event){
		resize_page();
	}
	function resize_page () {
		var w_height = $(window).height();
		var shipment_height = $('.shipment-view').height();
		if(w_height-220 < shipment_height)
		$('.shipment-view').css({'height':w_height-220,'overflow-y':'scroll'});
	}
});
