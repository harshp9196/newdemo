$(document).ready(function() {
    
    
	
	
	    /* Scroll on buttons */
   $('.sticky-nav-on--left').click(function () {
     $('.sticky-left').css("width","400px"); 
    });
 $('.sticky-close-btn-left').click(function () {
      $('.sticky-left').css("width","0");

	  
	  $('.js--nav-icon').click(function () {
     $('.sticky-left').css("width","400px"); 
    });
      setTimeout('$("#pp-nav").show()',500);
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
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
 
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
});