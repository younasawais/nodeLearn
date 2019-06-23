var eventEmitter = require('events');
var emitter = new eventEmitter();
var name = 'Mohammad';
var doSomething = function(arg){
    console.log('My Name is: ' + arg.name + " , age: " + arg.age);
};

emitter.on('dosomething', doSomething);

emitter.emit('dosomething', {name:'Mohammad', age:28});