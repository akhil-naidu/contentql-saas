import React from 'react';

const ProductCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl'>
      <figure>
        <img
          src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
