import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const {productId} = useParams();

    return (
        <div>
            <h2>Product detail{productId}</h2>
        </div>
    );
};

export default ProductDetails;