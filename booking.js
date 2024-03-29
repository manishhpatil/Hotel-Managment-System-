document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Reset error message
    document.getElementById('errorMessage').textContent = '';
  
    // Retrieve input values
    var checkInDate = document.getElementById('checkInDate').value;
    var checkOutDate = document.getElementById('checkOutDate').value;
    var numGuests = document.getElementById('numGuests').value;
  
    // Perform validation
    if (!checkInDate || !checkOutDate || !numGuests) {
      document.getElementById('errorMessage').textContent = 'Please fill out all fields.';
      return;
    }
  
    // Perform further validation if needed (e.g., date comparison)
  
    // If validation passes, proceed with booking
    alert('Booking successful!');
  });
  


 