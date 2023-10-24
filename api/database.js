const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "",
    database : 'sokb-obn'
})
connection.connect(function(error){
	if(error) {
		console.log(error);
	}
});
module.exports = connection;