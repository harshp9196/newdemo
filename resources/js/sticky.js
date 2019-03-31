$(document).ready(function() {
    
    
	
	
    /* Scroll on buttons */
$('.sticky-nav-on--left').click(function () {
 $('.sticky-left').css("width","400px"); 
});
$('.sticky-close-btn-left').click(function () {
  $('.sticky-left').css("width","0");
});



$('.js--nav-icon').click(function () {
    $('.sticky-left').css("width","100%"); 
   });

   
$('.sticky-nav-on1').click(function () {
  $('.sticky').css("width","100%");
  $('.sticky-close-btn').show();
  $('#pp-nav').hide();  
 });

$('.sticky-close-btn').click(function () {
  $('.sticky').css("width","0");
  $('.sticky-close-btn').hide();
  setTimeout('$("#pp-nav").show()',500);
});




/* For the sticky navigation */


});