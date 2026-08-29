let inputBox = document.getElementById("inputbox");

let buttons = document.querySelectorAll("button");

let value = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.innerHTML == "=") {

            value = eval(value);
            inputBox.value = value;

        } 
        else if (button.innerHTML == "AC") {

            value = "";
            inputBox.value = "";

        } 
        else {

            value = value + button.innerHTML;
            inputBox.value = value;

        }

    });

});