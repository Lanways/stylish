import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Header from "../../components/header/Header";
import Paginations from "../../components/pagination/Pagination";
import Footer from "../../components/footer/Footer";
import { API_GET_PRODUCTS } from "../../global/constants";

async function fetchProduct(productId, setProduct) {
  try {
    const res = await fetch(`${API_GET_PRODUCTS}/${productId}`);
    const { data } = await res.json();
    if (data) {
      console.log('data', data)
      setProduct(data)
    }
  } catch (error) {
    console.error('Error fetching product:', error);
  }
}

const Product = () => {
  const { productId } = useParams()
  console.log('productId', productId)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetchProduct(setProduct)
  }, [])

  const renderProductDetails = () => {
    console.log('product', product)
    if (!product) return <p>Loading...</p>;
    return (
      <div>
        <h1>Hello</h1>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        {/* 其他产品详细信息 */}
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="main-container">
        {renderProductDetails()}
      </div>
      <Paginations />
      <Footer />
    </div>
  );
}

export default Product