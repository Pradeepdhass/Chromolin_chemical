import React from 'react';
import ProductCategory from '../ProductCategory';
import { productData } from '../../data/products';

const AfterTreatment = () => {
    return <ProductCategory {...productData.afterTreatment} />;
};

export default AfterTreatment;
