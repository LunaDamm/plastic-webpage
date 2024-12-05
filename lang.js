/* MED HJÆLP AF CHATGPT :D */

document.addEventListener('DOMContentLoaded', function () {
    const languageCheckbox = document.querySelector('.languageCheckbox');
    const textEN = document.querySelectorAll('.textEN');
    const textDK = document.querySelectorAll('.textDK');

    function toggleLanguage() {
      if (languageCheckbox.checked) {
        textEN.forEach(element => element.style.display = 'none');
        textDK.forEach(element => element.style.display = 'block');
      } else {
        textEN.forEach(element => element.style.display = 'block');
        textDK.forEach(element => element.style.display = 'none');
      }
    }

    languageCheckbox.addEventListener('change', toggleLanguage);
  
    toggleLanguage();
  });
  