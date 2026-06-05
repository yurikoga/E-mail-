document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    const email = document.getElementById('emailInput').value;

    if (email) {
        // Aqui você faria a chamada para sua API
        alert(`Obrigado por se inscrever! Enviamos uma confirmação para: ${email}`);
        
        // Limpa o campo
        document.getElementById('emailInput').value = '';
    }
});
