import React from 'react';
import HoleRow from './HoleRow.js';

class HoleResults extends React.Component {

    constructor(props) {
        console.log('holeresults constructor');
        super(props);
        this.state = {"holeResults" : this.getHoleResults(this.props.players)};
    }

    getHoleResults(players) {
        console.log('getHoleResults');
        let holeResults = [];
        let holeResultRow;
        for(let i=0; i< players.length ;i++) {
//            console.dir(players[0].holes[i]);
            holeResultRow = <HoleRow key={i} index={i} players={players} />;
            console.log('row: ' + holeResultRow);
            console.dir(holeResultRow);
            holeResults.push(holeResultRow);
        }

        return holeResults;
    }

    render() {
        console.log('holeresults render');
        return(this.state.holeResults);
    }
}

export default HoleResults
