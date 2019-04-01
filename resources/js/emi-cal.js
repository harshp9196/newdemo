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
    
    callAndSetAll();  
  
    

   
  })
   
  
   $("input[type='text']").change(function() {
      //loan-amont  
    $("#loan-amount-slider").val($("#loan-text").val());
    //intrest 
    $("#intrest-rate-slider").val($("#intrest-rate-text").val());
    ////loan-tenure-year-slider
    $("#loan-tenure-year-slider").val($("#loan-tenure-year-text").val());
    $("#loan-tenure-month-slider").val($("#loan-tenure-month-text").val());
    
    callAndSetAll();
    
  })


  function calEmi(p,r,t) {
    // E = (P.r.(1+r)n) / ((1+r)n – 1)
    // Here,
    // P = loan amount i.e principal amount
    // R = Interest rate per month
    // T = Loan time period in year
  
    var emi;
    r = r / (12 * 100); // one month interest 
    emi = (p * r * Math.pow(1 + r, t))  / (Math.pow(1 + r, t) - 1); 
    Math.round(emi);
    $("#loan-emi").text(Math.round(emi));
   var total= calTotalPayable(emi , t) ;
     var intrest=calInterestPayable(total,p);
     setPiechart(p,total);
     return (emi); 
  }
  
  function calInterestPayable(emi,p) {
   var intrest= emi-p
    $("#loan-intrest").text(Math.round(intrest));
    return (intrest);  
  }

  function calTotalPayable(emi,t) {
    var totalAmount=emi*t;
    $("#loan-total-payable").text(Math.round(totalAmount));
    return (totalAmount);  
  }
  function callAndSetAll() {
      
    var t = $('.btn-year');
    var t1 = $('.btn-month');
         
      if (t.hasClass('btn-primary')) {   
        var tenure=$("#loan-tenure-year-slider").val();
        tenure = tenure * 12; 
        
        calEmi($("#loan-text").val(), $("#intrest-rate-text").val(),tenure);
        }
      if (t1.hasClass('btn-primary')) {
            calEmi($("#loan-text").val(), $("#intrest-rate-text").val(),$("#loan-tenure-month-slider").val());
          }
  }
function setPiechart(p,total)
   {
     var a=(p*100)/total;
     var b= 100- a.toFixed(1);

        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',

        // The data for our dataset
        data: {
        labels: ['Total Interest', 'Principal Loan Amount'],
        datasets: [{
            label: 'Total Payment',
            backgroundColor: [
                '#0cb7b1',
                '#0053a0'
            ],
            borderColor: '#caeaf9',
            data: [b,a.toFixed(1)]
        }]
        },

        // Configuration options go here
        options: {}
});
   }

});

