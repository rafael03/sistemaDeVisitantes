var mysql = require('mysql');
var connMySql = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'brasil',
        database: 'VisitantesDB'
    });
}

module.exports = function() {
    return connMySql;
}
