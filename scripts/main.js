let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

// meuCabecalho.textContent = 'Ola mundo!';

let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === 'imagens/firefox-icon.png') {
        minhaImagem.setAttribute('src', 'imagens/firefox2.png');
    } else {
        minhaImagem.setAttribute('src', 'imagens/firefox-icon.png');
    }
}

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if (!meuNome || meuNome === null) {
        defineNomeUsuario();
    } else {
        localStorage.setItem('nome', meuNome);
        meuCabecalho.innerHTML = 'Geizivan é legal, ' + meuNome;
    }
}

if (!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Gege é legal, ' + nomeGuardado;
}

meuBotao.onclick = function() {
    defineNomeUsuario();
}