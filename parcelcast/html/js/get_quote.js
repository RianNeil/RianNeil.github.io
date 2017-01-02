
$(document).ready(function() {
	var status_index = 0;
	//height responsive
	resize_page();
	window.onresize = function(event){
		resize_page();
	}
	function resize_page () {
		var w_height = $(window).height();
		$('.get-quote').css({'height':w_height});
		$('body').css({'height':w_height});
		$('.rate-body').css({'height':w_height-160-$('.rate-body').position().top});
		if(w_height < 750)
		{
			$('#status-0,#status-1,#status-2').css({'height':w_height-450,'overflow-y':'scroll'});
		}
		else 
		{
			$('#status-0,#status-1,#status-1').css({'height':370,'overflow-y':'visible'});
		}

		//ship-review page
		if($(window).width() < 770)
		{
			$('.ship-review-body').css({'height':w_height-220,'overflow-y':'scroll','overflow-x':'hidden'});

		}
		else
		{
			$('.ship-review-body').css({'overflow-y':'visible'});
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
		add_item = $('.rate-item-demo').clone();
		add_item.removeClass('rate-item-demo');
		add_item.addClass('rate-item');
		add_item.css({'display':'block'});
		add_item.find('#carrier').attr('src',rate_staus[i]['carrier']);
		add_item.find('#service').html(rate_staus[i]['service']);
		add_item.find('#rate').html("$ "+rate_staus[i]['rate']);
		add_item.find('#delivery_days').html(rate_staus[i]['delivery_days']+" Days");

		add_item.appendTo($( ".rate-body" ));

		add_slider = $('.rate-item-slider-demo').clone();
		add_slider.removeClass('rate-item-slider-demo');
		add_slider.addClass('rate-item-slider');
		add_slider.appendTo($( ".rate-body" ));
	}
	function rate_sort(flag)
	{
		status_index = 3;
		if(flag)
		{
			rate_staus.sort(function(a, b) {
			   return a.rate - b.rate;
			});
		}
		else
		{
			rate_staus.sort(function(a, b) {
			   return a.delivery_days - b.delivery_days;
			});
		}
		for(var i =0;i < total_cnt;i++)
		{
			add_item = $('.rate-item-demo').clone();
			add_item.removeClass('rate-item-demo');
			add_item.addClass('rate-item');
			add_item.css({'display':'block'});
			add_item.find('#carrier').attr('src',rate_staus[i]['carrier']);
			add_item.find('#service').html(rate_staus[i]['service']);
			add_item.find('#rate').html("$ "+rate_staus[i]['rate']);
			add_item.find('#delivery_days').html(rate_staus[i]['delivery_days']+" Days");

			add_item.appendTo($( ".rate-body" ));

			add_slider = $('.rate-item-slider-demo').clone();
			add_slider.removeClass('rate-item-slider-demo');
			add_slider.addClass('rate-item-slider');
			add_slider.appendTo($( ".rate-body" ));
		}

		$(".rate-item").click(function(){
			if(status_index == 3)
			{
				if($(this).next().css('display') == "block")
				{
			    	$(this).next().slideUp("fast");	
				}
				else
				{
					$(".rate-item-slider").slideUp("fast");
			    	$(this).next().slideDown("normal");
				}
		}
		});
		confirmNowInit();
	}
	// sort by
	$('.sort-item li').click(function(e){
		$('.rate-body').slideUp("fast");
		$('.rate-item').remove();
		$('.rate-item-slider').remove();
		var sort_v = $(this).html();
		if(sort_v == 'Price')
		{
			rate_sort(true);
		}
		else
		{
			rate_sort(false);
		}
		$('.rate-body').slideDown("fast");
		$(".sort-item").prev().html(sort_v);
	});

	$('.sort-by,.sort-status').click(function(){
		if($(".sort-item").css('display') == "block")
		{
			
		    $(".sort-item").slideUp("fast");
		    
		}
		else
		{
	    	$(".sort-item").slideDown("normal");
		}
		
	});
	// insure value
	$('select[name=service-insure-value]').parent().parent().css({'display':'none'});
	$(document).delegate('input#insure-no','click',function(){
		$('select[name=service-insure-value]').parent().parent().css({'display':'none'});
	});
	$(document).delegate('input#insure-yes','click',function(){
		$('select[name=service-insure-value]').parent().parent().css({'display':'block'});
	});

	for(var i=0;i<3;i++)
	{
		$('#h-'+i).click(function(){
			var index = this['id'].split('-')[1];
			if(index == 2)
			{
				$('.btn-next').find('span').html('UPDATE');
				$('.btn-next').css({'padding':'5px 10px'});
			}
			else 
			{
				$('.btn-next').find('span').html('NEXT');
				$('.btn-next').css({'padding':'5px 0px'});
			}
			if(status_index != index)
			{
				$('#a-'+status_index).removeClass('a-active');
				$('#a-'+index).addClass('a-active');

				$('#h-'+status_index).removeClass('h-active');
				$('#h-'+index).addClass('h-active');

				$('#status-'+status_index).removeClass('status-active');
				$('#status-'+index).delay(1000).addClass('status-active');

				status_index = index;
				progressStatus();
			}
		});
	}
	$('.btn-next').click(function(){
		if(status_index > 1 && $('.rate-container').css('display') != "block"){
			status_index = 3;
			slider_rate_list();
		}else {
			var index = (status_index+1)%3;
			if(status_index == 1)
			{
				$(this).find('span').html('UPDATE');
				$(this).css({'padding':'5px 10px'});
			}
			else 
			{
				$('.btn-next').find('span').html('NEXT');
				$('.btn-next').css({'padding':'5px 0px'});
			}
			$('#a-'+status_index).removeClass('a-active');
			$('#a-'+index).addClass('a-active');
			$('#h-'+status_index).removeClass('h-active');
			$('#h-'+index).addClass('h-active');
			$('#status-'+status_index).removeClass('status-active');
			$('#status-'+index).delay(1000).addClass('status-active');

			status_index = index;
			progressStatus();
		}
			
	});
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
	//slider rate list
	function slider_rate_list()
	{
	    // Set the effect type
	    var effect = 'slide';

	    // Set the options for the effect type chosen
	    // var options = { direction: $('.mySelect').val() };
	    var options1 = { direction: 'left'};
	     var options2 = { direction: 'right'};
	    // Set the duration (default: 400 milliseconds)
	    var duration = 500;
	    if($('.status-container').css('display') == "block")
	    {
	    	$('.status-container').toggle(effect, options1, duration);
	    	$('.rate-container').delay(500).toggle(effect, options2, duration);
	    	
	    }
	    else
	    {
	    	$('.status-container').delay(500).toggle(effect, options1, duration);
	    	$('.rate-container').toggle(effect, options2, duration);

	    }
		var id = setInterval(frame, 1000)
		function frame(){
			resize_page();
			clearInterval(id);
		}
	}
	//packaging
	$('.cs-select').click(function(){
		var s_id = $(this).find('select').attr('id');
		if(s_id == "service-packaging" && $(this).find('ul li:eq(1)').css('opacity') == 0)
		{	var w_h = $(window).height();
			var scroll_h = $(this).find('ul').outerHeight();
			var offset_h = $(this).find('ul').offset().top;
			
			$(this).find('ul').css({'height':(w_h-offset_h-40),'overflow-y':'scroll'});
			console.log(1);
		}
	});
	// ship review
	function confirmNowInit()
	{
		$('.confirm-now,.confirm-now-mobile').click(function (){
			//set value on span 
			var parent_ob;
			if($(this).attr('class')!="confirm-now")
			{
				parent_ob = $(this).closest('.rate-body').find('.rate-item');
			}
			else {
				parent_ob = $(this).closest('.rate-item');
			}
			$('.la-carrier').attr('src',parent_ob.find('#carrier').attr('src'));
			$('.la-rate').html(parent_ob.find('#rate').html());
			$('.la-value').html('Value: $ '+$('#value').val());
			$('.la-deliery').html('Delivery Days:  '+(parent_ob.find('#delivery_days').html()).split(' ')[0]);
			$('.to-country').html($('#to-country').val());
			$('.to-state').html($('#to-state').val());
			$('.to-city').html($('#to-city').val());
			$('.to-address').html($('#to-address').val());
			$('.from-country').html($('#from-country').val());
			$('.from-state').html($('#from-state').val());
			$('.from-city').html($('#from-zip').val());
			$('.from-address').html($('#from-address').val());
			$('.to-separator').html('/');
			$('.from-separator').html('/');
			$('.parcel-dimension').html('Medium Box:  '+$('#parcel-length').val()+" X "+$('#parcel-width').val()+" X "+$('#parcel-height').val());

			if($('.section-insure input[name=insure]:checked').val() == 0)
			{
				var insure = $('select[name=service-insure-value] option:selected').val();
				if(insure == 0)
				{
					$('.la-insure').html('Insured Value: $25 cover for FREE');
				}
				else
				{
					$('.la-insure').html('Insured Value: $'+insure);	
				}
			}
			else 
			{
				$('.la-insure').html('Insured Value: $25 cover for FREE');
			}
			if($('.section-residential input[name=residential]:checked').val() == 0)
			{
				$('.la-residential').html('Residential');	
			}
			else if($('.section-signature input[name=signature]:checked').val() == 0)
			{
				$('.la-residential').html('Signature Required');		
			}
			if($('.section-residential input[name=residential]:checked').val() == 0 && $('.section-signature input[name=signature]:checked').val() == 0)
			{
				$('.la-residential').html('Residential / Signature Required');
			}
			
			$('.ship-review').fadeIn();
			$('.ship-review').css({'z-index':'1000'});
			$('.get-quote').css({'opacity':'0','z-index':'-1'});
			resize_page();
		});
	}
	confirmNowInit();
	

	//payment
	$('.btn-purchase').click(function (){
		$('.payment').fadeIn();
		$('.payment').css({'z-index':'1000'});
		$('.ship-review').css({'opacity':'0','z-index':'-1'});
	});
	//cardExpiry auto enter
	$('input[name=cardExpiry]').keyup(function(){
		var ex_text = $(this).val();
		if(ex_text.length == 2)
		{
			$(this).val(''+ex_text+'/');
		}
	});

});
function progressStatus()
{
	var elem = document.getElementById('progress-front');
	var progress_value = document.getElementById('progress-value');
	var width = 1;
	var id = setInterval(frame, 10)

		function frame(){
			if( width >= 81)
			{
				clearInterval(id);
			}
			else
			{
				width++;
				elem.style.width = width+'%';
				progress_value.innerHTML = ""+width+"%&nbsp;&nbsp;&nbsp;&nbsp;COMPLETE";
			}
		}
	
}
//init
(function() {
	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
		new SelectFx(el);
	} );
})();

