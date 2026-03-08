function greet(name: string): string {
  // Le tenemos marcado lo que tiene que devolver, en este caso un string
  return `Hola ${name}`;
}

const message = greet("Javi");
console.log(message);

// Es la misma función pero es con la llamada función de flecha
const greet2 = (name: string) => {
  return `Hola ${name}`;
};

console.log(greet2("Miguel"));

function getUser() {
  return {
    uid: "ABC -123",
    username: "El_papi23",
  };
}

const getUser2 = () => {
  return {
    uid: "ABC-123",
    username: "El_papito24",
  };
};

const user = getUser();
console.log(user);

console.log(getUser2());


// Funciones con múltiples retornos
// Esta es una forma simplificada del código que hemos escrito antes
const greet3 = (name:string) => `Hola ${name}`;
console.log(greet3('Leila'))

interface User {
	uid: string;
	username: string;
}

const getUser3 = ():User => ({
	uid: 'ABC-132',
	username: 'El_papito25'
})

console.log(getUser3());
const MyNumbers: number[] = [1,2,3,4,5];
MyNumbers.forEach((value) => {
	console.log(value);
});


MyNumbers.forEach(console.log)
