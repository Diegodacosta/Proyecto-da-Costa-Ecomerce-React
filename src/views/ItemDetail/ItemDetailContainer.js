import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

// FB
import { db } from "../../firebase/config";
import { getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = () => {
  const [item, setItem] = useState([null]);
  const { id } = useParams();

  useEffect(() => {
    ( async () => {
        const docRef = doc(db, 'products', id)
        const docSnap = await getDoc(docRef)
        setItem({...docSnap.data(), id: id})
    } )()
    
  }, [id]);
  
  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
