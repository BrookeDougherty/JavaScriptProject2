// Make First Variable
let first = "Brooke";

// Make Second Variable
let last = "Dougherty";

// Log Them Out With Space Between Them
console.log(first + " " + last);

// Make Variable For The Button (get)
var button = document.querySelector("button");

// Define Function
function logName() {
  console.log(first + " " + last);
}

function appendName() {
  // create p element
  let p = document.createElement("p");

  // put text inside p element
  p.innerText = first + " " + last;

  // append the p element
  document.body.appendChild(p);
}

// Attach Function To Click On Button
button.addEventListener("click", appendName);

// Make Array
let hobbies = ["Listening To Music", "Hiking", "Journaling"];

// Loop Through Array
for (let i = 0; i < hobbies.length; i++) {
  let li = document.createElement("li");
  li.innerText = hobbies[i];
}

document.body.appendChild(ul);
