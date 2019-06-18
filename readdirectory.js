var fs = require("fs");

fs.readdir("C:/",function(err, data){
    console.log(data);
});