const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  let ana = order['order']['delivery']['deliveryPerson'];
  let rafa = order['name'];
  let phone = order['phoneNumber'];
  let address = order['address']['street'];
  let number = order['address']['number'];
  let apartment = order['address']['apartment'];
  
  return `Olá ${ana}, entrega para: ${rafa}, Telefone: ${phone}, ${address}, N°: ${number}, AP: ${apartment}`;
}
console.log(customerInfo(order));
// Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const orderModifier = (order) => {
  let luiz = order['name'] = 'Luiz Silva'
  let price = order['payment']['total'] = 50
  let taste = Object.keys(order['order']['pizza'])
  let taste2 = Object.keys(order['order']['pizza'])
  let drink = order['order']['drinks']['coke']['type']
  return `Olá ${luiz}, o total do seu pedido de ${taste[0]}, ${taste2[1]} e ${drink} é R$ ${price},00 `
}

console.log(orderModifier(order));
  // "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00." 
