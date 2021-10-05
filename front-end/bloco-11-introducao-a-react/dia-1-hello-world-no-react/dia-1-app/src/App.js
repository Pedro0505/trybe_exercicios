import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Tascks from './Tasck';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Tascks />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
