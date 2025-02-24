import cookImg from '../assets/cook.png'
import laundaryImg from '../assets/laundry.png'
import cleanerImg from '../assets/cleaning.png'
import repairImg from '../assets/maintenance.png'

function Services() {
    return (
        <section id="services p-4">
            <article className=" mt-12 mx-auto w-full sm:w-[70%] md:w-[90%] lg:w-[65%]">
                <h2 className="p-4 text-[20px] md:text-[30px] lg:text-[40px] font-kanit font-medium text-center text-[#373f41]">“Our Team have Awesome handpicked Services these for your next big group celebration, a romantic getaway or peaceful sneak away”</h2>
            </article>
            <section className="mt-5 md:mt-10 lg:mt-20 p-8 bg-[#ffffff] flex gap-10 flex-col lg:flex-row">
                <div className="sm:p-12 mx-auto md:w-full lg:w-[50%]">
                    <h2 className="text-center sm:text-left font-kanit sm:text-wrap text-[20px] sm:text-[25px] md:text-semiheading font-normal text-[#373f41]">On Call Cook</h2>
                    <p className="font-navabarLinks text-[15px] sm:text-[15px] md:text-[20px] text-wrap text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="mx-auto my-auto"><img src={cookImg} className="h-fit" alt="" /></div>
            </section>
            <section className="p-8 bg-[#ffffff] flex gap-10 flex-col-reverse lg:flex-row">
                <div className="mx-auto my-auto"><img src={laundaryImg} className="sm:p-16 h-fit" alt="" /></div>
                <div className="sm:p-12 mx-auto md:w-full lg:w-[50%]">
                    <h2 className="text-center sm:text-left font-kanit sm:text-wrap text-[20px] sm:text-[25px] md:text-semiheading font-normal text-[#373f41]">Laundary Services</h2>
                    <p className="font-navabarLinks text-wrap text-[15px] sm:text-[15px] md:text-[20px] text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </section>
            <section className="p-8 bg-[#ffffff] flex gap-00 flex-col lg:flex-row">
                <div className="sm:p-12 mx-auto md:w-full lg:w-[50%]">
                    <h2 className="text-center sm:text-left font-kanit sm:text-wrap text-[20px] sm:text-[25px] md:text-semiheading font-normal text-[#373f41]">Facility Cleaning Services</h2>
                    <p className="font-navabarLinks text-[15px] sm:text-[15px] md:text-[20px] text-wrap text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="mx-auto my-auto"><img src={cleanerImg} className="h-fit" alt="" /></div>
            </section>
            <section className="text-center sm:text-left p-8 bg-[#ffffff] flex flex-col-reverse lg:flex-row mb-10">
                <div className="w-[95%] lg:w-[50%] mx-auto my-auto mt-12 md:mt-4"><img src={repairImg} className="w-fit sm:p-16 h-fit" alt="" /></div>
                <div className="sm:p-12 mx-auto md:w-full lg:w-[50%]">
                    <h2 className="font-kanit text-wrap text-[20px] sm:text-[25px] md:text-semiheading font-normal text-[#373f41]  md:pr-8">Maintenance & Repairs</h2>
                    <p className="font-navabarLinks text-wrap text-[15px] sm:text-[15px] md:text-[20px] text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </section>
        </section>
    );
}
export default Services;