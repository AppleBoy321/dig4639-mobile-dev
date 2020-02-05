class Element {
    set component(component) {
      this.component = component;
    }
    get component() {
      return this.component;
    }
    constructor(elementTag) {
      this.element = document.createElement(elementTag);
      document.body.appendChild(this.element);
    }
  
    render() {
      this.element.innerHTML = this.component.render();
    }
  
  }
  
  export default Element;
  