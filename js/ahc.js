AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: false
});

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});


$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation();
});

// make it as accordion for smaller screens
if ($(window).width() < 992) {
  $('.dropdown-menu a').click(function(e){
    e.preventDefault();
      if($(this).next('.submenu').length){
        $(this).next('.submenu').toggle();
      }
      $('.dropdown').on('hide.bs.dropdown', function () {
     $(this).find('.submenu').hide();
  })
  });
}

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
            minlength:"Please enter at least 10 chars of subject"
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