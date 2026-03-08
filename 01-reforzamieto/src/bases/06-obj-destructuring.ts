const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

const { key, name: ironamName, age } = person;

console.log({ ironamName, age, key });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({ key, name, age, rank }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank: rank,
  };
};

const context = useContext(person);
console.log(context);

const { user: { name }, keyName, rank } = useContext(person);

console.log({ name, keyName, rank });
