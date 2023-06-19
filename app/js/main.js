window.addEventListener('scroll', function() {
  const header = document.querySelector('.header__top');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const filterBox = document.querySelectorAll('.categorys__card-item');
const buttons = document.querySelectorAll('.categorys__button');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    console.log('works');

    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
      elem.classList.add('hide');
      if (!elem.classList.contains(filterClass)) {
        elem.classList.remove('hide');
      }
    });
  });
});