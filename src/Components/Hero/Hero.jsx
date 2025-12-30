import React from 'react'
import resume from '../../assets/Dineth-Wickramasinghe-CV.pdf'
const Hero = () => {
  return (
    <div id='home' className='flex items-center flex-col gap-[20px]'>
        <img src="https://media.licdn.com/dms/image/v2/D5603AQHwuSnc1z7TcQ/profile-displayphoto-crop_800_800/B56ZiDDq4hHkAU-/0/1754545437299?e=1767830400&v=beta&t=a-y3bnGUIu5nHxrsYMJNNtf-r0_XF4O13RItGc_l8I0" alt="" className='mt-[40px] rounded-full max-md:mt-[120px] max-md:w-[240px]' width={240}/>
        <h1 className='text-[60px] font-semibold text-center xl:w-[70%] leading-18  max-md:mt-[50px] max-md:w-[90%] max-md:text-[40px]'><span className='bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent'>I'm Dineth Wickramasinghe,</span> undergraduate computing student based in Sri Lanka.</h1>
        <div className='flex gap-3 '>
          <a href="https://www.linkedin.com/in/dinethwickramasinghe"><img src="https://img.icons8.com/?size=100&id=qNUNvR9aEWql&format=png&color=000000" alt="" className='w-15.5 h-15.5 cursor-pointer max-md:w-12.5 max-md:h-12.5'/></a>
          <a href="https://github.com/Dineth988"><img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="" className='w-15 h-15 cursor-pointer max-md:w-12 max-md:h-12'/></a>
          <a href="https://www.facebook.com/dilmin.dineth"> <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" className='w-15 h-15 cursor-pointer max-md:w-12 max-md:h-12'/></a>
        </div>
        <p className='w-[48%] text-center text-[20px] leading-[28px] mt-4 max-md:w-[60%] max-md:text-[16px] max-md:leading-[24px] max-md:my-[10px] max-md:mx-0 '>Passionate software developer building web and mobile apps with React, Tailwind CSS, and Java. Always eager to learn and create user-friendly solutions.</p>
        <div className='flex items-center gap-[25px] text-[17px] font-[500] mb-[20px] mt-4 max-md:text-[14px] max-md:font-[500] max-md:mb-[50px] '>
            <a href={resume} ><div className='py-[17px] px-[50px] rounded-[50px] border-[2px] border-white cursor-pointer hover:border-[#B415FF] max-md:py-[12px] max-md:px-[30px] max-md:rounded-[40px] '>My Resume</div></a>
        </div>
    </div>
  )
}

export default Hero