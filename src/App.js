import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    users: [
      { id: 1, name: 'Oli', age: 26 },
      { id: 2, name: 'Adri', age: 22 },
      { id: 3, name: 'Meli', age: 23 }
    ]
  };
  inputChangedHandler = e => {
    let users = [...this.state.users];
    users[0].name = e.target.value;
    this.setState({ users });
  };
  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.inputChangedHandler}
          currentName={this.state.users[0].name}
        />
        <UserOutput usrName={this.state.users[0].name} />
        <UserOutput usrName={this.state.users[1].name} />
        <UserOutput usrName={this.state.users[2].name} />
      </div>
    );
  }
}

export default App;
