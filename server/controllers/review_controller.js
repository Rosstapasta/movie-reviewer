var reviews = [];


module.exports = {
    compose: (req, res) => {
        const { author, title, review } = req.body;
        reviews.push( { author, title, review } );
            res.status(200).send( reviews );

                    },


    search: (req, res) => {
        res.status(200).send( reviews );
        },

    }