Number.prototype.square = function () {
  return this * this;
};

Number.prototype.exp = function (value) {
  return this ** value;
};

Array.prototype.maxElement = function () {
  let maxElement = this[0];

  for (const element of this) {
    if (typeof element !== "number") {
      return null;
    }
    if (element > maxElement) {
      maxElement = element;
    }
  }

  return maxElement;
};

console.log((12).square());
console.log((12).exp(3));

console.log([1, 2, 3, 4].maxElement());
