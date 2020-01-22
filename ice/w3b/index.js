class Component {
    name = "";
    button;
    constructor(_button) {
        this.button = _button;
        console.log("Test");
        _button.addEventListener("click", onClick)
    }
    printName() {
        console.log(name);
    }
}
function runOnLoad()
{
    // console.log(x);
    var comp = new Component(document.getElementById("submitButton"));
}
var a = 0;
a = 10;
console.log(a);
function onClick() {
    console.log("clicked!");
}
window.addEventListener("DOMContentLoaded", runOnLoad);