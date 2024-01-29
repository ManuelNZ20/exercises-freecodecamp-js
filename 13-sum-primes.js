function sumPrimes(num) {
    let sum = 0, primes = 0
    for (let i = 2; i <= num; i++) {
      primes = 1
      for (let j = 2; j <= i; j++) {
        if (i % j == 0) {
          primes++
        }
      }
      if (primes == 2) {
        console.log(i)
        sum += i
      }
    }
    return sum;
  }
  
  sumPrimes(10);