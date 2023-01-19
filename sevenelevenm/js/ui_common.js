$(function () {
  // gnb 열기
  $('#header .btn_open').on('click', function () {
    $('.gnb_area').addClass('on');
    $('#header .gnb_dimmed').show();
    $('body').addClass('on');
  });

  $('#header .btn_close').on('click', function () {
    $('.gnb_area').removeClass('on');
    $('#header .gnb_dimmed').fadeOut();
    $('body').removeClass('on');
  });

  $('#header .gnb_dimmed').on('click', function () {
    $('.gnb_area').removeClass('on');
    $('#header .gnb_dimmed').fadeOut();
    $('body').removeClass('on');
  });

  $('.gnb .depth02').hide();

  // gnb 아코디언
  $('.gnb>li>a').on('click', function () {
    $(this).toggleClass('on').parent().siblings().find('>a').removeClass('on');

    $(this).next().slideToggle();
    $(this).parent().siblings().find('.depth02').slideUp();
  });

  // 메인슬라이더
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // 메뉴슬라이더
  var menuSlider = new Swiper('.menu_slider', {
    slidesPerView: '2',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 이벤트 탭메뉴
  $('.event .lnb li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // 상품소개
  $('.lnb_top li + li').hide();
  $('.lnb_top li').on('click', function () {
    $('.lnb_top li + li').slideToggle();
  });

  // 더보기버튼
  $('.product_contents_box li:nth-child(n+4)').hide();
  $('.event_contents_box li:nth-child(n+4)').hide();

  $('.btn_more').on('click', function (e) {
    e.preventDefault();
    $('.product_contents_box li:nth-child(n+4)').show();
    $('.event_contents_box li:nth-child(n+4)').show();
  });

  // 로그인 체크박스
  $('.checkbox_wrap .agree_check').on('click', function () {
    $(this).toggleClass('checked');
  });
});
