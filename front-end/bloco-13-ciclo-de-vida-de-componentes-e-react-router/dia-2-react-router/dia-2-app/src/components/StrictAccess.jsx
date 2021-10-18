import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { username, password } = this.props.user;
    if (!(username==='joao' && password === '1234')){
      return <Redirect to="/notfound" />
    }
    return (
      <p>Welcome joao!</p>
    );
  }
}

export default StrictAccess;
