import React from 'react';
import {BiHomeHeart} from 'react-icons/bi';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import {AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className=' w-full  text-white bg-black'>
        <div className='max-w-[1200px]  mx-auto p-4 '>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            <div className='flex flex-col'>
            <div className='flex mt-4'>
          <BiHomeHeart className='text-[#0f5963] ' size={30} />
          <p className=' text-xl sm:text-2xl font-bold'>Home4All</p>
          </div>
          <div className='flex mt-4'>
             <FaFacebookF className='mr-2 hover:text-red-500 cursor-pointer' />
             <AiFillLinkedin className=' mr-2 hover:text-red-500 cursor-pointer' />
             <FaTwitter className=' mr-2 hover:text-red-500 cursor-pointer' />
             <FaInstagram className=' mr-2 hover:text-red-500 cursor-pointer' />
            </div>
          </div>

            <div>
                <h2 className='text-xl font-bold my-4'>Locations</h2>
               <p className='text-sm'>Lagos</p>
               <p className='text-sm'>Calabar</p>
               <p className='text-sm'>Port-Harcourt</p>
               <p className='text-sm'>LAbuja</p>
            </div>

             <div>
                <h2 className='text-xl font-bold my-4'>Houses</h2>
               <p className='text-sm'>Semi- Detached</p>
               <p className='text-sm'>PentHouses</p>
               <p className='text-sm'>Detached</p>
               <p className='text-sm'>Duplex</p>
            </div>
            <div>
                <h2 className='text-xl font-bold my-4'>Locations</h2>
               <p className='text-sm'>Lagos</p>
               <p className='text-sm'>Calabar</p>
               <p className='text-sm' >Port-Harcourt</p>
               <p className='text-sm'>LAbuja</p>
            </div>


            </div>
        
        </div>
      
    </div>
  )
}

export default Footer
