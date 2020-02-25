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
                {this.props.users.map(
                    (user, index) => {
                        return (

                            this.state.editMode ?
                                (
                                    <div key={index}>
                                        <p>differnets</p>
                                        <span><input
                                            type='hidden'
                                            name='id'
                                            value={user.id}
                                        /></span>
                                        <span><input
                                            type='text'
                                            name='firstName'
                                            placeholder={user.firstName}
                                            defaultValue={user.firstName}
                                            onChange={this.handleChange}
                                        /></span>
                                        <label>Last Name:</label>
                                        <input
                                            type='text'
                                            name='lastName'
                                            placeholder={user.lastName}
                                            defaultValue={user.lastName}
                                            onChange={this.handleChange}
                                        />
                                        <button onClick={this.handleUpdateUser.bind(this, user)} >
                                            update
                            </button>
                                        <button onClick={this.handleEditMode}>
                                            Edit
                            </button>
                                    </div>
                                ) :
                                (
                                    // show if not in the edit mode  

                                    <div key={index}>
                                        <span> {user.id}</span>
                                        <span> {user.firstName}</span>
                                        <span> {user.lastName}</span>
                                        <button onClick={this.handleDeleteUser.bind(this, user)} >
                                            delete
                             </button>
                                        <button onClick={this.handleEditMode}>
                                            Edit
                             </button>
                                    </div>
                                )





                        );
                    }
                )}

            </div>
        );
    }
}

export default Users;