import React from 'react';
import { Amenity } from '../Types/Villatype';
// import logo from '../assets/Group (1).svg';
interface AmenityProps {
  amenities: Amenity[];
}

const Amenities: React.FC<AmenityProps> = ({ amenities }) => {
  return (
    <>
<section className='w-full grid grid-cols-2 sm:justify-end sm:grid-cols-2 lg:grid-cols-3 sm:space-x-0 gap-5 md:gap-10 mt-4'>
  {
    amenities.map((item,index)=>(
      <div key={index} className='h-[10rem] w-[10rem] md:h-[12.5rem] md:w-[12.5rem] bg-[#6d87cb] flex flex-col justify-center items-center rounded-sm gap-4 mx-auto'>
      <img src={item.logo} alt="" />
      <p className='text-[#ffffff] font-navabarLinks text-[10px] sm:text-[14px] font-extrabold'>{item.title}</p>
    </div>
    ))
  }
    </section>
    </>
  );
};

export default Amenities;

