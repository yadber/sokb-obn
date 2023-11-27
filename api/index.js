const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const user= require('./pages/user');
const router = require('./pages/router');
const studioProduction = require('./pages/studioProduction');

helmet({
    crossOriginResourcePolicy: false,
});

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(express.static('public'));
app.use('/profile', express.static('images'));
// app.use('/studioProduction', express.static('images'));



app.use("/router", router);
app.use('/user', user);
app.use('/studioProduction', studioProduction);



app.listen(9000,async ()=>{
    console.log("listening on port 9000");
})