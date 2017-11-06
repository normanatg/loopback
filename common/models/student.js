'use strict';

module.exports = function(Student) {
  Student.greet = function (msg, cb) {
  	cb(null, 'Greetings... '+ msg);
  }
  Student.remoteMethod('greet',{
  	accepts:{arg:"msn", type:'string'},
  	returns:{arg:"greetings", type: 'string'}
  });
};
