document.getElementById('formConcurso').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const componente = document.getElementById('componente').value;
    const projeto = document.getElementById('projeto').value;

    if (nome && componente && projeto) {
        alert(`Parabéns, ${nome}! Seu projeto para o tema "Agro forte, futuro sustentável" foi validado com sucesso no componente selecionado.`);
        this.reset(); 
    } else {
        alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
});
