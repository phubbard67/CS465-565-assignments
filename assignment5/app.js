const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;
var path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/submit', function(req, res) {
    console.log(req.body);
});


app.listen(port);


