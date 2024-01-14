var botao = document.querySelector("li#home");
    botao.addEventListener("mouseenter", emCima);
    botao.addEventListener("mouseout", fora)

    function emCima(){
        botao.style.background =  "#0059ff";
    }
    function fora(){
        botao.style.background =  ' #00a2ff';
    }