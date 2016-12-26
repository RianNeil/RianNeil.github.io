
/*=================================================
===================================================
  NAVBAR
===================================================
=================================================*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//Navbar Box Shadow on Scroll 
$(function(){
    var navbar = $('.navbar');
    $(window).scroll(function(){
        if($(window).scrollTop() <= 40){
       		navbar.css('box-shadow', 'none');
        } else {
          navbar.css('box-shadow', '0px 10px 20px rgba(0, 0, 0, 0.4)'); 
        }
    });  
})


/*=================================================
===================================================
  DISABLE SKROLLR ON MOBILE
===================================================
=================================================*/

$(document).ready(function() {

    s_enabled = false;

    function initOnResize(){

        //if non-mobile
        if ( $(window).width() > 991 ) {
          //if currently un-enabled
          if( !s_enabled ){
                //initialize
                s = skrollr.init();
                //set to enabled
                s_enabled = true;
          }
        }else{
            if(s_enabled){
                s.destroy();
                s_enabled = false;
            }
        }

    }

    //call initially
    initOnResize();

    $( window ).resize(function() {
      initOnResize();
    });


  });

/*=================================================
===================================================
  TYPEDJS
===================================================
=================================================*/

  $( document ).ready(function() {
        $(".typing").typed({
            strings: ["Instantly give your customers beautiful products to purchase in literally minutes!", "Upload your art, choose your products, we'll handle the rest.", "Our global distribution network eliminates international shipping.", "Let's get started."],
            stringsElement: null,
            // typing speed
            typeSpeed: 40,
            // time before typing starts
            startDelay: 0,
            // backspacing speed
            backSpeed: 0,
            // shuffle the strings
            shuffle: false,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: false,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: true,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function( array_pos ) {
              // if(array_pos == this.strings.length-1){
              //     $('.typed-cursor').hide();
              // }
            },
            // callback for reset
            resetCallback: function() {}
        });
  });
  //Height setting as percentage
  $( window ).scroll(function() {
      console.log('scroll');
      if( $(window).width() >= 991 && $(window).width() < 1400 ){
          var min_width = 991;
          var diff = $(window).width() - min_width;
          var amount = Math.floor(100*(.6 - (diff/409)*.2));

          document.getElementById("header-group").style.marginTop = amount.toString()+'% !important';
      }
  });




// $(document).ready(function() {
// 	var s = $(".header-main");
// 	var pos = s.position();		
// 	s.addClass("blur-no");			   
// 	$(window).scroll(function() {
// 		var windowpos = $(window).scrollTop();
// 		if (windowpos >= pos.top & windowpos <=100) {
// 			s.removeClass("blur");	
// 			s.addClass("blur-no");
// 		} else {
// 			s.removeClass("blur-no");
// 			s.addClass("blur");			
// 		}
// 	});
// });


