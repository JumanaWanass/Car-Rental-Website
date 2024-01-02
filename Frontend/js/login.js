// Function to set a session cookie with the name 'sessionId'
function setSessionIdCookie(value) {
  document.cookie = `connect.sid=${value};path=/`;
}

// Function to get the value of the 'sessionId' cookie
function getSessionIdCookie() {
  const name = 'sessionId';
  const cookieArray = document.cookie.split(';');
  for (const cookie of cookieArray) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null; // 'sessionId' cookie not found
}

$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: 'http://localhost:5000/checkSession', // Replace with your actual server route
        dataType: 'json',
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
              success: function (response) {
                Swal.fire(
                  'Success!',
                  'You have logged in successfully!',
                  'success'
                ).then(() => {
                  window.location.href = '../Frontend/index.html'; // Replace with your target HTML page
                })
              },
              error: function (error) {
                    Swal.fire({
                      title: 'Login failed!',
                      text: error.responseJSON.error,
                      icon: 'error',
                      confirmButtonText: 'Understand!'
                    }).then((e) => {
                      return false;
                    });
              },
          });
    });
    
    
});

