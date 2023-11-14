import React from 'react'
import team1 from '../../../assets/team1.png'
import team2 from '../../../assets/team2.png'
import team3 from '../../../assets/team3.png'
import {BsThreeDots} from 'react-icons/bs'
const OurTeam = () => {
  return (
    <div className='pt-4' style={{ background: 'linear-gradient(180deg, rgba(214, 214, 214, 0.68) 0%, rgba(255, 255, 255, 0) 100%)' }}>
<div className='font-Roboto flex flex-col items-center space-y-5 my-8'>
    <h1 className='font-bold text-[48px] lg:text-[40px] md:text-[30px] sm:text-[20px] w-[420px] h-[97px] lg:w-[350px] lg:h-[80px] md:h-[60px] md:w-[250px] sm:h-[50px] sm:w-[150px] bg-[#FFDA18]  flex justify-center items-center'>Our Team</h1>
    <p className='text-[23px] lg:text-[18px] md:text-[15px] sm:text-[10px] px-[10%] text-center'>Our team of experienced interior designers is passionate about creating beautiful and functional spaces. We are always up-to-date on the latest trends, and we are committed to providing our clients with the highest level of service.</p>
    </div>


<div className='flex px-[5%] justify-between space-x-5'>
    <div>
        <img src={team1} alt="" />
        <div className='text-center font-Roboto mt-4 sm:mt-2 text-[22px] lg:text-[20px] md:text-[16px] sm:text-[9px] '>
        <h4 className=''>Sourav dey</h4>
        <h3 className=' font-bold'>CEO</h3>
        </div>
       
    </div>
    <div>
        <img src={team2} alt="" />
        <div className='text-center font-Roboto mt-4 sm:mt-2 text-[22px] lg:text-[20px] md:text-[16px] sm:text-[9px] '>
        <h4 className=''>Swetak Sarkar</h4>
        <h3 className=' font-bold '>Head 3d Designer</h3>
        </div>
       
    </div>
    <div>
        <img src={team3} alt="" />
        <div className='text-center font-Roboto mt-4 sm:mt-2 text-[22px] lg:text-[20px] md:text-[16px] sm:text-[9px] '>
        <h4 className=''>R. Peterson</h4>
        <h3 className=' font-bold'>Head Of Marketing Dept</h3>
        </div>
       
    </div>
</div>
<div className='flex justify-center text-[30px] sm:text-[18px] sm:my-3 text-[#807B7B] my-5'>
     <BsThreeDots/>
     <BsThreeDots/></div>
    </div>
  )
}

export default OurTeam