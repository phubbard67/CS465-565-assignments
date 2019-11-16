const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;
var path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/submit', function(req, res) {
    let name = req.body['name'];
    let email = req.body['email'];
    let message = req.body['message'];
    let toSend = 'name: ' + name + '<br> email: ' + email + '<br> comment: ' + message;

    res.send(toSend);
});


app.listen(port);


