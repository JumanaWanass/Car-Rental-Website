$(document).ready(function () 
{
    $.ajax({
        type: 'GET',
        url: 'http://localhost:5000/checkSession',
        success: function (response) {
            if (response.sessionExists) {
                window.location.href = '../Frontend/index.html';
            } else {
                $("#message").text("No active session found.");
            }
        },
        error: function (error) {
            $("#message").text('Error checking session: ' + error.message);
        }
    });

  $("#registrationForm").submit(function (e) {
    e.preventDefault();
    var formData = {};
    $(this).serializeArray().forEach(function (item) {
        formData[item.name] = item.value;
    });
    var messageElement = $("#message");

    $.ajax({
        method: "POST",
        url: "http://localhost:5000/customer",
        data: JSON.stringify(formData),
        contentType: 'application/json',
        success: function (response) {
            messageElement.removeClass("text-danger").addClass("text-success").text("Registration successful. Redirecting...");
 
            setTimeout(function () {
                window.location.href = '../Frontend/index.html';
            }, 2000); // Redirect after 2 seconds
        },
        error: function (error) {
            if (error.status === 400) {
                // Validation error - display the error message
                messageElement.removeClass("text-success").addClass("text-danger").text('Validation Error: ' + error.responseJSON.error);
            } else {
                // Other errors - display a generic error message
                messageElement.removeClass("text-success").addClass("text-danger").text('Unexpected Error. Please try again later.');
            }
        },
    });
 });
 });