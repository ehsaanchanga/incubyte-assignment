export function add(str: string): number {
  const defaultDelimiter = /[,\n\s]/;
  let delimiter: string | RegExp = defaultDelimiter;
  let numberString: string = str;

  // Handle custom delimiter
  if (str.startsWith("//")) {
    delimiter = str[2];
    numberString = str.slice(3);
  }

  const parsedNumbers = numberString
    .split(delimiter)
    .map((n) => parseInt(n.trim(), 10))
    .filter((n) => !isNaN(n) && n <= 999);

  const negatives = parsedNumbers.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return parsedNumbers.reduce((sum, num) => sum + num, 0);
}
