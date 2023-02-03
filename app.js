// console.log('app.js reporting for duty..');

const indexedObj = {
    0: {key: 'type', value: 'dog'},
    1: {key: 'color', value: 'black'},
    2: {key: 'gender', value: 'female'}
}

const array1 = ['a', 'b', 'c'];

let string = '';
for (index in indexedObj) {
    string = string + `?${indexedObj[index].key}=${indexedObj[index].value}`;  
}
console.log(string)




