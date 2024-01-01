$(document).ready(function () {
    $("#report4Form").submit(function (event) {
      event.preventDefault(); // prevent the default form submission
  
      // Create FormData object
      var formData = new FormData(this);
  
      // Make an Ajax request
      $.ajax({
        url: 'http://localhost:5000/report/4',
        method: 'GET',
        processData: false, // Prevent jQuery from processing the data
        contentType: false, // Let the server specify the content type
        data: formData,
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