const itemActions = require('./itemAction');
const receiptActions = require('./receiptActions');

module.exports = {
  ...itemActions,
  ...receiptActions,
}
