function encode(string) {
  let result = string.replace(/u/gi, '5')
    .replace(/i/gi, '3')
    .replace(/a/gi, '1')
    .replace(/o/gi, '4')
    .replace(/e/gi, '2');
  return result;
}

console.log(encode('aeiou'))

module.exports = encode;
