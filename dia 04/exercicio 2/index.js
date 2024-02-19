let nome = ""
let idade = 0
nome = prompt("digite seu nome:")
idade = parseInt(prompt("digite sua idade:"))

const temCarteira = prompt("Você tem carteira de motorista? (sim/não)")
const temCarro = prompt("Você tem carro? (sim/não)")
 
if (idade < "18" || temCarteira === "nao"){
    console.log(nome + ", Você não pode dirigir")
}else if (idade >= "18" && temCarteira === "sim" && temCarro === "nao"){
    console.log(nome + ", Você pode dirigir, mas não tem um carro")
}if (idade >= "18" && temCarteira === "sim" && temCarro === "sim"){
    console.log(nome + ", Você será o(a) motorista!!")
}