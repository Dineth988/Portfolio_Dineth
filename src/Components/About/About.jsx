import React from 'react'
import postman_icon from '../../assets/icons8-postman-api-64.png'

const About = () => {
  return (
    <div id='about' className='flex flex-col items-center content-center gap-[80px] my-20 xl:mx-[170px] md:mx-[30px] max-md:gap-[80px] max-md:my-[50px] max-md:mx-[70px] max-md:items-start '>
        <div className=''>
            <h1 className='py-[0px] px-[30px] text-[60px] font-[600] max-md:text-[40px] max-md:p-0 '>About Me</h1>
            
        </div>
        <div className='flex xl:gap-20 md:gap-10 max-md:flex-col'>
            <div className='max-md:hidden'>
                <img src="https://media.licdn.com/dms/image/v2/D5603AQHwuSnc1z7TcQ/profile-displayphoto-crop_800_800/B56ZiDDq4hHkAU-/0/1754545437299?e=1767830400&v=beta&t=a-y3bnGUIu5nHxrsYMJNNtf-r0_XF4O13RItGc_l8I0" className='rounded-[20px] xl:h-120 xl:w-370 md:h-80 md:w-300 object-cover' alt=""/>
            </div>
            <div className='flex flex-col gap-13'>
                <div className='flex flex-col gap-7 text-[20px] font-[500] '>
                    <p className='max-md:text-[16px] max-md:leading-[24px]'>I’m a passionate software developer and a student at NIBM Colombo 07, with a strong interest in building clean, user-friendly, and scalable applications. I enjoy working across both frontend and backend technologies, turning ideas into functional products while focusing on performance, usability, and maintainable code.</p>
                    <p className='max-md:text-[16px] max-md:leading-[24px]'>Alongside web development, I have a strong interest in Machine Learning and have gained hands-on experience working with ML concepts, data preprocessing, and model implementation. I have worked with technologies such as JavaScript, React, Tailwind CSS, NestJS, Spring Boot, MongoDB, and relational databases, and I’m continuously expanding my skills in both software engineering and machine learning to build intelligent, real-world solutions.</p>
                </div>
                <div className='flex flex-col gap-5  md:item-ce '>
                    <div className='flex gap-[50px] items-center  transition-all duration-300 max-md:gap-[10px] max-md:items-start max-md:flex-col'><p className='min-w-[240px] text-[20px] font-[500] max-md:text-[18px]'>Web Devolopment</p><hr className='w-[70%] outline-0 border-0 h-2 rounded-[50px] bg-gradient-to-r from-[#DA7C25] to-[#B923E1] max-md:h-[6px]' /></div>
                    <div className='flex gap-[50px] items-center transition-all duration-300 max-md:gap-[10px] max-md:items-center max-md:items-start max-md:flex-col'><p className='min-w-[240px] text-[20px] font-[500] max-md:text-[18px]'>Mobile Devolopment</p><hr className='w-[20%] outline-0 border-0 h-2 rounded-[50px] bg-gradient-to-r from-[#DA7C25] to-[#B923E1] max-md:h-[6px]' /></div>
                    <div className='flex gap-[50px] items-center transition-all duration-300 max-md:gap-[10px] max-md:items-center max-md:items-start max-md:flex-col'><p className='min-w-[240px] text-[20px] font-[500] max-md:text-[18px]'>Machine Learning</p><hr className='w-[35%] outline-0 border-0 h-2 rounded-[50px] bg-gradient-to-r from-[#DA7C25] to-[#B923E1] max-md:h-[6px]' /></div>
                </div>
            </div>
        </div>
        <div className='flex w-[100%] justify-around mb-5  max-md:flex-col '>
            <div className='flex flex-col items-center gap-[20px] transition-all duration-500 hover:scale-110 py-5 max-md:gap-[10px] max-md:py-1'> 
                <div className='flex gap-3'>
                    <img src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" alt="" className='xl:w-12 md:w-[36px] md:h-[36px] max-md:w-8 max-md:h-8'/>
                    <img src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" alt="" className='xl:w-12 md:w-[36px] md:h-[36px] max-md:w-8 max-md:h-8'/>
                    <img src="https://img.icons8.com/?size=100&id=90519&format=png&color=000000" alt="" className='xl:w-12 md:w-[36px] md:h-[36px] max-md:w-8 max-md:h-8'/>
                    <img src="https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000" alt="" className='xl:w-12 md:w-[36px] md:h-[36px] max-md:w-8 max-md:h-8'/>
                    <img src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000" alt="" className='xl:w-12 md:w-[36px] md:h-[36px] max-md:w-8 max-md:h-8'/>
                </div>
                <p className='text-[20px] font-[500] max-md:text-center max-md:text-[16px] '>Frameworks</p>
            </div>
            <hr className='h-20 w-[2px] bg-white border-0 mt-[30px] max-md:w-[80%] max-md:h-[2px] max-md:mx-auto' />
            <div className='flex flex-col items-center gap-[20px] transition-all duration-500 hover:scale-110 py-5  max-md:gap-[10px] max-md:py-1 max-md:mt-7'>
                <div className='flex gap-3'>
                    <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="" className='xl:w-12 md:w-[36px] md:h-[36px] max-md:w-8 max-md:h-8'/>
                    <img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="" className='xl:w-12 md:w-[36px] md:h-[36px] max-md:w-8 max-md:h-8'/>
                    <img src="https://img.icons8.com/?size=100&id=fYgHk9PCZQly&format=png&color=000000" alt="" className='xl:w-12 md:w-[36px] md:h-[36px] max-md:w-8 max-md:h-8'/>
                    <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="" className='xl:w-12 md:w-[36px] md:h-[36px] max-md:w-8 max-md:h-8'/>
                </div>
                <p className='text-[20px] font-[500] max-md:text-center max-md:text-[16px]'>Programming & Web Languages</p>
            </div>
            <hr className='h-20 w-[2.2px] bg-white border-0 mt-[30px] max-md:w-[80%] max-md:h-[2px] max-md:mx-auto' />
            <div className='flex flex-col items-center gap-[20px] transition-all duration-500 hover:scale-110 py-5  max-md:gap-[10px] max-md:py-1  max-md:mt-7'>
                <div className='flex gap-3'>
                    <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="" className='xl:w-12 md:w-[36px] md:h-[36px] max-md:w-8 max-md:h-8'/>
                    <img src="https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000" alt="" className='xl:w-12 md:w-[36px] md:h-[36px] max-md:w-8 max-md:h-8'/>
                    <img src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" alt="" className='xl:w-12 md:w-[36px] md:h-[36px] max-md:w-8 max-md:h-8'/>
                    <img src={postman_icon} alt="" className='xl:w-12 md:w-[36px] md:h-[36px] max-md:w-8 max-md:h-8'/>
                </div>
                <p className='text-[20px] font-[500] max-md:text-center max-md:text-[16px]'>Tools & Technologies</p>
            </div>
        </div>
    </div>
  )
}

export default About