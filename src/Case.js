import React from "react";
import Wheel from "./Wheel";
import Display from "./Display";
class Case extends React.Component {
  render() {
    return (
      <div className="case-container">
        <div className="case">
          <Wheel />
          <Display />
        </div>
      </div>
    );
  }
}

export default Case;
