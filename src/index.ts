export function add(str: string): number {
  return str.split("").reduce((sum, a) => sum + Number(a), 0);
}
