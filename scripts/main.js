$('.home-wrapper article').click(function(event) {
  event.preventDefault();
  window.location = $(this).find('a').attr('href');
});
