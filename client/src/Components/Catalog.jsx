import React, {useState, useEffect} from 'react';
import ProductList from './ProductList';


const Catalog = () => {

    const [products,setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5228/api/Products')
    .then(res => res.json())
    .then(result => {
     
      setProducts(result);
    })
  },[])

    return (
      <>
        <ProductList products={products}></ProductList>
      </>
    );
};

export default Catalog;