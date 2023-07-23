import { passCondT } from "./components/Options";

export function passwordGenerator(condObj: passCondT) {
  const { charLen, upper, lower, numbers, symbols } = condObj;

  if (charLen === 0 || (!upper && !lower && !numbers && !symbols)) return null;

  let chars = "";

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numChars = "0123456789".repeat(5);
  const symChars = "!@#$%&*()_-+=".repeat(4);

  if (upper) chars += upperChars;
  if (lower) chars += lowerChars;
  if (numbers) chars += numChars;
  if (symbols) chars += symChars;

  return [...Array(charLen)].reduce((accumulator) => {
    const randomIndex = Math.floor(Math.random() * chars.length);
    return accumulator + chars[randomIndex];
  }, "");
}
