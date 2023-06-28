

$(function() {


  $(".reviews__slider").slick({
    dots: true,
    arrows: true,
    appendDots: $(".reviews__slide-dots"),
    prevArrow: $(".reviews__arrow--prev"),
    nextArrow: $(".reviews__arrow--next")
  });

});

function linkActive() {
  let links = document.querySelectorAll('.menu__link');

  links.forEach(function(link) {
    link.addEventListener('click', function() {
      
      links.forEach(function(link) {
        link.classList.remove('menu__link--active');
      });

      event.target.classList.add('menu__link--active');
    });
  });
}

linkActive(); 



window.addEventListener('scroll', function() {
  const header = document.querySelector('.header__top');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});





mixitup('.categories__card-list');