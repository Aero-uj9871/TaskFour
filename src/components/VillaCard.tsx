import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Villa } from '../Types/Villatype';
import loc from '../assets/location.svg';
import bathtub from '../assets/bathtub.svg';
import room from '../assets/double-bed.svg';
import house from '../assets/measured.svg';

type VillaCardProps = {
    villa: Villa;
};

const VillaCard: React.FC<VillaCardProps> = ({ villa }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/villa/${villa.id}`);
    };

    return (
        <section
            key={villa.id}
            className="h-[350px] cursor-pointer"
            onClick={handleClick}
        >
            {/* Image */}
            <figure className="relative w-full h-[380px]">
                <img src={villa.image} alt={villa.title} className="w-full object-contain rounded-md" />


                {/* Villa Details Box */}
                <div className="absolute bottom-[20%] md:bottom-[20%] lg:[25%] left-1/2 -translate-x-1/2 bg-white p-4 rounded-[6.1px] shadow-[0_7.6px_38px_0_rgba(0,0,0,0.07)] w-[90%] mx-auto">
                    <article className="flex flex-col space-y-2">
                        <header className="flex justify-between font-bold">
                            <h1 className="font-nunito font-bold text-4 text-[#3e3e3e] leading-[27.2px]">{villa.title}</h1>
                            <h1 className="font-nunito font-bold text-4 text-[#ffa800] leading-[27.2px]">{villa.price}</h1>
                        </header>

                        <p className="text-left font-nunito text-[#aeaeae] text-[14px]">
                            <img src={loc} className="inline" alt="location" /> {villa.address}
                        </p>
                        <footer className="flex justify-between text-sm">
                            <p className="text-left font-semibold font-nunito text-[#626262] text-[14px]">
                                <img src={bathtub} className="inline" alt="bathroom" /> {villa.bath}
                            </p>
                            <p className="text-left font-semibold font-nunito text-[#626262] text-[14px]">
                                <img src={room} className="inline" alt="bedroom" /> {villa.beds}
                            </p>
                            <p className="text-left font-semibold font-nunito text-[#626262] text-[14px]">
                                <img src={house} className="inline" alt="size" /> {villa.size}
                            </p>
                        </footer>
                    </article>
                </div>
            </figure>
        </section>
    );
};

export default VillaCard;
