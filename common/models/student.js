'use strict';

module.exports = function(Student) {
  Student.greet = function (msg, cb) {
  	cb(null, 'Hola... '+ msg);
  }
  Student.remoteMethod('greet',{
  	accepts:{arg:"msn", type:'string'},
  	returns:{arg:"greetings", type: 'string'},
  	http: {path:'/greet', verb:'get'}
  });
};
