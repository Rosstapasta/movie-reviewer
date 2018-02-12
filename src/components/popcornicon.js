import React, { Component } from 'react';
import './compStyle.css';
import popcorn from './popcorn.png';

export default class Popcorn extends Component {
    render(){
        return(
            <div>
                <img src={popcorn} className="popcorn_logo"/>
            </div>

        )
    }

}