const listSaleMOck = [
  {
    date: '2022-11-18T20:59:56.000Z',
    product_id: 1,
    quantity: 5
  },
  {
    date: '2022-11-18T20:59:56.000Z',
    product_id: 2,
    quantity: 10
  }
];

const insertSaleMock = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: '',
  serverStatus: 2,
  warningStatus: 0
};

const listAllSalesMock = [
  {
    saleId: 1,
    date: '2022-11-21T23:08:56.000Z',
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: '2022-11-21T23:08:56.000Z',
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: '2022-11-21T23:08:56.000Z',
    productId: 3,
    quantity: 15
  }
]
module.exports = {
  listSaleMOck,
  insertSaleMock,
  listAllSalesMock,
}