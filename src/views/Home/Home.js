import { Container } from 'react-bootstrap';

//Components
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'


const Home = () => {
    return (
        <>
            <Container fluid={'xxl' | 'xl'} >
                <ItemListContainer />                
            </Container>
      </>
    )
}

export default Home