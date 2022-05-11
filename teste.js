email.addEventListener('keyup', () => {
    if (email.value.length <= 4 || login.value == "") {
        Labelemail.setAttribute('style', 'color: red')
        validEmail = false
    } else {
        Labelemail.setAttribute('style', 'color: white')
        validEmail = true
    }
})
login.addEventListener('keyup', () => {
    if (login.value.length <= 2 || login.value == "") {
        Labellogin.setAttribute('style', 'color: red')
            //caso o user so coloque duas letras irá ficar vermelho, como erro
        validLogin = false
    } else {
        Labellogin.setAttribute('style', 'color: white')
        validLogin = true
    }
})

passwd.addEventListener('keyup', () => {
    if (passwd.value.length <= 7 || passwd.value == "") {
        Labelpasswd.setAttribute('style', 'color: red')
        validPasswd = false

    } else {
        Labelpasswd.setAttribute('style', 'color: white')
        validPasswd = true
    }
})

function cadastrar() {
    if (validEmail && validLogin && validPasswd) {
        alert('Cadastro feito com sucesso!')
    } else {
        alert('* Campos vazios!')
    }
}