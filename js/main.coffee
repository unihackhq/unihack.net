---
---

$ ->

  navActive = ->
    wrap = $('.slideover-wrap')
    navBtnIcon = $('.mobile-nav-btn i')
    wrapBtn = $('.mobile-inner-btn')
    navBtn = $('.mobile-nav-btn')
    if wrap.hasClass('is-open') and navBtn.hasClass('is-open')
      wrap.removeClass('is-open')
      navBtn.removeClass('is-open')
      navBtnIcon.addClass('fa-bars')
      navBtnIcon.removeClass('fa-times')
    else
      wrap.addClass('is-open')
      navBtn.addClass('is-open')
      navBtnIcon.addClass('fa-times')
      navBtnIcon.removeClass('fa-bars')
    false

  $('.mobile-inner-btn').on 'click', navActive
  $('.mobile-nav-btn').on 'click', navActive

  $(window).scroll ->
    header = $('#gl-head')
    if($(window).scrollTop() > 100 and !header.hasClass('docked'))
      header.addClass('docked')
    else if($(window).scrollTop() <= 100 and header.hasClass('docked'))
      header.removeClass('docked')
