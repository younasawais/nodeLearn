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


var server = app.listen(3000,function(){
    console.log("server listening on: " + server.address().port);
});
