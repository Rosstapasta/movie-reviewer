import React, { Component } from 'react';
import popcorn from './popcorn.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <img src={popcorn} className="popcorn-logo" alt="logo" />
          <img src={popcorn} className="popcorn-logo" alt="logo" />
          <img src={popcorn} className="popcorn-logo" alt="logo" />
          <img src={popcorn} className="popcorn-logo" alt="logo" />

          <h1 className="App-title">Movie Reviews</h1>

          <img src={popcorn} className="popcorn-logo" alt="logo" />
          <img src={popcorn} className="popcorn-logo" alt="logo" />
          <img src={popcorn} className="popcorn-logo" alt="logo" />
          <img src={popcorn} className="popcorn-logo" alt="logo" />
        </header>


        <body class="datBod">
          
          <button class="buttonz">
            <p class="buttext">Make reviews</p>
          </button>

          <button class="buttonz">
            <p class="buttext"> Read reviews</p>
          </button>

          <button class="buttonz">
            <p class="buttext">Edit reviews</p>
          </button>


        </body>



        <footer class="thefoot">
        <img src={popcorn} className="popcorn-logo" alt="logo" />
        <img src={popcorn} className="popcorn-logo" alt="logo" />
            <h1 id="author" class="App-title">
              Eric Ross
            </h1>
            <img src={popcorn} className="popcorn-logo" alt="logo" />
            <img src={popcorn} className="popcorn-logo" alt="logo" />


        </footer>
        
      </div>
    );
  }
}

export default App;
