// (function() {
  
  // toggle mobile button
  // var mobileWidth = $(document).width(); 
  var mobileWidth = window.innerWidth; 

  /* $('.nav-opener').on('click', function(e) {
    e.preventDefault();

    if ( mobileWidth < 767 ) {
      $(this).toggleClass('nav-active')
        .nextAll('.main-nav').find('.nav').slideToggle(300);
    }

  }); */
  document.querySelector('.main-header').addEventListener('click', function(e) {
    e.preventDefault();

    console.log(e.target);
    var elt = this.closest('.header-wrapper');

    if (e.target.className === 'nav-opener') {
      e.target.closest('.header-wrapper').classList.toggle('nav-active');
      e.target.closest('.header-wrapper').classList.toggle('menu-active');
    }

   /*  if ( mobileWidth < 767 ) {
      this.classList.toggle('nav-active');
      elt.classList.toggle('menu-active');
    } */
  })

  // behavior of main menu on window resize
  /* $(window).resize(function() {
    if ( $(document).width() >= 768 ) {
      $('.nav-opener').removeClass('nav-active');
      $('.main-nav').find('.nav').css('display', 'flex');
    } else {
      $('.nav-opener').removeClass('nav-active');
      $('.main-nav').find('.nav').css('display', 'none');
    }
  }); */

// })(jQuery)