function submitForm(event) {
  event.preventDefault();
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var orderInput = document.getElementById("order");

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var orderError = document.getElementById("orderError");

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  orderError.textContent = "";

  if (nameInput.value === "") {
    nameError.textContent = "Nama harus diisi";
  }

  if (emailInput.value === "") {
    emailError.textContent = "Email harus diisi";
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Email tidak valid";
  }

  if (passwordInput.value === "") {
    passwordError.textContent = "Sandi harus diisi";
  }

  if (orderInput.value === "") {
    orderError.textContent = "Pesanan harus diisi";
  }

  if (nameInput.value !== "" && emailInput.value !== "" && isValidEmail(emailInput.value) && passwordInput.value !== "" && orderInput.value !== "") {
    var output = "Nama: " + nameInput.value + "<br>";
    output += "Email: " + emailInput.value + "<br>";
    output += "Sandi: " + passwordInput.value + "<br>";
    output += "Pesanan: " + orderInput.value;

    var newTab = window.open("");
    newTab.document.write(output);
  }
}

function isValidEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

     function toggleNav() {
    var navButton = document.querySelector(".nav-button");
    navButton.classList.toggle("change");
  }


  
    function handleImageClick(imageUrl) {
    
        console.log('Image clicked:', imageUrl);
      
    }