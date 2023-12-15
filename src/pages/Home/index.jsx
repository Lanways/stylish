import "./index.css"
import Header from "../../components/header/Header"
import Products from "./components/products/Products";
import Category from "./components/category/Category";
import { useEffect, useState } from "react";
import { API_GET_PRODUCTS } from '../../global/constants'
import Paginations from '../../components/pagination/Pagination'
import Footer from '../../components/footer/Footer'

async function fetchProducts(setProducts) {
  const res = await fetch(API_GET_PRODUCTS)
  const { data } = await res.json()
  setProducts(data)
}

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts(setProducts)
  }, [])

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="sidebar"><Category /></div>
        <div className="main-content"><Products productsData={products} /></div>
      </div>
      <Paginations />
      <Footer />
    </div>
  );
}

export default Home