$(document).ready(function() {
  //set and get values on slider 
  $("input[type='range']").change(function() {
      //loan-amont  
      $("#loan-text").val( $("#loan-amount-slider").val());

    //intrest
    $("#intrest-rate-text").val( $("#intrest-rate-slider").val());
      
  })
   //set and get values on slider 
  $("input[type='text']").change(function() {
      //loan-amont  
    $("#loan-amount-slider").val($("#loan-text").val());
    //intrest 
    $("#intrest-rate-slider").val($("#intrest-rate-text").val());
    
  })

});

