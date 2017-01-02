$(function() {
    $(window).scroll( function(){
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 200;  
          
            if( bottom_of_window > bottom_of_object ){             
                $(this).animate({'opacity':'1'},1500);    
            }
        }); 
    });
});

$(document).ready(function() {

  var items = $('.ovr-carousel .items').find('.item').length;
  var li_width = 94 / items;

  $('.ovr-carousel-nav li').css({"width":li_width+'%'});

  $.each($('.ovr-carousel .items .item'), function( key, value ) {
    if($(value).hasClass('active')) { $('.ovr-carousel-nav li').eq(key).addClass('active'); }
  });
  if(screen.width>500)
  {
    $('#main').parallax("100%", 0.6);
    $('#laptop_svg').parallax("100%", 0.6);  
  }
  else
  {
    $('#laptop_svg').css({'background-position':'100% 60px'});  
    $('#down_svg').css({'width':'110px','top':'-25px'});  
    $('#up_svg').css({'top':'-15px','width':'90px'}); 
    $('#arrows').css({'top':'56px'});

  }

  $(document).delegate('#getquote', 'click', function() {
   $('#quote').addClass('active');
    $('html').addClass('overlay');
    $('#quote select').chosen({
      disable_search: true,
      width: "95%"
    });
  });

  $(document).bind('keydown',function(e){
    if ( e.which == 27 ) {
       $('#quote').removeClass('active');
       $('html').removeClass('overlay');
       // Attach your event here.
    };
  });

  $('.chart').waypoint({
    handler: function(direction) {
      $('.chart').removeClass('animated').addClass('animated');
    },
    offset: '80%'
  })

  $('img.globe').waypoint({
    handler: function(direction) {
      $('img.globe').removeClass('animated').addClass('animated');
    },
    offset: '80%'
  })

  $('img.team').waypoint({
    handler: function(direction) {
      $('img.team').removeClass('animated').addClass('animated');
    },
    offset: '100%'
  })

  $('#laptop_svg').waypoint({
    handler: function(direction) {
      $('#up_svg').removeClass('animated').addClass('animated');
      $('#down_svg').removeClass('animated').addClass('animated');
    },
    offset: '100%'
  })
  
  $(document).delegate('.item', 'click', function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    $('.ovr-carousel-nav li').eq($(this).index()).addClass('active').siblings().removeClass('active');
  });

  $(document).delegate('.ovr-carousel-nav li:not(.active)', 'click', function() {
    $('.ovr-carousel .items .item').eq($(this).index()).addClass('active').siblings().removeClass('active');
    $(this).addClass('active').siblings().removeClass('active');
  })

  // get quote script
    //-to address
  $("#quote").delegate('input#to-destination', 'change', function() {
    var country = $(this).val();
    $('#quote').find('span.to-country').html(country).fadeIn();
    $('#quote').find('.to-destination-option').removeClass('active');
    $('#quote').find('.div-weight').fadeIn();
  });

  $("#quote").delegate('input#parcel-weight', 'change', function() {
    var weight = $(this).val()+" (lbs)";
    $('#quote').find('span.span-weight').html(weight).fadeIn();
    $('#quote').find('.weight-option').removeClass('active');
    $('#quote').find('.from-zip').fadeIn();
  });

  $("#quote").delegate('input#from-zip', 'change', function() {
    var from_zip = $(this).val();
    $('#quote').find('span.collection-zip').html(from_zip).fadeIn();
    $('#quote').find('.from-zip-option').removeClass('active');
    $('#quote').find('.to-zip').fadeIn();
  });

  $("#quote").delegate('input#to-zip', 'change', function() {
    var to_zip = $(this).val();
    $('#quote').find('span.delivery-zip').html(to_zip).fadeIn();
    $('#quote').find('.to-zip-option').removeClass('active');
    $('#quote').find('.div-get-quote').fadeIn();
  });
});
