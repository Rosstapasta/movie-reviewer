import React, { Component } from 'react';
import popcorn from './popcorn.png';
import './App.css';
import Write from './components/write';
import Search from './components/search';
import lotr from './lotr.jpg';
import bob from './bob.jpg';
import Popcorn from './components/popcornicon';


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
            <Popcorn/>
            <Popcorn/>
            <Popcorn/>
            <Popcorn/>

          <h1 className="App-title">Movie Reviews</h1>

            <Popcorn/>
            <Popcorn/>
            <Popcorn/>
            <Popcorn/>
        </header>


        <div className="datBod">

          
          
            <div className="picture_and_create">
              <Search/>
            
              <img src={bob} className="lotr" />
            </div>

            <div className="picture_and_create">
                <img src={lotr} className="lotr" />

              <Write/>
            </div>

        </div>



        <footer className="thefoot">
       
            <Popcorn/>
            <Popcorn/>


            <h1 id="author" className="App-title">
              Eric Ross
            </h1>
           
            <Popcorn/>
            <Popcorn/>


        </footer>
        
      </div>
    );
  }
}

export default App;
