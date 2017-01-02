

$(document).ready(function() {
	resize_page();
	window.onresize = function(event){
		resize_page();
	}
	function resize_page () {
		var w_height = $(window).height();
		var report_height = $('.admin-customer-rate-body').height();
		console.log(report_height+"+"+w_height);
		if(report_height > w_height-150)
		{
			$('.admin-customer-rate-body').css({'height':w_height-150,'overflow-y':'scroll'});
		}
		else {
			$('.admin-customer-rate-body').css({'height':w_height-150,'overflow-y':'hidden'});	
		}
		

	}


	$(".carrier-img").click(function(){
		if($(this).next().css('display') == "block")
		{
	    	$(this).next().slideUp("fast");	
		}
		else
		{
			$(".service-list").slideUp("fast");
	    	$(this).next().slideDown("normal");
		}
	});

});