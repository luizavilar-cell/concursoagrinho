// Função interativa do botão
const btn = document.getElementById('dicaBtn');
btn.addEventListener('click', () => {
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = "Dica: Use tecnologia para monitorar plantações e proteger o meio ambiente!";
});
