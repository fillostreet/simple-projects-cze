const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const country = document.getElementById('country').value;
  const agree = document.getElementById('agree').checked;

  const errorMessages = [];

  if (name.trim() === '') {
    errorMessages.push('Jméno je povinné pole');
  }

  if (email.trim() === '') {
    errorMessages.push('E-mail je povinné pole');
  } else if (!isValidEmail(email)) {
    errorMessages.push('Zadejte platnou e-mailovou adresu');
  }

  if (password.trim() === '') {
    errorMessages.push('Heslo je povinné pole');
  }

  if (confirmPassword.trim() === '') {
    errorMessages.push('Potvrzení hesla je povinné pole');
  } else if (password !== confirmPassword) {
    errorMessages.push('Hesla se neshodují');
  }

  if (country === '') {
    errorMessages.push('Vyberte zemi');
  }

  if (!agree) {
    errorMessages.push('Musíte souhlasit s podmínkami');
  }

  if (errorMessages.length > 0) {
    displayErrors(errorMessages);
  } else {
    alert('Formulář úspěšně odeslán');
    form.reset();
  }
});

function isValidEmail(email) {
  // Jednoduchá kontrola platnosti e-mailové adresy
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function displayErrors(errors) {
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('error');

  errors.forEach(function(error) {
    const errorElement = document.createElement('p');
    errorElement.textContent = error;
    errorContainer.appendChild(errorElement);
  });

  const formContainer = document.querySelector('form');
  formContainer.appendChild(errorContainer);
}
