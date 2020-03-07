import React, { Component } from 'react';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            firstName: "",
            lastName: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handleDeleteUser = (user) => {
        this.props.deleteUser(user);
    }
    handleEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    handleUpdateUser = (user) => {
        const updatedUser = {
            id: user.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };

        this.props.updateUser(user, updatedUser);
        this.setState({
            editMode: false
        });
    }
    handleCancelUpdate = () => {
        this.setState({
            editMode: false
        });
    }
    render() {
        return (
            <div>
                <table id="customers">
                    <tr>
                        <th>ID</th>
                        <th>first Name</th>
                        <th>Last Name</th>
                        <th>Operations</th>
                    </tr>
                    {this.props.users.map(
                        (user, index) => {
                            return (

                                this.state.editMode ?
                                    (

                                            <tr key={index}>
                                                <td> <input
                                                    type='hidden'
                                                    name='id'
                                                    value={user.id}
                                                /></td>
                                                <td><input
                                                    type='text'
                                                    name='firstName'
                                                    placeholder={user.firstName}
                                                    defaultValue={user.firstName}
                                                    onChange={this.handleChange}
                                                /></td>
                                                <td> <input
                                                    type='text'
                                                    name='lastName'
                                                    placeholder={user.lastName}
                                                    defaultValue={user.lastName}
                                                    onChange={this.handleChange}
                                                /></td>
                                                <td>
                                                    <button onClick={this.handleUpdateUser.bind(this, user)} >
                                                        update
                            </button>
                                                    <button onClick={this.handleEditMode}>
                                                        Edit
                            </button>
                                                </td>
                                            </tr>
                                    ) :
                                    (
                                        // show if not in the edit mode  
                                            <tr key={index}>
                                                <td>{user.id}</td>
                                                <td>{user.firstName}</td>
                                                <td>{user.lastName}</td>
                                                <td> <button onClick={this.handleDeleteUser.bind(this, user)} >
                                                    delete
                             </button>
                                                    <button onClick={this.handleEditMode}>
                                                        Edit
                             </button></td>
                                            </tr>
                                    )
                            );
                        }
                    )}
                </table>
            </div>
        );
    }
}

export default Users;