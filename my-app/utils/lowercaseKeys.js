function lowercaseKeys(obj) {
  return Object.keys(obj).reduce((accumulator, currentKey) => {
    accumulator[currentKey.toLowerCase()] = obj[currentKey];
    return accumulator;
  }, {});
}

export default lowercaseKeys;
