import React, { useState } from 'react';
import { ProductsDetails } from '../../../Data/Products';

const RelatedProducts = (props) => {
  const { id, category } = props.data;
  const [showMore, setShowMore] = useState(false);

  const filteredProducts = ProductsDetails.filter(
    (product) => product.category == category && product.id !== id
  );

  const displayedProducts = showMore ? filteredProducts : filteredProducts.slice(0, 4);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='mb-[20px] font-Roboto'>
      <h1 className='text-center font-bold text-[40px] my-4'>Related Products</h1>
      <div className='flex flex-wrap justify-center px-[5%]'>
        {displayedProducts.map((product, index) => (
          <div key={index} className=''>
            <div className='bg-[#F4F5F7] h-[400px] w-[280px] mx-4 my-3'>
              <img src={product.ProductImage} alt='' className='h-[65%]' />
              <div className='p-[8px] space-y-2'>
                <h1 className='font-Roboto font-bold text-[21px] text-[#3A3A3A]'>{product.Name}</h1>
                <p className='text-[16px] text-[#898989]'>{product.category}</p>
                <div className='flex space-x-3'>
                  <h3 className='text-[#3A3A3A] text-[19px] font-bold'>Rs. {product.offerPrice}</h3>
                  <h4 className='line-through text-[#B0B0B0] text-[16px]'>Rs. {product.Price}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredProducts.length > 4 && (
        <div className='flex justify-center my-6'>
          <button
            className='text-[#B88E2F] border-[1px] border-[#B88E2F] h-[48px] w-[245px]'
            onClick={handleShowMore}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;
