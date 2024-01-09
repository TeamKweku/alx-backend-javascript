export default function cleanSet(set, startString) {
  if (
    !set || !startString || !(set instanceof Set) || typeof startString !== 'string'
  ) {
    return '';
  }

  let result = '';
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      result += `${item.slice(startString.length)}-`;
    }
  }
  return result.slice(0, -1);
}
