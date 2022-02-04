const client = require('./connection');
const express = require('express');
const router = require('./Router/route');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

client.connect();

app.use('/',router);

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})





