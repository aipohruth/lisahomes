import React,{useState} from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import {SiCodeproject} from 'react-icons/si';
import {FaMapMarkerAlt} from 'react-icons/fa';
import  {Project2}  from '../Data/Data1';

const FullProjects = () => {
    const[data, setData] = useState(Project2)

     //fitering Location
  const filterLocation = (location) =>{
    setData(
      Project2.filter((item) =>{
        return item.location === location;
      })
    )
}

 //fitering Prices

 const filterPrice = (price) =>{
  setData(
    Project2.filter((item) =>{
      return item.price === price;
    })
  )
}

  return (
    <>
       <Topbar />
      <Navbar />
      <div id='projects' className='max-w-[1200px] m-auto p-4 my-12'>
        <div className='flex justify-center items-center'>
            < SiCodeproject size={25}  className='text-gray-700'  />
      <h1 className='text-center text-gray-700 font-medium border-b-2 border-b-[var(--primary-light)] my-8 text-3xl'>Our Projects</h1>
      </div>
      <div className=' flex-col sm:flex-row sm:flex sm:justify-between items-center mx-8 mt-4'>
     <div>
        <p className='font-medium m-1 text-gray-700'>Filter by Price</p>
        <div className='grid grid-cols-2'>
                <button onClick={() => filterPrice('$1m')} className='m-1 rounded-md'>$1m</button>
                <button onClick={() => filterPrice('$2m')}  className='m-1 rounded-md' >$2m</button>
                <button onClick={() => filterPrice('$3m')}  className='m-1 rounded-md'>$3m</button>
                <button onClick={() => filterPrice('$4m')}  className='m-1 rounded-md'>$4m</button>
            </div>
        </div>
        <div>
        <p className='font-medium m-1 text-gray-700'>Filter by Location</p>
        <div className='grid grid-cols-2'>
                <button onClick={() => filterLocation('Lagos')}  className='m-1 rounded-md'>Lagos</button>
                <button onClick={() => filterLocation('Abuja')} className='m-1 rounded-md'>Abuja</button>
                <button onClick={() => filterLocation('Calabar')} className='m-1 rounded-md'>Calabar</button>
                <button onClick={() => filterLocation('Port-Harcourt')} className='m-1 rounded-md'>Port-Harcourt</button>
            </div>
        </div>
      </div>
      <div className='m-8'>
        <p className='font-medium m-1 text-gray-700'>Filter by None:</p>
      <button onClick={() => setData(Project2)}  className='m-1 rounded-md'>All</button>
      </div>
        <div className='grid grid-cols-1  w-full mt-10 p-6 sm:grid-cols-4 gap-4'>
           {data.map((project, id) =>{
            const{name,image,text,location,price} = project;
            return(<div key={id} className='border rounded-md p-3 cursor-pointer hover:scale-105 duration-300'>
                <img src={image} className='rounded-md object-cover w-full h-[200px]' alt={name} />
                <div className='flex justify-between my-2'>
                    <div>
                    <p className='text-xs font-bold mx-2'>{name}</p>
                    <button className='p-1 mt-1 text-xs rounded-full mx-4'>{price}</button>
                    </div>
                    <div>
                    <p className='text-xs flex items-center'>< FaMapMarkerAlt className='mr-1'/>{location}</p>
                    <p className='text-xs m-2'>{text}</p>
                    </div>
                </div>
             
            </div>
            )
           })}
        </div>
       
        

    </div>

      <Footer />

    </>
  )
}

export default FullProjects
