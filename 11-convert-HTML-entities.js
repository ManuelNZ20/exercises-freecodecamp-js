function convertHTML(str) {
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "&":
        str = str.replace("&", "&amp;");
        break;
      case "<":
        str = str.replace("<", "&lt;");
        break;
      case ">":
        str = str.replace(">", "&gt;");
        break;
      case '"':
        str = str.replace('"', "&quot;");
      case "'":
        str = str.replace("'", "&apos;");
    }
  }
  return str;
}

convertHTML("Dolce & Gabbana");

//function sumFibs(num) {
//    let prevNumber = 0;
//    let currNumber = 1;
//    let result = 0;
//    while (currNumber <= num) {
//      if (currNumber % 2 !== 0) {
//        result += currNumber;
//      }
//      currNumber += prevNumber;
//      prevNumber = currNumber - prevNumber;
//    }
//    return result;
//  }
