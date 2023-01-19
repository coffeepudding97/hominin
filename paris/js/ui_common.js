$(function () {
  // 모바일 헤더 gnb
  $('#header .gnb_wrap a').on('click', function () {
    $('#header .nav_inner').addClass('on');
    $('#header .dimmed').addClass('on');
  });
  $('#header .nav_header a').on('click', function () {
    $('#header .nav_inner').removeClass('on');
    $('#header .dimmed').removeClass('on');
  });

  // 메인슬라이더
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      520: {
        slidesPerView: 1,
      },
    },
  });

  var promotionSlider = new Swiper('.promotion_slider', {
    loop: true,
    slidesPerView: 4,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1100: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      520: {
        slidesPerView: 1,
      },
    },
  });

  var productsSlider = new Swiper('.products_slider', {
    loop: true,
    slidesPerView: 5,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      520: {
        slidesPerView: 1,
      },
    },
  });

});
