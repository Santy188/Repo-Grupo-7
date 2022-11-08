
(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('YuWQA21EuYhOPfVb7');
})();


window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_mq7yx4j', 'template_9s2emfo', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}

function limpiar(){
    document.getElementById('user-name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('mensaje').value = "";
}