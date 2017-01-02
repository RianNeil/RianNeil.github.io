
$(document).ready(function() {
	var status_index = 0;
	//height responsive
	resize_page();
	window.onresize = function(event){
		resize_page();
	}
	function resize_page () {
		var w_height = $(window).height();
		var w_width = $(window).width();
		$('body').css({'height':w_height});
		$('.rate-body').css({'height':w_height-120-$('.rate-body').position().top});
		if(w_width  < 768)
		{
			$('.rate-body').css({'height':w_height-160-$('.rate-body').position().top});
		}
		

	}
	//rate container value
	var rate_status = [];
	var total_cnt = 10;
	var carrier = [];
	var rate = [];
	var delivery_days = [];
	var service = [];
	for(var i = 0;i < total_cnt ;i ++)
	{
		rate_status[i]=[];
		var rand_c = Math.floor(Math.random() * 4);
		switch (rand_c) {
			case 0:
				rate_status[i]['carrier'] = "img/dhlexpress.png";
				rate_status[i]['service'] = "Vriority Overnight";
				rate_status[i]['name'] = "Frank F";

				break;
			case 1:
				rate_status[i]['carrier']  = "img/fedex.png";
				rate_status[i]['service'] = "Ariority Overnight";
				rate_status[i]['name'] = "Mrank F";
				break;
			case 2:
				rate_status[i]['carrier']  = "img/ups.png";
				rate_status[i]['service'] = "Mriority Overnight";
				rate_status[i]['name'] = "Crank F";
				break;
			case 3:
				rate_status[i]['carrier']  = "img/usps.png";
				rate_status[i]['service'] = "Priority Overnight";
				rate_status[i]['name'] = "Frai F";
				break;
			default:
				
				break;
		}
		rate_status[i]['order-day'] = ""+Math.floor((Math.random() * 30) + 1);
		rate_status[i]['tracking_number'] = ""+Math.floor((Math.random() * 100000000000000) + 1);
		rate_status[i]['street'] = ""+Math.floor((Math.random() * 10000) + 1);
		rate_status[i]['rate'] = ""+(Math.random() * 100).toPrecision(4);
		rate_status[i]['shipping_status'] = ""+Math.floor((Math.random() * 5) + 1);
	}
	var add_item;
	var add_slider;
	rate_status.sort(function(a, b) {
	   // return a.rate - b.rate;
	   return b.rate.localeCompare(a.rate);
	});
	for(var i =0;i < total_cnt;i++)
	{
		add_item = $('.rate-item-demo').clone();
		add_item.removeClass('rate-item-demo');
		add_item.addClass('rate-item');
		add_item.css({'display':'block'});
		add_item.find('#carrier').attr('src',rate_status[i]['carrier']);
		add_item.find('#service').html(rate_status[i]['service']);
		add_item.find('#rate').html("$ "+rate_status[i]['rate']);
		add_item.find('#name').html(rate_status[i]['name']);
		add_item.find('#order-day').html(rate_status[i]['order-day']+'th May,16');
		add_item.find('#street').html(rate_status[i]['street']);

		add_item.appendTo($( ".rate-body" ));

		add_slider = $('.rate-item-slider-demo').clone();
		add_slider.removeClass('rate-item-slider-demo');
		add_slider.addClass('rate-item-slider');
		add_slider.appendTo($( ".rate-body" ));

		add_slider.find('.status-type').html(getStatusType(rate_status[i]['shipping_status']));
		add_slider.find('.schedule').html(getSchedule(rate_status[i]['shipping_status']));
		add_slider.find('.statues-text').html(getStatusText(rate_status[i]['shipping_status']));
		add_slider.find('.tracking_number').html("TRACKING "+rate_status[i]['tracking_number']);
		add_slider.find('.shipping-statues-1').removeClass('shipping-statues-1').addClass('shipping-statues-'+rate_status[i]['shipping_status']);
	}

	// slider up, down
	$(".rate-item").click(function(){
		console.log('slider');
		if($(this).next().css('display') == "block")
		{
	    	$(this).next().slideUp("fast");	
		}
		else
		{
			$(".rate-item-slider").slideUp("fast");
	    	$(this).next().slideDown("normal");
		}
		
	});
	// sort event
	$('.rate-header').find('h4').click(function(){
		$('.rate-body').slideUp("fast");
		$('.rate-item').remove();
		$('.rate-item-slider').remove();
		var key_value = ($(this).attr('class')).split('h-')[1];
		var inc_arrow = $(this).find('span').hasClass('glyphicon-chevron-down');
		if(inc_arrow)
		{
			$('.rate-header').find('h4').find('span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
			$(this).find('span').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');

		}
		else
		{
			$('.rate-header').find('h4').find('span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
			$(this).find('span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');	
		}
		rate_sort(key_value,inc_arrow,rate_status);
		$('.rate-body').slideDown("fast");
	});
	//search event
	  $('.user-admin-back').delegate('input.input-search', 'change', function() {
	  	$('.rate-body').slideUp("fast");
		$('.rate-item').remove();
		$('.rate-item-slider').remove();

	    var search_val = $(this).val();
	    var status_buf =[];
	    var index = 0;
	    for(var i = 0;i<rate_status.length;i++)
	    {
	    	if(rate_status[i]['street'].includes(search_val) || rate_status[i]['tracking_number'].includes(search_val))
	    	{
	    		status_buf[index] = rate_status[i];
	    		index++;

	    	}
	    }
	    rate_sort('name',true,status_buf);
	    $('.rate-body').slideDown("fast");
	  });
	function rate_sort(key,inc_flag,rate_array)
	{
		rate_array.sort(function(a, b) {
			if(inc_flag)
			{
				return a[key].localeCompare(b[key]);
			}
			else {
				return b[key].localeCompare(a[key]);
			}
		   
		});
		for(var i =0;i < rate_array.length;i++)
		{
			add_item = $('.rate-item-demo').clone();
			add_item.removeClass('rate-item-demo');
			add_item.addClass('rate-item');
			add_item.css({'display':'block'});
			add_item.find('#carrier').attr('src',rate_array[i]['carrier']);
			add_item.find('#service').html(rate_array[i]['service']);
			add_item.find('#rate').html("$ "+rate_array[i]['rate']);
			add_item.find('#name').html(rate_array[i]['name']);
			add_item.find('#order-day').html(rate_array[i]['order-day']+'th May,16');
			add_item.find('#street').html(rate_array[i]['street']);

			add_item.appendTo($( ".rate-body" ));

			add_slider = $('.rate-item-slider-demo').clone();
			add_slider.removeClass('rate-item-slider-demo');
			add_slider.addClass('rate-item-slider');
			add_slider.appendTo($( ".rate-body" ));

			add_slider.find('.status-type').html(getStatusType(rate_array[i]['shipping_status']));
			add_slider.find('.schedule').html(getSchedule(rate_array[i]['shipping_status']));
			add_slider.find('.statues-text').html(getStatusText(rate_array[i]['shipping_status']));
			add_slider.find('.tracking_number').html("TRACKING "+rate_array[i]['tracking_number']);
			add_slider.find('.shipping-statues-1').removeClass('shipping-statues-1').addClass('shipping-statues-'+rate_array[i]['shipping_status']);
			if(rate_array.length == 1)
			{
				if($(add_item).next().css('display') == "block")
				{
			    	$(add_item).next().slideUp("fast");	
				}
				else
				{
					$(".rate-item-slider").slideUp("fast");
			    	$(add_item).next().slideDown("normal");
				}
			}
		}

		$(".rate-item").click(function(){
			if($(this).next().css('display') == "block")
			{
		    	$(this).next().slideUp("fast");	
			}
			else
			{
				$(".rate-item-slider").slideUp("fast");
		    	$(this).next().slideDown("normal");
			}
		});
	}
});
//status test
function getStatusType (value) {

	 switch (value) {
	 	case '1':
	 		return "DELIVERED";
	 		break;
	 	case '2':
	 		return "Out for Delivery";
	 		break;
	 	case '3':
	 		return "Exception";
	 		break;
	 	case '4':
	 		return "Failed Attempt";
	 		break;
	 	case '5':
	 		return "In  Transit";
	 		break;
	 	case '6':
	 		return "";
	 		break;
	 	default:
	 		// statements_def
	 		break;
	 }
}
function getSchedule (value) {
 	switch (value) {
	 	case '1':
	 		return "SIGNED: TEDDYC";
	 		break;
	 	case '2':
	 		return "SCHEDULED:"+Math.floor((Math.random() * 30) + 1)+"JAN";
	 		break;
	 	case '3':
	 		return "SCHEDULED:"+Math.floor((Math.random() * 30) + 1)+"JAN";
	 		break;
	 	case '4':
	 		return "SCHEDULED:"+Math.floor((Math.random() * 30) + 1)+"JAN";
	 		break;
	 	case '5':
	 		return "SCHEDULED:"+Math.floor((Math.random() * 30) + 1)+"JAN";
	 		break;
	 	case '6':
	 		return "";
	 		break;
	 	default:
	 		// statements_def
	 		break;
 	}
}
function getStatusText(value) {
	 switch (value) {
	 	case '1':
	 		return "Package delivered by local post office";
	 		break;
	 	case '2':
	 		return "Out For Delivery";
	 		break;
	 	case '3':
	 		return "Severe weather conditions have delayed delivery.";
	 		break;
	 	case '4':
	 		return "The receiver was not available at the time of the first delivery attempt. A second attempt will be made";
	 		break;
	 	case '5':
	 		return "Departure Scan";
	 		break;
	 	case '6':
	 		return "";
	 		break;
	 	default:
	 		// statements_def
	 		break;
	 }
}