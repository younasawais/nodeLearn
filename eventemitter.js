var eventEmitter = require('events');   //class
var logging = new eventEmitter();       //object

logging.on('messaged Logged', (e) => {
    console.log('hello gi bye');
});

logging.emit('this will log the event', {name: 'Mohammad', age : 28});