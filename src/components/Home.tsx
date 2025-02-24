import Carousel from "./Carousel";
import about_img from '../assets/about.png'
import featureImg from '../assets/section-3-img.png'
import cookImg from '../assets/cook.png'
import laundaryImg from '../assets/laundry.png'
import cleanerImg from '../assets/cleaning.png'
import repairImg from '../assets/maintenance.png'
import section5Img from '../assets/section-5-img.png'
import gallery1 from '../assets/gallery-1.png';
import gallery2 from '../assets/gallery-2.png';
import gallery3 from '../assets/gallery-3.png';
import gallery4 from '../assets/gallery-4.png';
import gallery5 from '../assets/gallery-5.png';
import gallery6 from '../assets/gallery-6.png';

// bg-opacity-[6%]
function Home() {
    return (
        <section className="home bg-[#3c64b1]/6 overflow-x-hidden" id="home">
            <div className="home_heading flex  mt-[3.75rem] justify-center w-[90%] sm:w-[640px] md:w-[760px] lg:w-[830px] mx-auto">
                <h2 className="w-full heading font-kanit text-[#373f41] text-wrap text-[28px] sm:text-[38px] md:text-[42px] lg:[44px] text-center">
                    Take your <span className="font-medium">real estate</span> experience to new heights in the{" "}
                    <span className="font-medium">himalayas</span>
                </h2>
            </div>
            <div className="home_heading flex justify-center w-[80%] lg:w-[680px] md:w-[700px] sm:w-[600px] mx-auto">
                <h3 className="heading font-navabarLinks text-center text-wrap text-[12px] sm:text-[15px] md:text-[16px] lg:[20px] mt-6 text-[#737b7d]">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam
                    minimum ponderum. Est audiam animal molestiae te.
                </h3>
            </div>
            <Carousel />
            {/* lg:w-1/2  */}
            <section className="py-30 home_about bg-[#ffffff]">
                <div className="w-[80%] mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-0">
                    <div className="home_about_img  flex justify-center"> {/* Image container */}
                        <img src={about_img} alt="About Us Image" className="w-full h-auto" /> {/* Make image responsive */}
                    </div>
                    <div className="home_about_text w-full  lg:mt-0 lg:pl-16 flex flex-col justify-center text-center lg:text-left"> {/* Text container */}
                        <div className="items-start"> {/* Added a div for better vertical centering */}
                            <p className="font-medium font-kanit text-[28px] sm:text-semiheading text-[#373f41] mb-4">About Us</p> {/* Added margin bottom for spacing */}
                            <p className="text-base text-[15px] sm:text-[20px] text-justify font-navabarLinks text-wrap text-[#737b7d]">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sm:p-8 mt-8">
                <article className="w-[70%]  mx-auto">
                    <div className="feature_heading items-center">
                        <h2 className="text-center text-[28px] sm:text-semiheading mt-15 font-normal font-kanit text-[#373f41]">Feature regarding purchase of villa & also rent out feature with villacrest</h2>
                    </div>
                    <div className="lg:px-12 feature_text mt-10">
                        <p className="font-navabarLinks text-[15px] sm:text-[20px] text-wrap text-center text-[#737b7d]">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </article>
                <div className="feature_image text-center"><img src={featureImg} alt="" className="w-full md:w-[75%] p-8 inline-block" /></div>
            </section>
            <section className="p-8 bg-[#ffffff] flex gap-10 flex-col lg:flex-row lg:mt-6">
                <div className="sm:p-12 mx-auto md:w-full lg:w-[50%]">
                    <h2 className="text-center sm:text-left font-kanit sm:text-wrap text-[28px] sm:text-semiheading font-normal text-[#373f41]">On Call Cook</h2>
                    <p className="font-navabarLinks text-[15px] sm:text-[20px] text-wrap text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="mx-auto my-auto"><img src={cookImg} className="h-fit" alt="" /></div>
            </section>
            <section className="p-8 bg-[#ffffff] flex gap-10 flex-col-reverse lg:flex-row">
                <div className="mx-auto my-auto"><img src={laundaryImg} className="sm:p-16 h-fit" alt="" /></div>
                <div className="sm:p-12 mx-auto md:w-full lg:w-[50%]">
                    <h2 className="text-center sm:text-left font-kanit sm:text-wrap text-[28px] sm:text-semiheading font-normal text-[#373f41]">Laundary Services</h2>
                    <p className="font-navabarLinks text-wrap text-[15px] sm:text-[20px] text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </section>
            <section className="p-8 bg-[#ffffff] flex gap-00 flex-col lg:flex-row">
                <div className="sm:p-12 mx-auto md:w-full lg:w-[50%]">
                    <h2 className="text-center sm:text-left font-kanit sm:text-wrap text-[28px] sm:text-semiheading font-normal text-[#373f41]">Facility Cleaning Services</h2>
                    <p className="font-navabarLinks text-[15px] sm:text-[20px] text-wrap text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="mx-auto my-auto"><img src={cleanerImg} className="sm:p-16 h-[50%] " alt="" /></div>
            </section>
            <section className="text-center sm:text-left p-8 bg-[#ffffff] flex flex-col-reverse lg:flex-row">
                <div className="w-[90%] lg:w-[50%] mx-auto my-auto"><img src={repairImg} className="sm:p-16 h-fit" alt="" /></div>
                <div className="sm:p-12 mx-auto md:w-full lg:mx-0 lg:w-[50%]">
                    <h2 className="font-kanit text-wrap text-[28px] sm:text-semiheading font-normal text-[#373f41]  md:pr-8">Maintenance & Repairs</h2>
                    <p className="font-navabarLinks text-wrap text-[15px] sm:text-[20px] text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </section>
            {/*title section */}
            <section className="">
                <article className="flex mx-auto flex-col md:w-[90%] lg:flex-row w-[80%] mt-12 mb-12 gap-10" >
                <div className="md:w-[80%] md:px-15 lg:h-[70%] sm:p-10 w-full md:mx-auto">
                    <h2 className="font-kanit sm:text-wrap text-[28px] sm:text-semiheading font-normal text-[#373f41]">Title for the key features of the villa goes here</h2>
                    <p className="font-navabarLinks text-[15px] sm:text-[20px]  text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className="md:w-full md:py-5 mx-auto flex flex-col md:flex-row lg:gap-10 md:justify-between md:gap-5 lg:justify-between ul-lists md:flex items-center">
                        <ul className="w-1/2 mt-4 p-0 sm:p-4 list-disc text-wrap md:text-nowrap">
                            <li className="text-[#3c64b1]"><span className="font-manrope text-[#000000] font-semibold">Tailored services</span></li>
                            <li className="text-[#3c64b1] mt-2"><span className="font-manrope text-[#000000] font-semibold">Effortless arrivals</span></li>
                            <li className="text-[#3c64b1] mt-2"><span className="font-manrope text-[#000000] font-semibold">Inspections and vetting</span></li>
                        </ul>
                        <ul className="w-1/2 p-0 md:mt-4 sm:p-4 md:p-4 list-disc text-wrap md:text-nowrap">
                            <li className="text-[#3c64b1]"> <span className="font-manrope text-[#000000] font-semibold">Expertly designed</span></li>
                            <li className="text-[#3c64b1] mt-2"><span className="font-manrope text-[#000000] font-semibold">Luxury amenities</span></li>
                            <li className="text-[#3c64b1] mt-2"><span className="font-manrope text-[#000000] font-semibold">Custom Itenaries</span></li>
                        </ul>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:p-0 flex w-full justify-start">
                    <button className="sm:mt-4 bg-[#6d87cb] text-[#ffffff] p-2">View Details</button>
                    </div>
                </div>
                <div className="flex justify-center lg:pr-16 mx-auto md:mx-0"><img src={section5Img} className="h-auto object-cover" alt="" /></div>
                </article>
                
                
                {/* mx-auto my-auto md:h-[80%] h-[60%] */}
            </section>
            <section className="pb-10 bg-white text-center">
                <article className="w-[80%] mx-auto">
                <h2 className="font-kanit text-[28px] sm:text-[32px] text-[#373f41] py-12">
                    Villa Image Gallery
                </h2>
                <div className="grid mb-10 grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3 mx-auto sm:h-fit">
                    <img src={gallery1} alt="Villa 1" className="w-full object-cover shadow-lg" />
                    <img src={gallery2} alt="Villa 2" className="w-full object-cover shadow-lg" />
                    <img src={gallery3} alt="Villa 3" className="w-full object-cover shadow-lg" />
                    <img src={gallery4} alt="Villa 4" className="w-full object-cover shadow-lg" />
                    <img src={gallery5} alt="Villa 5" className="w-full object-cover shadow-lg" />
                    <img src={gallery6} alt="Villa 6" className="w-full object-cover shadow-lg" />
                </div>
                </article>
            </section>
            <section className="p-8">
                <article className="w-[90%] md:[75%] lg:w-[65%]  mx-auto">
                    <div className="feature_heading items-center">
                        <h2 className="text-center text-[24px] sm:text-semiheading font-normal font-kanit text-[#373f41]">Why Choose VillaCrest?</h2>
                    </div>
                    <div className="feature_text mt-6">
                        <p className="text-center font-navabarLinks text-[15px] sm:text-[20px] text-wrap text-[#737b7d] px-10">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className="justify-center flex">
                        <button className="mt-4 bg-[#6d87cb] text-[#ffffff] p-2 px-2">Contact</button>
                    </div>
                </article>
                {/* <div className="feature_image text-center"><img src={featureImg} alt="" className="p-8 inline-block" /></div> */}
            </section>
        </section>
    );
}

export default Home;