const heroi = "Xcalibur";
const nivel = 0;

if (nivel <= 1000) {
  console.log("Ferro");
} else if (nivel <= 2000) {
  console.log("Bronze");
} else if (nivel <= 5000) {
  console.log("Prata");
} else if (nivel <= 7000) {
  console.log("Ouro");
} else if (nivel <= 8000) {
  console.log("Platina");
} else if (nivel <= 9000) {
  console.log("Ascedente");
} else if (nivel <= 10000) {
  console.log("Imortal");
} else if (nivel <= 10001) {
  console.log("Radiante");
}

console.log(`O herói de nome ${heroi} está no nível ${nivel}`);
