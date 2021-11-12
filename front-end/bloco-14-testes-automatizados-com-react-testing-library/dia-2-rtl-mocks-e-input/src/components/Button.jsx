import React from "react";

class Button extends React.Component {
  render() {
    const { request } = this.props;
    return (
      <button type="button" onClick={ request }>
      Clique!!
    </button>
    )
  }
}

export default Button;
