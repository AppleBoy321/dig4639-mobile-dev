class Adder {
    constructor(props){
        this.props = props;
        
    }
    sum(a,b){
        return a+b;
    }
    render() {
        return `<p>The sum of ${this.props.a} and ${this.props.b} is ${sum(this.props.a, this.props.b)}</p>`;

    }
}
module.exports default Adder;