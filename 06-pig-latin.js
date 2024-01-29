function translatePigLatin(str) {
  const regexVocal = /^[a+]|^[e+]|^[i+]|^[o+]|^[u+]/;
  let index = 0;
  if (regexVocal.test(str)) return str + "way";
  for (let i = 0; i < str.length; i++) {
    if (regexVocal.test(str[i])) {
      index = i;
      break;
    }
  }
  const newStr = str.split("").splice(0, index);
  return str.slice(index) + newStr.join("") + "ay";
}

const response = [
  translatePigLatin("consonant"),
  translatePigLatin("california"),
  translatePigLatin("paragraphs"),
  translatePigLatin("glove"),
  translatePigLatin("schwartz"),
  translatePigLatin("rhythm"),
  translatePigLatin("algorithm"),
  translatePigLatin("eight"),
];

console.log(response);
