import React, { Component } from 'react';
import './searchtwo.css';


export default class Searchtwo extends Component {

    constructor(props){
        super(props)
        returnReview: this.props.returnReview

    }



    function(){
        return console.log(this.state)
    }



    render(){
        const { returnReview } = this.props;
        return(
            <div>
                <span className="return">{ JSON.stringify(returnReview) }</span>
            </div>

        )

    }

}