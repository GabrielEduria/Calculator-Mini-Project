const display = document.getElementById("results");
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (value === "AC"){
            display.value = " ";
            return;
        }

        if (value === "CE"){
            display.value = display.value.slice(0, -1);
            return;
        }

        if (value === "="){
            try {
                display.value = eval(display.value);
                return;
            } catch {
                display.value = "Error";
            }
            return;
        }

        display.value += value;
    });
})
// statement iterations of code, button arrow function, button addevent lisnster
// dont forget to declare a value = button.value
// AC = EMPTY
// CE - 1 of line; slice() method
// to get equal of value || try catch block;
// clue eval function
// diplay.value += value;