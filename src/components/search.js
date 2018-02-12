import React, { Component } from 'react';
import './compStyle.css';
import axios from "axios";



export default class Search extends Component {

    constructor(){
        super()
        this.state = {
        title: "",
        author: "",
        returnReview: [],
        reviews: [],
        

        }

        this.titleInput = this.titleInput.bind(this);
        this.searchByTitle = this.searchByTitle.bind(this);
        this.authorInput = this.authorInput.bind(this);
        // this.searchByAuthor = this.searchByAuthor.bind(this);


    }

    componentDidMount() {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
        axios.get( 'localhost:3000/api/reviews' ).then( response => {this.setState({ reviews: response.data });
        });
    

    }

    titleInput(val){
    
        this.setState({title: val});
        console.log(this.state.title)

    }

    authorInput(val){
        this.setState({author: val})
    }

    searchByTitle(){
        axios.get(`api/reviews?title=${this.state.title}`).then( (res) => this.setState({ returnReview: res.data }))
        console.log(this.state.returnReview)

        
    }




    render(){
        const { reviews } = this.state;
        
        return(
    
            <div id="search_box" class="mainLay"> 

                <h4>Search by title</h4>
                <input className="user_input" onChange={(e) => this.titleInput(e.target.value)}></input> 

                <button className="buttonz" onClick={ this.searchByTitle }>
            <p className="buttext">FIND</p>
            
          </button> 



            </div>
        )
    }
        
}