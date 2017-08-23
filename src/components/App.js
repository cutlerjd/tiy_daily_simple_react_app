import React, { Component } from 'react';
import '../App.css';
import EarthquakeInfo from './EarthquakeInfo'
import EarthquakeList from './EarthquakeList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
          Earthquakes!
          </div>
        </div>
        <EarthquakeInfo />
        <EarthquakeList />
      </div>
    );
  }
}

export default App;
