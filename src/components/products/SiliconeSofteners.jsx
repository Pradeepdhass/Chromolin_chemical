import React from 'react';
import ProductCategory from '../ProductCategory';
import { productData } from '../../data/products';

const SiliconeSofteners = () => {
    return <ProductCategory {...productData.siliconeSofteners} />;
};

export default SiliconeSofteners;
