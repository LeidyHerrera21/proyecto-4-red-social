//metodos de array//

// 1. push()

let arr = [1, 2, 3, 4];

console.log(arr);
arr.push(5);
console.log(arr);

// array de strin

let vocales = [`a`, `e`, `i`, `o`];
console.log(vocales);
vocales.push(`u`);
console.log(vocales);

// array con diferentes tipos de datos//

let mezcla = [`erc`, 123, 23.65, true, `a`, `Hola`];

console.log(mezcla);
vocales.push(false, 2, 12.45);
console.log(mezcla);

//2. pop()

let array = [1, 2, 3, 4];

console.log(array);
let eliminado = array.pop(5);
console.log(array);

console.log (`Elemento eliminado => $(eliminado)`);

//3. unshift()

let arra = [1, 2, 3, 4];

console.log(arra);
arra.unshift(1);
console.log(arra);

//4. shift()

let ar = [`Hola`, 1, 2, 3, 4, 5];

console.log(ar);
ar.shift();
console.log(ar);

let vocal = [12.54, `a`, `e`, `i`, `o`, `u` ];

//5. slice()

let nums = [1, 2, 3, 4, 5];

console.log(nums);
let numsPartido = nums.slice(0, 3);
console.log(nums);

//6. splice() que empieze del 1 y borre 2//
// eliminar//

let num = [1, 2, 3, 4, 5];

console.log(num);
num.splice(1, 2);
console.log(num);

// agregar//

let numero = [1, 5];

console.log(numero);
numero.splice(1, 0, 2, 3, 4);
console.log(numero);

//eliminar y agrega//

/*let numer = [1, `hola`, false, 5];

console.log(numer);
numer.splice(1, 0, 2, 3, 4);
console.log(numer);*/

//completar el array de vocales//

let vocale = [`a`, `e`, true, 12, `u`];

console.log(vocale);
vocale.splice(2, 2, `i`, `o`);
console.log(vocale);

//------------- concat()

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log('Array 1 -> $(arr1)');
console.log('Array 2 -> $(arr2)');

let arr3 = arr1.concat(arr2);

console.log('concatenacion de los array -> $(arr3)');
