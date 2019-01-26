import React from 'react';
import PlayerRow from './PlayerRow.js'

class GamePlayScores extends React.Component {

    constructor(props) {
        super(props);
        this.state = {"playerRows" : this.getPlayerRows(this.props.players)};
    }

    //We need to redraw the table rows whenever the player data changes
    componentWillReceiveProps(nextProps)
    {
        this.setState({"playerRows" : this.getPlayerRows(this.props.players)});
    }

    getPlayerRows(players) {
        var playerRow = players.map( (player, index) => {
                            return <PlayerRow key={index.toString()}
                                              index={index+1}
                                              player={player}
                                              hole={this.props.hole}
                                              handleInc={() => this.props.handleScoreChange(index, 1)}
                                              handleDec={() => this.props.handleScoreChange(index, -1)}/> }, this );
        return playerRow;
    }

    render() {
        return(

                <table className="table table-striped">
                    <thead>
                        <tr className="info">
                            <th className="name">Pelaaja</th>
                            <th className="total">Yht.</th>
                            <th className="hole">Tulos</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.playerRows}
                    </tbody>
                </table>
        );
    }
}

export default GamePlayScores
