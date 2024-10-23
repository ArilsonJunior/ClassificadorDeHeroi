const prompt = require("prompt-sync")();

console.log("---BEM VINDO AVENTUREIRO--- \n");

let nome = prompt("Qual o seu nome?: ");

let sair = false;

do {
    let xp = parseFloat(prompt("Digite sua quantidade XP, para que possamos verificar seu rank: "));

    if (xp >= 0 && xp <= 1000) {
        console.log("Você está no rank FERRO");
    }

    else if (xp >= 1001 && xp <= 2000) {
        console.log("Você está no rank BRONZE");
    }

    else if (xp >= 2001 && xp <= 5000) {
        console.log("Você está no rank PRATA");
    }

    else if (xp >= 5001 && xp <= 7000) {
        console.log("Você está no rank OURO");
    }

    else if (xp >= 7001 && xp <= 8000) {
        console.log("Você está no rank PLATINA");
    }

    else if (xp >= 8001 && xp <= 9000) {
        console.log("Você está no rank ASCENDENTE");
    }

    else if (xp >= 9001 && xp <= 10000) {
        console.log("Você está no rank IMORTAL");
    }

    else if (xp > 10000) {
        console.log("Você está no rank RADIANTE");
    }

    let resposta = prompt("Você deseja sair? (s/n)").toLowerCase();

    if (resposta === "s")
    {
        sair = true;
    }


} while (!sair);
