var fs = require("fs");
var temo = '{"name" : "Mohammad"}';
fs.writeFile('./tet.json',temo,function(err,data){
    console.log('Finished', err);
});