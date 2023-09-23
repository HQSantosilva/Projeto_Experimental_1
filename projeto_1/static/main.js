function mostrarMensagem() {
        alert("Você clicou no botão!");
}

document.getElementById('botao-chamar-funcao').addEventListener('click', function() {
        fetch('/executar-funcao', {
            method: 'POST',
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultado').textContent = data.resultado;
        })
        .catch(error => console.error('Erro:', error));
    });

    function chamarFuncaoPython() {
        fetch('/executar-funcao', {
            method: 'POST',
        })
        .then(response => response.json())
        .then(data => {
            alert(data.resultado); // Exibe o resultado da função Python
        })
        .catch(error => console.error('Erro:', error));
            document.getElementById('resultado').textContent = data.resultado;
    }