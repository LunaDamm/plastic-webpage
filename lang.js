document.addEventListener('DOMContentLoaded', function () {
    const languageCheckbox = document.querySelector('.languageCheckbox');
    const textEN = document.querySelectorAll('.textEN');
    const textDK = document.querySelectorAll('.textDK');
  
    // Function to toggle the language display
    function toggleLanguage() {
      // Check if the checkbox is checked
      if (languageCheckbox.checked) {
        // Hide English text and show Danish text
        textEN.forEach(element => element.style.display = 'none');
        textDK.forEach(element => element.style.display = 'block');
      } else {
        // Show English text and hide Danish text
        textEN.forEach(element => element.style.display = 'block');
        textDK.forEach(element => element.style.display = 'none');
      }
    }
  
    // Add an event listener for when the checkbox is toggled
    languageCheckbox.addEventListener('change', toggleLanguage);
  
    // Initialize on page load based on the current state of the checkbox
    toggleLanguage();
  });
  