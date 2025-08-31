export function add(str: string): number {
  return str.split(/,||\n/).reduce((sum, a) => sum + Number(a), 0);
}
