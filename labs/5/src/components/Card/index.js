import React from "react";
import "./index.css";
class Card extends React.Component{
    render (){
        console.log(this.props);
        return(
          <body>
            <div className="card">
              <div className="text">
                <h3>{this.props.name}</h3>
                <h4>{this.props.temp} {this.props.units}</h4>
                <p>{this.props.forecast}</p>
            </div>
            </div>
          </body>
        );
    }
}
export default Card;