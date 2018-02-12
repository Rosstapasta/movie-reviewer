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
        


    }

    // componentDidMount() {
    //     axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
    //     axios.get( '/api/2/reviews' ).then( response => {this.setState({ reviews: response.data });
    //     });
    

    // }

    titleInput(val){
    
        this.setState({title: val});
        
    }

    authorInput(val){
        this.setState({author: val})
    }

    searchByTitle(){
        axios.get(`/api/reviews?title=${this.state.title}`).then( (res) => this.setState({ returnReview: res.data }))
       

        
    }




    render(){
        // console.log(this.state)
        return(
    
            <div id="search_box" className="mainLay"> 

                <h4>Search by title</h4>
                <input className="user_input" onChange={(e) => this.titleInput(e.target.value)}></input> 

                <button className="buttonz" onClick={ () => { this.searchByTitle() }}>
                <p className="buttext">FIND</p>
            
                </button> 

                <div className="requested_review">
                    <p className="label">Author</p>
                        { this.state.returnReview[0] ?
                        <div> 
                        {this.state.returnReview[0].author} </div> : null}
                    <p className="label">Review</p>
                        { this.state.returnReview[0] ?
                        <div>{this.state.returnReview[0].review} 
                        </div> : null}
                    

                </div>




            </div>
        )
    }
        
}