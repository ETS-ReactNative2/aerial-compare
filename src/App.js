import React, { Component } from 'react';
import MapView from './MapView';
import ViewBar from './ViewBar';
import WebFont from 'webfontloader';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    WebFont.load({
      google: {
        families: ['Open Sans:300,400,700', 'sans-serif']
      }
    });
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {"layers":[]};
  }


  handleItemClick(data) {
    var found = false;
    var newState;

    this.state.layers.forEach(function(lyr, index){
      if (data.id === lyr.id){
        found = [true,index];
      }
    });

    if (!found){
      this.setState({"layers": [...this.state.layers,data]});
    }
    else {
      newState = JSON.parse(JSON.stringify(this.state));
      newState.layers[found[1]] = data;
      this.setState(newState);

    }
  }


  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          Stillwater Aerials
        </header>
        <MapView layers={this.state.layers} />
        <ViewBar onItemClick={this.handleItemClick} />
      </div>
    );
  }
}

export default App;
