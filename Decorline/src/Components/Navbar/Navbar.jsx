import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import {IoMdArrowDropdown} from 'react-icons/io'
import {MdOutlinePerson} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import { store } from '../../App'
const Navbar = () => {
  const [token,setToken]=useContext(store)
    const [subscribe,setSubscribe]=useState(false)
    const [isDesignDropdownOpen, setIsDesignDropdownOpen] = useState(false);
    const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
    const [isProfileDropdown,setIsProfileDropdown]=useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  
    // useEffect(() => {
    //   // Simulate fetching user subscription status from an API
    //   // Replace the URL with the actual API endpoint for fetching user data
    //   fetch('https://api.example.com/user-data', {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // Assuming the API returns a property named 'isSubscribed'
    //       setSubscribe(data.isSubscribed);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching user data:', error);
    //     });
    // }, [token]);
  
    // const handelSubscribe = () => {
    //   // Simulate the API call to update the subscription status
    //   // Replace the URL with the actual API endpoint for updating subscription status
    //   fetch('https://api.example.com/update-subscription', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify({ subscribe: !subscribe }),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // Assuming the API returns a property named 'success'
    //       if (data.success) {
    //         setSubscribe(!subscribe);
    //       } else {
    //         console.error('Failed to update subscription status:', data.message);
    //       }
    //     })
    //     .catch((error) => {
    //       console.error('Error updating subscription status:', error);
    //     });
    // };
  

    const DesignIdeasDropdown = () => {
      setIsDesignDropdownOpen(!isDesignDropdownOpen);
      if(isMoreDropdownOpen){
      setIsMoreDropdownOpen(false )
      }
      if(isProfileDropdown){
        setIsProfileDropdown(false)
      }
    };
    const profileDropdown = () => {
      setIsProfileDropdown(!isProfileDropdown);
      if(isMoreDropdownOpen){
      setIsMoreDropdownOpen(false )
      }
      if(isDesignDropdownOpen){
        setIsDesignDropdownOpen(false )
    }
    };
    const MoreDropdown = () => {
        setIsMoreDropdownOpen(!isMoreDropdownOpen);
        if(isDesignDropdownOpen){
            setIsDesignDropdownOpen(false )
        }
        if(isProfileDropdown){
          setIsProfileDropdown(false)
        }
        
      };

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
     
   


  return (
    <div>
    <div className='flex h-[123px] lg:h-[100px] md:h-[75px] sm:h-[50px]  font-poppins justify-between items-center px-[42px] lg:px-[32px] md:px-[25px] sm:px-[15px] esm:px-0 uppercase'>
        <img src={Logo} alt="" className='h-[78px] w-[303px] lg:h-[60px] lg:w-[250px] md:h-[45px] md:w-[150px] sm:w-[100px] sm:h-[30px]'/>
        <div className='flex sm:hidden space-x-10 lg:space-x-6 md:space-x-4 sm:space-x-2 text-[15px] lg:text-[13px] md:text-[11px] sm:text-[6px] esm:text-[5px] font-semibold '>
            <Link to='/' className='hover:text-[#ffd500]'>Home</Link>
            <Link to='/AboutUs' className='hover:text-[#ffd500]'>About Us</Link>
            <h1  onClick={DesignIdeasDropdown} className="relative group" ><button className='flex items-center hover:text-[#ffd500]'>DESIGN IDEAS <IoMdArrowDropdown/></button>
            {isDesignDropdownOpen && (
            <div className="absolute mt-2 space-y-2 sm:space-y-0 bg-[#FFFFFF] border border-t-[yellow] border-t-[2px]  rounded-lg z-10 text-[15px] lg:text-[13px] md:text-[11px] sm:text-[6px] w-[230px] lg:w-[200px] md:w-[170px] sm:w-[110px]">
              <Link to="/Designideas" className="block px-4 py-2  hover:bg-[#ada9a9]">MODULAR INTERIOR</Link>
              <Link to="/" className="block px-4 py-2  hover:bg-[#ada9a9]">HOME INTERIOR</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">RENOVATION</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">COMMERCIAL INTERIOR</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">BALCONI INTERIOR</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">OFFICE SPACE</Link>
              
               </div>
          )}
            </h1>
            <h1 onClick={MoreDropdown} className="relative group" ><button className='flex items-center hover:text-[#ffd500]'>MORE <IoMdArrowDropdown/></button>
            {isMoreDropdownOpen && (
            <div className="absolute mt-2 space-y-2 sm:space-y-0 bg-[#FFFFFF] border border-t-[yellow] border-t-[2px]  rounded-lg z-10 text-[15px] lg:text-[13px] md:text-[11px] sm:text-[6px] w-[230px] lg:w-[200px] md:w-[170px] sm:w-[110px] ">
              <Link to="/" className="block px-4 py-2 hover:bg-[#ada9a9]">career</Link>
              <Link to="/CustomerReviews" className="block px-4 py-2  hover:bg-[#ada9a9]">customer reviews</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">refer a friend</Link>
              <Link to="/howItWorks" className="block px-4 py-2   hover:bg-[#ada9a9]">how it works</Link>
              
              <Link to="/Notification" className="block px-4 py-2   hover:bg-[#ada9a9]">Notification</Link>
              
               </div>
          )}
            </h1>
            <Link to='/Store' className='hover:text-[#ffd500]'>store</Link>
            <Link to='/ContactUs'  className='hover:text-[#ffd500]'>contact us</Link>
        </div>
        <div className='flex items-center space-x-4 md:space-x-2 font-semibold'>
            <div  onClick={profileDropdown} className='flex relative group text-[26px] lg:text-[20px] md:text-[15px] cursor-pointer'><MdOutlinePerson/> <IoMdArrowDropdown/>
            
         
            {isProfileDropdown && (
            <div className="absolute mt-10 md:mt-7 left-[-20px] md:left-[-30px] space-y-2 sm:space-y-0 bg-[#FFFFFF] border border-t-[yellow] border-t-[2px]  rounded-lg z-10 text-[15px] lg:text-[13px] md:text-[11px] sm:text-[6px] w-[230px] lg:w-[200px] md:w-[170px] sm:w-[110px]">
              <Link to="/myprofile" className="block px-4 py-2  hover:bg-[#ada9a9]">my profile</Link>
              <Link to="/" className="block px-4 py-2  hover:bg-[#ada9a9]">my team</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">my property details</Link>
              <Link to="/FAQ" className="block px-4 py-2   hover:bg-[#ada9a9]">faqs</Link>
              <Link to="/terms&condition" className="block px-4 py-2   hover:bg-[#ada9a9]">terms & condition</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">settings</Link>
              <Link to="/" onClick={()=>setToken(null)} className="block px-4 py-2   hover:bg-[#ada9a9]">Logout</Link>
               </div>
          )}
            </div>
            
            
            
            {subscribe? <button className='bg-[#D93535] text-[white] rounded-[85px] text-[16px] lg:text-[14px] md:text-[11px] sm:text-[6px] p-[8.33px_16.5px_8.33px_16.5px] sm:p-[4.33px_6.5px_4.33px_6.5px]' onClick={()=>handelSubscribe()}>SUBSCRIBE</button> 
            :<button className='bg-[#C8C8C8] rounded-[85px] text-[16px] lg:text-[14px] md:text-[11px] sm:text-[6px] p-[8.33px_16.5px_8.33px_16.5px] sm:p-[4.33px_6.5px_4.33px_6.5px]'
            //  onClick={()=>handelSubscribe()}
             >SUBSCRIBE</button>

            }
            <div onClick={toggleMenu} className='hidden  sm:flex pl-3' ><GiHamburgerMenu/></div>
        </div>

        
    </div>
    {isMenuOpen? <div className='sm-menu transform uppercase transition-transform ease-in duration-500 hidden sm:flex justify-around mb-3 sm:space-x- text-[15px] lg:text-[13px] md:text-[11px] sm:text-[6px] esm:text-[5px] font-semibold'>
            <Link to='/home' className='hover:text-[#ffd500]'>Home</Link>
            <Link to='/AboutUs' className='hover:text-[#ffd500]'>About Us</Link>
            <h1  onClick={DesignIdeasDropdown} className="relative group " ><button className='flex items-center hover:text-[#ffd500] '>DESIGN IDEAS <IoMdArrowDropdown/></button>
            {isDesignDropdownOpen && (
            <div className=" absolute mt-2 space-y-2 sm:space-y-0 bg-[#FFFFFF] border border-t-[yellow] border-t-[2px]  rounded-lg z-10 text-[15px] lg:text-[13px] md:text-[11px] sm:text-[6px] w-[230px] lg:w-[200px] md:w-[170px] sm:w-[110px]">
            
              <Link to="/Designideas" className="block px-4 py-2  hover:bg-[#ada9a9]">MODULAR INTERIOR</Link>
              <Link to="/" className="block px-4 py-2  hover:bg-[#ada9a9]">HOME INTERIOR</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">RENOVATION</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">COMMERCIAL INTERIOR</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">BALCONI INTERIOR</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">OFFICE SPACE</Link>
             
               </div>
          )}
            </h1>
            <h1 onClick={MoreDropdown} className="relative group " ><button className='flex items-center hover:text-[#ffd500]'>MORE <IoMdArrowDropdown/></button>
            {isMoreDropdownOpen && (
            <div className="absolute mt-2 space-y-2 sm:space-y-0 bg-[#FFFFFF]  border border-t-[yellow] border-t-[2px]  rounded-lg z-10 text-[15px] lg:text-[13px] md:text-[11px] sm:text-[6px] w-[230px] lg:w-[200px] md:w-[170px] sm:w-[110px]">
              <Link to="/" className="block px-4 py-2 hover:bg-[#ada9a9]">career</Link>
              <Link to="/CustomerReviews" className="block px-4 py-2  hover:bg-[#ada9a9]">customer reviews</Link>
              <Link to="/" className="block px-4 py-2   hover:bg-[#ada9a9]">refer a friend</Link>
              <Link to="/howItWorks" className="block px-4 py-2   hover:bg-[#ada9a9]">how it works</Link>
              
              <Link to="/Notification" className="block px-4 py-2   hover:bg-[#ada9a9]">Notification</Link>
              
               </div>
          )}
            </h1>
            <Link to='/Store' className='hover:text-[#ffd500]'>store</Link>
            <Link to='/ContactUs' className='hover:text-[#ffd500]'>contact us</Link>
        </div>:null}
   
    </div>
  )
}

export default Navbar