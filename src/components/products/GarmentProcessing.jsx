import React from 'react';
import ProductCategory from '../ProductCategory';
import { productData } from '../../data/products';

const GarmentProcessing = () => {
    return <ProductCategory {...productData.garmentProcessing} />;
};

export default GarmentProcessing;
