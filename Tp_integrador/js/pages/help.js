(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('YuWQA21EuYhOPfVb7');
})();


window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validarEmail()) {
            this.contact_number.value = Math.random() * 100000 | 0;
            emailjs.sendForm('service_mq7yx4j', 'template_9s2emfo', this)
                .then(function () {
                    alert('Enviado correctamente! uwu');

                }, function (error) {
                    alert('Error... unu', error);
                });
        }
        else {
            alert("Ingrese un mail valido! owo");
        }
    });
}


function validarEmail() {
    let email = document.getElementById('email').value;
    let caracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (caracteres.test(email)) {
        return true
    }
    else {
        return false
    }
}

function limpiar() {
    document.getElementById('user-name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('mensaje').value = "";
    alert("Se limpiaron los campos de texto! uwu");
}