function decode(string) {
  let result = string.replace(/5/gi, 'u')
    .replace(/3/gi, 'i')
    .replace(/1/gi, 'a')
    .replace(/4/g, 'o')
    .replace(/2/gi, 'e');

  return result;
}

module.exports = decode;
