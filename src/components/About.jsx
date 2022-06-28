import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Chuong, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I am senior IT Engineer whom passionate about building excellent software that improves
              the lives of those around me. I specialize in creating responsive, mobile-first, front-end sites. 
              On my free time, I love to keep myself updated on new technologies, by following on forum and blog 
              to learn new techniques and to improve my creativities and skills. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
