module.exports = () => {
  return function(str) {
    return str.toLowerCase().split(' ').join('-');
  }
};
