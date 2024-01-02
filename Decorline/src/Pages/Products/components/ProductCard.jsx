import React, { useState, useEffect } from 'react';
import Card from './Card';
import Cookies from 'js-cookie';
import axios from 'axios';
import { ProductsDetails } from '../../../Data/Products';

const ProductCard = ({ show }) => {
  const [itemsPerPage, setItemsPerPage] = useState(show); // Default items per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = ProductsDetails.length;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = Cookies.get('token'); // Get token from cookies

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          console.error('Authentication token is missing.');
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        console.log('Request Headers:', headers);

        const response = await axios.get(
          'https://decorline-backend.onrender.com/api/v1/getAllPoducts',
          { headers }
        );

        const data = response.data;
        console.log('Fetched data:', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);

        if (error.response) {
          console.error(`Error Response Status: ${error.response.status}`);
          console.error('Error Response Data:', error.response.data);
          setError(error.response.data); // Set error state with response data
        } else {
          setError({ message: 'An error occurred while fetching data.' });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    if (show && !isNaN(show) && show > 3 && show < 17) {
      setItemsPerPage(Number(show));
    }
  }, [show]);

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

  if (loading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or component
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Display a meaningful error message to the user
  }

  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);
  const currentProducts = ProductsDetails.slice(startIndex, endIndex);

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
        <button
          onClick={handlePrevPage}
          className={`h-[60px] w-[60px] bg-[#E9E9E9] md:h-[50px] md:w-[50px] rounded-[10px] ${
            currentPage === 1 ? 'hidden' : ''
          }`}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={
              currentPage === i + 1
                ? 'active bg-[#FFDA18] md:h-[50px] md:w-[50px] text-[white] h-[60px] w-[60px] rounded-[10px]'
                : 'bg-[#E9E9E9] h-[60px] w-[60px] md:h-[50px] md:w-[50px] rounded-[10px]'
            }
          >
            {i + 1}
          </button>
        ))}
        <button
          className={`h-[60px] w-[60px] md:h-[50px] md:w-[50px] bg-[#E9E9E9] rounded-[10px] ${
            currentPage === totalPages ? 'hidden' : ''
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
