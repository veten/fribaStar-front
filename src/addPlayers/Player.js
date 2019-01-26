import React from 'react';

class Player extends React.Component {
    render() {
            return(
                    <tr>
                        <td>{this.props.value}</td>
                    </tr>
            );
    }
}

export default Player
