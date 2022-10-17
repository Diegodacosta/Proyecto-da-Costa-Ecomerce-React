import React, { useState, createContext, useContext } from "react";

export const Context = createContext();

export const UseContext = () => useContext(Context);

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const isInCart = (id) => cart.some((e) => e.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === item.id) {
          return { ...cartElement, quantity: cartElement.quantity + quantity };
        } else return cartElement;
      });
      setCart(newCart);
    } else {
      setCart((e) => [...e, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((e) => e.id !== itemId));
  };

  const clear = () => setCart([]);


   const totalPrices = cart.reduce((acc, total) => {
      return acc + (total.price * total.quantity)
    }, 0)
    
    // SessionscorrectLogssion] = useState(false)
    const [ user, setUser ] = useState(null)
  
    const isLogged = ( uid ) => user.some(e => e.uid === uid.uid)

    const startSession = ( anyUser ) => {
      if ( isLogged(anyUser.uid) ) {
        return { ...anyUser, uid: anyUser.uid }
      }
      setUser(anyUser)
    }

    const isLogOut = () => {
        setUser(null)    
    }
  return (
    <Context.Provider
      value={{ user, startSession, cart, addToCart, removeItem, clear, totalPrices, isLogOut, isLogged }}
    >
      <div>{children}</div>
    </Context.Provider>
  );
};
