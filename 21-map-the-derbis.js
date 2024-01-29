function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = [];
  let tValue = 0;
  arr.map((ar) => {
    tValue = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + ar.avgAlt, 3) / GM);
    newArr.push({ name: ar.name, orbitalPeriod: Math.round(tValue) });
  });
  return newArr;
}
const res = [
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]),
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ]),
];

console.log(res);
