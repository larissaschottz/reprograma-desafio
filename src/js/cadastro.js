let email = document.querySelector('#email')
let Labelemail = document.querySelector('#Labelemail')
let validEmail = false

let login = document.querySelector('#login')
let Labellogin = document.querySelector('#Labellogin')
let validLogin = false


let passwd = document.querySelector('#passwd')
let Labelpasswd = document.querySelector('#Labelpasswd')
let validPasswd = false


email.addEventListener('keyup', () => {
    if (email.value.length <= 4) {
        Labelemail.setAttribute('style', 'color: red')
        validEmail = false
    } else {
        Labelemail.setAttribute('style', 'color: white')
        validEmail = true
    }
})
login.addEventListener('keyup', () => {
    if (login.value.length <= 2) {
        Labellogin.setAttribute('style', 'color: red')
            //caso o user so coloque duas letras irá ficar vermelho, como erro
        validLogin = false
    } else {
        Labellogin.setAttribute('style', 'color: white')
        validLogin = true
    }
})

passwd.addEventListener('keyup', () => {
    if (passwd.value.length <= 7) {
        Labelpasswd.setAttribute('style', 'color: red')
        validPasswd = false

    } else {
        Labelpasswd.setAttribute('style', 'color: white')
        validPasswd = true
    }
})

function cadastrar() {
    if (validEmail && validLogin && validPasswd) {
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')

        listUser.push({
            emailCad: email.value,
            loginCad: login.value,
            passwdCad: passwd.value
        })

        localStorage.setItem('listUser', JSON.stringify(listUser))


        alert('Cadastro feito com sucesso!')

    } else {
        alert('* Campos vazios!')
    }
}