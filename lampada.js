const turnOnOff = document.getElementById ("turnOnOff");
const lamp = document.getElementById ("lamp");

//Função que verifica se a lâmpada está quebrada
function isLampBroken() {
    return lamp.src.indexOf("quebrada") > -1
}

//Função que liga a lâmpada
function lampOn() {
    if (!isLampBroken()) {
        lamp.src = "imgs/ligada.jpg";
    }
}

//Função que desliga a lâmpada
function lampOff() {
    if (!isLampBroken()) {
        lamp.src = "imgs/desligada.jpg";
        turnOnOff.textContent = "Ligar";
    }
}

//Função que torna a lâmpada quebrada
function lampBroken() {
    lamp.src = "imgs/quebrada.jpg";
    turnOnOff.textContent = "Lâmpada Quebrada";
}

//Função que faz a troca do conteúdo do botão e alterna a ação
function lampOnOff(){
    if(turnOnOff.textContent == "Ligar"){
        lampOn();
        turnOnOff.textContent = "Desligar";
    }
    else if(turnOnOff.textContent == "Desligar"){
        lampOff();
    }
    else{
        alert("Lâmpada quebrada. Recarregue a página!")
    }
}

//Ações da lâmpada
turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);