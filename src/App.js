import React, { Component } from 'react';
import CreateUserForm from './components/createUserForm.js';
import Users from './components/users.js';
import './css/index.css';

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
  //function to delete user
  deleteUser = (user) => {
    const previousUsers = this.state.users;
    const newUsers = previousUsers.filter((i) => { return (user.id !== i.id) });
    this.setState({
      users: newUsers
    })
  }
  //function to update user
  updateUser = (user, updatedUser) => {
    console.log(user.id);
    console.log('updated firstname' + updatedUser.firstName);
    console.log('old firstname' + user.firstName);

    const previousUsers = this.state.users;
    if(updatedUser.firstName === null ){
      updatedUser.firstName = user.firstName;
      console.log('old firstname now' + updatedUser.firstName);
    }
    if (updatedUser.lastName === null){
      updatedUser.lastName = user.lastName;
    }
    previousUsers[user.id - 1] = ({ id: user.id, firstName: updatedUser.firstName, lastName: updatedUser.lastName });
    this.setState({
      users: previousUsers
    })

  }

  render() {
    return (
      <div className='app-wrapper'>
        <div className='app-content'>
        <p>Welcome to UserPage</p>
        <CreateUserForm addNewUser={this.addNewUser} />
        <Users users={this.state.users} deleteUser={this.deleteUser} updateUser={this.updateUser} />
        </div>
      </div>
    );
  }
}

export default App;
