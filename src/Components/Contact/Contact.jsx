import React from 'react'
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {

    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setResult('')
        const formData = new FormData(event.target);
        formData.append("access_key", "fdf18401-ce7d-4be5-9a8f-9a0b3e87a956");

        try{
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });

            const data = await response.json();

            if (data.success){
                setResult(data.body?.message || 'Form submited successfully!');
                // alert('Message sent');
                toast.success('Message sent')
                event.target.reset(); 
                
            }
            else{
                setResult(data.body?.message || 'An error occured. Please try again later');
            }
        }
        catch(error){
            setResult('Network error'+ error.message);
        }
        finally{
            setIsLoading(false);
        }

        

       
    };


  return (
    <div id='contact' className='flex flex-col items-center justify-center sm:gap-[80px] my-[80px] xl:mx-[170px] mx-5 md:mx-[170px] max-md:gap-[20px] max-md:my-[40px]  max-md:items-start max-md:gap-[20px] '>
        <div className='relative '>
            <h1 className='py-0 px-[30px] text-[60px] font-[600] max-md:p-0 max-md:text-[40px] max-md:font-[600] '>Get in touch</h1>
        </div>
        <div className='flex xl:gap-[150px] md:gap-[40px] max-md:flex-col max-md:gap-[70px]'>
            <div className='flex flex-col gap-[30px] '>
                <h1 className='text-[60px] font-[700] bg-gradient-to-r from-[#DF8908] to-[#8901c8] bg-clip-text text-transparent max-md:text-[44px] '>Let's talk</h1>
                <p className='xl:max-w-[550px] md:max-w-[400px] text-[#D8D8D8] text-[18px] leading-[35px] max-md:text-[18px] '>Have a project idea or a question? I’m always open to learning, collaborating, and working on exciting projects.</p>
                <div className='flex flex-col gap-[30px] text-[#D8D8D8] text-[18px] '>
                    <div className='flex items-center gap-[20px] '> 
                        <img src={mail_icon} alt="" width={25}/> <p>dilmindineth988@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-[20px] '>
                        <img src={call_icon} alt="" width={25}/> <p>+94 760586108</p>
                    </div>
                    <div className='flex items-center gap-[19.5px] '>
                        <img src={location_icon} alt="" width={25} className='h-[27px]'/> <p>Horana,Sri Lanka</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='flex flex-col items-start gap-[25px] md:min-w-[400px] '>
                <label htmlFor="" className='text-[#D8D8D8] text-[20px] font-[500] max-md:text-[18px] '>Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' className='border-0 xl:w-[700px]  md:w-[100%] h-[70px]  pl-[20px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] font-outfit text-[18px] mt-[-15px] max-md:w-[100%] max-md:text-[16px] '/>
                <label htmlFor="" className='text-[#D8D8D8] text-[20px] font-[500] max-md:text-[18px] '>Your Email</label>
                <input type="email" placeholder='Enter your email' name='eamil' className='border-0 xl:w-[700px] md:w-[100%]  h-[70px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] font-outfit text-[18px] mt-[-15px] max-md:w-[100%]  max-md:text-[16px]'/>
                <label htmlFor="" className='text-[#D8D8D8] text-[20px] font-[500] max-md:text-[18px] '>Write Your Message Here</label>
                <textarea name="message" rows="6" placeholder='Enter your message'className='xl:w-[700px] md:w-[100%] border-0 p-[20px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] font-outfit text-[18px] mb-[10px] mt-[-15px] max-md:w-[100%] max-md:text-[16px] '></textarea>
                <button type='submit' className='border-0 text-white rounded-[50px] bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-[17px] py-[17px] px-[50px] mb-[50px] cursor-pointer transition-all hover:scale-105 duration-300 max-md:py-[12px] max-md:px-[30px] max-md:rounded-[40px] '>Submit now</button>
                <Toaster position="top-center" toastOptions={{duration: 3000, style: {padding: '16px', height: '60px'}}}/>
            </form>
        </div>
    </div>
  )
}

export default Contact