// import React, { Component } from 'react';

class PlayerService{

  // constructor() {
  //   this.getPlayers = this.getPlayers.bind(this);
  // }


  getPlayers() {
    console.log('PlayerService getPlayers called');
    return ['Vesa', 'Samu'];
  }

}

export default new PlayerService();
