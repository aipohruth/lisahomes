import React from 'react';

const About = () => {
  return (
    <div className='w-full  md:h-[90vh] h-[70vh]'>
      <img className='relative w-full h-full object-cover ' src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="/" />
      <div className='max-w-[1200px] m-auto'>
        <div className='absolute z-0 top-[40%] md:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   p-2 w-full max-w-[500px] text-black flex flex-col '>
        <h2 className='text-3xl font-bold'>About Us Home4All</h2>
        <p className=' my-4 font-2xl font-bold p-1'>
        <span className='font-bold'>Home4all</span> is a real estate firm that helps Investors and our clients to secure, purchase, 
            lease properties.
            Our dedicated team 
            are passionate about helping investors and clients.
            Since our founding in 2022, we have enabled 100 Investors and 2000 plus Clients
            around the world to secure, buy and invest in real estate
             
             
             </p>
             <div >
             <button  ><a href='/abouts' className=' text-black font-bold hover:text-[#3496a3]'>Read More</a></button>
             </div>
        </div>
      </div>
     
    </div>
  )
}

export default About
