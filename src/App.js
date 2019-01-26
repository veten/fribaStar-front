import React, { Component } from 'react';
//import './App.css';
//import Gameview from './Gameview.js';
import AddPlayers from './addPlayers/AddPlayers.js';

class App extends Component {
  /*render() {
    return (
      <div className="App">
        <Gameview/>
      </div>
    );
  }*/
  render() {
		return (
		<div class="container">
			<div class="row">
				<div class="col-lg-4"></div>
				<div class="col-lg-4">
					<div id="content" >
						<AddPlayers />
					</div>
				</div>
				<div class="col-lg-4"></div>
			</div>
		</div>
		);
	}


  // <header className="App-header">
  //   <img src={logo} className="App-logo" alt="logo" />
  //   <h1 className="App-title">Welcome to React</h1>
  // </header>
  // <p className="App-intro">
  //   To get started, edit <code>src/App.js</code> and save to reload.
  // </p>
}

export default App;
