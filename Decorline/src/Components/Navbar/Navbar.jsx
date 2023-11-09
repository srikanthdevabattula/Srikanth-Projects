import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import {IoMdArrowDropdown} from 'react-icons/io'
import {MdOutlinePerson} from 'react-icons/md'
const Navbar = () => {
    const [subscribe,setSubscribe]=useState(false)
    const [isDesignDropdownOpen, setIsDesignDropdownOpen] = useState(false);
    const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);


    const handelSubscribe=()=>{
        setSubscribe(!subscribe)
    
    }


    const DesignIdeasDropdown = () => {
      setIsDesignDropdownOpen(!isDesignDropdownOpen);
      if(isMoreDropdownOpen){
      setIsMoreDropdownOpen(!isMoreDropdownOpen )
      }
    };
    const MoreDropdown = () => {
        setIsMoreDropdownOpen(!isMoreDropdownOpen);
        if(isDesignDropdownOpen){
            setIsDesignDropdownOpen(!isDesignDropdownOpen )
        }
        
      };
     
   


  return (
    <div className='flex h-[123px] lg:h-[100px] md:h-[75px] sm:h-[50px]  font-poppins justify-between items-center px-[42px] lg:px-[32px] md:px-[25px] sm:px-[10px] esm:px-0 uppercase'>
        <img src={Logo} alt="" className='h-[78px] w-[303px] lg:h-[60px] lg:w-[250px] md:h-[45px] md:w-[150px] sm:w-[50px] sm:h-[30px]'/>
        <div className='flex space-x-10 lg:space-x-6 md:space-x-4 sm:space-x-2 text-[15px] lg:text-[13px] md:text-[11px] sm:text-[6px] esm:text-[5px] font-semibold'>
            <Link to='/'>Home</Link>
            <Link to='/AboutUs'>About Us</Link>
            <h1  onClick={DesignIdeasDropdown} className="relative group" ><button className='flex items-center'>DESIGN IDEAS <IoMdArrowDropdown/></button>
            {isDesignDropdownOpen && (
            <div className="absolute mt-2 space-y-2 sm:space-y-0 bg-[#FFFFFF] border border-t-[yellow] border-t-[2px]  rounded-lg z-10 text-[15px] lg:text-[13px] md:text-[11px] sm:text-[6px] w-[230px] lg:w-[200px] md:w-[170px] sm:w-[110px]">
              <Link to="/" className="block px-4 py-2  hover:bg-[#ada9a9]">MODULAR INTERIOR</Link>
              <Link to="/" className="block px-4 py-2  hover:bg-[#ada9a9]">HOME INTERIOR</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">RENOVATION</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">COMMERCIAL INTERIOR</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">BALCONI INTERIOR</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">OFFICE SPACE</Link>
              
               </div>
          )}
            </h1>
            <h1 onClick={MoreDropdown} className="relative group" ><button className='flex items-center'>MORE <IoMdArrowDropdown/></button>
            {isMoreDropdownOpen && (
            <div className="absolute mt-2 space-y-2 sm:space-y-0 bg-[#FFFFFF] border border-t-[yellow] border-t-[2px]  rounded-lg z-10 text-[15px] lg:text-[13px] md:text-[11px] sm:text-[6px] w-[230px] lg:w-[200px] md:w-[170px] sm:w-[110px]">
              <Link to="/" className="block px-4 py-2 hover:bg-[#ada9a9]">career</Link>
              <Link to="/" className="block px-4 py-2  hover:bg-[#ada9a9]">customer reviews</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">refer a friend</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">how it works</Link>
              
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">Notification</Link>
              
               </div>
          )}
            </h1>
            <Link to='/'>store</Link>
            <Link to='/ContactUs'>contact us</Link>
        </div>
        <div className='flex items-center space-x-4 md:space-x-2 font-semibold'>
            <div className='flex text-[26px] lg:text-[20px] md:text-[12px]'><MdOutlinePerson/> <IoMdArrowDropdown/></div>
            
            
            {subscribe? <button className='bg-[#D93535] text-[white] rounded-[85px] text-[16px] lg:text-[14px] md:text-[11px] sm:text-[6px] p-[8.33px_16.5px_8.33px_16.5px] sm:p-[4.33px_6.5px_4.33px_6.5px]' onClick={()=>handelSubscribe()}>SUBSCRIBE</button> 
            :<button className='bg-[#C8C8C8] rounded-[85px] text-[16px] lg:text-[14px] md:text-[11px] sm:text-[6px] p-[8.33px_16.5px_8.33px_16.5px] sm:p-[4.33px_6.5px_4.33px_6.5px]' onClick={()=>handelSubscribe()}>SUBSCRIBE</button>

            }
        </div>
    </div>
  )
}

export default Navbar