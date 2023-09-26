const form = document.getElementById('form');
const passwordEl = document.getElementById('password');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
   return;
  }
  // Check to see if passwords match
  if (passwordEl.value === password2El.value) {
    passwordsMatch = true;
    passwordEl.style.color = 'green';
    password2El.style.color = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    passwordEl.style.color = 'red';
    password2El.style.color = 'red';
    return;
  } 
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value
  }; 
  // Do something with user data
  console.log(user);
}


function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  // Submit Data if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }

}


// Event listener
form.addEventListener('submit', processFormData);
