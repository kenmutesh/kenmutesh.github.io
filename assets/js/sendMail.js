document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".php-email-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const formData = new FormData(this);
      const xhr = new XMLHttpRequest();
  
      xhr.open(this.method, this.action);
      xhr.setRequestHeader("Accept", "application/json");
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
  
        if (xhr.status === 200) {
          form.reset();
          const successMessage = form.querySelector(".sent-message");
          if (successMessage) {
            successMessage.style.display = "block";
          }
        } else {
          const errorMessage = form.querySelector(".error-message");
          if (errorMessage) {
            errorMessage.style.display = "block";
            errorMessage.textContent = "Oops! There was a problem sending your message.";
          }
        }
      };
  
      xhr.send(formData);
    });
  });
  