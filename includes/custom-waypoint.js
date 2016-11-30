var $wayUp = $('.waypoint-up');
var $wayRight = $('.waypoint-right');
var $wayDown = $('.waypoint-down');
var $wayLeft = $('.waypoint-left');


$wayUp.css('opacity', 0);
$wayUp.waypoint(function(){
	$wayUp.addClass('animated slideInUp');
	$wayUp.css('opacity', 1);
}, {offset:'60%'}); 

$wayRight.css('opacity', 0);
$wayRight.waypoint(function(){
	$wayRight.addClass('animated slideInRight');
	$wayRight.css('opacity', 1);
}, {offset:'60%'}); 

$wayLeft.css('opacity', 0);
$wayLeft.waypoint(function(){
	$wayLeft.addClass('animated slideInLeft');
	$wayLeft.css('opacity', 1);
}, {offset:'60%'}); 

$wayDown.css('opacity', 0);
$wayDown.waypoint(function(){
	$wayDown.addClass('animated slideInDown');
	$wayDown.css('opacity', 1);
}, {offset:'60%'}); 




// $(function() {                   
//   $('h3').waypoint(               
//     function() {
//       alert("Waypoint reached.");
//     }
//   )
// });