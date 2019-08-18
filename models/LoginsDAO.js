var crypto = require('crypto')

function LoginsDAO(connection) {
    this._connection = connection();
}

LoginsDAO.prototype.salvarNovoLogin = function(usuario) {
    var senha_criptografada = crypto.createHash("md5")
                                    .update(usuario.senha)
                                    .digest("hex");

    usuario.senha = senha_criptografada;
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            collection.insert(usuario);
            mongoclient.close();
        });
    });
}

LoginsDAO.prototype.getLogins = function() {
    return new Promise(function(resolve) {
        self._connection.open(function(err, mongoclient) {
            mongoclient.collection("usuarios", function(err, collection) {
                collection.find({}).toArray(function(err, result) {
                    mongoclient.close();
                    return resolve(result)
                })
            })
        });
    });
}

module.exports = function() {
    return LoginsDAO;
}
