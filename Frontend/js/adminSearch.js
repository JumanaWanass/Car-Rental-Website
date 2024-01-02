function fillTable(jsonData) {
  var table = $('#adminSearchTable');

  // Clear existing rows
  table.find('tbody').empty();

  // Update headers based on the keys of the first object in jsonData
  var headers = table.find('thead tr');
  headers.empty();
  $.each(jsonData[0], function (key, value) {
    headers.append($('<th>').text(key));
  });

  // Iterate over each object in the JSON array
  $.each(jsonData, function (index, object) {
    // Create a new row
    var row = $('<tr>');

    // Iterate over each property in the JSON object
    $.each(object, function (key, value) {
      // Create a cell with the key as the header and the value as the content
      row.append($('<td>').text(value));
    });

    // Append the row to the table body
    table.find('tbody').append(row);
  });

}

  function populateDropdown(selector, items) {
  var dropdown = $(selector);
  dropdown.empty();

  // Add a default option
  dropdown.append($("<option></option>").attr("value", "").text("Select a make"));

  // Add the makes
  items.forEach(function(item) {
      dropdown.append($("<option></option>").attr("value", item).text(item));
  });}


// Remove the fetchModels call from fetchMakes
function fetchMakes() {
  $.ajax({
      method: "GET",
      url: "http://localhost:5000/car/make-model-combinations",
      success: function (response) {
          // Extract unique makes
          let makes = [...new Set(response.map(item => item.make))];
          // Populate the 'make' dropdown menu
          populateDropdown('#make', makes);
      },
      error: function (error) {
          console.log('Error:', error);
      },
  });
}

// Attach a change event listener to the makes dropdown
$('#make').on('change', function() {
  fetchModels($(this).val());
});



function fetchModels(make) {
  var modelDropdown = $('#model');
  modelDropdown.prop('disabled', true); // Disable the model dropdown

  $.ajax({
      method: "GET",
      url: "http://localhost:5000/car/make-model-combinations",
      success: function (response) {
          // Filter models for the selected make
          let models = response.filter(item => item.make === make).map(item => item.model);
          // Populate the 'model' dropdown menu
          populateDropdown('#model', models);
          modelDropdown.prop('disabled', false); // Enable the model dropdown
      },
      error: function (error) {
          console.log('Error:', error);
          modelDropdown.prop('disabled', false); // Enable the model dropdown even if the AJAX call fails
      },
  });
}

$(document).ready(function() {
  fetchMakes();

  $("form").submit(function(e) {
    e.preventDefault();
    var formData = {};
          $(this).serializeArray().forEach(function(item) {
              formData[item.name] = item.value;
          });

    $.ajax({
      method: "GET",
      url: "http://localhost:5000/admin/search",  // Change the URL to match your server
      data: JSON.stringify(formData),  // Convert form data to JSON string
              success: function (response) {
                fillTable(response);
                  console.log('Success:', response);
              },
              error: function (error) {
                  // Handle errors
                  console.log('Error:', error);
              },
    });
  });
});

function fetchAvailableCars(country, city) {
  $.ajax({
      method: "GET",
      url: `http://localhost:5000/car/search?attribute=status&value=Available&country=${country}&city=${city}`,
      success: function (response) {
          updateCarList(response);
      },
      error: function (error) {
          console.log('Error:', error);
      },
  });
}

// Add an event listener for the search button
$('#searchCarsBtn').on('click', function () {
  var country = $('#country').val();
  var city = $('#city').val();
  
  // Call the function to fetch available cars with country and city parameters
  fetchAvailableCars(country, city);
});

// $(document).ready(function() {
//   $("form").submit(function(e) {
//       e.preventDefault();
//       var formData = {};
//       $(this).serializeArray().forEach(function(item) {
//         formData[item.name] = item.value;
//       });
     
//       $.ajax({
//         method: "GET",
//         url: "http://localhost:5000/admin/search",
//         data: {
//           attribute: formData['attribute'],
//           value: formData['value']
//         },
//         success: function (response) {
//           fillTable(response);
//           console.log('Success:', response);
//         },
//         error: function (error) {
//           console.log('Error:', error);
//         },
//       });
//      });
     
// });