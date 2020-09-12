import React, { Component } from "react";

class Input extends Component {
  state = {
    text: "",
  };

  updateText = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <input onChange={this.updateText} />
        <br />
        {this.state.text}
      </div>
    );
  }
}

export default Input;
