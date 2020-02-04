import React, { Component } from 'react';
import CreateUserForm from './components/createUserForm.js';
import Users from './components/users.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        { id: 1, firstName: 'john', lastName: 'green' },
        { id: 2, firstName: 'peter', lastName: 'bin' }
      ]
    }
  }
  //function to create new user
  addNewUser = (user) => {
    const previousUsers = this.state.users;
    previousUsers.push({ id: previousUsers.length + 1, firstName: user.firstName, lastName: user.lastName });
    this.setState({
      users: previousUsers
    })
  }

  render() {
    return (
      <div>
        <p>Welcome to UserPage</p>
        <CreateUserForm addNewUser={this.addNewUser} />
        <Users users={this.state.users} />

      </div>
    );
  }
}

export default App;
