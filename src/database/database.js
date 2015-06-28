var mysql 	=	require("mysql"),
	pool 	=	mysql.createPool({
		host	: 	"localhost",
		user 	: 	"root",
		password	: "",
		database 	: 	"to-do-list"
	});

exports.ViewData = function(isi, callback){
	var query = "SELECT * FROM planning WHERE ?",
	isi = isi || 1;

	pool.getConnection(function(poolErr, connection){
		if (poolErr){
			console.log(poolErr);
			callback(poolErr);
			return;
		}

		connection.query(query,[isi],function(connErr, results){
			if (connErr){
				console.log(connErr);
				callback(connErr);
				return;
			}
			callback(false, results);
		});
	})
}