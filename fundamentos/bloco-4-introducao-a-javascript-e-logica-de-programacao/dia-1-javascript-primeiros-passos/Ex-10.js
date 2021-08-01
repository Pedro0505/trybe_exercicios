let custo = 1;
let venda = 3;
let valorTotal = custo * 0.20 + custo;

if (custo < 0 || venda < 0) {
  console.log ("Error-404 Not-Found")
}

let lucro = venda - valorTotal;

console.log (lucro * 1000)