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

module.exports = {
  ReceiptCreate,
  getReceipts,
  getReceipt,
  deleteReceipt,
  updateReceipt,
}
