const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const data = require('./data');
const app = express();

const Port=1234;
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send(data);
})

app.listen(Port,()=>{
	console.log("Server Started");
});