$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  $('.sidenav').sidenav();
  $('.fixed-action-btn').floatingActionButton();
});

$('#kids-banner').focus(function() {
  $('.carousel.carousel-slider').carousel('set', 2);
});

$('#social-media').focus(function() {
  $('.fixed-action-btn').floatingActionButton('open');
});