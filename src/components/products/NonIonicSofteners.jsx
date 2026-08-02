import React from 'react';
import ProductCategory from '../ProductCategory';
import { productData } from '../../data/products';

const NonIonicSofteners = () => {
    return <ProductCategory {...productData.nonIonicSofteners} />;
};

export default NonIonicSofteners;
