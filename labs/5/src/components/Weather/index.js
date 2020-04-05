/* import React from 'react'
import Card from '../Card/index.js'

class Weather extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {periods: []}
  }

  componentDidMount() {

    fetch('https://api.weather.gov/gridpoints/MLB/25,69/forecast')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          periods: result.properties.periods
        })
      })

  }
  
  render () {
    return (
      <div>
        {
        this.state.periods.map((v) => {
          return <Card
            key = {v.number}
            name = {v.name}
            temperature = {v.temperature}
            temperatureUnit = {v.temperatureUnit}
            detailedForecast = {v.detailedForecast}
          />
          })
        } 
      </div>
    );
  }
}

export default Weather; */

import React from "react";
import Card from "../Card";
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cardList:[]
    };
  }
    componentDidMount() {
        let cardList=this.state.cardList;
        fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
        .then((res)=>{
            return res.json();
        }).then((processed) => {
            let periods = processed.properties.periods;
            periods.map((v) => cardList.push(v));
            this.setState({ardList: periods});
        });
    }
    render(){
        return(
            <React.Fragment>
                {this.state.cardList.map((v) => 
                    <Card name={v.name} temp={v.temperature}  units={v.temperatureUnit} 
                    forecast={v.detailedForecast}  key={v.number} />)}
            </React.Fragment>
        );
      }
}
export default Weather;