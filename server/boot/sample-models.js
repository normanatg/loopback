module.exports = function (app) {
	var Admins = app.models.Administator;
	var Role = app.models.Role;
	var RoleMapping = app.models.RoleMapping;
	Role.create({
		name:"admin"
	},function (err, role) {
		if (err) throw err;
		role.principals.create({principalType: RoleMapping.USER},
			function (err, principal) {
				if (err) throw err;
				console.log("Created principal:", principal);
			}
		)
	});
}