function fillTable(jsonData) {
  var table = $('#reportTable');

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


$(document).ready(function () {
  $("#report2Form").submit(function (event) {
    event.preventDefault(); // prevent the default form submission

    var formData = $('#report2Form').serialize();
    console.log(formData);

    $.ajax({
        method: 'GET',
        url: 'http://localhost:5000/report/2',
        data: formData,  // Use form data directly without stringifying for a GET request
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