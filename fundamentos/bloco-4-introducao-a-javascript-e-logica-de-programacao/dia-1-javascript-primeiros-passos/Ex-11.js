let salarioBruto = 2200;
let porcentagemInss;
let salarioBase;

if ( salarioBruto <= 1556.94 ) {
  porcentagemInss = 0.08 * salarioBruto; salarioBase = salarioBruto - porcentagemInss
} 

else if (salarioBruto <= 2594.92 ) { 
  porcentagemInss = 0.09 * salarioBruto; salarioBase = salarioBruto - porcentagemInss
}

else if (salarioBruto <= 5189.82 ) {
  porcentagemInss = 0.11 * salarioBruto; salarioBase = salarioBruto - porcentagemInss
}

else if (salarioBruto >= 5189.83 ) {
  salarioBase = salarioBruto - 570.88
} 

let salarioIr = salarioBase
let salarioLiquido;


if (salarioIr <= 1903.98) {
  console.log ("Salario de " + salarioIr + " isento de imposto de renda" )
}

else if (salarioIr >= 1903.99 && salarioIr <= 2826.65) {
  salarioLiquido = salarioIr * 0.075 - 142.80; salarioLiquido = salarioIr - salarioLiquido 
}

else if (salarioIr >= 2826.66 && salarioIr <= 3751.05) {
  salarioLiquido = salarioIr * 0.15 - 354.80; salarioLiquido = salarioIr - salarioLiquido
}

else if (salarioIr >= 3751.06 && salarioIr <= 4664.68) {
  salarioLiquido = salarioIr * 0.225 - 636.13; salarioLiquido = salarioIr - salarioLiquido
}

else {
  salarioLiquido = salarioIr * 0.275 - 869.36; salarioLiquido = salarioIr - salarioLiquido 
}

console.log ( "Salario com os descontos do INSS e IR R$ " + salarioLiquido)