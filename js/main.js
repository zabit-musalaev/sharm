$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    noSwiping: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  })
  
  $('.sticky__burger').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('sticky__burger-active');
    $('.sticky').toggleClass('sticky-active');
		$('.over').toggleClass('overlay');
		$('.sticky__social').toggleClass('sticky__social-active');
		$('.sticky__text').toggleClass('sticky__text-active');
		$('.content').toggleClass('content-active');
  })

  new WOW().init();

  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      var modalDialog = $('.modal__dialog');

      modal.on('click', function(e){
        if (e.target != modalDialog[0] && modalDialog.has(e.target).length === 0) {
          modal.removeClass('modal--visible');
        }
      })

      modalBtn.on('click', function () {
      modal.toggleClass('modal--visible');
      });

      closeBtn.on('click', function () {
      modal.toggleClass('modal--visible');

  });

  $('[type=tel]').mask('+7(999) 999-99-99', {placeholder: "Ваш номер телефона"});

}); 

  
