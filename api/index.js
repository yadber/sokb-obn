const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const user= require('./pages/user');
const router = require('./pages/router');


const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));



app.use("/router", router);
app.use('/user', user);



app.listen(9000,async ()=>{
    console.log("listening on port 9000");
})