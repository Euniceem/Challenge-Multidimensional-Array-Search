function locate(array, target) {

  return flatten(array).includes(target);
}

function flatten(array) {
  let temp = [];

  for (var i = 0; i < array.length; i++) {

    if (Array.isArray(array)) {
      temp = temp.concat(flatten(array[i]));
    } else {
      temp.push(array);
    }
  }
  return temp;
}

module.exports = locate;
