
$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
});

$(document).ready(function(){
  $('.sidenav').sidenav();
});

$('#kids-banner').focus(function() {
  $('.carousel.carousel-slider').carousel('set', 2);
});

$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});

$('#social-media').focus(function() {
  $('.fixed-action-btn').floatingActionButton('open');
});
    
instance.open();