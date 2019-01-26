import React, { Component } from 'react';
import FSButton from './addPlayers/FSButton.js';
import AddPlayer from './addPlayers/AddPlayer.js';
import ListPlayers from './addPlayers/ListPlayers.js';

class Gameview extends Component {

resetPlayersAction() {
  console.log('in resetPlayersAction');
}

startGameAction() {
  console.log('in startGameAction');
}

  render() {
    // Create logic for returning appropriate view depending on state of the
    // game flow
    return (
      <div className="Gameview">
        <FSButton id="resetPlayers" value="Poista pelaajat" action={this.resetPlayersAction} />
        <FSButton id="startGame" value="Aloita peli" action={this.startGameAction} />
        <AddPlayer/>
        <ListPlayers/>
      </div>
    );
  }
}

export default Gameview;
