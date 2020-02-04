import React, { Component } from 'react';

class Users extends Component {
  
    render() {
        return (
            <div>
                {this.props.users.map(
                    (user) => {
                        return(
                            <div key={user.id}>
                                <span> {user.firstName}</span>
                                <span> {user.lastName}</span>
                            </div>
                        );
                    }
                )}

            </div>
        );
    }
}

export default Users;