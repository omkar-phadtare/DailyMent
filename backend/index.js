// var http = require('http');

// var dt = require('./todayDate')

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Todays Date : '+ dt.myDateTime())
//   res.end('Hello World!');
// }).listen(8080);

const express = require('express');
const app = express();
const port = 5000;
const connectMongo = require('./dbConnection');
const mongoose = require('mongoose');
var cors = require('cors');

connectMongo();

app.use(cors());
app.use(express.json());

app.use('/api/auth' ,require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));
app.use('/api/register',require('./routes/register'));
app.use('/api/v1/work',require('./routes/WorkerAuth'));

app.listen(port,function(){
    
    console.log("Server is running on port ",{port});

})

