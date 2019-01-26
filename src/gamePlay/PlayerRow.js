import React from 'react';

class PlayerRow extends React.Component {
    render() {
        return(
          <tr>
              <td>{this.props.player.name}</td>
              <td>{this.props.player.totalPar}</td>
              <td>{this.props.player.holes[this.props.hole-1].scorePar}</td>
              <td><input type="button" onClick={() => this.props.handleDec()}value="-" /></td>
              <td><input type="button" onClick={() => this.props.handleInc()} value="+" /></td>
          </tr>
        );
    }
}

export default PlayerRow
