import React from 'react';
import ProductCategory from '../ProductCategory';
import { productData } from '../../data/products';

const Mercerisation = () => {
    return <ProductCategory {...productData.mercerisation} />;
};

export default Mercerisation;
