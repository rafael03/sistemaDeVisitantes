module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('../views/login.ejs');
    });

    app.get('/login/cadastrar', function(req, res) {
        res.render('../views/login/cadastrar.ejs', {validation: ""})
    });

    app.post('/login/salvar', function(req, res) {
        app.controllers.login.salvar(app, req, res)
    });

    app.get('/listaLogins', function(req, res) {
        var conection = app.config.dbConection();
        var loginModel = new app.models.loginModel(conection);
        loginModel.getLogin(function(erro, result){
            res.render('../views/listaLogins.ejs', {listaDeLogins: result})
        });
    })
}