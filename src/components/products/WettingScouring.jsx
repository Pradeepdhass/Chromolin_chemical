import React from 'react';
import ProductCategory from '../ProductCategory';
import { productData } from '../../data/products';

const WettingScouring = () => {
    return <ProductCategory {...productData.wettingScouring} />;
};

export default WettingScouring;
