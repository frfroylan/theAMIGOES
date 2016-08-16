$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".nav-link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  //Add background color to navbar when in mobile mode 
  //remove background once menu items are closed
  $(".navbar-toggle").on('click', function(){
    $('.navbar-header').css('background-color', '#333');
      if($('#mobileMenu').hasClass('in')){
        $('.navbar-header').css('background-color', 'transparent');
      }
      else{
        $('.navbar-header').css('background-color', '#333');
      }
    });

  $(window).scroll(function () {
          // set distance user needs to scroll before we fadeIn navbar
    if ($(this).scrollTop() > 350) {
      $('.navbar').addClass('navbarTransition');
    }else{
      $('.navbar').removeClass('navbarTransition');
    }
  });
});