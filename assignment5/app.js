const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;
var path = require('path');

// app.get('/', (request, response) => {
//     response.send("hello");
// })
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '/index.html'));
});

axios.get()

app.listen(port);


