function Login() {
    self = this;
    
    var entrarBtn = $("#entrarBtn");

    this.entrar = function() {
        var usuario = $("#usuario").val();
        var senha = $("#senha").val();

        axios({
            method: 'post',
            url: '/realizarLogin',
            data: {
                usuario: usuario,
                senha: senha,
            },
            validateStatus: (status) => {
                return true;
            },
            }).catch(error => {
                window.location.href="/"
            }).then(response => {
                window.location.href=response.data
        });
    }

    entrarBtn.on("click", function(event) {
        self.entrar()
    })
}

var login = new Login();