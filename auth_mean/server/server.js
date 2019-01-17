var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var app= express();

var port = 3000;

var api = require('./routes/apiRoutes');

app.use(bodyParser.json());
app.use(cors())
app.use('/api',api)
app.get('/',(req,res)=> {
    res.send("Hello from server");
})

app.listen(port,() =>console.log("server connected"))