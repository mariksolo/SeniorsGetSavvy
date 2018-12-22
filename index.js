const express = require('express');
const fs = require('fs');
const http = require('http'); 
const path = require('path');
// const Trianglify = require('trianglify');


/*
const server = http.createServer ( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.sendFile(path.join(__dirname + '/index.html'));
    res.end();
});
server.listen(8080);
*/
// var pattern = Trianglify({
//        width: 600,
//        height: 400
//     });
var app = express(); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/trianglify.svg', (req, res) => {
  res.sendFile(path.join(__dirname + '/trianglify.svg'))
})

app.get('/imageOne.jpeg', (req, res) => {
  res.sendFile(path.join(__dirname + '/imageOne.jpeg'))
})

app.get('/imageTwo.jpg', (req, res) => {
  res.sendFile(path.join(__dirname + '/imageTwo.jpg'))
})
app.get('/imageThree.jpg', (req, res) => {
  res.sendFile(path.join(__dirname + '/imageThree.jpg'))
})


app.listen(8080);
