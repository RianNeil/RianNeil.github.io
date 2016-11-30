// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

// Initialize Tootlips and Popovers
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



$(function() {                     // When the page has loaded,
  $('h3').waypoint(               // create a waypoint
    function() {
      alert("Waypoint reached.");
    }
  )
});