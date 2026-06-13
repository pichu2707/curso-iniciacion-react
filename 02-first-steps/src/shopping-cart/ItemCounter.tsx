import { useState } from "react";
// import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);
  const handleAdd = () => {
    setCount(count + 1);
    console.log("Hola mundo desde el test"); // El test hace saltar este código
  };
  const handleSubtrackt = () => {
    if (count === 1) return;
    setCount(count - 1);
    console.log("Botón desde test pulstado");
  };
  return (
    <section
      className={styles["item-row"]}
      // className="item-row"
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   gap: 10,
      //   marginTop: 10,
      // }}
    >
      <span className={styles["item-text"]}>{name}</span>
      <button onClick={handleAdd}>+1</button>
      <span
        className="item-text"
        style={{
          color: count === 1 ? "red" : "black",
        }}
      >
        {count}
      </span>
      <button onClick={handleSubtrackt}>-1</button>
    </section>
  );
};
