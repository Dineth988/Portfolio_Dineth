import React, { useState } from 'react'
import mywork_data from '../../assets/mywork_data'
import { motion, scale } from 'framer-motion'
import portfolioImg from '../../assets/portfolio.png'
import bloggieImg from '../../assets/bloggieImg.png'
import hotelManagementImg from '../../assets/hotelManagement.png'
import edushareImg from '../../assets/eduShare.png'
import smartWasteBinSys from '../../assets/smartWasteBin.png'
import './ProjectCarousel.css'
 
import { div } from 'framer-motion/client'

const ProjectCarousel = () => {
    const [positionIndex, setPositionIndex] = useState([0,1,2,3,4])

    const handleNext = () =>{
        setPositionIndex((previousIndexes) => {
            const updateIndexes = previousIndexes.map((prevIndex) => (prevIndex + 1) % 5)
            return updateIndexes
        })
    }

    const myproject_data = [
        {
            image: portfolioImg,
            title: 'Portfolio Using React.js',
            tech: 'React.js, Tailwind CSS, Framer',
            desc: 'A personal portfolio website designed and developed to showcase my projects, technical skills, and experience. Built with a modern React architecture, smooth animations using Framer Motion, and a fully responsive UI styled with Tailwind CSS.'
        },
        {
            image: bloggieImg,
            title: 'Bloggie Blog Website',
            tech: 'Next.js, Tailwind CSS, Nest.js, JWT Authentication',
            desc: 'Full-stack blog platform featuring secure user authentication, role-based access, and dynamic blog management. The application supports creating, reading, updating, and deleting blog posts, with a clean UI and a scalable backend built using Nest.js.'
        },
         {
            image: hotelManagementImg,
            title: 'Hotel Management Website',
            tech: 'React.js, Spring Boot, Java',
            desc: 'Academic group project developed to simulate a real-world hotel management system. The platform includes room management, reservations, and guest handling features, built with a React frontend and a Spring Boot backend following a service-oriented architecture.'
        },
         {
            image: edushareImg,
            title: 'Resource Sharing Platform',
            tech: 'Vue.js, Express.js, Fetch API',
            desc: 'Group project focused on building a web-based platform for sharing educational resources. The system allows users to upload, search, and manage learning materials, featuring a dynamic Vue.js frontend and a RESTful Express.js backend.'
        },
        {
            image: smartWasteBinSys,
            title: 'Smart Waste Bin & Mobile App',
            tech: ' Google Colab, Flutter, Pandas',
            desc: 'Academic group project combining IoT, mobile development, and machine learning. The system classifies waste using computer vision with a fine-tuned MobileNetV2 model and integrates a Flutter mobile app with ESP32-CAM hardware for real-time waste monitoring.'
        },
    ]

    const positions = [
        'center',
        'left1',
        'left',
        'right',
        'right1'
    ]

    const imageVariants = {
        center: {x: '0%', scale: 1.1, zIndex: 5},
        left1: {x: '-50%', scale: 0.75, zIndex: 2},
        left: {x: '-90%', scale: 0.55, zIndex: 1},
        right: {x: '90%', scale: 0.55, zIndex: 1},
        right1: {x: '50%', scale: 0.75, zIndex: 2},
    }
  return (
    <>
    <div id='work' className='flex flex-col items-center justify-center w-full my-[80px] max-md:my-[50px] max-md:hidden  '>
        <div className='relative'>
            <h1 className='py-0 px-[30px] text-[60px] font-[600] mb-[100px] '>My Latest Projects</h1>
        </div>
        <div className='relative flex items-center flex-col justify-center w-[75.3%] mt-[-135px]  max-md:hidden'>
            {myproject_data.map((project,index) => (
                <motion.div key={index} className={'rounded-2xl absolute rounded-2xl overflow-hidden cursor-pointer shadow-2xl '}  animate={imageVariants[positions[positionIndex[index]]]}  transition={{duration: 0.5}} style={{width: "45%", position: 'absolute',}} >
                    <img src={project.image} alt="" className='w-full h-[400px] object-cover '/>
                    {positions[positionIndex[index]] === 'center' ? (
                        <motion.div initial={{opacity: 0}} whileHover={{opacity:1}} transition={{duration: 0.3}} className="absolute inset-0 bg-black/70 flex flex-col  xl:pt-40 xl:pl-10 xl:pr-10 md:pt-20 md:pl-3 md:pr-3">
                        <h2 className='xl:text-3xl md:text-[22px] font-bold mb-2'>{project.title}</h2>
                        <p className='xl:text-md md:text-[14px] text-gray-300 mb-4 '>{project.tech}</p>
                        <p className='xl:text-base md:text-[16px] text-white text-2xl '>{project.desc}</p>
                    </motion.div>) : null
                    } 
                    
                </motion.div>
            ))}
            <button className='text-white mt-[600px] py-[17px] px-[50px] rounded-[50px] border-[2px] border-white cursor-pointer hover:border-[#B415FF] ' onClick={handleNext}>Next</button>
        </div>
    </div>
     <div className="outerProjectsDiv md:hidden">
      {/* Title */}
      <div className="projectsTitle">
        <h1>My Latest Projects</h1>
      </div>

      {/* Horizontal Scroll */}
      <div className="projectsDiv">
        {myproject_data.map((project, index) => (
          <div key={index} className="projectDiv">
            <img
              src={project.image}
              alt={project.title}
              className="projectImage"
            />

            <h2>{project.title}</h2>
            <p className="tech">{project.tech}</p>
            <p className="desc">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
    
  </>)
}

export default ProjectCarousel