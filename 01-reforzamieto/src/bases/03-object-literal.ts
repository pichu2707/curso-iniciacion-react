interface Person {
	firstName: string;
	lastName: string;
	age: number;

	address: Address;

}

//const ironman = {
//
//  firstName: "Tony",
//  lastName: "Stark",
//  age: 45,
//  address: {
//	  postalCode: 'ABC123',
//	  city:'New York',
//  },
//};
//
const ironman: Person = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  address: Address,
};

interface Address {
	postalCode: 'ABC123'	
	city: 'Guadalajara',
}

const spiderman = { ...ironman };

spiderman.firstName = 'Peter';
spiderman.lastName = "Parker";
spiderman.age=24;
spiderman.address.city='Guadalajara';
console.log(ironman, spiderman);
