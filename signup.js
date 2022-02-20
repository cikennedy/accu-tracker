// change this function to post new user information - currently is just login script
async function loginFormHandler(event) {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const firstName = document.querySelector('.first-name-signup').value.trim();
    const lastName = document.querySelector('.last-name-signup').value.trim();
    const email = document.querySelector('.email-signup').value.trim();
    const password = document.querySelector('.password-signup').value.trim();
    
  
    if (firstName && lastName && email && password) {
      // Send the email and password to the server
      const response = await fetch('api/users/signup', {
        method: 'post',
        body: JSON.stringify({ firstName, lastName, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // Sends user to the dashboard if the login succeeds
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        // alert(response.statusText);
        alert("Error, please try again");
  
      }
    }
  };
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);