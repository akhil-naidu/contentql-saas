import React from 'react';
import ProductCard from '../_components/ProductCard';

const DisplayProducts = () => {
  const products = [
    { id: 1, name: 'shoes', description: 'my favorite shoes' },
    { id: 2, name: 'shoes', description: 'my favorite shoes' },
  ];

  return (
    <div className='flex gap-4'>
      {products.map(({ id, name, description }) => {
        return <ProductCard key={id} name={name} description={description} />;
      })}
    </div>
  );
};

export default DisplayProducts;
