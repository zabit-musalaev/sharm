$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
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
  })

}); 

  
