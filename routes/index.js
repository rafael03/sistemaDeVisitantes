// var express = require('express');
// var router = express.Router();
// var dbConection = require('../config/dbConection');

// var conection = dbConection();

// conection.query('select * from login', function(erro, result){
//     console.log("result", result)
// })

// router.get('/', function(req, res) {
//     res.sendfile('./public/views/index.html');
// })

// router.post('/realizarLogin', function(req, res) {
//     if(req.body.usuario == 'rafael') {
//         res.status(200).send('/telaInicial')
//     }
//     res.status(500).send('/')
// })

// router.get('/telaInicial', function(req, res) {
//     console.log("req", req.body)
//     res.sendfile('./public/views/telaPrincipal.html')
// })

// module.exports = router;
