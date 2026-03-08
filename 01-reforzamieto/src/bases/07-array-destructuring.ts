const characterNames = ["Javi", "Miguel", "Leila"];

const [p1, p2, p3] = characterNames;
console.log({ p1, p2, p3 });

// Pero si queremos sacar no el primero si no otro
const [, , trunks] = characterNames;
console.log({ trunks });

const returnsArraysFn = () => {
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnsArraysFn();
console.log(numbers);
console.log(letters);
