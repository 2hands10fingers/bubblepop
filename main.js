$(document).ready(function() {
  
  function bubbleMaker(bubblenum) {
    $(".bubble" + String(bubblenum)).mouseover(function() {
      $("#popper" + String(bubblenum))[0].play('pop'+ String(bubblenum));
      $(this).addClass('pop');
      $(".bubble"+ String(bubblenum) + " #popper" + String(bubblenum)).removeAttr('id');
    })
  }
  
bubbleMaker(1);
bubbleMaker(2);
bubbleMaker(3);

});
