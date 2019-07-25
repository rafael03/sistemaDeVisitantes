module.exports.salvar = function(app, req, res) {
    var login = req.body;
    req.assert('usuario', 'O login é obrigatorio').notEmpty();
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
}