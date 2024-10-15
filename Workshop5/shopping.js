// shopping.js
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
  'use strict';

  // For storing the order total:
  var total;

  // Get references to the form values:
  var quantity = parseInt(document.getElementById('quantity').value);
  var price = parseFloat(document.getElementById('price').value);
  var tax = parseFloat(document.getElementById('tax').value);
  var discount = parseFloat(document.getElementById('discount').value);
  var shipping = parseFloat(document.getElementById('shipping').value);

  // Add validation here later!
  if (isNaN(quantity) || isNaN(price) || isNaN(tax) || isNaN(discount) || isNaN(shipping)) {
    alert('Please ensure all fields are filled with valid numbers.');
    return false;
  }

  // Calculate the initial total:
  var total = quantity * price;
  console.log("total before tax: " + total);

  // Factor in the tax:
  total *= (tax / 100) + 1;
  console.log("total after tax: " + total);

  // Factor in the discount:
  if (quantity > 100) {
      total -= 2 * discount;
  } else {
      total -= discount;
  }

  // Add shipping costs:
  total += shipping;
  console.log("total after discount: " + total);

  // Format total:
  total = total.toFixed(2);

  // Show total:
  document.getElementById('total').value = total;

  // Return false to prevent submission:
  return false;

} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
  'use strict';

  // Add an event listener to the form:
  var theForm = document.getElementById('theForm');
  /* if(theForm.addEventListener){
      theForm.addEventListener("submit", code ,false);
  } */

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;

//Exercise 1: Contact Form

let email = document.querySelector('#emailBox');
let comment = document.querySelector('#commentBox');
let sendbutton = document.querySelector('#sendButton');

function sendData(event) {
  event.preventDefault();

  if (email.value.length > 6 && email.value.length < 15 && email.value.includes('@')) { 
    email.style.borderColor = '';
  } else {
    email.style.borderColor = 'red';
    alert('Please enter a valid email. It should be between 6 and 15 characters long and contain an "@" symbol.');
    return;
  } 

  if (comment.value.trim() !== '' && comment.value.length <= 50) {
    comment.style.borderColor = '';
  } else {
    comment.style.borderColor = 'red';
    alert("Comment shouldn't be empty and must be within 50 characters")
    return;
  }
  alert("Email: " + email.value + "\nComment: " + comment.value);
}

//Exercise 2: Membership Calculator

document.querySelector('#submit').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  let type = document.querySelector('#type').value;
  let years = document.querySelector('#years').value;
  let cost = 0;

  // Determine base cost
  switch (type) {
    case 'basic':
      cost = 10;
      break;
    case 'premium':
      cost = 15;
      break;
    case 'gold':
      cost = 20;
      break;
    case 'platinum':
      cost = 25;
      break;
  }

  // Calculate total cost
  let totalCost = cost * years;

  // Apply discounts
  if (years > 2) {
    totalCost *= 0.8; // Apply 20% discount
    document.querySelector('#discountmessage').style.display = 'block';
  } else {
    document.querySelector('#discountmessage').style.display = 'none';
  }
  
  if (years >= 5) {
    totalCost -= 5; // Additional $5 discount
    document.querySelector('#greetingmessage').style.display = 'block';
  } else {
    document.querySelector('#greetingmessage').style.display = 'none';
  }

  document.querySelector('#cost').value = totalCost.toFixed(2);
});

window.onload = function() {
  let contactMethod = document.querySelector('#contactMethod');
  let emailField = document.querySelector('#emailField');
  let phoneField = document.querySelector('#phoneField');
  let smsField = document.querySelector('#smsField');
  let sendButton = document.querySelector('#sendNappi');

  // Listen for changes in the contact method dropdown
  contactMethod.addEventListener('change', function() {
      // Hide all fields by default
      emailField.style.display = 'none';
      phoneField.style.display = 'none';
      smsField.style.display = 'none';

      // Show the selected method
      if (this.value === 'email') {
          emailField.style.display = 'block';
      } else if (this.value === 'phone') {
          phoneField.style.display = 'block';
      } else if (this.value === 'sms') {
          smsField.style.display = 'block';
      }
  });
};