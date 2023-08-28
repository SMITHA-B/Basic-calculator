let display = document.getElementById("display");
let currentValue = "";

function appendtodisplay(value) {
    currentValue += value;
    display.value = currentValue;
}
function cleardisplay() {
    currentValue = "";
    display.value = currentValue;
}
function calculate() {
    try{
    currentValue = eval(currentValue);
    display.value = currentValue;
    } catch(error){
        display.value= "error";
    }
}