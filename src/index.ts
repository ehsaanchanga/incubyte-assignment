export function add(str: string): number {
  const defaultDelimiter = /[,\n\s]/;
  let customDelimiter: string | RegExp = defaultDelimiter;
  let numbers: string = str;

  if (str.startsWith("//")) {
    customDelimiter = str[2];
    numbers = str.substring(3);
  }

  return numbers.split(customDelimiter).reduce((sum, a) => sum + Number(a), 0);
}
