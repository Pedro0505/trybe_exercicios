import React, { Component } from 'react'
import { connect } from 'react-redux'
import { INCREMENT_ACT, DECREMENT_ACT } from './redux/actions'

class App extends Component {
  render() {
    const { changeValue, increment, decrement } = this.props;
    return (
      <main>
        <span>{ changeValue }</span>
        <button onClick={ increment }>Increntar</button>
        <button onClick={ decrement }>Decrementar</button>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({ changeValue: state.counterReducer.counter });

const mapDispatchToProps = (dispatch) => ({ 
    increment: () => dispatch(INCREMENT_ACT()), 
    decrement: () => dispatch(DECREMENT_ACT())
  });

export default connect(mapStateToProps, mapDispatchToProps)(App);
