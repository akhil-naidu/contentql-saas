'use client';

import React from 'react';
import ProductCard from '../_components/ProductCard';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useProductsStore } from '../_store/products';

const DisplayProducts = () => {
  // const products = [
  //   { id: 1, name: 'shoes', description: 'my favorite shoes' },
  //   { id: 2, name: 'shoes', description: 'my favorite shoes' },
  // ];

  const { name, description, setName, setDescription } = useProductsStore();

  const products = useQuery(api.products.get);
  const addProduct = useMutation(api.products.add);

  return (
    <div className='flex flex-col gap-4 mx-auto'>
      <div className='flex gap-2 flex-col '>
        <input
          type='text'
          placeholder='Enter Product Name'
          className='input w-full max-w-xs'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type='text'
          placeholder='Enter Product Description'
          className='input w-full max-w-xs'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className='btn btn-primary w-fit'
          onClick={() => addProduct({ name: name, description: description })}
        >
          Add this Product
        </button>
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
