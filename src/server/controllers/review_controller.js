let reviews = [];


module.exports = {
    compose: (req, res) => {
        reviews.push(req.body)
            res.status(200).send(reviews)

                    },


    search: (req, res) => {
        res.status(200).send( reviews );
        },

    }