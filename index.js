const express = require('express');
const app = express();
const port = 6000;

const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');

//require all for session cookie
const session = require('express-session');

app.use(express.urlencoded());


app.use(cookieParser());


app.use('/' , require('./routes/api/v1'));

const server = app.listen(port , function(err){
    if(err){
        console.log("Error in connection" , err);
        return;
    }
    console.log("Server is running on port" , port);
});

module.exports = server;