document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Create an object to send to the server
    const formData = {
      name: name,
      email: email,
      message: message
    };
  
    // Send the form data to the server
    fetch('sendMessage.php', { // Replace 'sendMessage.php' with your server-side script
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    });
  });
  