/*
    General Helper Class
*/

// Sort array of object on base of multiple keys
// example: https://bithacker.dev/javascript-object-multi-property-sort
export function sortArray(array=[], sortBy) {
  return array && array.sort(function (a, b) {
    let i = 0,
      result = 0;
    while (i < sortBy.length && result === 0) {
      result =
        sortBy[i].direction *
        (a[sortBy[i]?.prop]?.toString() < b[sortBy[i]?.prop]?.toString()
          ? -1
          : a[sortBy[i]?.prop]?.toString() > b[sortBy[i]?.prop]?.toString()? 1: 0);
      i++;
    }
    return result;
  });
}

// Get Int value of given value
export function getIntVal(value){
  return parseInt(value || 0);
}

// Add Thousand Separator in value
export function thousandSeprator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}