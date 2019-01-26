import React from 'react';
import HoleResultsHeaderRow from './HoleResultsHeaderRow.js';
import HoleResults from './HoleResults.js';
import ResultRow from './ResultRow.js';



class Results extends React.Component {

    constructor(props){
        super(props);
        this.state = { "holeResults" : [],
                       "holeResultsHeader" : [],
                       "resultsList" : [],
                       "sortedPlayers" : [],};
    }

    componentWillMount() {
        let players;
        let sortedPlayers;

        fetch("http://localhost:8080/getPlayers")
        .then(
            (response) => {
                return response.json();
            }).then((json) => {
                players = json;
                sortedPlayers = this.getSortedPlayers(players);
                this.setState({"resultsList" : this.getResultsList(sortedPlayers),
                               "holeResultsHeader" : this.getHoleResultsHeader(players),
                               "holeResults" : this.getHoleResults(players)});
                this.forceUpdate();
                }
            )
    }

    getSortedPlayers(players) {
        let sortedPlayers = players.slice(0);

        return (sortedPlayers.sort(function(a,b){return a.totalPar - b.totalPar}));
    }

    getHoleResultsHeader(players) {
        console.log('hole results header');
        let holeResultsHeader = players[0].holes.map((hole,index) => {
                            return <HoleResultsHeaderRow key={index.toString()}
                                                  index={(index+1).toString()}
                                                  hole={hole} />
                         });
        return(holeResultsHeader);
    }

    getHoleResults(players) {
        console.log('hole results');
        console.dir(players);
        return(<HoleResults players={players} />);
    }

    getResultsList(players) {
        let resultRows = players.map((player, index) => {
                            return <ResultRow key={index.toString()}
                                              index={index}
                                              player={player}/>
                         });
        return (resultRows);
    }

	render() {
		return(
		        <div>
    		        <h1>Tulokset</h1>
    		        <table className="table table-striped">
    		            <thead>
    		                <tr className="info">
    		                    <th>Sijoitus</th>
    		                    <th>Nimi</th>
    		                    <th className="text-center">Tulos</th>
    		                </tr>
    		            </thead>
    		            <tbody>
    		                {this.state.resultsList}
                        </tbody>
    		        </table>
    		        <h1 style={{marginTop : '25px'}}>Väylätulokset </h1>
    		        <table className="table table-striped">
                    <thead>
                        <tr className="info">
                            <th>Nimi</th>
                            {this.state.holeResultsHeader}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.holeResults}
                    </tbody>
                </table>
                </div>
		);
	}
}

export default Results
