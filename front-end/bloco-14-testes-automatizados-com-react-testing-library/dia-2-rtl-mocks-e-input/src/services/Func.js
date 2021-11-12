const Random = () => Math.floor(Math.random() * 101);

const UpperCase = ((str) => str.toUpperCase());

const FirstLetter = ((str) => str[str.length - 1]);

const ConcatenateStr = ((a, b) => `${a}${b}`);

module.exports = { Random, UpperCase, FirstLetter, ConcatenateStr };
