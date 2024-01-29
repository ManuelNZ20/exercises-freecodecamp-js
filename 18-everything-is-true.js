function truthCheck(collection, pre) {
  // Is everyone being true?
  let result = true;
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      console.log(collection[i][pre], collection[i]);
      result = false;
    }
  }
  return result;
}

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
);
