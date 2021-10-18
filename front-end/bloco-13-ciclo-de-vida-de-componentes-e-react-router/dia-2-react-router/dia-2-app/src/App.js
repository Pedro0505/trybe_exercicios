import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import User from './components/User'
import NotFound from './components/notfound';
import StrictAccess from './components/StrictAccess';

class App extends React.Component  {
  render() {
    const user ={
      username: 'joao',
      password: '1234',
    }
    return (
      <div className="App">
      <BrowserRouter>
      <Switch>
          <Route
            path="/user/:id/" 
            render={(props) => <User greetingsMessage="Good Morning" id={ props.match }/>}
          />
          <Route path="/about" component={ About }/>
          <Route path="/notfound" component={ NotFound } />
          <Route path="/" exact component={ Home }/>
        </Switch>
        <StrictAccess user={ user }/>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
