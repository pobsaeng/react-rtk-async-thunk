import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/fetchProducts";
import ProductList from "../components/ProductList";

const ProductComponent = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    // Dispatch the async thunk to fetch product data
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Fetch product from a JSON file.</h2>
      <ProductList products={products}/>
    </div>
  );
};

export default ProductComponent;
