// import React, { Component } from 'react';

class PlayerService{

  // constructor() {
  //   this.getPlayers = this.getPlayers.bind(this);
  // }

  savePlayer(player) {
    console.log('PlayerService savePlayer called');
    fetch('http://localhost:8080/savePlayer ', {  // http://fribastar.ddns.net:8080/fribaStar/addPlayer
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: player
      })
    })
  }


  getPlayers() {
    console.log('PlayerService getPlayers called');
    fetch('http://localhost:8080/test')  // http://fribastar.ddns.net:8080/fribaStar/test getPlayers
    .then(function(response) {
      return response.text()
    }).then(function(json) {
      console.log('parsed json', json)
      // return json
    }).catch(function(ex) {
      console.log('parsing failed', ex)
      // return null
    })

    return ['Vesa', 'Samu'];
  }

}

export default new PlayerService();
