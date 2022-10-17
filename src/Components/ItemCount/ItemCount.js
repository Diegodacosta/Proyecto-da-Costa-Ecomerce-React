import {  useState } from "react";
import { Button } from "semantic-ui-react";


const ItemCount = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const handleIncrement = () => {
    counter >= stock || setCounter(counter + 1);
  };

  const handleDecremet = () => {
    counter <= 1 || setCounter(counter - 1);
  };  
  
  return (
    <>
      <p>Cantidad: {counter}</p>
      <p>Stock disponible: {stock}</p>
      <Button secondary onClick={handleDecremet}>
        -
      </Button>
      <Button primary onClick={handleIncrement}
        disabled= { counter === stock ? 'disabled' : '' }
        >
        +
      </Button>

      <Button positive 
        onClick={() => onAdd(counter)}
        >
        Agregar al carrito
      </Button>
    </>
  );
};

export default ItemCount;
