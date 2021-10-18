import React, { Component } from 'react';

class User extends Component {
  render() {
    const { greetingsMessage, id:{ params } } = this.props
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage } { params.id }, My awesome Users component </p>
      </div>
    );
  }
};

export default User;
