let nomeDoHeroi = "Bilbo";
let xpDoHeroi = 1001;

if (xpDoHeroi < 1000) {
  xpDoHeroi = "Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
  xpDoHeroi = "Bronze";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
  xpDoHeroi = "Prata";
} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
  xpDoHeroi = "Ouro";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
  xpDoHeroi = "Platina";
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
  xpDoHeroi = "Ascendente";
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
  xpDoHeroi = "Imortal";
} else if (xpDoHeroi > 10001) {
  xpDoHeroi = "Radiante";
}
  console.log("O herói de nome " + nomeDoHeroi + " está no nível " + xpDoHeroi);
