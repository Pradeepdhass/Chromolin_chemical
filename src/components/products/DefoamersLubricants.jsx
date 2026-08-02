import React from 'react';
import ProductCategory from '../ProductCategory';
import { productData } from '../../data/products';

const DefoamersLubricants = () => {
    return <ProductCategory {...productData.defoamersLubricants} />;
};

export default DefoamersLubricants;
