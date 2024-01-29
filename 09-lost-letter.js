const fearNotLetter = (str) => {
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) == 2) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
  return undefined;
};

const response = [
  fearNotLetter("abce"),
  fearNotLetter("bcde"),
  fearNotLetter("abcdefghjklmno"),
  fearNotLetter("stvwx"),
  fearNotLetter("bcdf"),
  fearNotLetter("abcdefghijklmnopqrstuvwxyz"),
];

console.log(response);
