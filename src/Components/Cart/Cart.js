import { CardGroup, Card, Container, Button } from 'react-bootstrap'
import { UseContext } from '../../Context';

const Cart = ({ item }) => {
  const { removeItem } = UseContext();
  const handleRemove = () => removeItem(item.id)
  const handleBuy = (item) => console.log('Compraste algo') 
  
  return (
    <Container>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={item?.img} className="imgBlock mx-auto d-block m-4" />
          <Card.Body>
          <Card.Title className="textEllipsis">{item?.title} </Card.Title>
            <Card.Title><strong>${item?.price}</strong></Card.Title>
            <Card.Subtitle>Cantidad: {item.quantity}</Card.Subtitle>
          </Card.Body>
          <div>
            <Button variant="link" onClick={handleBuy}>Comprar</Button>
            <Button variant="link" onClick={handleRemove}>Eliminar</Button>
          </div>
        </Card>
        </CardGroup>
    </Container>
  );
};

export default Cart;
