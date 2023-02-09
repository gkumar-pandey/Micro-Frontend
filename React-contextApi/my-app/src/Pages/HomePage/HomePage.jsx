import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products?limit=10";

  const fetchProducts = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container d-flex flex-wrap gap-4 pt-4 ">
      {products.map((product) => {
        return (
          <>
            <ProductCard
              price={product.price}
              title={product.title}
              image={product.image}
            />
          </>
        );
      })}
    </div>
  );
};

export default HomePage;
