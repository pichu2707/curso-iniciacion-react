import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);
  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
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
