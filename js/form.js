document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const request = {
      name: name,
      email: email,
      message: message
    };

    fetch('http://localhost:3000/contactRequests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request)
    })
  });
});

