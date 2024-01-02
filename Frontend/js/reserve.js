function makeReservation(carID) {
    // Assuming you have selectedCarID as the selected car ID
    var selectedCarID = carID; // Get the selected car ID based on your logic

    // Collect reservation information from the HTML form
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
        empID: 'EMPLOYEE_ID', // Set the employee ID based on your logic
        custID: 'CUSTOMER_ID', // Set the customer ID based on your logic
    };

    // Create a reservation using the Reservation class
    Reservation.createReservation(reservationData)
        .then((result) => {
            console.log('Reservation success:', result);
            // Add any additional logic after successful reservation
            // For example, update the car status to 'Reserved'
            updateCarStatus(selectedCarID, 'Reserved');
        })
        .catch((error) => {
            console.log('Error making reservation:', error);
            // Handle errors
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

$('#carResults').on('click', 'li', function() {
selectedCarID = $(this).data('carID');
console.log('Clicked on car with ID:', selectedCarID);

});


$(document).ready(function () {
// Assuming the button has an ID of "reserveButton"
    $('#reserveButton').on('click', function () {
        makeReservation(selectedCarID); // Replace 'exampleCarID' with the actual car ID
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