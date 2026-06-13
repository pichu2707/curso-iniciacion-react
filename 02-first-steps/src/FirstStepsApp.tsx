import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const ItemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Super Nintendo", quantity: 2 },
  { productName: "Play Station", quantity: 3 },
];

export function FirstStepsApp() {
  return (
    <>
      {ItemsInCart.map(({ productName, quantity }) => (
        <ItemCounter name={productName} quantity={quantity} />
      ))}
      {/* <h1>Carrito de compras</h1> */}
      {/* <ItemCounter name="Nintendo Switch 2" quantity={2} /> */}
      {/* <ItemCounter name="Super Nintendo" quantity={3} /> */}
      {/* <ItemCounter name="Play Station" quantity={4} /> */}
      {/* <ItemCounter name="X Box" quantity={4} /> */}
    </>
  );
}
