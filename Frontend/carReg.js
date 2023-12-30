<script>
    $(document).ready(function () {
        $("#carForm").submit(function (event) {
            event.preventDefault(); // prevent the default form submission
        
            // Convert form data to a plain JavaScript object
            var formData = {};
            $(this).serializeArray().forEach(function(item) {
                formData[item.name] = item.value;
            });
        
            // Make an Ajax request
            $.ajax({
                url: 'http://localhost:5000/car/create',
                method: 'POST',
                contentType: 'application/json',  // Set content type to JSON
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
</script>