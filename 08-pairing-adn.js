function pairElement(str) {
  const helixADN = ["T", "A", "G", "C"],
    newArr = [];
  str.split("").forEach((element) => {
    if (element === "A") {
      newArr.push([element, helixADN[0]]);
    } else if (element === "T") {
      newArr.push([element, helixADN[1]]);
    } else if (element === "C") {
      newArr.push([element, helixADN[2]]);
    } else {
      newArr.push([element, helixADN[3]]);
    }
  });
  return newArr;
}
const response = [
  pairElement("GCG"),
  pairElement("ATCGA"),
  pairElement("TTGAG"),
  pairElement("CTCTA"),
];

console.log(response);
