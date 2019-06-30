module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('../views/login.ejs');
    });

    app.get('/listaLogins', function(req, res) {
        var conection = app.config.dbConection();
        var loginModel = app.models.loginModel;
        loginModel.getLogin(conection, function(erro, result){
            console.log(">>> 04")
            console.log("error", erro)
            console.log("result", result)
            res.render('../views/listaLogins.ejs', {listaDeLogins: result})
        });
    })
}