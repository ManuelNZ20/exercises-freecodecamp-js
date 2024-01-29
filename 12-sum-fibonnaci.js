function sumFibs(num) {
  let pre = 0,
    next = 1,
    current = 0;
  while (next <= num) {
    if (next % 2 !== 0) {
      current += next;
    }
    next += pre;
    pre = next - pre;
  }
  return current;
}

sumFibs(4);
// let pre = 0, next = 1, current = 0
// for (let i = 1; i <= 10; i++) {
//   console.log(current)
//   pre = next
//   next = current
//   current = pre + next
// }
