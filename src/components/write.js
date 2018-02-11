import React, { Component } from 'react';
import './compStyle.css';
import axios from "axios";


export default class Write extends Component {

    constructor(){
        super()
        this.state = {
            reviews: [],
            author: " ",
            title: " ",
            review: " "

        }

        this.authorInput = this.authorInput.bind(this);
        this.titleInput = this.titleInput.bind(this);
        this.reviewInput = this.reviewInput.bind(this);
        this.sendIt = this.sendIt.bind(this);

    }


    componentDidMount() {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
        axios.get( 'http://localhost.3000/api/reviews' ).then( response => {this.setState({ reviews: response.data });
        });
    

    }

               





    authorInput(val){

        this.setState({author: val});
        console.log(this.state)
        
    }

    titleInput(val){

        this.setState({title: val});
        console.log(this.state)
    }

    reviewInput(val){

        this.setState({review: val})
        console.log(this.state.review)
    }

    sendIt(){
        const { author, title, review } = this.state;
        const newR = {author, title, review};
        axios.post( url, { author, title, review } ).then( response => {
            this.setState({ reviews: response.data });
          });
    
          this.setState({ author: "", title: "", review: "" });
    }


    render(){
        return(
            <div id="write_box" class="mainLay"> 
                <h4>Write a reveiw</h4>

                <h4>Author</h4>
                <input class="user_input" onChange={(e) => this.authorInput(e.target.value)}></input>

                <h4>Movie title</h4>
                <input class="user_input" onChange={(e) =>
                this.titleInput(e.target.value)}></input>

                <h4>write your review</h4>
                <input class="user_input" onChange={(e) => this.reviewInput(e.target.value)}></input>

                <button class="buttonz" onClick={ () => this.sendIt() }>
            <p class="buttext">Compose</p>
            
          </button>
                    
            </div>
        )
    }
        
}
