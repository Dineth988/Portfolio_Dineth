import React from 'react'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='work' className='flex flex-col items-center justify-center gap-[80px] my-[80px] mx-[170px] mb-[80px]'>
        <div className='relative'>
            <h1 className='py-0 px-[30px] text-[60px] font-[600] '>My Latest Projects</h1>
        </div>
        <div className='grid grid-cols-3 gap-[40px] mb-[80px] '>
            {mywork_data.map((work,index) => {
                return <img key={index} src={work.w_img} alt="" className='box-border w-[419px] h-[280px] transition-all duration-300 cursor-pointer hover:scale-110 hover:border-4 hover:border-[#ff00ff] rounded-[10px]'/>
            })}
        </div>
       
    </div>
  )
}

export default MyWork