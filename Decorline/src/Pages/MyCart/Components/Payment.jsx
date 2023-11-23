import React from 'react'
import { FaRegCircleDot } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import paypal from '../../../assets/PaymentMethod/PayPal.png'
import gpay from '../../../assets/PaymentMethod/GooglePay.png'
import amazon from '../../../assets/PaymentMethod/Amazon.png'
import applepay from '../../../assets/PaymentMethod/ApplePay.png'
import mastercard from '../../../assets/PaymentMethod/MasterCard.png'
import visa from '../../../assets/PaymentMethod/Visa.png'
import AE from '../../../assets/PaymentMethod/AmericanExpress.png'

const Payment = (props) => {
  return (
    <div className='w-[100%] px-[5%] lg:px-[1%] md:px-0'>

<div className='px-[20%] lg:px-[10%] mb-14'>
            <div className='flex justify-between z-40'>
            <FaCircle className='text-[#909090]' onClick={()=>props.setRight("address")} />
            <FaRegCircleDot className='text-[#16315E]'/>
            <FaRegCircle className='text-[#C4C4C4]'/>
            </div>
            <div className='flex'>
            <hr className='relative top-[-9.5px] z-[-100] w-[50%] border-[1px] border-[#0000008A]'/>
            <hr className='relative top-[-9.5px] z-[-100] w-[48%] border-[1px] border-[##0000001F]'/>
          
            </div> <div className='flex justify-between md:text-[13px] esm:text-[10px]'>
                <h1 onClick={()=>props.setRight("address")}>Shipping address</h1>
                <h1 className='ml-[-20px]'>Billing</h1>
                <h1>Confirmation</h1>

            </div>
        </div>
       

        <div className='my-8 py-[5%] px-[5%] lg:px-[3%] mx-[15%] lg:mx-[5%]  text-[18px] md:text-[15px] sm:text-[12px] esm:text-[10px] font-poppins bg-[#DDE8EF] rounded-[15px]'>
       <h1 className='font-poppins text-[24px]'>Payment method</h1>
        <div className='flex'>
            <img src={paypal} alt="" className='sm:w-[40px]'/>
            <img src={applepay} alt="" className='sm:w-[40px]'/>
            <img src={amazon} alt="" className='sm:w-[40px]'/>
            <img src={gpay} alt=""className='sm:w-[40px]' />

        </div>
        <div className='mt-8'>
        <form className='space-y-4'>
        <div className='space-y-4'> 
  <input type="radio" id="Debit card" name="card" value="Debit card" style={{boxShadow: '0px 6.500000476837158px 5.200000286102295px 0px #00000040'}}/>
  <label for="Debit card" className='ml-2'>Debit card</label><br/>
  <div className='flex items-center space-x-2'>
  <input type="radio" id="Credit card" name="card" value="Credit card" style={{boxShadow: '0px 6.500000476837158px 5.200000286102295px 0px #00000040'}}/>
  <label for="Credit card">Credit card</label>
  <img src={visa} alt=""  className='sm:w-[25px]'/>
  <img src={mastercard} alt="" className='sm:w-[25px]'/>
  <img src={AE} alt="" className='sm:w-[25px]'/>
</div>
<br />
<div className='space-y-3'>
    <label htmlFor="CardHolderName">Card Holder Name</label>
    <br />
    <input type="text" placeholder="" id='CardHolderName' className='rounded-[10px] border-[1.3px] border-[black] w-[50%] lg:w-[70%] sm:w-[100%] h-[54px] md:h-[45px] sm:h-[35px]' style={{boxShadow: '0px 6.500000476837158px 5.200000286102295px 0px #00000040'
}} required/>
</div>
<div className='space-y-3'>
    <label htmlFor="CardNumber">Card Number</label> <br />
    <input type="number" name="" id="CardNumber"  className='rounded-[10px] border-[1.3px] border-[black] w-[50%]  lg:w-[70%] sm:w-[100%] h-[54px] md:h-[45px]  sm:h-[35px]' style={{boxShadow: '0px 6.500000476837158px 5.200000286102295px 0px #00000040'}} required />
</div>
<div className='flex'>
    <div className='space-y-3'>
<label htmlFor="expiry">Expiration Date</label> <br />
    <input type="text" name="" id="expiry"  className='rounded-[10px] border-[1.3px] border-[black] w-[80%] h-[54px] md:h-[45px]  sm:h-[35px]' style={{boxShadow: '0px 6.500000476837158px 5.200000286102295px 0px #00000040'}} required />
    </div>
    <div className='space-y-3'>
    <label htmlFor="CV">CV</label> <br />
    <input type="number" name="" id="CV"  className='rounded-[10px] border-[1.3px] border-[black] w-[80%] h-[54px] md:h-[45px]  sm:h-[35px]' style={{boxShadow: '0px 6.500000476837158px 5.200000286102295px 0px #00000040'}} required />
    </div>
</div>

  </div>
  <div className='flex space-x-6 pt-8'>
  <button className='bg-[#FFDA18] p-[10px]  rounded-[8px] '>Confirm payment</button>
  <button className='bg-[#FFFFFF] p-[10px] border-[1px] border-[#000000] rounded-[8px]'>Back</button>
  </div>

  
  
</form>
</div>

    </div>

    </div>
  )
}

export default Payment