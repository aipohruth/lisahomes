import React from 'react';

const About = () => {
  return (
    <div className='w-full bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] md:h-[90vh] h-[70vh]'>
      
  
      <div className='max-w-[1200px] m-auto'>
        <div className='absolute z-0 top-[30%] right-[5%]  text-right p-2 w-full max-w-[400px] text-black flex flex-col '>
        <h2 className='text-3xl font-bold'>About Us Home4All</h2>
        <p className=' my-4 font-2xl font-bold'>
        <span className='font-bold'>Home4all</span> is a real estate firm that helps Investors and our enormous clients to secure, purchase, 
            lease properties.
            Our dedicated team of experts 
            are passionate about helping investors and clients.
            Since our founding in 2022, Home4all has enabled 100 Investors and 2000 plus Clients
            around the world to secure, buy and invest in real estate
             
             
             </p>
             <div >
             <button className=' hover:border-red-500 hover:border-2' ><a href='/abouts' className=' text-black font-bold hover:text-red-500'>Read More</a></button>
             </div>
        </div>
      </div>
     
    </div>
  )
}

export default About
