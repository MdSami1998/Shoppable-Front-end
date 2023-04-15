import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../shared/Loader/Loader';

const ProductDetails = () => {
    const {productId} = useParams();

    const { data: product, isLoading } = useQuery('product', () =>
        fetch(`http://localhost:5000/products/${productId}`).then(res =>
            res.json()
        )
    )

    if(isLoading){
        return <Loader />
    }

    return (
        <div>
            <h2>Product detail{product._id}</h2>
            <h2>Product detail{product.name}</h2>
        </div>
    );
};

export default ProductDetails;