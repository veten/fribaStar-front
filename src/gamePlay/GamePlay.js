import React from 'react';
import ReactDOM from 'react-dom';
import GamePlayScores from './GamePlayScores.js';
import Results from '../gameResults/Results';

class GamePlay extends React.Component {

    constructor (props) {
        super(props);
        this.state = {"hole" : 1,
                      "par" : 3,
                      "players" : []};

        this.handleEndGame = this.handleEndGame.bind(this);
        this.handleNextHole = this.handleNextHole.bind(this);
        this.handleParDec = this.handleParDec.bind(this);
        this.handleParInc = this.handleParInc.bind(this);
    }

    componentWillMount() {
        let players;

        fetch("http://localhost:8080/getPlayers")
        .then(
            (response) => {
                return response.json();
            }).then((json) => {
                players = json;
                for(let i=0; i<players.length; i++)
                    players[i].holes[0].par = this.state.par;
                this.setState({
                    "hole" : players[0].holes.length,
                    "players" : players
                });
                this.forceUpdate();
                }
            )
    }


    handleEndGame(event) {
//        if(true == confirm("Tallennetaanko myös tämän väylän tulos?"))

            fetch("http://localhost:8080/nextHole", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify(this.state.players)
            }).then(
                    (response) => {
                        ReactDOM.render(<Results />,
                                document.getElementById('content'));
                        /*ReactDOM.render(<Results />,
                                        document.getElementById('root'));*/
                    },
                    (error) => {
                        //TODO
                    }
            )
//        else
//            ReactDOM.render(<Results />,
//                         document.getElementById('content'));
    }

    handleNextHole(event) {
//        alert("seuraava väylä");

        let players = this.state.players.slice(0);
        fetch("http://localhost:8080/nextHole", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(this.state.players)
        }).then(
                (response) => {
                    this.playersAddHole(players);
                    this.setState({
                       "hole": players[0].holes.length,
                       "par": 3,
                       "players": players
                    });
                    this.forceUpdate();
                },
                (error) => {
                    //TODO
                }
        )
    }

    handleParDec(event) {
        if(1 < this.state.par) {
            let newPar = this.state.par-1;
            this.setState({"par": newPar});
            this.playersSetPar(newPar);
        }
    }

    handleParInc(event) {
        let newPar = this.state.par+1;

        this.setState({"par": newPar});
        this.playersSetPar(newPar);
    }

    handleScoreChange(i,val) {
        let players = this.state.players.slice(0);
        if(0 < val) {
            players[i].holes[this.state.hole-1].scorePar++;
            players[i].totalPar++;
        } else {
            players[i].holes[this.state.hole-1].scorePar--;
            players[i].totalPar--;
        }
        this.setState({"players" : players});
    }

    playersAddHole(players) {
        let i;

        for(i in players) {
            //let hole = players[i].holes.slice(0,1)[0];
            let hole = Object.create(players[i].holes.slice(0,1)[0]);
            hole.par = 3;
            hole.score = 0;
            hole.scorePar = 0;
            players[i].holes.push(hole);
        }
    }

    playersSetPar(par) {
        let players = this.state.players.slice(0);
        let i;

        for(i=0;i<players.length;i++)
            players[i].holes[this.state.hole-1].par = par;

        this.setState({"players" : players});
    }

    render() {
        return(
                <div>
            		<input className="button btn btn-warning" type="button" onClick={this.handleEndGame} value="LOPETA PELI"/>
                    <input className="button btn btn-success" style={{float: 'right'}} type="button" onClick={this.handleNextHole} value="SEURAAVA VÄYLÄ" />
                    <p className="text-right" style={{marginTop: '25px', marginBottom: '15px'}}><b><span style={{float : 'left'}}>VÄYLÄ {this.state.hole}</span> PAR: {this.state.par}</b>
            		    <input className="buttonPar" style={{marginLeft: '10px', marginRight: '10px'}} type="button" onClick={this.handleParDec} value="-"/>
            		    <input className="buttonPar" type="button" onClick={this.handleParInc} value="+"/>
            		</p>
                    <GamePlayScores players={this.state.players} hole={this.state.hole}
                        handleScoreChange={this.handleScoreChange.bind(this)}/>
                </div>
        );
    }
}



export default GamePlay
