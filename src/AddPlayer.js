import React, { Component } from 'react';
import FSButton from './FSButton.js';

class AddPlayer extends Component {

  addPlayerAction() {
    console.log('in addPlayerAction');
  }

  render() {
    return (
      <div className="AddPlayer">
        <h1>Lisää pelaajia</h1>
        	<div id='player' >Pelaaja 1:</div> <input id="playerName" type="text" />
          <FSButton id="addPlayerButton" value="Lisää" action={this.addPlayerAction} />
          {/* <input id="addPlayerButton" type="button" value="Lisää" />  */}
          {/* <input type="reset" value="Tyhjennä" /> */}
      </div>
    );
  }
}

export default AddPlayer;
