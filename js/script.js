$(document).ready(function() {
  let speed = 500,
    autoSwitch = true,
    autoSwitchSpeed = 4000;

  $('.slide')
    .first()
    .addClass('active');

  $('.slide').hide();
  $('.active').show();

  $('#next').on('click', nextSlide);

  $('#prev').on('click', prevSlide);

  if (autoSwitch) {
    setInterval(nextSlide, 1000);
  }

  function nextSlide() {
    $('#next').on('click', function() {
      $('.active')
        .removeClass('active')
        .addClass('old-active');
      if ($('.old-active').is(':last-child')) {
        $('.slide')
          .first()
          .addClass('active');
      } else {
        $('.old-active')
          .next()
          .addClass('active');
      }
      $('.old-active').removeClass('old-active');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
    });
  }

  function prevSlide() {
    $('#prev').on('click', function() {
      $('.active')
        .removeClass('active')
        .addClass('old-active');
      if ($('.old-active').is(':first-child')) {
        $('.slide')
          .last()
          .addClass('active');
      } else {
        $('.old-active')
          .prev()
          .addClass('active');
      }
      $('.old-active').removeClass('old-active');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
    });
  }
});
