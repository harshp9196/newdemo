$(document).ready(function() {
 
    // PRELOADER
    $('.preload-img').fadeOut("slow");

    //modal louncher just afther luch website 
    $('#myModal').modal('show');
//page pilling
var deleteLog = false;

    //page pilling scroll
  	$('#pagepiling').pagepiling({
     
      menu: '#menu',
	    		anchors: ['page1', 'page2', 'page3'],
			    sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
			    loopTop: true,
          loopBottom: true,
          //once documnet is ready this method will ne call 

          afterRender: function(){
            //funtion will call when ever screen is reloaded
          },
          onLeave: function(index, nextIndex, direction){
            //after leaving section 2
            if(index == 1 && (direction =='down' || direction == 'up') ){
              
            }
          }, 
          afterLoad: function(anchorLink, index){
            //using index
            if(index == 1){
              $(".main-nav li a").css("color", "#555");
            }else{
              $(".main-nav li a").css("color", "#f1f1f1");
            }
      
          },
          navigation: {
            'textColor': '#f2f2f2',
            'bulletsColor': '#ccc',
            'position': 'right',
            'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
        }

        
  });
   //sticky nav on off logic 
   $('.sticky-close-btn').hide();
//Load First Page animations on Modal s
   $('.popup-btn').click(function () {
   
    $('.btn--animated').css("animation","");
    $('.btn--animated').css("animation-fill-mode","");
   
    $('.btn--animated').css("animation","moveInBottom 1s ease-out 1s");
    $('.btn--animated').css("animation-fill-mode","backwards");
   });
   
    /* Scroll on buttons */
   $('.sticky-nav-on').click(function () {
     $('.sticky').css("width","400px");
     $('.sticky-close-btn').show();
     $('#pp-nav').hide();  
    });

 $('.sticky-close-btn').click(function () {
      $('.sticky').css("width","0");
      $('.sticky-close-btn').hide();
      setTimeout('$("#pp-nav").show()',500);
    });
   
   
});