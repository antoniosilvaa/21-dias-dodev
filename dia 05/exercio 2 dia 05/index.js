let valor
let quantidade
let opcao = parseInt(prompt("Bem vindo ao Dodev trhu, o que você deseja?"
+ "\n1 - abastecer com gasolina: \n2 - abastecer com alcool: \n3 - calibrar os pneus: "))

switch (opcao) {
    case 1:
        valor = parseInt(prompt("digite quanto Você quer abastecer:"))
        quantidade = valor / 5
        console.log("Foram abastecidos " + quantidade + "L de gasolina")
        break;
    case 2:
        valor = parseInt(prompt("digite quanto Você quer abastecer:"))
        quantidade = valor /3
        console.log(" Foram abastecidos " + quantidade + "L de gasolina")  
        break;  
    default:
        console.log("seus pneus foram calibrados")
        break;
}