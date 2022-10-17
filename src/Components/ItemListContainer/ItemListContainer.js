import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { db } from '../../firebase/config'
import { collection, getDocs } from "firebase/firestore";
import { Row, Col } from 'react-bootstrap'

// Components
import Items from '../Items/Items';
import Loader from '../Loader/Loader'
const ItemListContainer = () => {
    const { category } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    
    const getProducts = async () => {
        const docs = []
        const querySnapshot = await getDocs(collection(db, 'products'));
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
        });
        setProducts(docs)
        
    }
    console.log(category)
    useEffect(() => {
        getProducts()
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <Row>
            {products.map((item) => {
                return (
                    <Col xxl={3} xl={3} lg={4} md={12} xs={12} sm={12} className="mt-4" key={item?.id}>
                        {isLoading 
                            ? <Loader /> 
                            : <Link to={`../detail/${item?.id}`}> <Items data={item} /></Link>}
                    </Col>
                )
            })}
        </Row>
    )
}

export default ItemListContainer
