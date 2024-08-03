/* Form checker on submit */
var el = document.getElementById("registration-form");
el.onsubmit = formSubmitChecker;

function formSubmitChecker(e) {
  // Psudo code
  // declare a variable array, to collect errors

  // CHECK IF the value of the f Name is empty
  // use value property to find the entered value
  // If this is empty, add to the error array
  // What message (add to this to the array)
  // use innerHTML on errorsDisplay
  // Use  getElementById to choose the element

  // CHECK IF the value of the password is less than 5 char
  // use value property to find the entered value
  // If this is less than 5 (use length property), add to the error array
  // What message (message )
  // use innerHTML on errorsDisplay
  // Use  getElementById to choose the element

  // if error is empty submit
  // else
  // Stop the default behavior of the HTML from submitting the form
  // using preventDefault()

  // iterate through the error array and display each message on the errorsDisplay
  //   use innerHTML on errorsDisplay

  // Put elements in variable
  var errors = [];
  var elErrorsDisplay = document.getElementById("errorsDisplay");
  elErrorsDisplay.innerHTML = "";

  var elFirstName = document.getElementsByName("first-name");

  var elPassword = document.getElementsByName("password");
  // Get their values
  var elFirstNameValue = elFirstName[0].value;

  var elPasswordValue = elPassword[0].value;

  if (!elFirstNameValue) {
    errors.push("First name field is required");
  }
  if (!elPasswordValue) {
    errors.push("Password is empty");
  } else if (elPasswordValue.length < 5) {
    errors.push("Password not strong enough");
  } else {
  }
  // if (elPasswordValue.length < 5) {
  //   errors.push("Password is empty or not strong enough");
  // }
  // console.log(errors);
  if (errors.length > 0) {
    e.preventDefault(); // Stops the form from submitting
    elErrorsDisplay.style.display = "block";
    for (var i = 0; i < errors.length; i++) {
      elErrorsDisplay.innerHTML += errors[i] + "<br>";
    }
  } else {
    alert("Submitted");
  }
}

// /* Form checker first name on blur */
// var elFirstName = document.getElementsByName("first-name");
// var elFirstNameElement = elFirstName[0];
// elFirstNameElement.onblur = checkIfNameIsEmpty;

// /* Form checker password on blur */
// var elPassword = document.getElementsByName("password");
// var elPasswordElement = elPassword[0];
// elPasswordElement.onblur = checkIfPasswordQualifies;

// function checkIfNameIsEmpty() {
//   var elErrorsDisplay = document.getElementById("errorsDisplay");
//   var elFirstName = document.getElementsByName("first-name");
//   var elFirstNameElement = elFirstName[0];
//   var elFirstNameElementValue = checkIfNameIsEmpty.value;
//   if (!elFirstNameElementValue) {
//     elErrorsDisplay.style.display = "block";
//     elErrorsDisplay.innerHTML += "First name field is required <br>";
//     elFirstNameElement.style.border = "1px solid pink";
//   }
// }

// function checkIfPasswordQualifies() {
//   var elErrorsDisplay = document.getElementById("errorsDisplay");
//   var elPassword = document.getElementsByName("password");
//   console.log(elPassword);

//   var elPasswordElement = elPassword[0];
//   var elPasswordValue = elPassword[0].value;
//   if (elPasswordValue.length < 5) {
//     elErrorsDisplay.style.display = "block";
//     elErrorsDisplay.innerHTML += "Password is empty or not strong enough <br>";
//     elPasswordElement.style.border = "1px solid pink";
//   }
// }
