$(document).ready(function() {
  $(".range-slider-month").hide();
  $("#loan-tenure-month-text").hide();
  
  $(".btn-year").click(function () {
    
    //hide-month && Display Year 
      $(".range-slider-month").hide();
      $("#loan-tenure-month-text").hide();

      $(".range-slider-year").show();
      $("#loan-tenure-year-text").show();
      
      
      //Add Both classes
     
      $(".btn-month").removeClass('btn-primary');
      $(".btn-month").addClass('btn-default');
      
      $(".btn-year").addClass('btn-primary');
      $(".btn-year").removeClass('btn-default');
    
  });
  $(".btn-month").click(function () {
    //hide-month && Display Year 
      $(".range-slider-year").hide();
      $("#loan-tenure-year-text").hide();
      
      $(".range-slider-month").show();
      $("#loan-tenure-month-text").show();

    
    //hide-month && Display Year 
    $(".range-slider-year").hide();
    $(".range-slider-month").show();
    //Add Both classes
    $(".btn-month").removeClass('btn-default');
    $(".btn-month").addClass('btn-primary');
    $(".btn-year").removeClass('btn-primary');
    $(".btn-year").addClass('btn-default');

});

  
  //set and get values on slider 
  $("input[type='range']").change(function() {
     //loan-amont  
      $("#loan-text").val( $("#loan-amount-slider").val());

    //intrest
    $("#intrest-rate-text").val( $("#intrest-rate-slider").val());
    
    //loan-tenure-year-slider
    $("#loan-tenure-year-text").val( $("#loan-tenure-year-slider").val());
    
    //loan-tenure-month-slider
    $("#loan-tenure-month-text").val( $("#loan-tenure-month-slider").val());
  })
   //set and get values on slider 
  
  
  
   $("input[type='text']").change(function() {
      //loan-amont  
    $("#loan-amount-slider").val($("#loan-text").val());
    //intrest 
    $("#intrest-rate-slider").val($("#intrest-rate-text").val());
    ////loan-tenure-year-slider
    $("#loan-tenure-year-slider").val($("#loan-tenure-year-text").val());
    $("#loan-tenure-month-slider").val($("#loan-tenure-month-text").val());
    
  })

});

