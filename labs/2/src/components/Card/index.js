import "./index.css"

class Card {
    constructor (props) {
        this.props = props;
        this.element = document.createElement("div");
        this.element.innerHTML = this.props.content;
        this.element.className = "card";
    }
    
    render() {
        return this.element;
    }  
}

export default Card;