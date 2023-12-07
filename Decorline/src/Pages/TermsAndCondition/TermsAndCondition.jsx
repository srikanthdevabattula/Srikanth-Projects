import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import blog from '../../assets/ANmain.png'
import { Link } from 'react-router-dom';
const TermsAndCondition = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${blog})`,
        
      };
  return (
    <div>
   <div className=' bg-cover bg-center h-[316px] sm:h-[250px] flex text-[white] flex-col justify-center items-center' style={backgroundImageStyle}>
    <h1 className='text-[48px] sm:text-[25px] font-poppins font-bold'>Terms And Condition</h1>
    <div className='flex space-x-3 items-center text-[16px] sm:text-[13px]'>
    <Link to='/' className='font-poppins font-medium  '>Home</Link>
     <IoIosArrowForward/>
    <p className='font-light  '>Terms & condition</p>
    </div>
      </div>

      <p className='text-center p-[4%] font-Roboto text-[#727272] text-[28px] lg:text-[24px] md:text-[18px] sm:text-[10px]'>Our company, DecoSpace, is a full-service interior design firm that specializes in residential and commercial projects. We have over 20 years of experience and a team of highly skilled and experienced designers. We are committed to providing our clients with the highest quality of service and the most beautiful and functional interiors.</p>

    <div>
    <ul className="list-disc list-inside px-[3%] space-y-10 md:space-y-6 mb-10">
        <div className='space-y-3 md:space-y-2'>

        <li className='font-bold font-Roboto text-[33px] md:text-[25px] sm:text-[17px]  pl-2'>Statement of Work</li>
        <div className='text-[19px] md:text-[15px] sm:text-[10px] text-[#727272]'>
        <p className='pb-3 sm:pb-2'>The scope of work for our interior design services includes:
        </p>
        <li>Conducting a space analysis and creating a design brief</li>
        <li>Developing design concepts and presentations</li>
        <li>Preparing construction drawings and specifications</li>
        <li>Managing the procurement of materials and furnishings</li>
        <li>Coordinating with contractors and other vendors</li>
        <li>Providing on-site supervision</li>
        </div>
        </div>
 <div className='space-y-3 md:space-y-2'>
  <li className='font-bold font-Roboto text-[33px] md:text-[25px] sm:text-[14px] pl-2'>Purchasing and Warranty Terms</li>
  <p className='text-[19px] text-[#727272] md:text-[15px] sm:text-[10px]'>We will work with you to select all of the materials and furnishings for your project. We will provide you with a list of approved vendors and we will negotiate the best possible prices for you. We also offer a one-year warranty on all of the materials and furnishings that we specify.</p>
  </div>
  
  <div className='space-y-3 md:space-y-2'>  <li className='font-bold font-Roboto text-[33px] md:text-[25px] sm:text-[14px] pl-2'>Outside Consultants and Contractors</li>
  <p className='text-[19px] text-[#727272] md:text-[15px] sm:text-[10px]'>We may need to use outside consultants and contractors to complete your project. We will work with you to select the best possible professionals for your needs. We will also manage the coordination of these professionals and ensure that they meet your expectations.</p>
  </div>
  <div className='space-y-3 md:space-y-2'> <li className='font-bold font-Roboto text-[33px] md:text-[25px] sm:text-[14px] pl-2'>Terms for Photographs and Publicity of Your Work</li>
  <p className='text-[19px] text-[#727272] md:text-[15px] sm:text-[10px]'>We may take photographs of your project for use in our portfolio and for marketing purposes. We will always obtain your permission before taking any photographs.</p>
  </div>
  <div className='space-y-3 md:space-y-2'><li className='font-bold font-Roboto text-[33px] md:text-[25px] sm:text-[14px] pl-2'>Intellectual Property Clause</li>
  <p className='text-[19px] text-[#727272] md:text-[15px] sm:text-[10px]'>All of the designs and drawings created by our company are our intellectual property. We will not share these designs or drawings with any third parties without your permission.</p>
  </div> 
  <div className='space-y-3 md:space-y-2'> <li className='font-bold font-Roboto text-[33px] md:text-[25px] sm:text-[14px] pl-2'>Termination Terms</li>
  <p className='text-[19px] text-[#727272] md:text-[15px] sm:text-[10px]'>Either party may terminate this contract at any time for any reason. However, if the project is terminated by the client, the client will be responsible for paying our fees for all of the work that has been completed up to the date of termination.</p>
  </div>
</ul>

    </div>

    </div>
  )
}

export default TermsAndCondition