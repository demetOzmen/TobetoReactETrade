import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProductDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h3>{productDetails.title}</h3>
      <img src={productDetails.thumbnail} alt={productDetails.title} 
      style={{ width: 250, height: 200 }}/>

      <p>Price: ${productDetails.price}</p>
      <p>Description: {productDetails.description}</p>

      <div className="action-buttons">
        <button className="btn btn-danger">Add To Cart</button>
        <button className="btn btn-success">Shop Now</button>
      </div>
    </div>
  );
}
