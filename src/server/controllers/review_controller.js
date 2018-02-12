let reviews = [{author: "eric", title: "lotr", review: "The best movie in the world!! WOW!!! damn!"},{author:"Billy", title:"star wars", review:"almost as good as lotr",}];


module.exports = {
    compose: (req, res) => {
        
        reviews.push(req.body)
            res.status(200).send(reviews)

                    },


    searchtitle: (req, res) => {
        let findReview = reviews.filter( e => e.title == req.query.title)
        res.status(200).send(findReview)
        },


    delete: (req, res) => {
       
        let findReview = reviews.findIndex( e => e.title == req.query.title )
        reviews.splice(findReview, 1);
        console.log(reviews)
        res.status(200).send();
    },

    update: (req, res) => {
        for(let i=0; i<reviews.length; i++){
            if( reviews[i].author === req.body.author ){
                reviews[i].title = req.body.title;
                reviews[i].review = req.body.review;

                return res.status(200).send(reviews)
            }

        }


        // let findReview = reviews.findIndex( e => e.author == req.query.author)
        // reviews[findreview] = {author:,title:,review:}
        
    }

    
    // searchauthor: (req, res) => {
    //     let findReview = reviews.filter( e => e.author == req.query.author)
    //     res.status(200).send(findReview)
    //     },


}
