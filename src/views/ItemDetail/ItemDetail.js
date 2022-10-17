import { Row, Col, Container } from "react-bootstrap";

//Components
import ItemCount from "../../Components/ItemCount/ItemCount";

//Context
import { UseContext } from "../../Context";

const ItemDetail = ({ item }) => {
  const { addToCart } = UseContext();

  const onAdd = (count) => {
    addToCart(item, count);
  };

  return (
    <div className="mt-5">
      <Container fluid>
        <Row>
          <Col xxl={6} xl={6} lg={12} md={12} xs={12} sm={12} >
            <img src={item?.img} alt={item?.title} className="mx-auto d-block" />
          </Col>
          <Col xxl={6} xl={6} lg={12} md={12} xs={12} sm={12}>
            <div key={item?.id} className="mb-3">
              <h2>{item?.title}</h2>
              <strong>Precio: ${item?.price}</strong>
              <p>Hasta 12 Cuotas sin interés</p>
              <div>
                <ItemCount stock={item?.stock} onAdd={onAdd} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetail;
