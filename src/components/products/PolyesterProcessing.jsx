import React from 'react';
import ProductCategory from '../ProductCategory';
import { productData } from '../../data/products';

const PolyesterProcessing = () => {
    return <ProductCategory {...productData.polyesterProcessing} />;
};

export default PolyesterProcessing;
