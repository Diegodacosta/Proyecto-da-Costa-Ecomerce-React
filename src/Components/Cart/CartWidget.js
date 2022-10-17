import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { UseContext } from "../../Context";
import { Link } from "react-router-dom";
import { Offcanvas, Button } from 'react-bootstrap'

// Components
import Cart from "./Cart";

const CartWidget = () => {
  const { cart, clear, totalPrices } = UseContext();
  const [ items, setItems ] = useState([null])
  const [ show, setShow ] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totalItems = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)
 

  // const findGreaterStock = element => element >= 3

  useEffect(() => {
    if(cart) setItems(cart) 
    else setItems(null)
  }, [cart])

  return (
    <div>
        <Icon name="shopping cart text-light" onClick={handleShow}>
          <span className="p-1">{totalItems}</span>
        </Icon>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
        </Offcanvas.Header>
        {!items.length 
          ? 
          <Offcanvas.Body className="text-center">
            <h3>Tu carrito esta vacío</h3>
            <h6>Muchos productos te esperan</h6>
          </Offcanvas.Body>
          :
          <Offcanvas.Body>
          {items.map((item)=> {
            return(
              <div>
                <Cart item={item} />                
              </div>
            )
          })}
        </Offcanvas.Body>
        }
          {
            cart.length
            ? <div className="row">
                  <div className="col-sm-6">
                    <h5>Total: ${totalPrices}</h5>
                  </div>
                  <div className="col-sm-6 d-flex justify-content-end ">
                    <Button variant="link" onClick={clear}>Vaciar</Button>
                    <Button variant="link" onClick={handleClose}>
                      <Link to="/purchaseform" className="link">Finalizar</Link>
                    </Button>
                    
                  </div>
                </div>
            : <h5>Total: No hay items</h5>
          }
      </Offcanvas>
      
    </div>
  );
};

export default CartWidget;

