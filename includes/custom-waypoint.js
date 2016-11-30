var $wayFadeDown = $('.waypoint-fade-down');

var $wayUp = $('.waypoint-up');
var $wayRight = $('.waypoint-right');
var $wayLeft = $('.waypoint-left');
var $wayDown = $('.waypoint-down');
var $wayRotate = $('.waypoint-rotate');

$wayFadeDown.css('opacity', 0);
$wayFadeDown.waypoint(function(){
	$wayFadeDown.addClass('animated zoomInDown');
	$wayFadeDown.css('opacity', 1);
}, {offset:'60%'}); 

$wayUp.css('opacity', 0);
$wayUp.waypoint(function(){
	$wayUp.addClass('animated fadeInUp');
	$wayUp.css('opacity', 1);
}, {offset:'60%'}); 

$wayRight.css('opacity', 0);
$wayRight.waypoint(function(){
	$wayRight.addClass('animated fadeInRight');
	$wayRight.css('opacity', 1);
}, {offset:'60%'}); 

$wayDown.css('opacity', 0);
$wayDown.waypoint(function(){
	$wayDown.addClass('animated fadeInDown');
	$wayDown.css('opacity', 1);
}, {offset:'60%'}); 

$wayLeft.css('opacity', 0);
$wayLeft.waypoint(function(){
	$wayLeft.addClass('animated fadeInLeft');
	$wayLeft.css('opacity', 1);
}, {offset:'60%'}); 

$wayRotate.waypoint(function(){
	$wayRotate.addClass('animated rotateIn');
	$wayRotate.css('opacity', 1);
}, {offset:'60%'}); 




// $(function() {                   
//   $('h3').waypoint(               
//     function() {
//       alert("Waypoint reached.");
//     }
//   )
// });