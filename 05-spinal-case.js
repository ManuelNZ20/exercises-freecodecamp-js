const spinalCase = (str) => {
  str = str
    .split(/[^0-9A-Za-z]/)
    .join("-")
    .split("");
  for (let i = 0; i < str.length - 1; i++) {
    if (/^[a-z]/.test(str[i]) && /^[A-Z]/.test(str[i + 1])) {
      str[i + 1] = " " + str[i + 1];
    }
  }
  return str
    .join("")
    .toLowerCase()
    .split(/[^0-9A-Za-z]/)
    .join("-");
};

const response = [
  spinalCase("This Is Spinal Tap"),
  spinalCase("The_Andy_Griffith_Show"),
  spinalCase("AllThe-small Things"),
  spinalCase("thisIsSpinalTap"),
];

console.log(response);
