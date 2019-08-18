module.exports.salvar = function(app, req, res) {
    var login = req.body;
    req.assert('usuario', 'O login é obrigatorio').notEmpty();
    req.assert('senha', 'A senha é obrigatorio').notEmpty();
    req.assert('senha', 'deve conter entre 3 d 10 caracteres').len(3,10);
    var erros = req.validationErrors();
    if(erros){
        res.render('../views/login/cadastrar.ejs', {validation : erros})
        return
    }
    // var conection = app.config.dbConection();
    // var loginModel = new app.models.loginModel(conection);
    // loginModel.salvarNovoLogin(login, function(erro, result){
    //     res.redirect('/listaLogins')
    // });

    var connection = app.config.mongoDbConnection;
    var LoginsDAO = new app.models.LoginsDAO(connection)

    LoginsDAO.salvarNovoLogin(login)
    res.redirect('/inicio')
    // res.send('podemos cadastrar');
    // LoginsDAO.salvarNovoLogin(login, function(erro, result){
    //     res.redirect('/listaLogins')
    // });
}

module.exports.cadastrar = function(app, req, res) {
    res.render('../views/login/cadastrar.ejs', {validation: ""})
}

module.exports.listar = function(app, req, res) {
    // var conection = app.config.dbConection();
    // var loginModel = new app.models.loginModel(conection);
    // loginModel.getLogin(function(erro, result){
    //     res.render('../views/listaLogins.ejs', {listaDeLogins: result})
    // });
}

module.exports.telaInicial = function(app, req, res) {
    var connection = app.config.mongoDbConnection;
    var LoginsDAO = new app.models.LoginsDAO(connection)
    LoginsDAO.getLogins().then(function(result) {
        res.render('../views/inicio.ejs', {validation: "", usuarios: result})
    });
}