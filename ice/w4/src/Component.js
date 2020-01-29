class Component {
    constructor(_button) {
        this.button = _button;
        console.log("Test");
        this.button.addEventListener("click", this.onClick)
    }
    onClick() {
        console.log("Clicked");
    }
    render() {
        return `<div></div>`;
    }

}
export default Component;
