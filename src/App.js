import React from "react";
import Case from "./Case";
class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Case />
      </div>
    );
  }
}

export default App;
