import React from 'react'
import blog from '../../assets/ANmain.png'
import {IoIosArrowForward} from 'react-icons/io'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
const HowItWorks = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${blog})`,
        
      };
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    // transition={{ duration: 0.3 }}
    exit={{x:window.innerWidth,transition: {duration:0.1}}}
    >
         <div className=' bg-cover bg-center h-[316px] sm:h-[250px] flex text-[white] flex-col justify-center items-center' style={backgroundImageStyle}>
    <h1 className='text-[48px] sm:text-[30px] font-poppins font-bold'>How it works</h1>
    <div className='flex space-x-3 items-center text-[16px] sm:text-[13px]'>
    <Link to='/' className='font-poppins font-medium  '>Home</Link>
     <IoIosArrowForward/>
    <p className='font-light '>How it works</p>
    </div>
      </div>

      <div className='flex justify-center'>  <h1 className='bg-[#FFDA18] h-[97px] w-[593px] lg:h-[80px] lg:w-[500px] md:w-[400px] md:h-[60px] sm:w-[200px] sm:h-[50px] font-bold text-[48px] md:text-[30px] sm:text-[17px] font-Roboto flex justify-center items-center my-7'>How it works</h1>
      </div>

    <div className='flex px-[2%] justify-around gap-1  flex-wrap font-Roboto'>
        <div className='bg-[#F1EFEF] h-[426px] w-[427px] lg:w-[360px] md:w-[330px] sm:w-[170px] sm:h-[270px] my-2 p-4 space-y-2'>
            <h1 className='text-[#FFDA18] font-bold text-[70px] sm:text-[30px]'>01</h1>
            <h3 className='text-[#201F1D] text-[33px] sm:text-[15px] font-bold'>Programming</h3>
            <p className='text-[19px] sm:text-[10px] text-[#4F4F4F]'>We meet with you to discuss your needs and goals for your project. We'll ask you questions about your lifestyle, your budget, and your style preferences. We'll also take measurements of your space and assess the existing conditions.</p>
        </div>

        <div className='bg-[#F1EFEF] h-[426px] w-[427px] lg:w-[360px] md:w-[330px] sm:w-[170px] sm:h-[270px] my-2 p-4 space-y-2'>
            <h1 className='text-[#FFDA18] font-bold text-[70px] sm:text-[30px]'>02</h1>
            <h3 className='text-[#201F1D] text-[33px] sm:text-[15px] font-bold'>Schematic design</h3>
            <p className='text-[19px] sm:text-[10px] text-[#4F4F4F]'>Based on our discussions, we'll create a schematic design that outlines the overall layout of your space, the furniture arrangement, and the finishes. We'll also create a mood board to help you visualize the final product</p>
        </div>

        <div className='bg-[#F1EFEF] h-[426px] w-[427px] lg:w-[360px] md:w-[330px] sm:w-[170px] sm:h-[270px] my-2 p-4 space-y-2'>
            <h1 className='text-[#FFDA18] font-bold text-[70px] sm:text-[30px]'>03</h1>
            <h3 className='text-[#201F1D] text-[33px] sm:text-[15px] font-bold'>Design development</h3>
            <p className='text-[19px] sm:text-[10px] text-[#4F4F4F]'>In this phase, we'll refine the schematic design and create detailed drawings and specifications. We'll also source materials and furniture, and create a budget for your project</p>
        </div>

        <div className='bg-[#F1EFEF] h-[426px] w-[427px] lg:w-[360px] md:w-[330px] sm:w-[170px] sm:h-[270px] my-2 p-4 space-y-2'>
            <h1 className='text-[#FFDA18] font-bold text-[70px] sm:text-[30px]'>04</h1>
            <h3 className='text-[#201F1D] text-[33px] sm:text-[15px] font-bold'>Contract documents</h3>
            <p className='text-[19px] sm:text-[10px] text-[#4F4F4F]'>We'll prepare a contract that outlines the scope of work, the timeline, and the budget for your project. We'll also provide you with a list of vendors and contractors that we recommend</p>
        </div>
        <div className='bg-[#F1EFEF] h-[426px] w-[427px] lg:w-[360px] md:w-[330px] sm:w-[170px] sm:h-[270px] my-2 p-4 space-y-2'>
            <h1 className='text-[#FFDA18] font-bold text-[70px] sm:text-[30px]'>05</h1>
            <h3 className='text-[#201F1D] text-[33px] sm:text-[15px] font-bold'>Construction</h3>
            <p className='text-[19px] sm:text-[10px] text-[#4F4F4F]'>Once the contract is signed, we'll oversee the construction of your project. We'll coordinate with the contractors and make sure that the work is completed to our standards</p>
        </div>
        <div className='bg-[#F1EFEF] h-[426px] w-[427px] lg:w-[360px] md:w-[330px] sm:w-[170px] sm:h-[270px] my-2 p-4 space-y-2'>
            <h1 className='text-[#FFDA18] font-bold text-[70px] sm:text-[30px]'>06</h1>
            <h3 className='text-[#201F1D] text-[33px] sm:text-[15px] font-bold'>Project completion</h3>
            <p className='text-[19px] sm:text-[10px] text-[#4F4F4F]'>Once the construction is complete, we'll give you a final walk-through of your space and answer any questions you have. We'll also provide you with a maintenance plan to help you keep your space looking its best.</p>
        </div>
    </div>
<div className='space-x-4 flex justify-center my-3 font-bold text-[30px] md:text-[20px] sm:text-[15px]'><button className='bg-[#FFDA18] text-[white] hover:bg-[white] hover:text-[black] hover:border-[1px] rounded-[15px] p-[20px] sm:p-[8px] shadow-md'>Book Consulation</button>
<button className='bg-[#FFDA18] text-[white] rounded-[15px] p-[20px] hover:bg-[white] hover:text-[black] hover:border-[1px] sm:p-[8px] shadow-md'>Get Estimate</button></div>

    </motion.div>
  )
}

export default HowItWorks