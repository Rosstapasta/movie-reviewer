import React, { Component } from 'react';
import popcorn from './popcorn.png';
import './App.css';
import Write from './components/write';
import Search from './components/search';
import Edit from './components/edit';

class App extends Component {

  constructor(){
    super()

    this.state = {


    }

    
  }

  


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
          
          <Search/>

          <Write/>

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
