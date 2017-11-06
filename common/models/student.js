'use strict';

module.exports = function(Student) {
	Student.validatesUniquenessOf('email',{message:"Solo puede tener un correo"});
  	Student.registro = function (clase, cb) {
  		var curso = require("courses");
  		
    	var response;
    	response = "Listo"+clase;
    	cb(null, response);
  	};

  	Student.remoteMethod(
  		'registro',{
  			http:{
  				path:'/registro',
  				verb:'get'
  			},
  			accepts: {
  				arg: 'clase',
  				type: 'string',
  				required: true
  			},
  			returns: {
        		arg: 'status',
        		type: 'string'
      		}
  		}
  	);
};
