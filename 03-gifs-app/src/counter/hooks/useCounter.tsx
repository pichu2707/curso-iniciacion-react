import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(5);
  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCounter(5);
  };

  return {
    //Properties
    counter: counter, // Podríamos dejar únicamente counter
    //Methods/Actions
    handleAdd,
    handleSubtract,
    handleReset,
  };
};
