import numeral from 'numeral';

export function format(num: number) {
  return numeral(num).format('0,0');
}
