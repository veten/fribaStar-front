import React from 'react';

class HoleRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {"playerData" : this.getPlayerData(this.props.players, this.props.index)}
    }

    getPlayerData(players, holeIndex) {
        let playerData=[];
        let data;

        for(let i=0; i<players[this.props.index].holes.length; i++) {
            data = <td className="text-center" key={(i).toString()}>{this.props.players[this.props.index].holes[i].scorePar}</td>
            playerData.push(data);
        }

        return playerData;

    }

    render() {
        return(
                <tr>
                    <td>{this.props.players[this.props.index].name}</td>
                    {this.state.playerData}
                </tr>
        );
    }
}

export default HoleRow
