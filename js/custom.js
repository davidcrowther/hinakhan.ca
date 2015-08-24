$(document).ready(function() {

   $('section.page-header').anystretch("img/page-header-1.jpg", {speed: 150}); 

  $('form.form-1').validate({
      rules: {
          name: {
          minlength: 2,
          required: true
        },  
          email: {
          minlength: 2,
          required: true,
          email: true
        }  
      },
      highlight: function(label) {
        $(label).closest('.form-control').addClass('has-error');
      },
      success: function(label) {
        $(label).text('OK!').addClass('valid').closest('.form-control').addClass('has-success');

      }, 
      messages: { 
       email: {
         email: "Your email address must be in the format of 'email@yourdomain.com'"
        }
      }
    });

    $('form.form-2').validate({
      rules: {
          name: {
            minlength: 2,
            required: true
          },  
          email: {
          minlength: 2,
          required: true,
          email: true
        }  
      },
      highlight: function(label) {
        $(label).closest('.form-control').addClass('has-error');
      },
      success: function(label) {
        $(label).text('OK!').addClass('valid').closest('.form-control').addClass('has-success');

      }, 
      messages: { 
       email: {
         email: "Your email address must be in the format of 'email@yourdomain.com'"
        }
      }
    });


});