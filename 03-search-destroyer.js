function destroyer(arr, ...a) {
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (a[i] == arr[j]) {
          arr.splice(j, 1)
          j--
        }
      }
    }
    return arr;
  }
  const response = [
    destroyer([1, 2, 3, 1, 2, 3], 2, 3),
    destroyer([3, 5, 1, 2, 2], 2, 3, 5),
    destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"),
    destroyer([2, 3, 2, 3], 2, 3)
  ]
  
  console.log(response)
  