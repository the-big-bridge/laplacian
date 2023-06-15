// password.js
window.addEventListener('DOMContentLoaded', function() {
    // Code here will be executed after the page finishes loading
    
    // Get the password input, submit button, and error message elements
    const passwordInput = document.getElementById('password-input');
    const submitButton = document.getElementById('submit-button');
    const errorMessage = document.getElementById('error-message');
  
    // Function to handle password validation and redirection
    function handlePasswordSubmit() {
      const password = passwordInput.value;
  
      if (password === '0415') {
        window.location.href = 'tonext.html';
      } else {
        errorMessage.textContent = 'Nah. Format: mm/dd, e.g., 1201 for December 1st.';
      }
    }
  
    // Add an event listener to the submit button
    submitButton.addEventListener('click', handlePasswordSubmit);
  });
  