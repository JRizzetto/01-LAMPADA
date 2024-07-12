const turnOn = document.getElementById ('turnOn'); 
const turnOff = document.getElementById('turnOff'); 
const lamp = document.getElementById('lamp'); 

function isLampBroken () {
    return lamp.src.indexOf ("quebrada") > -1; 
}

function lampOn () {
    if (!isLampBroken ()) {         // Se a lâmpada não estiver quebrada, ligar. 
    lamp.src = "./img/ligada.jpg";
} 
}

function lampOff () {
    if (!isLampBroken ()) {         // Se a lâmpada não estiver quebrada, desligar.         
    lamp.src = "./img/desligada.jpg";
}
}

function lampBroken () {
    lamp.src = "./img/quebrada.jpg";
    
}


turnOn.addEventListener ("click", lampOn); 
turnOff.addEventListener ("click", lampOff); 
lamp.addEventListener ("mouseover", lampOn);
lamp.addEventListener ("mouseout", lampOff);
lamp.addEventListener ("dblclick", lampBroken);  
