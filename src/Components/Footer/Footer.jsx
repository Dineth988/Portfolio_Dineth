import React from 'react'
import dw_logo from '../../assets/dw_logo.png'

function Footer() {
  return (
    <div className='flex flex-col my-[50px] xl:mx-[170px] md:mx-[30px] gap-[30px] max-md:my-[50px] max-md:mx-[70px]'>
        <div className='flex justify-between max-md:flex-col max-md:gap-[50px]'>
            <div>
                <img src={dw_logo} alt="" className='w-30'/> 
                <p className='text-[18px] max-md:text-[16px]'>Have questions, feedback, or a project in mind? I’d love to hear from you! Whether you're looking for expert guidance in mobile app development, enterprise solutions, or software architecture, I'm here to help</p>           
            </div>
        </div>
        <hr/>
        <div className='flex justify-between text-[18px] mb-6 max-md:text-[16px] max-md:flex-col max-md:gap-3'>
            <p>© 2025 Dineth Wickramasinghe. All rights reserved.</p>
            <div className='flex gap-[7px] '>

                <a href=""> <img src="https://img.icons8.com/?size=100&id=qNUNvR9aEWql&format=png&color=000000" alt="" className='w-9 h-9.5 cursor-pointer '/></a>
                <a href=""><img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="" className='w-9 h-9 cursor-pointer'/></a>
                <a href=""><img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" className='w-9 h-9 cursor-pointer'/></a>
               
            </div>
        </div>
    </div>
  )
}

export default Footer