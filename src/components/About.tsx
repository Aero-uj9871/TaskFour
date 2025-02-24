import aboutimg from '../assets/about-img.png'
import vision from '../assets/vision.png'
import misiion from '../assets/mission.png'
import bulb from '../assets/bulb.png'
 
const About = () => {
    return (
        <div className='w-[90%] mt-10 mx-auto'>
            <section className='overflow-x-hidden' id="about">
                <div className=''>
                    <div className='items-center w-full  mx-auto sm:w-[90%] md:w-[80%] lg:w-[60%]'>
                        <p className='font-kanit text-center text-[#373f41] text-[32px]'>Welcome To VillaCrest</p>
                        <div className='lg:mt-[22px] md:mt-4 mt-2'>
                            <p className='font-navabarLinks text-[#737b7d] md:text-[18px] text-wrap text-center'>Vacations are crucial for the souls and when that experience doesn’t go as planned, you can’t get that time back.</p>
                        </div>
                        <div className=' md:mt-5 mt-2 w-[80%] md:w-[90%] lg:w-[95%] mx-auto'>
                            <p className='font-navabarLinks text-[#737b7d] md:text-[18px] text-wrap text-base text-center'>One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.</p>
                        </div>
                    </div>
                    <figure className='mt-10 w-[90%] sm:w-[80%] mx-auto'>
                        <img src={aboutimg}></img>
                    </figure>
 
                </div>
            </section>
 
 
            <section className='mt-4 md:mt-30 p-4 sm:p-12'>
                <article className='w-full mx-auto'>
                <div className='flex lg:flex-row-reverse sm:w-[90%] w-[96%] mx-auto flex-col-reverse gap-x-12'>
                    <div className='lg:w-[40%] w-[90%] mx-auto mt-15 xl:mt-0'>
                        <img src={misiion} className='md:w-[90%] lg:w-fit w-[95%] mx-auto  '></img>
                    </div>
 
                    <div className='lg:w-[50%] w-[98%] mx-auto  '>
                        <p className='font-kanit text-[32px] text-[#373f41]  lg:text-left text-center py-6'>Our Mission</p>
                        <p className=' font-navabarLinks text-[18px]   text-[#737b7d] '>Vacations are crucial for the souls and when that experience doesn’t go as planned, you can’t get that time back. <br /> One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.</p>
                    </div>
                </div>
                </article>
            </section>

            <section className='mt-4 md:mt-10 p-4 sm:p-12'>
                <article className='w-full mx-auto'>
                <div className='flex lg:flex-row sm:w-[90%] w-[96%] mx-auto flex-col-reverse gap-x-12'>
                    <div className='lg:w-[40%] w-[90%] mx-auto mt-15 xl:mt-0'>
                        <img src={vision} className='md:w-[80%] w-[80%] mx-auto  '></img>
                    </div>
 
                    <div className='lg:w-[50%] w-[98%] mx-auto  '>
                        <p className='font-kanit text-[32px] text-[#373f41]  lg:text-left text-center py-6'>Our Mission</p>
                        <p className=' font-navabarLinks text-[18px]   text-[#737b7d] '>Homeowners spend a huge amount of time dealing with the hassles of general property management - fragmented suppliers and vendors, lack of planning and tracking, lack of time to negotiate and monitor capital projects, and having to jump-start their property each time they want to visit. All this costs money and energy and often leads to a disconnect between the experience a homeowner wants from their home and what their experience actually is.</p>
                    </div>
                </div>
                </article>
            </section>
 
 
            {/* <section className='mt-4 sm:mt-2 p-4 sm:p-8'>
                <div className='flex lg:flex-row lg:w-[80%] md:w-[90%] w-[96%] mx-auto flex-col-reverse gap-12 '>
                    <div className='lg:w-[50%] w-[90%] mx-auto my-auto h-[40%]'>
                        <img src={vision} className='  xl:w-[80%] w-fit mx-auto my-auto'></img>
                    </div>
 
                    <div className='  lg:w-[40%] w-[98%] mx-auto'>
                        <p className='font-kanit text-[32px] text-[#373f41]  lg:text-left text-center py-6'>Our Vission</p>
                        <p className=' font-navabarLinks text-[18px]   text-[#737b7d] '>Homeowners spend a huge amount of time dealing with the hassles of general property management - fragmented suppliers and vendors, lack of planning and tracking, lack of time to negotiate and monitor capital projects, and having to jump-start their property each time they want to visit. All this costs money and energy and often leads to a disconnect between the experience a homeowner wants from their home and what their experience actually is.</p>
                    </div>
 
                </div>
 
            </section> */}

            <section className='mt-20 mb-10 sm:mb-25 pb-8 md:p-8'>
                <div className='bg-[#eaf0ff] rounded-lg w-full sm:w-[85%] mx-auto'>
                    <div className='md:py-10 py-5'>
                        <figure className='flex lg:pt-5 justify-center'>
                            <img src={bulb} className=''></img>
                        </figure>
                        <p className='text-center font-kanit lg:text-[32px] md:text-3xl text-[#373f41] sm:text-xl md:py-5 mt-3 '>Facts About <span className='font-medium'>Shitlakhet </span></p>
                        <div className='md:px-20  mt-3 px-2'>
                            <p className='font-navabarLinks text-center lg:text-[22px] md:text-xl  sm:text-lg text-base text-[#737b7d]  md:mt-5 lg:mt-7 sm:mt-4'>The mesmerizing view of the sun-kissed hills, rich flora-fauna and the cool breeze carrying away the scent of the rosy rhododendrons makes Sitlakhet an ideal retreat.</p>
                            <p className='font-navabarLinks text-center lg:text-[22px] md:text-xl  sm:text-lg text-base text-[#737b7d]  md:mt-5 lg:mt-7  sm:mt-4 mt-2'>A very wide range of Himalayas is visible from here. Surrounded by about 1800 hectares of forest area from all sides.</p>
                            <p className='font-navabarLinks text-center lg:text-[22px] md:text-xl  sm:text-lg text-base text-[#737b7d] te  md:mt-5 lg:mt-7 sm:mt-4 mt-2'>Shitlakhet is known for its natural beauty. Nestled in the lap of nature, this hill station attracts tourists. Shitlakhet is a small hill station. But it is very calm and pleasant. Here you can see the beautiful peaks of the Himalayas.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
 
export default About