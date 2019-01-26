import React from 'react';

class ResultRow extends React.Component {
    render() {
        return (
          <tr>
              <td>{(this.props.index+1).toString()}.</td>
              <td>{this.props.player.name}</td>
              <td className="text-center">{this.props.player.totalPar}</td>
          </tr>
        );
    }
}

export default ResultRow
