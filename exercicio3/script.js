const a = 5 > 20 && 5 < 2 ;
const b = 5 == 5 || 5 == "5";
const c = !20 > 50;
const d = !20 > 50 || 50 > 60;


console.log ("a", a);
console.log ("b", b);
console.log ("c", c);
console.log ("d", d);

console.log("     Parte 2");

//variaveis
const nome =  prompt ("Qual seu nome ?");
const cpf = Number( prompt ("Digite seu CPF"));
const nasceu = Number( prompt ("Digite sua data de nascimento"));
const endereco = Number ( prompt ("Digite seu endereço"));
const sFilhos = Number ( prompt ("Possui qunatos filhos ? "));
const cnh = Number ( prompt ("Possui habilitação ? "));
const cargo = Number ( prompt ("Qual seu cargo atual ? "));
const salario = Number ( prompt ("Qual seu salario ? "));
const comicaoTo = Number ( prompt ("Qual sua comição total de vendas? "));
const dataEntrada = Number ( prompt ("Qual ano você foi admitido ? "));

// calculo de salario

//sFilhos + 45.50
comicaoTo * 0.10
const desINSS = salario-(salario * 0.05)

// vendas mês

const vJa = 5784.50
const vF = 3418.41
const vMar = 4124.10
const vA = 1874.00
const vMai = 7000.00
const vJu = 9450.00

//calculos

//nome
console.log ("Seu nome é ", nome)

//1) O salário fixo mais o auxílio creche
console.log("Seu salário fixo mais o auxílio creche é de :" ,salario + sFilhos * 45.50 )

//2) Quanto Fulano de Silva receberá de comissão em janeiro 
console.log ("Sua comição do mes de janeiro é R$:", (vJa * 0.10))

//comissão dos meses restantes

console.log ("Fervereiro é R$:", (vF * 0.10))

console.log ("Março R$:", (vMar * 0.10))

console.log ("Abril R$:", ( vA* 0.10))

console.log ("Maio R$:", + (vMai * 0.10))

console.log ("Junho R$:", + (vJu * 0.10))

//salario mais a comissão 
console.log (      "Seu salario mais comição do mes " )

console.log ("Sua comição do mes de janeiro é R$:", salario + (vJa * 0.10))

console.log ("Fervereiro é R$:", salario + (vF * 0.10))

console.log ("Março R$:", salario + (vMar * 0.10))

console.log ("Abril R$:", salario + ( vA* 0.10))

console.log ("Maio R$:", salario + (vMai * 0.10))

console.log ("Junho R$:",salario  + (vJu * 0.10))

//3) Quanto Fulano de Silva será descontado em janeiro pelo INSS

console.log("INSS desconto de janeiro ",salario + (vF * 0.10)-(desINSS))

//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos
console.log("Salario + comssão + desconto do INSS", salario+ (vJa * 0.10)+(vF * 0.10)+(vMar * 0.10)+(vA * 0.10)+(vMai * 0.10)+(vJu * 0.10)+(vJa * 0.10))-((salario+ (vJa * 0.10)+(vF * 0.10)+(vMar * 0.10)+(vA * 0.10)+(vMai * 0.10)+(vJu * 0.10)+(vJa * 0.10)*0.05))

// media salarial
console.log("media salarial", 5743.551/6)