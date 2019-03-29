$(document).ready(function() {
  
  $("input[type='range']").change(function() {
    alert($("input:range").val());
    $("input:range").val();
    $('input:range').val( $("input:range").val());

  })
});

