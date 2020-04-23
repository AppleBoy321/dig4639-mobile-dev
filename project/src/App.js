
import React from 'react';
import Contacts from "./components/Contacts/index.js";
import Profile from "./components/Profile/index.js";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      removed: []
    }
  }

  render() {
    return (
      <div>
        <div>
          <Profile />
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;