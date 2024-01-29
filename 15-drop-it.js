function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      arr.splice(0, i);
      return arr;
    }
  }
  return [];
}
const response = [
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  }),
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
];

console.log(response);
