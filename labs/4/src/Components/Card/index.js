import React from "react";
import "./index.css";

class Card extends React.Component {
  render() {
    return(
    <body>
      <div className="card">
        <span className="close" 
        onClick={this.props.dataclick} 
        datatitle={this.props.title}>&times;</span>
        <br></br>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    </body>
    );
  }

}

export default Card;
