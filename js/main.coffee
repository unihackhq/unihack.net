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

  cityActive = ->
    list = $('.city-nav ul')
    icon = $('.city-nav a i')
    btn = $('.city-nav a')
    if list.hasClass('is-open') and btn.hasClass('is-open')
      list.removeClass('is-open')
      btn.removeClass('is-open')
      icon.addClass('fa-caret-down')
      icon.removeClass('fa-caret-up')
    else
      list.addClass('is-open')
      btn.addClass('is-open')
      icon.removeClass('fa-caret-down')
      icon.addClass('fa-caret-up')
    false

  $('.mobile-inner-btn').on 'click', navActive
  $('.mobile-nav-btn').on 'click', navActive
  $('.city-nav-button').on 'click', cityActive

  $(window).scroll ->
    header = $('#gl-head')
    if($(window).scrollTop() > 100 and !header.hasClass('docked'))
      header.addClass('docked')
    else if($(window).scrollTop() <= 100 and header.hasClass('docked'))
      header.removeClass('docked')
