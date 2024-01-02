var selectedCarID;

    // Function to make a reservation
    function makeReservation() {
        // Collect reservation information from the form
        var reservationData = {
            country: $('#country').val(),
            paymentStatus: 'Pending', // Set paymentStatus to Pending initially
            pickupDate: $('#pickupdate').val(),
            pickupStreet: $('#pickupstreet').val(),
            pickupCity: $('#city').val(), // Assuming the city input is used for pickupCity
            returnDate: $('#returndate').val(),
            returnStreet: $('#returnstreet').val(),
            returnCity: $('#city').val(), // Assuming the city input is used for returnCity
            carID: selectedCarID,
        };

        // Make an AJAX request to the backend
        $.ajax({
            method: "POST",
            url: "http://localhost:5000/reservation/",  // Adjust the URL based on your server
            contentType: "application/json",
            data: JSON.stringify(reservationData),
            success: function (response) {
                console.log('Reservation success:', response);
                updateCarStatus(selectedCarID, 'Reserved');
            },
            error: function (error) {
                console.log('Error making reservation:', error);
                // Handle errors
            },
        });
    }

function updateCarStatus(carID, status) {
    // Update the car status to 'Reserved' in the Car table
    const updateData = { status: status };
    const whereClause = { carID: carID };

    Car.updateByAttributes(whereClause, updateData)
        .then((result) => {
            console.log('Car status updated:', result);
            // Add any additional logic after updating car status
        })
        .catch((error) => {
            console.log('Error updating car status:', error);
            // Handle errors
        });
}

function showReservationForm() {
    var reservationInfoSection = document.getElementById("reservationInfoSection");
    reservationInfoSection.style.display = "block";
    }

function updateCarList(cars) {
    var carResults = $('#carResults');
    carResults.empty();
    var listItem;

    cars.forEach(function (car) {

    listItem = $('<li class="list-group-item"></li>').text(car.make + ' ' + car.model);

    listItem.click(function() {
        selectedCarID = car.carID;
        console.log('Clicked on car with ID:', selectedCarID);
        showReservationForm();

    });

    carResults.append(listItem);
});
}


$(document).ready(function () {
// Assuming the button has an ID of "reserveButton"
    $('#reserveButton').on('click', function () {
        makeReservation(); // Replace 'exampleCarID' with the actual car ID
    });
});

function myFunction(dropdownId) {
    document.getElementById(dropdownId).classList.toggle("show");
}

function filterFunction(inputId, dropdownId) {
    var input, filter, ul, li, a, i;
    input = document.getElementById(inputId);
    filter = input.value.toUpperCase();
    div = document.getElementById(dropdownId);
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}