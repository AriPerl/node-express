const { log } = require('console');
const express = require('express');
const app = express();
const port = 3000;

data = [
{
    id:"123",
    email: "ari@gmail.com",
    password: "@gmaAri"
},
{
    id:"123",
    email: "ari@gmail.com",
    password: "@gmaAri"
}
]


app.get('/',(req,res) =>{
    res.send('Hello World');
});

app.listen(port,() => {
    console.log(`Server is up and running on port:${port}`);
});

