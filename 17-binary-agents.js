function binaryAgent(str) {
  str = str.split(" ");
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const decimal = parseInt(str[i], 2);
    // Convierte el entero a un carácter
    const caracter = String.fromCharCode(decimal);
    // console.log(caracter)
    newStr += caracter;
  }
  return newStr;
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
