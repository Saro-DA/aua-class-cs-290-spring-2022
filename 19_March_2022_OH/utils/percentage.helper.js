async function calculatePercentageAsync(value, total) {
  if (typeof total !== "number" || total <= 0) {
    throw new Error("Total should be a positive number!");
  }
  if (typeof value !== "number" || value < 0) {
    throw new Error("Value should be a positive number!");
  }
  return (value * 100) / total;
}

function calculatePercentage(value, total) {
  // handle the error cases here say with callbacks
  return (value * 100) / total;
}

module.exports = {
  calculatePercentage,
  calculatePercentageAsync,
};
