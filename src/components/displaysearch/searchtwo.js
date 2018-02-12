import React, { Component } from 'react';
import './searchtwo.css';


export default class Searchtwo extends Component {

    constructor(props){
        super(props)
        returnReview: this.props

    }



    function(){
        return console.log(this.state)
    }



    render(){
        const { returnReview } = this.props;
        return(
            <div>
                <span className="return">{ returnReview }</span>
            </div>

        )

    }

}