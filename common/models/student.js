'use strict';

module.exports = function(Student) {
	Student.validatesUniquenessOf('email',{message:"Solo puede tener un correo"});
  	Student.registro = function (clase, cb) {
  		Student.courses.create({studentId:"5a034c320d097b61c85830d2"
  				,coursesId:"5a034c770d097b61c85830d3"},function (err,val) {
  			console.log(err);
  		});
  		
    	cb(null, "Listo");
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
