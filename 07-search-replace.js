const myReplace = (str, before, after) => {
    if (/[a-z]/.test(before[0]) && /[a-z]/.test(after[0])) {
      return str.replace(before, after);
    } else if ((/[A-Z]/.test(before[0])) && !(/[A-Z]/.test(after[0]))) {
      after = after.replace(after[0], after[0].toUpperCase())
      return str.replace(before, after)
    }
    return str.replace(before, after.toLowerCase())
  }
  const response = [
    myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"),
    myReplace("He is Sleeping on the couch", "Sleeping", "sitting"),
    myReplace("I think we should look up there", "up", "Down"),
    myReplace("His name is Tom", "Tom", "john"),
    myReplace("Let us get back to more Coding", "Coding", "algorithms")
  ]
  
  console.log(response)