module.exports = function check(str, bracketsConfig) {

  if (str.length %2 != 0) {
    return false;
  }
  
  do  {
    let length = str.length;
    for (let i = 0; i < bracketsConfig.length; i++) {
      str = str.replace(bracketsConfig[i].join(''), '')
    }
  
    if (str.length === 0 || str.length === length) {
      break;
    }
  } while (true)
  return str.length === 0;
}

