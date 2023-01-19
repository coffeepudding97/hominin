$(function () {
  // gnb
  $('#header .gnb')
    .on('mouseenter', function () {
      $('#header').addClass('on');
    })
    .on('mouseleave', function () {
      $('#header').removeClass('on');
    });

  //language버튼
  $('.btn_lang').on('click', function () {
    $('.lang_box').toggle();
  });

  // 메인슬라이더

  var bullet = ['여러 고객 할인 행사', '봄맞이 할인행사', '카카오뱅크 이벤트', '만나서 반갑데이', '예약주문이벤트'];

  var mainSlider = new Swiper('.main_slider', {
    direction: 'vertical',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '"><span>' + bullet[index] + '</span></div>';
      },
    },
  });

  //메인메뉴
  var menuSlider = new Swiper('.menu_slider', {
    //컬럼 슬라이드의 갯수
    slidesPerView: 4,
    // slidesPerView: 'auto',
    spaceBetween: 30,
    simulateTouch: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 메인 탭메뉴
  $('.main_menu .tab_menu li').on('click', function (e) {
    e.preventDefault();

    $(this).addClass('active').siblings().removeClass('active');

    var idx = $(this).index();

    $('.main_menu .menu_slider_wrap').eq(idx).addClass('active').siblings().removeClass(' active');
  });

  // 서브탭메뉴
  $('.sub_tab_list li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // 서브페이지네이션
  $('.board_pagination .number').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
  });

  // 아이디저장
  $('#rememberId').on('click', function () {
    if ($(this).is(':checked')) {
      $('.agree_check').prop('checked', true);
    } else {
      $('.agree_check').prop('checked', false);
    }
  });
});
