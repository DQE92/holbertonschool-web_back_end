export default function cleanSet(set, startString) {
    if (typeof startString !== 'string' || startString === '') {
      return '';
    }

    const filteredValues = [];
  
    for (const value of set) {
      if (typeof value === 'string' && value.startsWith(startString)) {
        const restOfString = value.slice(startString.length);
        filteredValues.push(restOfString);
      }
    }
  
    return filteredValues.join('-');
}
