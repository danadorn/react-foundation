import React, { useState, useEffect } from 'react';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched products:', data);
      setProducts(data);
    } catch (error) {
      setError('Failed to fetch products: ' + error.message);
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-xl">Loading products...</div>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center min-h-screen text-red-500">
      <div className="text-xl">{error}</div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-48 object-contain mb-2"
              />
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="text-indigo-600 font-semibold">${product.price}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">
            No products found
          </div>
        )}
      </div>
    </div>
  );
}