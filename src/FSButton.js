import React, { Component } from 'react';

class FSButton extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props);
  // }

  render() {
    return (
      <div className="FSButton">
        <input className="btn btn-primary" id={this.props.id} value={this.props.value} onClick={this.props.action} onChange={this.props.action} />
      </div>
    );
  }
}

export default FSButton;
