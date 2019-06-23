var eventEmitter = require('events');

class Shoot extends eventEmitter{
    shootEvent(shots){
        console.log(shots + ' shots have been fired!');
        this.emit('shot','Emit Argument passed');
    }
}

module.exports = Shoot;