var express = require('express');
var app = express();

app.use(express.static(__dirname));

var messages = [
    {name :  'Mohamamd', message : 'salam'},
    {name :  'Younas', message : 'walekumsalam'}
]
app.get('/messages',(req,res) => {
    res.send(messages)
})

app.post('/messages',(req,res) => {
    console.log(req.body)
    res.sendStatus(200)
})

var server = app.listen(3000,function(){
    console.log("server listening on: " + server.address().port);
});
