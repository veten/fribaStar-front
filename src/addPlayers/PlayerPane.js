import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player.js';
import AddPlayerForm from './AddPlayerForm.js';
import GamePlay from '../gamePlay/GamePlay.js'

class PlayerPane extends React.Component {

    constructor (props) {
        super(props);
        this.state = {"players" : [],
                      "playerList" : []};

        this.handleResetPlayers = this.handleResetPlayers.bind(this);
        this.handleStartGame = this.handleStartGame.bind(this);
    }

    componentWillMount() {
        console.log('fetched players');
        fetch("http://localhost:8080/getPlayers")
        .then(
            (response) => {
                return response.json();
            }).then((json) => {
//                console.dir(json);
                this.updatePlayerState(json);
//                this.setState({"players" : json});
                }
            )
    }

    getPlayerList(players) {
//        console.dir(players);
        var playerList = [];
        playerList = players.map((player, index) => {
                                  return <Player key={index.toString()}
                                          index={index+1}
                                          value={player.name} />
                    });
        return playerList;
    }

    handleResetPlayers(event)
    {
        if(true == window.confirm('Poistetaanko todella kaikki pelaajat?'))
        {
            fetch("http://localhost:8080/resetPlayers",
                    {
                        method: "POST"
                    }
            )
            .then(
                  (result) => {
                      //TODO: Mieti tämä ja testaa

                      console.dir(result);
                      this.updatePlayerState([]);
                  },
                  (error) => {
                      //TODO: Mieti tämä ja testaa

                      console.dir(error);
                  }
            );
        }
    }

    handleStartGame(event) {
        if(0 == this.state.players.length)
            alert("Lisää nyt ensin edes yksi pelaaja, hei!");
        else {
//            ReactDOM.unmountComponentAtNode(document.getElementById('content'));
            ReactDOM.render(
              <GamePlay />,
              document.getElementById('content')
            );
            /* ReactDOM.render(
              <GamePlay />,
              document.getElementById('root')
            );*/
        }

    }

    handleSubmit(name) {
        let players = this.state.players.slice();
        let newPlayer = {"name" : name};
//        this.updatePlayerState(players);
        fetch("http://localhost:8080/addPlayers",
                {
                  method: "POST",
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                  },
//                body: '{"name":"' + name + '"}'
                  body: JSON.stringify(newPlayer)
                })
            .then(
              (result) => {
                  //TODO: Mieti tämä ja testaa

                  //console.dir(result);
                  return result.json();

              },
              (error) => {
                  //TODO: Mieti tämä ja testaa

                  console.dir(error);
              }
        ).then((json) => {
                players.push(json);
                this.updatePlayerState(players);

        })
    }

    updatePlayerState(players) {
        this.setState({"players" : players,
                       "playerList" : this.getPlayerList(players)});
    }

    render() {
        return (
          <div>
              <div>
                <button className="button btn btn-danger" onClick={this.handleResetPlayers} >
                    POISTA PELAAJAT
                </button>
                <button className="button btn btn-success" style={{float: 'right'}} onClick={this.handleStartGame} >
                    ALOITA PELI
                </button>
              </div>
              <div style={{marginTop: '25px'}}>
                  <AddPlayerForm handleSubmit={this.handleSubmit.bind(this)}
                      i={this.state.players.length+1}/>
              </div>
              <div style={{marginTop: '25px'}}>
                  { 0 == this.state.playerList.length ? '' :
                  <table className="table table-striped">
                      <thead className="thead-dark">
                          <tr className="info"><th>Pelaajat</th></tr>
                      </thead>
                      <tbody>{this.state.playerList}</tbody>
                  </table>
                  }
              </div>
          </div>
        );

    }
}

export default PlayerPane
