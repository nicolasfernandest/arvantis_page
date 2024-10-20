document.getElementById('contato').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validação de telefone
    const phone = document.getElementById('phone').value;
    if (phone.length < 4) {
        alert("Por favor, insira um número de telefone válido.");
        return;
    }

    // Envio do formulário via EmailJS
    emailjs.send("service_3bobh0d", "template_9la2yu5", {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    })
    .then(function(response) {
        alert('Mensagem enviada com sucesso!');
        document.getElementById('contato').reset(); // Limpa o formulário após o envio
    }, function(error) {
        alert('Ocorreu um erro. Tente novamente.');
    });
});