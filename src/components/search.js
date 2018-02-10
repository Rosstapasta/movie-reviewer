import React, { Component } from 'react';
import './compStyle.css';



export default class Search extends Component {

    constructor(){
        super()
        this.state = {
        title: "",

        }

    }

    titleInput(val){

        this.setState({title: val});

    }

    render(){
        return(
            <div class="mainLay"> 
                <h4>Search by title</h4>
                <input class="user_input" onChange={(e) => this.titleInput(e.target.value)}></input> 

                <button class="buttonz">
            <p class="buttext">FIND</p>
          </button>
            </div>
        )
    }
        
}