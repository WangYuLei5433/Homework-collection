const {checkInventory} = require('./library.js').default;

const order = [['sunglasses', 2], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};


checkInventory(order)
  .then(handleSuccess, handleFailure);