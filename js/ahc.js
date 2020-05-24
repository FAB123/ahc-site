AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: false
});


(function($) {
  var defaults={
      sm : 540,
      md : 720,
      lg : 960,
      xl : 1140,
      navbar_expand: 'lg',
      animation: true,
      animateIn: 'fadeIn',
  };
  $.fn.bootnavbar = function(options) {

      var screen_width = $(document).width();
      settings = $.extend(defaults, options);

      if(screen_width >= settings.lg){
          $(this).find('.dropdown').hover(function() {
              $(this).addClass('show');
              $(this).find('.dropdown-menu').first().addClass('show');
              if(settings.animation){
                  $(this).find('.dropdown-menu').first().addClass('animated ' + settings.animateIn);
              }
          }, function() {
              $(this).removeClass('show');
              $(this).find('.dropdown-menu').first().removeClass('show');
          });
      }

      $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
          $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
      });
  };
})(jQuery);


$('.hide').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});


  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  $(document).ready(function(){
    $("#callback-form").validate({
      rules: {
        mobile:
        {
          required: true,
          number: true,
          minlength:10,
          maxlength:10
        }
      },
       messages:
       {
        mobile:
           {
              required:"Mobile Number Must be Required",
              minlength:"Mobile Number Must be a 10 Digit Number",
              maxlength:"Mobile Number Must be a 10 Digit Number",
              number:"Mobile Number Must be a Number"
           }
       },
       errorElement: "div",
       errorLabelContainer: '.mobile-validate',
       
       submitHandler: function(form) {
          alert("Form submitted");
        }
    });

    $("#email-form").validate({
      rules: {
        name:
        {
          required: true,
          minlength:4
        },
        email:
        {
          required: true,
          email: true
        },
        subject:
        {
          required: true,
          minlength:8
        },
        messages:
        {
          required: true,
          minlength:10
        }
      },
       messages:
       {
          name:
          {
            required:"Name Must be Required",
            minlength:"Please enter at least 4 chars"
          },
          email:
          {
            required:"Email Must be Required",
            email:"Please enter a valid email"
          },
          subject:
          {
            required:"Subject Must be Required",
            minlength:"Please enter at least 8 chars of subject"
          },
          messages:
          {
            required:"Please write something for us",
            minlength:"Please enter at least 10 chars of messages"
          }
          
       },
       errorElement: "div",
       errorLabelContainer: '.error-message',
       
       submitHandler: function(form) {
          alert("Form submitted");
          $(".error-message").effect( "shake", { direction: "up", times: 4, distance: 10}, 1000 );
          
        }
    });



  });