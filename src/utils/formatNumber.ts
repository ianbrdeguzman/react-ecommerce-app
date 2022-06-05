import numeral from 'numeral';

export function formatNumber(num: number) {
  return numeral(num).format('0,0');
}
