let titleInput = document.getElementById("title_input");
let mainTitle = document.getElementById("main_title");

titleInput.addEventListener("input", 
    function() {
        mainTitle.textContent = titleInput.value;
    }
);

