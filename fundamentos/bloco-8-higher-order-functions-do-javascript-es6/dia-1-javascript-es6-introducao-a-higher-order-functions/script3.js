const hof = (num, callback) => { 
  const randomNum = Math.floor(Math.random() * 5) + 1;
  return callback(num ,randomNum) ? 'Parabéns você ganhou' : `Tente Novamente ${randomNum}`;
}

const raffle = (number, numGenerete) =>  (number === numGenerete);


console.log(hof(5, raffle))
