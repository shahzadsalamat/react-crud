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
            id: this.props.user.id,
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
            this.state.editMode ?
                (
                    <tr>
                        <td> <input
                            type='hidden'
                            name='id'
                            value={this.props.user.id}
                        /></td>
                        <td><input
                            type='text'
                            name='firstName'
                            className='input-filled'
                            placeholder={this.props.user.firstName}
                            defaultValue={this.props.user.firstName}
                            onChange={this.handleChange}
                        /></td>
                        <td> <input
                            type='text'
                            name='lastName'
                            className='input-filled'
                            placeholder={this.props.user.lastName}
                            defaultValue={this.props.user.lastName}
                            onChange={this.handleChange}
                        /></td>
                        <td>
                            <button
                                className='input-button'
                                onClick={this.handleUpdateUser.bind(this, this.props.user)} >
                                update
                            </button>
                            <button
                                className='input-button'
                                onClick={this.handleEditMode}>
                                Edit
                           </button>
                        </td>
                    </tr>

                ) :
                (
                    <tr>
                        <td>{this.props.user.id}</td>
                        <td>{this.props.user.firstName}</td>
                        <td>{this.props.user.lastName}</td>
                        <td> <button
                        className='input-button'
                        onClick={this.handleDeleteUser.bind(this, this.props.user)}>
                            delete
                             </button>
                            <button
                            className='input-button'
                            onClick={this.handleEditMode}>
                                Edit
                             </button>
                        </td>
                    </tr>
                )




        );
    }
}

export default Users;