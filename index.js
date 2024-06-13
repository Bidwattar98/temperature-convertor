const textbox = document.getElementById("textbox");
const toferenheit = document.getElementById("tofarenheit");
const tocelcius = document.getElementById("tocelcius");
const result = document.getElementById("result");
let temp;

function convert() {
    if (toferenheit.checked) {
        temp = textbox.value;
        temp = Number(temp);
        temp = temp * 9 / 5 +32; 
        result.textContent = temp.toFixed(1) + " °F";
        }
        else if (tocelcius.checked) {
            temp = Number(textbox.value);
            temp = (temp - 32)*(5/9);
            result.textContent = temp.toFixed(1) + " °C";
    }
    else{
        result.textContent = "Select a unit";
    }
}