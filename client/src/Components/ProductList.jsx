import React from 'react';

import {Grid} from '@mui/material';
import ProductCard from './ProductCard';

const ProductList = ({products}) => {
    return (
      
        <Grid container spacing={4}> 
          {products &&
            products.length > 0 &&
            products.map((item) => (
              <Grid item xs={3} key={item.id}>
                <ProductCard item={item}></ProductCard>
            </Grid>
            ))}
        </Grid>
      
    );
};

export default ProductList;