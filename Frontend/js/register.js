$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:5000/checkSession', // Replace with your actual server route
        success: function (response) {
          // If the server responds with a session, redirect to another HTML page
          if (response.sessionExists) {
            window.location.href = '../Frontend/index.html'; // Replace with your target HTML page
          }
        },
        error: function (error) {
          // If the server responds with an error or no session, handle it here
          console.error('Error checking session:', error);
        }
    });

    $("#registrationForm").submit(function (e) {
        e.preventDefault();
        var formData = {};
              $(this).serializeArray().forEach(function(item) {
                  formData[item.name] = item.value;
              });
  
        $.ajax({
          method: "POST",
          url: "http://localhost:5000/customer",  // Change the URL to match your server
          data: JSON.stringify(formData),  // Convert form data to JSON string
                  success: function (response) {
                      console.log('Success:', response);
                  },
                  error: function (error) {
                      // Handle errors
                      console.log('Error:', error);
                  },
        });
      });
});