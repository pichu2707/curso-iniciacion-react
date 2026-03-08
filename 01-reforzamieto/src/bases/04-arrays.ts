const myArray: number[] = [1, 2, 3, 4, 5, 6];
// al asignar que los datos del array son número se empieza a quejar de que tenemos metido un string que en este caso es el '4'
myArray.push(10); // si lo tenemos como string no nos permite hacer el push
myArray.push(11);

const myArray2 = [...myArray];

myArray2.push(2);
console.log({ myArray, myArray2 });
