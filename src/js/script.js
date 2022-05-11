function validar() {
    var email = document.getElementById("email")
    var passwd = document.querySelector('#passwd')

    if (email.value == users.email) {
        alert('email ja cadastrado')
    }

    if (email.value == "") {
        alert('Email não informado')
        email.focus()
        return
    }
    if (passwd.value == "") {
        alert('Senha não informada.')
        passwd.focus()
        return
    }
    alert('Formulário enviado!')
}