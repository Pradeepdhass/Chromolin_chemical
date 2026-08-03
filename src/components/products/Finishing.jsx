import React from 'react';
import ProductCategory from '../ProductCategory';
import { productData } from '../../data/products';

const Finishing = () => {
    return <ProductCategory {...productData.finishing} />;
};

export default Finishing;
