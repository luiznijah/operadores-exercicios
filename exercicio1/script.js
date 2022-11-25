cost =  numPar = Number(prompt("Digite um numero par"))

// o numero que for ineserido na varialvel numPar sera dividido por 2 e mostra o resto
const sobra = numPar % 2

//como todo numero par dividido por 2 da resto =0 fiz uma relação entre o restos ta varialve sobra e ===0
const sobraV = numPar % 2 ===0

console.log ("o resto da divisão é", sobra)
console.log ("o numero é par ? ", sobraV)