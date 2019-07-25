function LoginModel(connection) {
    this._connection = connection;
}

LoginModel.prototype.getLogin = function( callback) {
    this._connection.query('select * from login', callback)
}

LoginModel.prototype.salvarNovoLogin = function(login, callback) {
    this._connection.query('insert into login set ?', login, callback)
}

module.exports = function() {

    return LoginModel;
}