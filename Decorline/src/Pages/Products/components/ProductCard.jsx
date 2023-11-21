import React, { useState, useEffect } from 'react';
import { ProductsDetails } from '../../../Data/Products';
import Card from './Card';

const ProductCard = ({ show }) => {
  const [itemsPerPage, setItemsPerPage] = useState(show); // Default items per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = ProductsDetails.length;

  // Update itemsPerPage when the show prop changes
  useEffect(() => {
    if (show && !isNaN(show) && show > 3 && show<17) {
      setItemsPerPage(Number(show));
    }
  }, [show]);

  // Calculate the number of pages based on itemsPerPage and totalProducts
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  // Calculate the range of products to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);
  const currentProducts = ProductsDetails.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className='flex flex-wrap justify-around space-x-2 px-2'>
        {currentProducts.map((product, index) => (
          <React.Fragment key={index}>
            <Card data={product} />
          </React.Fragment>
        ))}
      </div>
      <div className='flex justify-center my-4 space-x-2'>
        <button onClick={handlePrevPage} className={`h-[60px] w-[60px] bg-[#E9E9E9] md:h-[50px] md:w-[50px] rounded-[10px] ${currentPage === 1 ? 'hidden' : ''}`}>
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? 'active bg-[#FFDA18] md:h-[50px] md:w-[50px] text-[white] h-[60px] w-[60px] rounded-[10px]' : 'bg-[#E9E9E9] h-[60px] w-[60px] md:h-[50px] md:w-[50px] rounded-[10px]'}
          >
            {i + 1}
          </button>
        ))}
        <button className={`h-[60px] w-[60px] md:h-[50px] md:w-[50px] bg-[#E9E9E9] rounded-[10px] ${currentPage === totalPages ? 'hidden' : ''}`} onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
