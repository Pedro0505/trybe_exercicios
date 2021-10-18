import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <Link to="/about"> Ir para About </Link>
      </>
    );
  }
}

export default Home;
