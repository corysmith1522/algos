// Given an array of objects, create a function that takes two inputs (sortASC, data) and
// sort the array (i.e., data) alphabetically using the object label.
// Sorting direction is based on sortASC value.

// Example: data = [{value: 1, label: 'Australia'}, {value: 2, label: 'Western Europe'}, {value: 3, label: 'North America'}]
// sortASC = true (Ascending)
// output: [{value: 1, label: 'Australia'}, {value: 3, label: 'North America'}, {value: 2, label: 'Western Europe'}]
// sortASC = false (Descending)
// output: [{value: 2, label: 'Western Europe'}, {value: 3, label: 'North America'}, {value: 1, label: 'Australia'}]

function sortArray(sortASC, data) {
  data.sort((a, b) => {
    if (sortASC === true && a.label > b.label) {
      return 1;
    } else if (sortASC === true && b.label > a.label) {
      return -1;
    } else if (sortASC === false && a.label > b.label) {
      return -1;
    } else if (sortASC === false && b.label > a.label) {
      return 1;
    } else {
      return 0;
    }
  })
  return data;
}

let countries = [{ value: 1, label: 'Australia' }, { value: 2, label: 'Western Europe' }, { value: 3, label: 'North America' }]
console.log(sortArray(false, countries))