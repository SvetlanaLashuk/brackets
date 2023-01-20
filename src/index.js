module.exports = function check(str, bracketsConfig) {
  let elem;
  for (let i = 0; i < bracketsConfig.length; i++) {
    elem = bracketsConfig[i].join('');
    if (str.includes(elem)) {
      str = str.replaceAll(elem, '');
      if (str.length === 0) {
        return true;
      } else {
        i = -1;
      }
    }
  }
  return false;
}