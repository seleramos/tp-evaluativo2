function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var attendance = document.getElementById("attendance").value;
  
    var errorMessages = [];
  
    if (firstName === "") {
      errorMessages.push("Ingrese su nombre.");
    }
  
    if (lastName === "") {
      errorMessages.push("Ingrese su apellido.");
    }
  
    if (email === "") {
      errorMessages.push("Ingrese su correo electrónico.");
    } else {
      var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(emailRegex)) {
        errorMessages.push("Ingrese un correo electrónico válido.");
      }
    }
  
    if (phone === "") {
      errorMessages.push("Ingrese su número de teléfono.");
    } else {
      var phoneRegex = /^\d{10}$/;
      if (!phone.match(phoneRegex)) {
        errorMessages.push("Ingrese un número de teléfono válido (10 dígitos).");
      }
    }
  
    if (attendance === "") {
      errorMessages.push("Seleccione sus preferencias de asistencia.");
    }
  
    if (errorMessages.length > 0) {
      var errorContainer = document.createElement("div");
      errorContainer.className = "error";
      var errorList = document.createElement("ul");
  
      for (var i = 0; i < errorMessages.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = errorMessages[i];
        errorList.appendChild(listItem);
      }
  
      errorContainer.appendChild(errorList);
      var form = document.getElementById("registrationForm");
      form.insertBefore(errorContainer, form.firstChild);
  
      return false;
    }
  
    return true;
  }
  