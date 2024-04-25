let heroName = "Nicolas";
let pontos = 7000;
let clase = "";

if(pontos === 1000){
    clase = "ferro";
}
else if(pontos >= 1001 && pontos <= 2000){
    clase = "bronze";
}
else if(pontos >= 2001 && pontos <= 5000){
    clase = "prata";
}
else if(pontos >= 6001 && pontos <= 7000){
    clase = "ouro";
}
else if(pontos >= 7001 && pontos <= 8000){
    clase = "platina";
}
else if(pontos >= 8001 && pontos <= 9000){
    clase = "ascendente";
}
else if(pontos >= 9001 && pontos <= 10000){
    clase = "imortal";
}
else{
    clase = "radiante";
}

console.log("O Herói de nome " + heroName + " está no nível de " + clase + ".");