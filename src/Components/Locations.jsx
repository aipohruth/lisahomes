import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import  {Locations} from '../Data/Data3';
//import Location from './Location';
const Locationss = () => {
  return (
    <div>
       <Topbar />
      <Navbar />
      <div className='max-w-[1200px] flex flex-col sm:flex-row m-auto w-full my-[90px]'>
   {Locations.map((info,id) => {
    const {image, text} = info;
    return (<div key={id} className='relative p-4'>
        <h2 className='absolute top-[40%] z-10 text-[20px] text-black font-bold left-[50%] translate-x-[-50%] translate-y-[-50%]'>{text}</h2>
        <img className='w-full h-full relative border-4 border-white shadow-lg rounded-md cursor-pointer object-cover ' src={image} alt={text} />

    </div>

    )
   })}
    </div>
      <Footer />
    </div>
  )
}

export default Locationss
