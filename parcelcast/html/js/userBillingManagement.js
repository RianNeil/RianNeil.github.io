
$(document).ready(function() {
	//height responsive
	resize_page();
	window.onresize = function(event){
		resize_page();
	}
	function resize_page () {
		var w_height = $(window).height();
		var w_width =  $(window).width();
		//ship-review page
		if(w_width<990)
		{
			$('.payment-info').css({'height':w_height-200,'overflow-y':'scroll','overflow-x':'hidden'});	
			console.log(w_width);
		}
	}
	//rate container value
	var rate_staus = [];
	var total_cnt = 10;
	var carrier = [];
	var rate = [];
	var delivery_days = [];
	var service = [];
	for(var i = 0;i < total_cnt ;i ++)
	{
		rate_staus[i]=[];
		var rand_c = Math.floor(Math.random() * 4);
		switch (rand_c) {
			case 0:
				rate_staus[i]['carrier'] = "img/dhlexpress.png";
				rate_staus[i]['service'] = "Priority Overnight";
				break;
			case 1:
				rate_staus[i]['carrier']  = "img/fedex.png";
				rate_staus[i]['service'] = "Priority Overnight";
				break;
			case 2:
				rate_staus[i]['carrier']  = "img/ups.png";
				rate_staus[i]['service'] = "Priority Overnight";
				break;
			case 3:
				rate_staus[i]['carrier']  = "img/usps.png";
				rate_staus[i]['service'] = "Priority Overnight";
				break;
			default:
				
				break;
		}
		rate_staus[i]['delivery_days'] = Math.floor((Math.random() * 4) + 1);
		rate_staus[i]['rate'] = (Math.random() * 100).toPrecision(4);
	}
	var add_item;
	var add_slider;
	rate_staus.sort(function(a, b) {
	   return a.rate - b.rate;
	});
	for(var i =0;i < total_cnt;i++)
	{
		add_item = $('.view-item-demo').clone();
		add_item.removeClass('view-item-demo');
		add_item.addClass('view-item');
		add_item.css({'display':'block'});
		add_item.find('#carrier').attr('src',rate_staus[i]['carrier']);
		add_item.find('#service').html(rate_staus[i]['service']);
		add_item.find('#rate').html("$ "+rate_staus[i]['rate']);
		add_item.find('#delivery_days').html(rate_staus[i]['delivery_days']+" Days");
		add_item.find('#all-check').next().attr('for','check-'+i);
		add_item.find('#all-check').attr('id','check-'+i);
		add_item.find('.cs-select').css({'z-index':10-i});

		add_item.appendTo($( ".view-body" ));

		add_slider = $('.view-item-slider-demo').clone();
		add_slider.removeClass('view-item-slider-demo');
		add_slider.addClass('view-item-slider');
		add_slider.appendTo($( ".view-body" ));
	}
	// $('.upload-csv').click(function() {
	// 	$('#csv-upload-modal').css({'display':'block'});
	// });
	// slider up, down
	$(".view-item").click(function(){
		if($(this).next().css('display') == "block")
		{

	    	$(this).next().slideUp("fast");	
		}
		else
		{
			if($(window).width() < 990)
			{
				$(".view-item-slider").slideUp("fast");
	    		$(this).next().slideDown("normal");
			}
			
		}
	});
	$(".btn-payment-history").click(function(){
		if($('.payment-history').css('display') == 'none')
		{
			$('.payment-info').slideUp('normal');
			setTimeout(function(){
				$('.payment-history').slideDown('normal');
				$(".btn-payment-history").html('Payment Info');
				var w_height = $(window).height();
				$('.get-quote').css({'height':w_height});
				$('body').css({'height':w_height});
				$('.view-body').css({'height':w_height-160-$('.view-body').position().top});
			},500);
			
		}
		else
		{
			$('.payment-history').slideUp('normal');
			setTimeout(function(){
				$(".btn-payment-history").html('Payment History');
				$('.payment-info').slideDown('normal');
			},500);
			
		}
		
	})
});
