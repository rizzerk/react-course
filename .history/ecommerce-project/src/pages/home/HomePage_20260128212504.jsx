import axios from 'axios'
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { formatMoney } from '../../utils/money';
import { ProductsGrid } from './ProductsGrid';
import CheckMarkIcon from '../../assets/images/icons/checkmark.png'
import './HomePage.css';

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async() => {
      const response = await axios.get('/api/products')  
      setProducts(response.data);
    };

    getHomeData();
  }, [])

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}