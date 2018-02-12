let reviews = [];


module.exports = {
    compose: (req, res) => {
        reviews.push(req.body)
            res.status(200).send(reviews)

                    },


    searchtitle: (req, res) => {
        let findReview = reviews.filter( e => e.title == req.query.title)
        res.status(200).send(findReview)
        },

    
    // searchauthor: (req, res) => {
    //     let findReview = reviews.filter( e => e.author == req.query.author)
    //     res.status(200).send(findReview)
    //     },


}
