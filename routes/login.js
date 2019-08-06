module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('../views/login.ejs');
    });

    app.get('/login/cadastrar', function(req, res) {
        app.controllers.login.cadastrar(app, req, res);
    });

    app.post('/login/salvar', function(req, res) {
        app.controllers.login.salvar(app, req, res)
    });

    app.get('/listaLogins', function(req, res) {
        app.controllers.login.listar(app, req, res)
    })
}