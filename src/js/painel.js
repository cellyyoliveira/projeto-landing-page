/*
QUANDO CLICAR NA SETA PARA AVANÇAR 
TEMOS QUE ESCONDER TODAS AS IMAGENS E MOSTRA A PRÓXIMA

*/

const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0;

function esconderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function(){

    // testa se o contador da imagem atual é igual ao total de imagens
    const totaldeImagens = imagensPainel.length -1
    if(imagemAtual === totaldeImagens){
        return;
    }

    imagemAtual++;
    esconderImagens();
    mostrarImagem();
});

setaVoltar.addEventListener('click', function(){
      if(imagemAtual === 0){
        return;
    }
    imagemAtual--;
    
    esconderImagens();
    mostrarImagem();
});
