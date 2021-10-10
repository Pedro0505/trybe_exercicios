import React from "react";

class Option extends React.Component {
  render() {
    const { states } = this.props
    return (
      <select name="state" id="option-state" >
        {states.map((e) => 
          <option value={e} key={e}> {e} </option>
        )}
      </select>
    )
  }
}

export default Option
