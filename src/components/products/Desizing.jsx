import React from 'react';
import ProductCategory from '../ProductCategory';
import { productData } from '../../data/products';

const Desizing = () => {
    return <ProductCategory {...productData.desizing} />;
};

export default Desizing;
