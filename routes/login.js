module.exports = function(app) {
    var dbConection = require('../config/dbConection');
    var conection = dbConection();

    app.get('/', function(req, res) {
        res.render('../views/login.ejs');
    });

    app.get('/listaLogins', function(req, res) {
        conection.query('select * from login', function(erro, result){
            console.log("error", erro)
            console.log("result", result)
            res.render('../views/listaLogins.ejs', {listaDeLogins: result})
        })
    })
}