'use client';

import React from 'react';
import ProductCard from '../_components/ProductCard';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

const DisplayProducts = () => {
  // const products = [
  //   { id: 1, name: 'shoes', description: 'my favorite shoes' },
  //   { id: 2, name: 'shoes', description: 'my favorite shoes' },
  // ];

  const products = useQuery(api.products.get);

  return (
    <div className='flex flex-col gap-4 mx-auto'>
      <div className='flex gap-2 flex-col'>
        <input
          type='text'
          placeholder='Enter Product Name'
          className='input w-full max-w-xs'
        />

        <input
          type='text'
          placeholder='Enter Product Description'
          className='input w-full max-w-xs'
        />
      </div>

      <div className='flex gap-4'>
        {products?.map(({ _id, name, description }) => {
          return (
            <ProductCard key={_id} name={name} description={description} />
          );
        })}
      </div>
    </div>
  );
};

export default DisplayProducts;
