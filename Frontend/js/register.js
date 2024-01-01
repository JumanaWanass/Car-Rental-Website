$(document).ready(function () {
  $.ajax({
      type: 'GET',
      url: 'http://localhost:5000/checkSession',
      success: function (response) {
          if (response.sessionExists) {
              window.location.href = '../Frontend/index.html';
          }
      },
      error: function (error) {
          console.error('Error checking session:', error);
      }
  });

  $("#registrationForm").submit(function (e) {
      e.preventDefault();
      var formData = {};
      $(this).serializeArray().forEach(function (item) {
          formData[item.name] = item.value;
      });

      $.ajax({
          method: "POST",
          url: "http://localhost:5000/customer",
          data: JSON.stringify(formData),
          contentType: 'application/json',
          success: function (response) {
              console.log('Success:', response);
              // Handle success, maybe redirect to another page
          },
          error: function (error) {
              // Handle errors
              console.log('Error:', error);

              if (error.status === 400) {
                  // Validation error - display the error message
                  console.log('Validation Error:', error.responseJSON.error);
              } else {
                  // Other errors - display a generic error message
                  console.log('Unexpected Error. Please try again later.');
              }
          },
      });
  });
});