// payment
var $form = $('#payment-form');
$form.on('submit', payWithStripe);

/* If you're using Stripe for payments */
function payWithStripe(e) {
    e.preventDefault();

    /* Visual feedback */
    $form.find('[type=submit]').html('Validating <i class="fa fa-spinner fa-pulse"></i>');
    //var PublishableKey = 'pk_test_b1qXXwATmiaA1VDJ1mOVVO1p'; // Replace with your API publishable key
    var PublishableKey = 'pk_test_FHS2bT6xyFzxOnEaL6vkvbfG'; // Replace with your API publishable key
    Stripe.setPublishableKey(PublishableKey);
    
    /* Create token */
    var expiry = $form.find('[name=cardExpiry]').payment('cardExpiryVal');
    var ccData = {
        number: $form.find('[name=cardNumber]').val().replace(/\s/g,''),
        cvc: $form.find('[name=cardCVC]').val(),
        exp_month: expiry.month, 
        exp_year: expiry.year
    };
    
    Stripe.card.createToken(ccData, function stripeResponseHandler(status, response) {
        if (response.error) {
            /* Visual feedback */
            $form.find('[type=submit]').html('Try again');
            /* Show Stripe errors on the form */
            $form.find('.payment-errors').text(response.error.message);
            $form.find('.payment-errors').closest('.row').show();
        } else {
            /* Visual feedback */
            $form.find('[type=submit]').html('Processing <i class="fa fa-spinner fa-pulse"></i>');
            /* Hide Stripe errors on the form */
            $form.find('.payment-errors').closest('.row').hide();
            $form.find('.payment-errors').text("");
            // response contains id and card, which contains additional card details            
            console.log(response.id);
            console.log(response.card);
            var token = response.id;
            // AJAX - you would send 'token' to your server here.
            $.post('/account/stripe_card_token', {
                    token: token
                })
                // Assign handlers immediately after making the request,
                .done(function(data, textStatus, jqXHR) {
                	$('.order-result').fadeIn();
					$('.order-result').css({'z-index':'1000'});
					$('.payment').css({'opacity':'0','z-index':'-1'});
                    $form.find('[type=submit]').html('Payment successful <i class="fa fa-check"></i>').prop('disabled', true);
                })
                .fail(function(jqXHR, textStatus, errorThrown) {
                	
					$('.order-result').fadeIn();
					$('.order-result').css({'z-index':'1000'});
					$('.payment').css({'opacity':'0','z-index':'-1'});
					
                    // $form.find('[type=submit]').html('There was a problem').removeClass('success').addClass('error');
                    // /* Show Stripe errors on the form */
                    // $form.find('.payment-errors').text('Try refreshing the page and trying again.');
                    // $form.find('.payment-errors').closest('.row').show();
                });
        }
    });
}
/* Fancy restrictive input formatting via jQuery.payment library*/
$('input[name=cardNumber]').payment('formatCardNumber');
$('input[name=cardCVC]').payment('formatCardCVC');
$('input[name=cardExpiry').payment('formatCardExpiry');

