const insertedSaleMock = {
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

const listOfAllSales = [
  {
    saleId: 1,
    date: '2022-11-19T02:07:22.000Z',
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: '2022-11-19T02:07:22.000Z',
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: '2022-11-19T02:07:22.000Z',
    productId: 3,
    quantity: 15
  }
]

const allSalesMock = { type: null, message: listOfAllSales }

const saleById = [
  {
    saleId: 1,
    date: '2021-09-09T04:54:29.000Z',
    productId: 1,
    quantity: 2
  },
  {
    saleId: 1,
    date: '2021-09-09T04:54:54.000Z',
    productId: 2,
    quantity: 2
  }
];

const listSaleByIdMock = { type: null, message: { id: 4, itemsSold: saleById } }

const saleIdList = [
  {
    date: '2021-09-09T04:54:29.000Z',
    productId: 1,
    quantity: 2
  },
  {
    date: '2021-09-09T04:54:54.000Z',
    productId: 2,
    quantity: 2
  }
];

const saleByIdMock = {type: null, message: saleIdList}

module.exports = {
  insertedSaleMock,
  allSalesMock,
  listSaleByIdMock,
  saleByIdMock,
}