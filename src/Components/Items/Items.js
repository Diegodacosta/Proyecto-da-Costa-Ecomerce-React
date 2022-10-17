import { CardGroup, Card } from 'react-bootstrap'
import './Items.css'

const Items = ({data}) => (
  
  <CardGroup>
      <Card>
        <Card.Img variant="top" src={data?.img} className="imgBlock mx-auto d-block m-4" />
        <Card.Body>
        <Card.Title className="textEllipsis">{data.title} </Card.Title>
            <Card.Title><strong>${data.price}</strong></Card.Title>
            <Card.Subtitle>Hasta 12 Coutas sin Interes</Card.Subtitle>
            <Card.Text>Color: {data.color}</Card.Text>
        </Card.Body>  
        
      </Card>
  </CardGroup>
  
)

export default Items

/*
<Card>
      <Image src={data.img} wrapped ui={false} className="imgBlock mx-auto d-block" />
      <Card.Content>
        <Card.Header>{data.title}</Card.Header>
        <Card.Meta>
          <span>Hasta 12 Cuotas sin Interes</span>
        </Card.Meta>
        <Card.Description>
          <h3>${data.price}</h3>
          Color: {data.color}
        </Card.Description>
      </Card.Content>
    </Card>
*/