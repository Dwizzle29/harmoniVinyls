import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { imageId } = useParams();

  return (
    <div>
      <h1>Product Page for {imageId}</h1>
      {/* Fetch and display product details based on productId */}
    </div>
  );
};

export default Product;
