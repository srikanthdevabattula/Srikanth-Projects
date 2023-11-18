import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsDetails } from '../../Data/Products';
import {IoIosArrowForward} from 'react-icons/io'
import {AiTwotoneStar} from 'react-icons/ai'
import {BiSolidStarHalf} from 'react-icons/bi'
import { FaFacebook,FaLinkedin } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import DescriptionAndData from './Components/DescriptionAndData'
import EmailDiscount from './Components/EmailDiscount';
import Whyus from './Components/Whyus';
import RelatedProducts from './Components/RelatedProducts';

const SingleProduct = () => {
  const { idNo } = useParams();
  const productId = parseInt(idNo, 10);

  // Find the product with the matching ID
  const product = ProductsDetails.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const {id,
    Name,
    Price,
    offerPrice,
    category,
    wishlist,
    ProductImage,
    rating,
    discount,
    Description,
    features,
} = product;
const [count,setCount]=useState(0)

function incCount(){
  setCount(prev=> prev+1)
}
function decCount(){
  if(count>0){
    setCount(prev=> prev-1)
  }
}

  return (
    <div>
      <div className='flex space-x-3 items-center bg-[#FFDA18] px-[5%] h-[80px] md:h-[60px]'>
       <Link to='/Store'> <h5 className='text-[#9F9F9F] text-[16px] md:text-[13px] font-poppins'>Home</h5></Link>
        <IoIosArrowForward/>
       <Link to='/products'> <h5 className='text-[#9F9F9F] text-[16px]  md:text-[13px] font-poppins'>Shop</h5></Link>
        <IoIosArrowForward/>
       <span className=' md:text-[13px] sm:mt-[-4px]'>|</span> 
        <h5 className=' text-[16px] font-poppins  md:text-[13px]'>Asgaard Sofa</h5>
      </div>

      <div className='flex sm:flex-col h-[808px] lg:h-[730px] md:h-[650px] sm:h-auto  px-[5%]'>
        <div className='flex space-x-4'>
        <div className='space-y-4  mt-[80px] w-[86px] md:w-[60px] sm:w-[50px]'>
          <img src={ProductImage} alt="" className=' h-[68px] md:h-[55px] sm:h-[45px] rounded-[10px]'/>
          <img src={ProductImage} alt="" className=' h-[68px] md:h-[55px] sm:h-[45px] rounded-[10px]'/>
          <img src={ProductImage} alt="" className=' h-[68px] md:h-[55px] sm:h-[45px] rounded-[10px]'/>
          <img src={ProductImage} alt="" className=' h-[68px] md:h-[55px] sm:h-[45px] rounded-[10px]'/>
        </div>
        <div className='w-[560px] lg:w-[400px] md:w-[300px] flex  '>
          <img src={ProductImage} alt="" className='h-[423px] md:h-[360px] w-[470px] lg:w-[380px] md:w-[280px] sm:h-[320px] mt-[45px]'/>
        </div>

        </div>
        <div className='mt-8 '>
          <h1 className='text-[48px] lg:text-[35px] md:text-[25px] sm:text-[20px] font-bold font-Roboto ml-6'>{Name}</h1>
          <div className='flex space-x-5 ml-6'>
          <h4 className='text-[#9F9F9F] text-[23px] lg:text-[18px] sm:text-[15px] font-Roboto'>Rs. {offerPrice}</h4>
          <h4 className='text-[#a43939] text-[23px] lg:text-[18px] sm:text-[15px] font-Roboto line-through'>Rs. {Price}</h4>
          </div>
<div className='flex items-center ml-6'>
          <div className='pt-4 pb-4 sm:pt-2 sm:pb-2 flex text-[#ffcb12] text-[24px] lg:text-[20px] md:text-[18px] sm:text-[12px]'>
                 {[...Array(Math.floor(rating))].map((_, i) => (
          <AiTwotoneStar key={i} />
        ))}
        {rating % 1 === 0.5 && <BiSolidStarHalf key="half" />}
        </div>
                  <h4 className='border-l-[2px] border-[#9F9F9F] text-[13px] sm:text-[9px] pl-5 ml-5'>5 Customer Review</h4>
        </div>

        <p className='w-[75%] lg:w-[80%] text-[13px] lg:text-[12px] sm:text-[9px] ml-6 font-poppins'>{Description}</p>

        <h5 className='ml-6 text-[#9F9F9F] text-[16px] lg:text-[14px] mt-14 lg:mt-12 sm:mt-6'>Color</h5>
        <div className='ml-7 flex space-x-4 my-3 '>
          <button className='h-[30px] w-[30px] rounded-[50px] bg-[#DFC3CF]'></button>
          <button className='h-[30px] w-[30px] rounded-[50px] bg-[#000000]'></button>
          <button className='h-[30px] w-[30px] rounded-[50px] bg-[#B88E2F]'></button>
        </div>

        <div className='flex space-x-4 mt-14 lg:mt-12'>

        <div className='flex justify-around ml-6 border-[1px] border-[#9F9F9F] w-[123px] lg:w-[110px] md:w-[90px] h-[63px] lg:h-[55px] md:h-[45px] font-poppins items-center rounded-[10px] text-[16px]'><button onClick={decCount}>-</button><h4 className='font-medium'>{count}</h4><button onClick={incCount}>+</button></div>

                 <button className='border-[1px] text-[19px] lg:text-[17px] font-bold font-Roboto border-[black] rounded-[15px] h-[63px] lg:h-[55px] md:h-[45px] w-[215px] lg:w-[190px] md:w-[160px] hover:bg-[black] hover:text-[white]'>Add To Cart</button>
        </div>

                  <div className='ml-6 mt-16 lg:mt-14 md:mt-10 pt-10 md:pt-6 border-t-[1px] border-[#D9D9D9] text-[#9F9F9F] text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] font-poppins'>
                    <h5>SKU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;  :&nbsp;&nbsp; SS001</h5> 
                   <h5>Category &nbsp;&nbsp;:&nbsp;&nbsp; {category}</h5> 
                   <h5> Tags &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; Sofa,Chair,Home,Shop</h5>
                   <h5 className='flex items-center'>Share &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; <div className='flex space-x-3 text-[black]'><FaFacebook /><FaLinkedin /><AiFillTwitterCircle /></div> </h5>

                  </div>

                  
        </div>
       
      </div>

     
      <DescriptionAndData features={features}/>
      <EmailDiscount/>
<RelatedProducts data={product}/>
      <Whyus/>
      
    </div>
    
  );
};

export default SingleProduct;
