let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(`iskudarkara arrays ${arr3}`);

function multiple(...numbers){
return numbers.reduce((total, hadda) => total * hadda, 1);
}
console.log(multiple(1, 2, 3, 4));