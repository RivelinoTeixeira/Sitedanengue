const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const messageDiv = document.getElementById('message');
const song = document.getElementById('song');

yesButton.addEventListener('click', function () {
    messageDiv.textContent = 'Ótimo, te amo! 🥰❤️';
    messageDiv.style.color = '#ff66b2';
    
    // Tocar música
    song.play().catch(error => {
        console.log('Erro ao tentar tocar a música:', error);
    });
});

noButton.addEventListener('click', function () {
    messageDiv.textContent = 'Resposta errada, tente de novo';
    messageDiv.style.color = '#ff4d4d';
    
    // Pausar música
    song.pause();
    song.currentTime = 0;
});
