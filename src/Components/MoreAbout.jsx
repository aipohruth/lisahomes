import React from 'react'
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import {FcAbout} from 'react-icons/fc';
const MoreAbout = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className='max-w-[1200px] m-auto p-4 my-12'>
        <div className='flex justify-center items-center'>
            < FcAbout size={25}  className='text-gray-700'  />
      <h1 className='text-center text-gray-700 font-medium border-b-2 border-b-[var(--primary-light)] my-8 text-3xl'>About Us</h1>
      </div>
        <div className='flex-col sm:flex sm:flex-row justify-evenly items-center mt-4'>
            <div className='p-4 text-gray-700 max-w-[500px]'>
                <article>
            <h2 className='font-bold text-xl text-center my-4'>Our Introduction</h2>
            <p><span className='font-bold'>Home4all</span> is a real estate firm that helps Investors and our enormous clients to secure, purchase, 
            lease properties.</p>
            <h3 className='font-bold my-2'>Who We Are</h3>
            <p>Our dedicated team of experts 
            are passionate about helping investors and clients.
            Since our founding in 2022, Home4all has enabled 100 Investors and 2000 plus Clients
            around the world to secure, buy and invest in real estate</p>
                </article>
            </div>
            <div className='p-4 text-gray-700 max-w-[500px]'>  
                <article>
            <h2 className='font-bold text-xl text-center my-4'>Our Mission</h2>
            <p><span className='font-bold'>Home4all</span> is a real estate firm that helps Investors and our enormous clients to secure, purchase, 
            lease properties.<span>Who We Are</span>
            Our dedicated team of experts 
            are passionate about helping investors and clients.
            Since our founding in 2022, Home4all has enabled 100 Investors and 2000 plus Clients
            around the world to secure, buy and invest in real estate</p>
                </article></div>
        </div>


      </div>

      <Footer />
    </div>
  )
}

export default MoreAbout
