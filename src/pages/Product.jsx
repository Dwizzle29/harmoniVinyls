import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { imageId } = useParams();

  return (
    <div>
      <h1>Product Page for {imageId}</h1>
      <h2>Work in progress</h2>
    </div>
  );
};

export default Product;
