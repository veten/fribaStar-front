import React, { Component } from 'react';
import PlayerService from '../commonServices/PlayerService.js';

class ListPlayers extends Component {

  constructor(props) {
    super(props);
    console.log('this.props', this.props);
    this.players = ['ville', 'sepi'];
    // this.getPlayers = this.getPlayers.bind(this);
  }

  getPlayers() {
    console.log('ListPlayers getPlayers called');
    this.players = PlayerService.getPlayers();
  }

  render() {
    this.getPlayers();
    const players = this.players.map((item, index) =>
      <li key={index}>{item}</li>
    );
    return (
      <div className="ListPlayers">
        <ul>{players}</ul>
      </div>
    );
  }
}

export default ListPlayers;
