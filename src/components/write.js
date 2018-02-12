import React, { Component } from 'react';
import './compStyle.css';
import axios from "axios";


export default class Write extends Component {

    constructor(){
        super()
        this.state = {
            reviews: [],
            author: "",
            title: "",
            review: ""

        }

        this.authorInput = this.authorInput.bind(this);
        this.titleInput = this.titleInput.bind(this);
        this.reviewInput = this.reviewInput.bind(this);
        this.sendIt = this.sendIt.bind(this);

    }


    // componentDidMount() {
    //     axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
    //     axios.get( '/api/reviews' ).then( response => {this.setState({ reviews: response.data });
    //     });
    

    // }

               





    authorInput(val){

        this.setState({author: val});
        
        
    }

    titleInput(val){

        this.setState({title: val});
        
    }

    reviewInput(val){

        this.setState({review: val})
        
    }

    sendIt(){
        
          axios.post('/api/reviews', {
              author: this.state.author,
                title: this.state.title,
                review: this.state.review }).then( (res) => console.log(res.data));

            
    }


    render(){
        console.log(this.state, 'write')
        return(
            <div id="write_box" className="mainLay"> 
                <h4>Write a reveiw</h4>

                <h4>Author</h4>
                <input className="user_input" onChange={(e) => this.authorInput(e.target.value)}></input>

                <h4>Movie title</h4>
                <input className="user_input" onChange={(e) =>
                this.titleInput(e.target.value)}></input>

                <h4>write your review</h4>
                <input className="user_input" onChange={(e) => this.reviewInput(e.target.value)}></input>

                <button className="buttonz" onClick={ () => {this.sendIt() }}>
            <p className="buttext">Compose</p>
            
          </button>
                    
            </div>
        )
    }
        
}
