import React, { Component } from 'react';

class CreateUserForm extends Component {

    handleAddUser = (e) => {
        const newUser = {
            firstName: this.refs.firstname.value,
            lastName: this.refs.lastname.value
        }
        e.preventDefault();
        this.props.addNewUser(newUser);
        //reset the form after submit
        e.target.reset();

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddUser.bind(this)} >
                    <label>First Name:</label>
                    <input
                        type='text'
                        name='firstname'
                        placeholder='First name'
                        ref='firstname'
                    />
                    <label>Last Name:</label>
                    <input
                        type='text'
                        name='lastname'
                        placeholder='Last name'
                        ref='lastname'
                    />
                    <input type='submit' value='Add user' />
                </form>
            </div>
        );
    }
}


export default CreateUserForm;