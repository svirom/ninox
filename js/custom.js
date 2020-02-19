var mobileWidth = window.innerWidth; 

document.querySelector('.main-header').addEventListener('click', function(e) {
  e.preventDefault();

  console.log(e.target);
  var elt = this.closest('.header-wrapper');

  if (e.target.className === 'nav-opener') {
    e.target.closest('.header-wrapper').classList.toggle('nav-active');
    e.target.closest('.header-wrapper').classList.toggle('menu-active');
  }
})
