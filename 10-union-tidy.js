function uniteUnique(...arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i] == newArr[j]) {
        newArr.splice(j, 1);
      }
    }
  }
  return newArr;
}

const response = [
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]),
  uniteUnique([1, 2, 3], [5, 2, 1]),
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]),
  uniteUnique([1, 3, 2], [5, 4], [5, 6]),
  uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]),
];

// console.log(response)
