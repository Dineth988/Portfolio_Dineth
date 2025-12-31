import React from 'react'
import Services_Data from '../../assets/services_data'
import './MyServices.css'

const MyServices = () => {
  return (
    <div id="offers" className="services flex flex-col items-center justify-center mx-5 gap-[80px] xl:mx-[170px] md:mx-[30px]">
      <div className="servicesTitle relative">
        <h1 className="py-0 px-[30px] text-[60px] font-[600]">
          What I Offer
        </h1>
      </div>

      <div className="servicesOuterDiv flex flex-wrap justify-center gap-[40px] mb-[30px] sm:mb-[20px]">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className="
              serviceFormat
              flex flex-col justify-center gap-[20px]
              p-[50px]
              rounded-[10px]
              border-[2px] border-white
              transition-all duration-300
              hover:border-[#ff00ff]
              hover:bg-gradient-to-r from-[#3f0028] to-[#582300]
              hover:scale-105
              basis-[calc(50%-20px)]
            "
          >
            <h3 className="text-[24px] font-[600]">{service.s_no}</h3>
            <h2 className="text-[30px] font-[800] bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">
              {service.s_name}
            </h2>
            <p className="text-[#d4d4d4] text-[20px] leading-[40px]">
              {service.s_desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyServices
