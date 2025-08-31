export function add(str: string): number {
  const defaultDelimiter = /[,\n\s]/;
  let customDelimiter: string | RegExp = defaultDelimiter;
  let numbers: string = str;

  if (str.startsWith("//")) {
    customDelimiter = str[2];
    numbers = str.substring(3);
  }

  const parsedNumbers = numbers
    .split(customDelimiter)
    .map((n) => parseInt(n.trim(), 10))
    .filter((n) => !isNaN(n));

  const negatives = parsedNumbers.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return parsedNumbers.reduce((sum, a) => sum + a, 0);
}
