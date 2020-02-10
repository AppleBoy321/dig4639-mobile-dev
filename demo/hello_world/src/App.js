import React from 'react';
import logo from './logo.svg';
import './App.css';

function NameBadge(props) {
  console.log(props);
  return (
  <p>My name is {props.name}</p>
  )
}

class App extends React.Component  {
  clickHandler = () => {
    alert("Clicked +" + this);
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div onClick={this.clickHandler}>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Hello World
        </p>
        <NameBadge name= "John"/>
        <NameBadge name= "Ana"/>
        <NameBadge name= "June"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
