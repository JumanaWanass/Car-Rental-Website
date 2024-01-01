function fillTable(jsonData) {
  var table = $('#reportTable tbody');

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
      table.append(row);
  });
}

$(document).ready(function () {
  $("#report1Form").submit(function (event) {
    event.preventDefault(); // prevent the default form submission

    var formData = {};
    $(this).serializeArray().forEach(function (item) {
        formData[item.name] = item.value;
    });
    console.log(formData);

    $.ajax({
        method: 'POST',  // Assuming you want to send data via POST method
        url: 'http://localhost:5000/report/1',
        contentType: 'application/json',  // Set the content type to JSON
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