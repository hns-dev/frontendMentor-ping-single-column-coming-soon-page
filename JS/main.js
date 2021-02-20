const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('span.error-msg');

email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error-msg'; // Reset the visual state of the message
    email.className = '';
  }
  // else {
  //   // If there is still an error, show the correct error
  //   showError();
  // }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  // if the email field is valid, we let the form submit

  if(!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
    email.className = 'error-border';
    // email.style.border = '2px solid $soft-red';
  } else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    emailError.textContent = 'Please provide a valid email address';
    email.className = 'error-border';
    // email.style.border = '2px solid $soft-red';
  } 
}


// const form  = document.getElementsByTagName('form')[0];

// const email = document.getElementById('mail');
// const emailError = document.querySelector('#mail + span.error-msg');

// form.addEventListener('submit', function (event) {
//     // if the email field is valid, we let the form submit
  
//     if(!email.validity.valid) {
//       // If it isn't, we display an appropriate error message
//       showError();
//       // Then we prevent the form from being sent by canceling the event
//       event.preventDefault();
//     }
// });

// function showError() {
//     if(email.validity.valueMissing) {
//         setErrorFor(email, 'Email cannot be empty');
//         showErrorIcon(email);
//     } else if (!isEmail(email.value)) {
// 		setErrorFor(email, 'Please provide a valid email address');
// 	}
// }

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const errorMsg = formControl.querySelector('.error-msg');
// 	errorMsg.textContent = message;
// }

// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }