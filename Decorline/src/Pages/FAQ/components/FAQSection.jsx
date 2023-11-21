import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
const FAQSection = () => {
    const [question1DD,setQuestion1DD]=useState(false);
    const [question2DD,setQuestion2DD]=useState(false);
    const [question3DD,setQuestion3DD]=useState(false);
    const [question4DD,setQuestion4DD]=useState(false);
    const [question5DD,setQuestion5DD]=useState(false);

    const question1=()=>{
        setQuestion1DD(!question1DD)
    }

    const question2=()=>{
        setQuestion2DD(!question2DD)
    }


    const question3=()=>{
        setQuestion3DD(!question3DD)
    }


    const question4=()=>{
        setQuestion4DD(!question4DD)
    }


    const question5=()=>{
        setQuestion5DD(!question5DD)
    }


  

  return (
    <div className='border-t-[5px] border-[#C6C6C6]'>

<div className='flex justify-center my-8'>
      <h1 className='bg-[#023020] text-[white] w-[640px] md:w-[400px] sm:w-[250px]  py-[25px] md:py-[15px] text-center text-[45px] md:text-[30px] sm:text-[18px] font-Roboto font-bold'>Frequently Asked Questions</h1>
      </div>

      <div className='faq-dd px-[9%] lg:px-[5%] py-5 font-Roboto space-y-8'>

        <div className='dd-1 border-[1px] border-[#D3D3D3] rounded-[8px] w-[570px] md:w-[450px] sm:w-[250px] shadow-xl'>
            <div className='border-b-[1px] border-[#D3D3D3] flex justify-between items-center  font-bold text-[24px] md:text-[17px] sm:text-[12px] p-[30px] sm:p-[15px]' onClick={question1}><h1>How to create an account?</h1><IoIosArrowDown className={`rotate ${question1DD ? 'rotate-180' : 'rotate-0'}`} /></div>
           { question1DD? <div className='p-[30px] sm:p-[15px] text-[18px] sm:text-[10px] font-medium space-y-6 sm:space-y-3'> <p>1.Go to our website and click on the "Create an Account" button. <br />
2.Enter your email address and password. <br />
3.Select your country and time zone. <br />
4.Read and agree to our terms of service. <br />
5.Click on the "Create Account" button.</p>
<button className='bg-[#FF8A00] p-[8px_18px] sm:p-[6px_10px] text-[white] text-[18px] sm:text-[10px]'>Learn more</button>
</div>
:null}
                
        </div>



        <div className='dd-2 border-[1px] border-[#D3D3D3] rounded-[8px] w-[625px] md:w-[490px] sm:w-[275px] esm:w-[100%] shadow-xl'>
            <div className='border-b-[1px] border-[#D3D3D3] flex justify-between items-center  font-bold text-[24px] md:text-[17px] sm:text-[12px] p-[30px] sm:p-[15px]' onClick={question2}><h1>How to add a payment method by this app</h1><IoIosArrowDown className={`rotate ${question2DD ? 'rotate-180' : 'rotate-0'}`} /></div>
           { question2DD? <div className='p-[30px] sm:p-[15px] text-[18px] sm:text-[10px] font-medium space-y-6 sm:space-y-3'> 
           <p>1.Open the app and go to the "Settings" page. <br />
2.Tap on the "Payment Methods" tab. <br />
3.Tap on the "Add Payment Method" button. <br />
4.Select the type of payment method you want to add. <br />
5.Enter your payment information. <br />
6.Tap on the "Save" button.</p>
<button className='bg-[#FF8A00] p-[8px_18px] sm:p-[6px_10px] text-[white] text-[18px] sm:text-[10px]'>Learn more</button>
</div>
:null}
                
        </div>

        <div className='dd-3 border-[1px] border-[#D3D3D3] rounded-[8px]  w-[625px] md:w-[490px] sm:w-[275px] esm:w-[100%] shadow-xl'>
            <div className='border-b-[1px] border-[#D3D3D3] flex justify-between items-center  font-bold text-[24px] md:text-[17px] sm:text-[12px] p-[30px] sm:p-[15px]' onClick={question3}><h1>How to book an appoinment?</h1><IoIosArrowDown className={`rotate ${question3DD ? 'rotate-180' : 'rotate-0'}`} /></div>
           { question3DD? <div className='p-[30px] sm:p-[15px] text-[18px] sm:text-[10px] font-medium space-y-6 sm:space-y-3'>
            <p>1.Visit our website and click on the "Book an Appointment" button. <br />
2.Fill out the appointment form with your contact information, project details, and preferred appointment date and time. <br />
3.Review your appointment details and click on the "Submit" button. <br />
4.We will send you a confirmation email with your appointment details.</p>
<button className='bg-[#FF8A00] p-[8px_18px] sm:p-[6px_10px] text-[white] text-[18px] sm:text-[10px]'>Learn more</button>
</div>
:null}
                
        </div>

        <div className='dd-4 border-[1px] border-[#D3D3D3] rounded-[8px] w-[816px] md:w-[550px] sm:w-[290px] esm:w-[100%] shadow-xl'>
            <div className='border-b-[1px] border-[#D3D3D3] flex justify-between items-center  font-bold text-[24px] md:text-[17px] sm:text-[12px] p-[30px] sm:p-[15px]' onClick={question4}><h1>Whom do I contact if I need a service visit from HomeLane?</h1><IoIosArrowDown className={`rotate ${question4DD ? 'rotate-180' : 'rotate-0'}`} /></div>
           { question4DD? <div className='p-[30px] sm:p-[15px] text-[18px] sm:text-[10px] font-medium space-y-6 sm:space-y-3'> <p>1.Go to our website and click on the "Create an Account" button. <br />
2.Enter your email address and password. <br />
3.Select your country and time zone. <br />
4.Read and agree to our terms of service. <br />
5.Click on the "Create Account" button.</p>
<button className='bg-[#FF8A00] p-[8px_18px] sm:p-[6px_10px] text-[white] text-[18px] sm:text-[10px]'>Learn more</button>
</div>
:null}
                
        </div>

        <div className='dd-5 border-[1px] border-[#D3D3D3] rounded-[8px] w-[816px] md:w-[550px] sm:w-[290px] esm:w-[100%] shadow-xl'>
            <div className='border-b-[1px] border-[#D3D3D3] flex justify-between items-center  font-bold text-[24px] md:text-[17px] sm:text-[12px] p-[30px] sm:p-[15px]' onClick={question5}><h1>Why are the payment terms so strict?</h1><IoIosArrowDown className={`rotate ${question5DD ? 'rotate-180' : 'rotate-0'}`} /></div>
           { question5DD? <div className='p-[30px] sm:p-[15px] text-[18px] sm:text-[10px] font-medium space-y-6 sm:space-y-3'> <p>1.Go to our website and click on the "Create an Account" button. <br />
2.Enter your email address and password. <br />
3.Select your country and time zone. <br />
4.Read and agree to our terms of service. <br />
5.Click on the "Create Account" button.</p>
<button className='bg-[#FF8A00] p-[8px_18px] sm:p-[6px_10px] text-[white] text-[18px] sm:text-[10px]'>Learn more</button>
</div>
:null}
                
        </div>

      </div>
    </div>
  )
}

export default FAQSection