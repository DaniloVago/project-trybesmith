const validName = 'Martelo de Thor';
const validPrice = '30 peças de ouro';
const validOrderId = 4;

const validProductBody = { name: validName, price: validPrice, orderId: validOrderId };

const existingProduct = { 
    id: 5, 
    name: validName,
    price: validPrice,
    orderId: validOrderId,
};

const returnRes = {
    id: 5, 
    name: validName,
    price: validPrice
};

const serviceResponse = {
    type: 201,
    message: returnRes,
}

const getResponse = [
        {
          "id": 1,
          "name": "Excalibur",
          "price": "10 peças de ouro",
          "orderId": 1
        },
        {
          "id": 2,
          "name": "Espada Justiceira",
          "price": "20 peças de ouro",
          "orderId": 1
        },
        {
          "id": 3,
          "name": "Lira de Orfeu",
          "price": "1 peça de ouro",
          "orderId": 2
        },
        {
          "id": 4,
          "name": "Armadura de Aquiles",
          "price": "1 peça de ouro",
          "orderId": 2
        },
        {
          "id": 5,
          "name": "Harpa de Dagda",
          "price": "15 peças de ouro",
          "orderId": 3
        },
        {
          "id": 6,
          "name": "Arco Escudo Invejável",
          "price": "3 Gemas da Noite",
          "orderId": 4
        }
];

const serviceResponseGet = {
    type: 200,
    message: getResponse,
}

export default {
    validProductBody,
    existingProduct,
    returnRes,
    serviceResponse,
    getResponse,
    serviceResponseGet,
};
