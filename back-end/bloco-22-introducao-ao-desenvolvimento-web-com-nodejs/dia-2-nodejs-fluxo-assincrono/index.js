function calc(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number', typeof b !== 'number', typeof c !== 'number') reject(new Error("Informe apenas números"))

    const result = (a + b) * c;

    if (result <= 50) reject(new Error("Valor muito baixo"))

    resolve(result)
  })

  return promise
}

const randomNumers = () => Math.floor(Math.random() * 100 + 1);

calc(randomNumers(), randomNumers(), randomNumers()).then((response) => {
  console.log(response)
}).catch((err) => {
  console.log(err.message)
})
