const findByIdMock = [{ productId: 1, quantity: 5 }, { productId: 2, quantity: 10 }];

const insertedSaledMock = {
  id: 1,
  itemsSold: [
    {
      productId: 1,
      quantity: 5
    },
    {
      productId: 2,
      quantity: 10
    }
  ]
};

const saleMock = [
  {
    productId: 1,
    quantity: 5
  },
  {
    productId: 2,
    quantity: 10
  }
];


module.exports = {
  findByIdMock,
  insertedSaledMock,
  saleMock,
}