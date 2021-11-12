import React from "react";
import Button from "./components/Button.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.initialState = {
      message: '',
      status: '',
      loading: true,
    };
    this.state = this.initialState;
  }

  requestApi = () => {
    this.setState({loading: true})
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((e) => e.json())
      .then((a) => this.setState({message: a.message, loading: false}))
  }

  componentDidMount() {
    try {
      this.requestApi();
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="App">
        <h1> Random Dog </h1>
        { this.state.loading ? <p> Loading </p>  
        : (
            <img src={this.state.message} alt="Cachorro" width="250px" height="250px"/>
          )
        }
        <Button request={ this.requestApi }/>
      </div>
    );
  }
}

export default App;
