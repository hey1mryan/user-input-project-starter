let titleInput = document.getElementById("title_input");
let mainTitle = document.getElementById("main_title");
let submit = document.getElementById("submit_button");


titleInput.addEventListener("input", function() {
  mainTitle.textContent = titleInput.value;
});

function inputMissing(event) {
  event.preventDefault();

  // Get all input fields
  let inputs = document.querySelectorAll(".adlib input");
  let allFilled = true;

  // Check if all input fields are filled
  inputs.forEach(input => {
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  // Show alert if any field is empty
  if (allFilled == false) {
    alert("Please fill in every field!");
  } else {
    // Clear the page if all fields are filled
    document.body.innerHTML = "";

  }
}

submit.addEventListener("click", inputMissing);