const temFome = prompt("Você está com fome? (sim/não) ")
const temDinheiro = prompt("Você tem dinheiro? (sim/não) ")
const restauranteAberto = prompt("O restaurante ta aberto? (sim/não) ")

if (temFome === "nao", temDinheiro === "nao"){
    console.log("Hoje a janta será em casa")
}else if (temDinheiro === "sim" && restauranteAberto === "sim"){
    console.log("Hoje seu jantar será no seu restaurante preferido!!")
}else if(restauranteAberto === "nao")
console.log("peça um delivery")