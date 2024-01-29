function sumAll(arr) {
    const init = arr[0] > arr[1] ? arr[1] : arr[0]
    const last = init === arr[0] ? arr[1] : arr[0]
    let sum = 0
    for (let i = init; i <= last; i++) {
      sum += i
    }
    return sum;
  }
  
  sumAll([1, 4]);
  