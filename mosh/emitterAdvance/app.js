var ShootClass = require('./logger');
var shootObj   = new ShootClass();

shootObj.on('shot', (arg)=>{console.log('ON RECEIVED : ' + arg)});

shootObj.shootEvent(25);