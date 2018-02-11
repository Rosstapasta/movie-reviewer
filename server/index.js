const express = require('express');
const bodyParser = require('body-parser');
const rec = require( _dirname +'/controllers/review_controller.js')

const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + "/../public/build") );

const UAREL = "/api/Reviews";
app.post( UAREL, rec.compose )

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );