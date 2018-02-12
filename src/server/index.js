const express = require('express');
const bodyParser = require('body-parser');
const rec = require( './controllers/review_controller')

const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + 'src') );

const url = '/api/reviews';
app.post( url, rec.compose );
app.get( url, rec.searchtitle );
app.delete(url, rec.delete);
// app.get( '/api/reviews/2')

const port = 3030;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );