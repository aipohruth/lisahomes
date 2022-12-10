import React from 'react';


const Contact = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        e.target.reset();
      }
  return (
    <div id='contact' className='max-w-[1200px] m-auto p-4 my-9'>
        <div className='grid grid-rows-1 md:grid-cols-2 gap-4 mt-4'>
            <div >
            <iframe title="myFrame" className='w-full h-full  mt-6 p-4'  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=eko atlantic, lagos&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
            </div>
            <div>
            <h2 className='text-center text-xl text-gray-700 font-bold my-4'>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                    
                <div className='grid grid-cols-1 px-6'>
                    <input className='border border-gray-600 px-6 my-2 py-2 ' required type="text" placeholder='Name' />
                    <input  className='border border-gray-600 px-6 my-2 py-2 ' required  type="email" placeholder='Email' />
                    <input  className='border border-gray-600 px-6 my-2 py-2' required  type="number" placeholder='Contact No' />
                    <textarea  className='border border-gray-600 px-2 my-2 py-2 ' required cols="5" rows="5" placeholder='Message ..'></textarea>
                    <button className='mt-2' >Send Message</button>
                </div>
            </form>
            </div>
        </div>
    
    </div>
  )
}

export default Contact
