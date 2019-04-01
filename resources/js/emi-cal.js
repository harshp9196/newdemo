$(document).ready(function() {
  $(".range-slider-month").hide();
  function resetBtn() {
    $(".btn-year").addClass('btn-active');
    $(".btn-year").removeClass('btn-default');
  }
  $(".btn-year").click(function () {
    $("#loan-tenure-text").val("0");
    $("#loan-tenure-year-slider").val("0");
    
    
      //hide-month && Display Year 
      $(".range-slider-month").hide();
      $(".range-slider-year").show();
      //Add Both classes
      $(".btn-month").removeClass('btn-primary');
      $(".btn-month").addClass('btn-default');
      $(".btn-year").addClass('btn-primary');
      $(".btn-year").removeClass('btn-default');
    
  });
  $(".btn-month").click(function () {
    $("#loan-tenure-text").val("0");
    $("#loan-tenure-month-slider").val("0");
    $("#loan-tenure-text").val( $("#loan-tenure-year-slider").val());
    
    
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
    $("#loan-tenure-text").val( $("#loan-tenure-year-slider").val());
    
    $("#loan-tenure-text").val( $("#loan-tenure-month-slider").val());
  })
   //set and get values on slider 
  $("input[type='text']").change(function() {
      //loan-amont  
    $("#loan-amount-slider").val($("#loan-text").val());
    //intrest 
    $("#intrest-rate-slider").val($("#intrest-rate-text").val());
    
  })

});

