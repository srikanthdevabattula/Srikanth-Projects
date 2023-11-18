import React, { useState } from 'react';
import { IoShareSocial } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { IoHeart } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Card = (props) => {
    const { id, Name, Price, offerPrice, ProductImage, wishlist: initialWishlist,discount } = props.data;

    // State to manage the local wishlist status
    const [wishlist, setWishlist] = useState(initialWishlist);
  
    // Function to toggle local wishlist status
    const toggleWishlist = () => {
      setWishlist(!wishlist);
    };

  return (
    <div className='h-[482px] w-[313px] lg:w-[250px] lg:h-[400px] md:w-[180px] md:h-[300px] sm:w-[160px] sm:h-[270px] bg-[#FFFFFF] space-y-3 lg:space-y-1 my-5 font-Roboto ' style={{ boxShadow: '5.71875px 5.71875px 9.53125px 0px rgba(0, 0, 0, 0.25)' }}>
      <Link to={`/SingleProduct/${id}`}>
        <div className='bg-[#FAFAFA] flex justify-center rounded-[20px]'>
          <img src={ProductImage} alt={Name} className='h-[50%] w-[100%]' />
        </div>
      </Link>

      <h1 className='font-bold text-[16px] lg:text-[13px] md:text-[11px] sm:text-[10px] px-2 text-[#0D1B39] flex items-center justify-between'>
        {Name} <IoShareSocial className='text-[25px] md:text-[20px]' />
      </h1>

      <div className='flex mt-3 space-x-3 items-center text-[19px] lg:text-[15px] md:text-[12px] sm:text-[10px] font-bold px-2 py-1 text-[#0D1B39]'>
        <p>RS. {offerPrice}</p> <p className='text-[#D93535]'>RS.{Price}</p>
      </div>
      <div className='flex px-3 justify-between pt-3'>
        <button className='bg-[#D8D8D8] p-[9.5px] rounded-[14px] text-[20px] lg:text-[18px] md:text-[12px] sm:text-[8px]'>Buy Now</button>
        <button className='p-[9.5px] rounded-[14px] border-[1px] border-[black] text-[20px] lg:text-[18px] md:text-[12px] sm:text-[8px]'>Add To Cart</button>
      </div>
      
      {wishlist ? (
        <IoHeart
          className='relative top-[-90%] lg:top-[-80%] md:top-[-85%] left-[85%] md:left-[80%] sm:left-[80%] text-[#F35353] bg-[white] rounded-[40px] text-[30px] md:text-[25px] p-[2px]'
          onClick={toggleWishlist}
        />
      ) : (
        <CiHeart
          className='relative top-[-90%] lg:top-[-80%] md:top-[-85%] left-[85%] md:left-[80%] sm:left-[80%]  bg-[white] rounded-[40px] text-[30px] md:text-[25px] p-[2px]'
          onClick={toggleWishlist}
        />
      )}
      {discount?<h1 className='relative top-[-100%] left-[2%] bg-[#E97171] text-[white] w-[35px] h-[35px] p-1 rounded-[20px]'>{discount}</h1>:null}
      
    </div>
  );
};

export default Card;
