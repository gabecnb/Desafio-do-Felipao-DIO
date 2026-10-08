let nomeDoHeroi = "Bilbo";
let xpDoHeroi = 100;

while (xpDoHeroi < 10005) {
  
  if (xpDoHeroi < 1000) {
    classificacaoHeroi = "Ferro";
  } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    classificacaoHeroi = "Bronze";
  } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    classificacaoHeroi = "Prata";
  } else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    classificacaoHeroi = "Ouro";
  } else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    classificacaoHeroi = "Platina";
  } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    classificacaoHeroi = "Ascendente";
  } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    classificacaoHeroi = "Imortal";
  } else if (xpDoHeroi > 10001) {
    classificacaoHeroi = "Radiante";
  }
  console.log("O herói " + nomeDoHeroi + " está no nível " + classificacaoHeroi);
  
  xpDoHeroi += 700;
  console.log("Tomou poção de XP!");
}