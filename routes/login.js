module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('../views/login.ejs');
    });

    app.get('/login/cadastrar', function(req, res) {
        res.render('../views/login/cadastrar.ejs', {validation: ""})
    });

    app.post('/login/salvar', function(req, res) {
        var login = req.body;

        req.assert('login', 'O login é obrigatorio').notEmpty();
        req.assert('senha', 'A senha é obrigatorio').notEmpty();
        req.assert('senha', 'deve conter entre 3 d 10 caracteres').len(3,10);
        var erros = req.validationErrors();
        if(erros){
            console.log("dentro do if")
            res.render('../views/login/cadastrar.ejs', {validation : erros})
            return
        }

        var conection = app.config.dbConection();
        var loginModel = new app.models.loginModel(conection);
        loginModel.salvarNovoLogin(login, function(erro, result){
            res.redirect('/listaLogins')
        });
    });

    app.get('/listaLogins', function(req, res) {
        var conection = app.config.dbConection();
        var loginModel = new app.models.loginModel(conection);
        loginModel.getLogin(function(erro, result){
            res.render('../views/listaLogins.ejs', {listaDeLogins: result})
        });
    })
}