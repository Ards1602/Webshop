import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ea710dbc3b17494f9c3bab7900f4a27c_9366/NMD_R1_Tokyo_Shoes_White_FY1159_01_standard.jpg'},
    {id: 2, name: 'Macbook', description: 'Apple macbook', price: '$15', image: 'https://www.metrodataonline.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/m/v/mvfh2id2_1.jpg'}
]

const Products = () => {
    return (
        <main>
            <Grid container justify = "center" spaccing = {4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
        </Grid>
    </main>
    )
}

export default Products;