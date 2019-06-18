const { 
  createReceipt,
  getAllReceipt,
  getOneReceipt,
  deleteOneReceipt,
  updateOneReceipt,
} = require('../actions');

const ReceiptCreate = (req, res) => {
  createReceipt(req.body)
      .then(
        receipt => res.status(201).json({
          "message": "Receipt created",
          receipt,
        })
      ).catch((error) => res.status(400).send(error) )
};

const getReceipts = (req, res) => {
  getAllReceipt()
      .then(
        receipts => res.status(200).json({
          receipts,
        })
      ).catch((error) => res.status(400).send(error) )
};

const getReceipt = (req, res) => {
  const id = req.params.id;
  getOneReceipt(id)
      .then(
        receipts => res.status(200).json({
          receipts,
        })
      ).catch((error) => res.status(400).send(error) )
};

const deleteReceipt = (req, res) => {
  const id = req.params.id;
  deleteOneReceipt(id)
      .then(
        receipt => res.status(200).json({
          receipt,
        })
      ).catch((error) => res.status(400).send(error) )
}

const updateReceipt = (req, res) => {
  const data = req.body
  const id = req.params.id;
  updateOneReceipt(id, data)
      .then(
        receipt => res.status(200).json({
          receipt,
        })
      ).catch((error) => res.status(400).send(error) )
}

const createTotal = async (req, res) => {
  const ticketId = req.params.id;
  let subtotal = 0, tax = 0, total = 0;

  const receipt = await getOneReceipt(ticketId);
  receipt.items.map( (item) => {
    subtotal += item.price;
  })
  tax = subtotal * 0.16;
  total = subtotal + tax;
  let data = {
    subtotal,
    tax,
    total,
  }
  const totalReceipt = await updateOneReceipt(ticketId, data);
  res.status(200).json({
    totalReceipt,
  })
}

module.exports = {
  ReceiptCreate,
  getReceipts,
  getReceipt,
  deleteReceipt,
  updateReceipt,
  createTotal,
}

const json = {
  "item": ['5d006b8007720c557e78b6fa', '5d006b9a07720c557e78b6fb',]
}