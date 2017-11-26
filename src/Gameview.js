import React, { Component } from 'react';
import FSButton from './FSButton.js';
import AddPlayer from './AddPlayer.js';
import ListPlayers from './ListPlayers.js';

class Gameview extends Component {

resetPlayersAction() {
  console.log('in resetPlayersAction');
}

startGameAction() {
  console.log('in startGameAction');
}

  render() {
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
