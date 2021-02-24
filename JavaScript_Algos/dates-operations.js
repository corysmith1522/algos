new Date().getTime().toString(); // provides a timestamp of the current time as a string to be used as an ID in React

console.log(`${new Date().getMonth() + 1}/${new Date().getDate()} ${new Date().getFullYear()}`)
//              shows current month       shows current day           shows current year

console.log('9' - '5') // works
console.log('19' - '13' + '17') // doesn't work for multiple operations in this case because JavaScript mistakes this for string interpolation
console.log('123' < 57) // spits out boolean that is correct
console.log(5 + 6 + '4' + 9 - 4 - 2) // operations around the string don't work (again because string interpolation), others do