
exports.min = function min (array) {
  if (array){
    let n = array.length;
    while (n){
      return Math.min(...array);
    }
  }
  return 0;
}

exports.max = function max (array) {
  if (array){
    let n = array.length;
    while (n){
      return Math.max(...array);
    }
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array){
    let n = array.length;
    while (n){
      return array.reduce((a,b) => a + b, 0) / array.length;
    }
  }
  return 0;
}
