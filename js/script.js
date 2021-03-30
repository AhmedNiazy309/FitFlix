$('.count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 9000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});
$(function () {
  'use strict';
  $('.featured-work ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.shuffle-imgs .col-md').css('opacity', 1);
    } else {
      $('.shuffle-imgs .col-md').css('opacity', '.08');
      $($(this).data('class')).parent().css('opacity', 1);
    }
  });

});
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('nav').addClass('header-scrolled fixed-top');
    // $('.navbar-nav').addClass('ml-auto')
    // $('.navbar-nav').removeClass('m-auto')
  } else {
    $('nav').removeClass('header-scrolled fixed-top');
    // $('.navbar-nav').removeClass('ml-auto');s
    // $('.navbar-nav').addClass('m-auto');
  }
});
var nav_sections = $('section');
var main_nav = $('.nav-menu, #mobile-nav');

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop() + 200;

  nav_sections.each(function () {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
      }
      main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    }
    if (cur_pos < 300) {
      $(".nav-menu ul:first li:first").addClass('active');
    }
  });
});