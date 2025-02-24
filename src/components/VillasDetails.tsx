
import { useState } from 'react';
import villas from '../Data/VillaData';
import { useParams } from 'react-router-dom';

import VillaCarousel from '../components/VillaCarousel'

import loc from '../assets/location.svg'
import bathtub from '../assets/bathtub.svg'
import room from '../assets/double-bed.svg'
import house from '../assets/measured.svg'
import Property from './PropertyLayout'
import Description from './Description'
import Amenities from '../components/Amenities'
import SideImages from '../components/SideSection';
import HorCorousel from './HorCorousel';


const DetailedVila = () => {
  const { id } = useParams();
  const villa = villas.find((v) => v.id === Number(id));
  const [activeSection, setActiveSection] = useState('layout');

  if (!villa) {
    return <h1>Villa Not Found</h1>;
  }

  return (
    <>
      <section className='w-full  mb-[8rem] mt-[5rem]'>
        <article className='md:w-[80%] mx-auto flex gap-3 '>
          <aside className='w-[90%]  mx-auto lg:w-[70%] md:mx-auto'>
            <section className='w-full'>
              <VillaCarousel />
            </section>
 
 <section className='pt-4 w-full lg:hidden'><HorCorousel images={villa.images}/></section>

            <section className='w-full  rounded-[6.1px] shadow-[0_7.6px_38px_0_rgba(0,0,0,0.07)] mt-8 sm:mt-15'>
              <article className="flex h-[165px] flex-col gap-3 p-8">
                <header className="flex justify-between font-bold">
                  <h1 className="font-nunito font-bold text-[18px] md:text-[28px] text-[#3e3e3e] leading-[27.2px]">{villa.title}</h1>
                  <h1 className="font-nunito font-bold text-[18px] md:text-[28px] text-[#ffa800] leading-[27.2px]">{villa.price}</h1>
                </header>

                <p className="text-left flex gap-2 font-nunito text-[#aeaeae] text-[14px] md:text-[21.3px]"><img src={loc} className="inline" />{villa.address}</p>
                <footer className="flex justify-between text-sm">
                  <p className="text-left font-semibold font-nunito text-[#626262] text-[14px] md:text-[21.3px]"><img src={bathtub} className="inline" /> {villa.bath}</p>
                  <p className="text-left font-semibold font-nunito text-[#626262] text-[14px] md:text-[21.3px]"><img src={room} className="inline" /> {villa.beds}</p>
                  <p className="text-left font-semibold font-nunito text-[#626262] text-[14px] md:text-[21.3px]"><img src={house} className="inline" /> {villa.size}</p>
                </footer>
              </article>
            </section>

            <section className='h-15 flex justify-around items-center bg-[#f4f4f4] w-full mt-15'>
              <h1
                className={` py-3 cursor-pointer font-navabarLinks text-[12px] md:text-[18px] font-bold text-[#8a8a8a] ${activeSection === 'layout' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`}
                onClick={() => setActiveSection('layout')}
              >
                PROPERTY LAYOUT
              </h1>

              <h1
                className={`py-3 cursor-pointer font-navabarLinks text-[12px] md:text-[18px] font-bold text-[#8a8a8a] ${activeSection === 'description' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`}
                onClick={() => setActiveSection('description')}
              >
                DESCRIPTION
              </h1>

              <h1
                className={`py-3 cursor-pointer font-navabarLinks text-[12px] md:text-[18px] font-bold text-[#8a8a8a] ${activeSection === 'amenities' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`}
                onClick={() => setActiveSection('amenities')}
              >
                AMENITIES
              </h1>
            </section>
            <section className="w-full">
              {activeSection === "description" && <Description layout={villa.desc.layout} />}
              {activeSection === "layout" && <Property desc={villa.desc.desc} />}
              {activeSection === "amenities" && <Amenities amenities={villa.desc.aminities} />}
            </section>


          </aside>
          <aside className=" hidden w-[30%] lg:block h-[500px] overflow-y-scroll overflow-x-hidden">
            <SideImages images={villa.images} />
          </aside>

        </article>
      </section>
    </>
  )
}

export default DetailedVila
