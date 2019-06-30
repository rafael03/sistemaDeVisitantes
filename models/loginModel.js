module.exports = function() {

    this.getLogin = function(connection, callback) {
        connection.query('select * from login', callback)
    }

    return this;
}