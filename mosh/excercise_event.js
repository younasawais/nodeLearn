var eventEmitter = require('events');
var emitter = new eventEmitter();



emitter.on('logthis',(message)=>{
    console.log(message);
});

emitter.emit('logthis','this is the message');

