function mix() {
    //Tamanho da Janela
    wh = window.innerHeight - 100;
    ww = window.innerWidth - 100;

    //Elementos
    red = document.getElementById("red");
    blue = document.getElementById("blue");
    green = document.getElementById("green");
    yellow = document.getElementById("yellow");

    //Gerador de coordenadas aleatórias
    //RED
    redh = String(Math.floor(Math.random() * wh));
    redw = String(Math.floor(Math.random() * ww));
    //BLUE
    blueh = String(Math.floor(Math.random() * wh));
    bluew = String(Math.floor(Math.random() * ww));
    //GREEN
    greenh = String(Math.floor(Math.random() * wh));
    greenw = String(Math.floor(Math.random() * ww));
    //YELLOW
    yellowh = String(Math.floor(Math.random() * wh));
    yelloww = String(Math.floor(Math.random() * ww));

    //Aplicação das coordendas
    //RED
    red.style.top = redh + "px";
    red.style.left = redw + "px";
    //BLUE
    blue.style.top = blueh + "px";
    blue.style.left = bluew + "px";
    //GREEN
    green.style.top = greenh + "px";
    green.style.left = greenw + "px";
    //YELLOW
    yellow.style.top = yellowh + "px";
    yellow.style.left = yelloww + "px";
}
function Coordena(obj) {
    var info = document.getElementById("info");
    //Display das coordenadas e do nome
    id = obj.id
    switch (id) {
        case "red":
            name = "Vermelho";
            break
        case "blue":
            name = "Azul";
            break
        case "green":
            name = "Verde";
            break
        case "yellow":
            name = "Amarelo";  
            break
    }
    t = obj.style.top;
    l = obj.style.left;
    info.innerHTML = "Olá! O meu nome é " + name + "</br> Top: " + t + "</br>Left: " + l;

}
window.onload = mix()