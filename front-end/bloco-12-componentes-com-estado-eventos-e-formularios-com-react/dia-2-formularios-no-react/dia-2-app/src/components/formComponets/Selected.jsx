import React from "react";

class Selected extends React.Component {
  render() {
    const { statesData, keyState, funcHandle } = this.props
    return (
      <select
      onChange={ funcHandle }
      value={ keyState }
      name="state" 
      id="option-state" >
        {statesData.map((e) =>
          <option value={e} key={e}> {e} </option>
        )}
      </select>
    )
  }
}

export default Selected;