/* Form validation using Stripe client-side validation helpers */
jQuery.validator.addMethod("cardNumber", function(value, element) {
    return this.optional(element) || Stripe.card.validateCardNumber(value);
}, "Please specify a valid credit card number.");

jQuery.validator.addMethod("cardExpiry", function(value, element) {    
    /* Parsing month/year uses jQuery.payment library */
    value = $.payment.cardExpiryVal(value);
    return this.optional(element) || Stripe.card.validateExpiry(value.month, value.year);
}, "Invalid expiration date.");

jQuery.validator.addMethod("cardCVC", function(value, element) {
    return this.optional(element) || Stripe.card.validateCVC(value);
}, "Invalid CVC.");

validator = $form.validate({
    rules: {
        cardNumber: {
            required: true,
            cardNumber: true            
        },
        cardExpiry: {
            required: true,
            cardExpiry: true
        },
        cardCVC: {
            required: true,
            cardCVC: true
        }
    },
    highlight: function(element) {
        $(element).closest('.form-control').removeClass('success').addClass('error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-control').removeClass('error').addClass('success');
    },
    errorPlacement: function(error, element) {
        $(element).closest('.form-group').append(error);
    }
});

paymentFormReady = function() {
    if ($form.find('[name=cardNumber]').hasClass("success") &&
        $form.find('[name=cardExpiry]').hasClass("success") &&
        $form.find('[name=cardCVC]').val().length > 1) {
        return true;
    } else {
        return false;
    }
}

$form.find('[type=submit]').prop('disabled', true);
var readyInterval = setInterval(function() {
    if (paymentFormReady()) {
        $form.find('[type=submit]').prop('disabled', false);
        clearInterval(readyInterval);
    }
}, 250);
