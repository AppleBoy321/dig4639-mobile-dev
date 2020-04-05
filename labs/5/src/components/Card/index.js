/* import React from 'react'
import './index.css'

class Card extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      temperature: 0,
      temperatureUnit: '',
      detailedForecast: ''
    };
  }

  render () {
    return (
      <div className="card">
        <h1 className="title">{this.props.name}</h1>
        <h1 className="temp">{this.props.temperature} {this.props.temperatureUnit}</h1>
        <p>{this.props.detailedForecast}</p>
      </div>
    )
  }
}

export default Card; */

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