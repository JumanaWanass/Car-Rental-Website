$(document).ready(function () {
  alert("hi");
  $("#report3Form").submit(function (event) {
    event.preventDefault(); // prevent the default form submission

    var formData = {};
          $(this).serializeArray().forEach(function(item) {
              formData[item.name] = item.value;
          });

    $.ajax({
      method: 'GET',
      url: 'http://localhost:5000/report/3',
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