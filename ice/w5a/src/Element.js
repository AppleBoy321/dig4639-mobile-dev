class Element {
    set component(component) {
      this.component = component;
    }
    get component() {
      return this.component;
    }
    constructor(element) {
      this.element = document.createElement(element);
      document.body.appendChild(this.element);
    }
  
    render() {
      this.element.innerHTML = this.component.render();
    }
  
  }
  
  export default Element;
  