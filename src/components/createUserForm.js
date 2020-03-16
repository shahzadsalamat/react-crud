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
                    <div className='diplay-flex flex-flow-col'>
                        <div>
                        <input
                        type='text'
                        name='firstname'
                        className='input-text-underlined'
                        placeholder='First name'
                        ref='firstname'
                    /></div>
                        <div className='margin-top-8px'>
                        <input
                        type='text'
                        name='lastname'
                        className='input-text-underlined'
                        placeholder='Last name'
                        ref='lastname'
                    /></div>
                        <div className='margin-top-8px'>                   
                        <input className='input-button' type='submit' value='Add user' />
                        </div>
                    </div>
                   
                </form>
            </div>
        );
    }
}


export default CreateUserForm;