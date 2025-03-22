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
    .then(data => {
      console.log("New contact request added:", data);
      
      showNotification("Jūsų žinutė sėkmingai išsiųsta!");

      name.value = "";
      name.value = "";
      name.value = "";
    })
    .catch(error => {
      console.error("Error adding contact request:", error);
      
      showNotification("Nepavyko išsiųsti žinutės. Bandykite dar kartą", true);
    });
  });
});

function showNotification(message, isError = false) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.backgroundColor = isError ? '#f44336' : '#4caf50';
  notification.style.color = 'white';
  notification.style.padding = '10px';
  notification.style.borderRadius = '8px';
  notification.style.fontSize = '16px';
  notification.style.zIndex = '1000';
  
  // Append to the body
  document.body.appendChild(notification);

  // Automatically remove the notification after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);
}
