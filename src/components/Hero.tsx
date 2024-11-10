import React from 'react'
import Navbar from './Navbar'
import Link from "next/link"

const Hero = () => {
  return (<div className="bg-gradient-to-b from-black to-gray-900 " >
    <div id="hero" className="min-h-screen  bg-no-repeat bg-[url(/my.png)] bg-cover"
      style={{ backgroundSize: "35%", backgroundPosition: "left 800px top 100px" }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
      <div className="flex items-center text-[#ff7f50]">
          <div className="text-center lg:text-left px-5">
            <h1 className="text-3xl lg:text-5xl font-bold mb-2">
              <span className="text-green-700">Hi,</span> I am a Full Stack Developer
            </h1>
            <p className="mb-6">
            I am a web developer with expertise in HTML, CSS, Tailwind CSS, and Next.js. I create responsive, dynamic, and accessible websites that provide seamless user experiences.
            </p>
            
            {/* Buttons Section */}
            <div className="flex justify-center lg:justify-start space-x-5">
              <button 
                aria-label="Follow Button" 
                className="flex items-center text-white gap-1 px-6 py-3 rounded-2xl bg-rose-500 font-semibold hover:bg-rose-700"
              >
                Follow
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                     stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                      />
                </svg>
              </button>
              <Link href="https://cv-resume-rose.vercel.app/"><button 
                aria-label="Resume Button" 
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white font-semibold text-black"
              >
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                     stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                      />
                </svg>
              </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Optional Placeholder */}
        <div className="hidden lg:block"></div>
      </div>
    </div>
    </div>
  )
}

export default Hero


