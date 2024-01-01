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

    $("#loginForm").submit(function (e) {
        e.preventDefault();
        
        var formData = {};
        
        $(this).serializeArray().forEach(function(item) {
            formData[item.name] = item.value;
        });
    
        // Use :checked:first to select the first checked radio button with the specified name
        var selectedRole = $("input[name='role']:checked:first").val();
        
        // Use the selectedRole to construct the URL
        var url = (selectedRole === 'admin')
            ? 'http://localhost:5000/employee/login'
            : 'http://localhost:5000/customer/login';
        
        $.ajax({
            method: "POST",
            url: url,
            data: JSON.stringify(formData),
            contentType: 'application/json',
            dataType: 'json',
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

