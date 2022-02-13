import React, { Component } from 'react';
import CreateUserForm from './components/createUserForm.js';
import Users from './components/users.js';
import './css/index.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        { id: 1, firstName: 'shahzad', lastName: 'salamat' },
        { id: 2, firstName: 'peter', lastName: 'Ashraf' }
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
    console.log('updated lastname' + updatedUser.lastName);
    console.log('old firstname' + user.firstName);

    const previousUsers = this.state.users;
    if(updatedUser.firstName === '' ){
      updatedUser.firstName = user.firstName;
      console.log('old firstname now' + updatedUser.firstName);
    }
    if (updatedUser.lastName === ''){
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
        <p>Welcome to UserPage</p>
        <div className='app-content'>
        <CreateUserForm addNewUser={this.addNewUser} />
               <table id="customers">
                    <tr>
                        <th>ID</th>
                        <th>first Name</th>
                        <th>Last Name</th>
                        <th>Operations</th>
                    </tr>
                      {this.state.users.map((user) => {
                        return (
                          <Users user={user} deleteUser={this.deleteUser} updateUser={this.updateUser} />
                        );
                      }
                      )}
            </table>
              <p>this is shahzad changes</p>
              <p>shahzad.salamat@yahoo.com</p>
        </div>
      </div>
    );
  }
}

export default App;
