const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

console.log(uppercase('teste', console.log))

module.exports = uppercase;
