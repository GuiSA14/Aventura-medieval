const avanca = document.querySelectorAll('.btn-proximo');
const audio = document.getElementById('audio-bardo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        
        atual.classList.remove('ativo');
        document.getElementById(proximoPassoId).classList.add('ativo');
        
        // Adicionando a mudança de plano de fundo
        const backgroundUrls = {
            1: 'url(https://images7.alphacoders.com/135/1351303.png)',
            2: 'url(https://c4.wallpaperflare.com/wallpaper/396/397/190/castle-medieval-pixel-art-pixelated-field-hd-wallpaper-preview.jpg)',
            3: 'url(https://img.freepik.com/premium-photo/musicians-performing-lively-medieval-tavern_879736-2779.jpg)',
            4: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-miSlijcS0wpFAAImLNPhFElAQW8YpUST4A&s)',
            5: 'url(https://www.ultraimagehub.com/wallpapers/tr:flp-false,gx-0.5,gy-0.5,q-75,rh-3264,rw-5824,th-1080,tw-1920/1226430841547128942.jpeg)',
            6: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojAB0o2PfLYFplMEGgpK9dmzG6pP4HILgEQ&s)',
            7: 'url(https://example.com/background7.jpg)',
            8: 'url(https://example.com/background8.jpg)'
        };
        document.body.style.backgroundImage = backgroundUrls[this.getAttribute('data-proximo')] || 'none';

        // Tocar música quando o botão "Ouvir" (data-proximo="3") é clicado
        if (this.getAttribute('data-proximo') === '3') {
            audio.play();
        }
    });
});
