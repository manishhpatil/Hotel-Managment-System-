// Get the form element
const bookingForm = document.getElementById('booking-form');

// Add event listener for form submission
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkInDate = document.getElementById('check-in-date').value;
    const checkOutDate = document.getElementById('check-out-date').value;
    const numOfGuests = document.getElementById('num-of-guests').value;
    
    // You can perform validation on form inputs here

    // Construct booking object
    const booking = {
        name: name,
        email: email,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        numOfGuests: numOfGuests
    };

    // You can now send this booking object to your server using AJAX fetch or XMLHttpRequest
    // For demonstration purposes, we'll just log the booking object to the console
    console.log('Booking:', booking);

    // Clear form inputs after submission
    bookingForm.reset();
});
