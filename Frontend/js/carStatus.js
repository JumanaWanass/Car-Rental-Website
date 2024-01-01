// carStatus.js

function changeCarStatus() {
    // Get values from the form
    var carID = document.getElementById("carID").value;
    var newStatus = document.getElementById("newStatus").value;

    // Create an object with the data
    var data = {
        carID: carID,
        newStatus: newStatus
    };

    // Make an Ajax request
    $.ajax({
        type: "POST", // Change the request type as needed
        url: "/changeCarStatus", // Update the URL to your server endpoint
        data: data,
        success: function (response) {
            // Handle success (if needed)
            console.log("Car status changed successfully");
        },
        error: function (error) {
            // Handle error (if needed)
            console.error("Error changing car status", error);
        }
    });
}
