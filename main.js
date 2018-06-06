$(document).ready(function() {
  
  function bubbleMaker(bubblenum) {
    let bubblestring = String(bubblenum) 
    
    $(".bubble" + bubblestring ).mouseover(function() {
      $("#popper" + bubblestring)[0].play('pop'+ bubblestring);
      $(this).addClass('pop');
      $(".bubble"+ bubblestring + " #popper" + bubblestring).removeAttr('id');
    });
  }
  
    bubbleMaker(1);
    bubbleMaker(2);
    bubbleMaker(3);

});
