import React from "react";
import { LayoutSection } from "../Types/Villatype";

interface AboutSectionProps {
  layout: LayoutSection[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ layout }) => {
  return (
    <section className="w-full mt-[60px]">
      {layout.map((item, index) => (
        <div key={index}>
          <h1 className="font-navabarLinks font-bold text-left md:text-[20px] text-[#373f41] mb-[25px]">
            {item.title}
          </h1>
          <p className="font-navabarLinks text-left text-[#737b7d] md:text-[18px] mb-[50px]">
            {item.data}
          </p>
        </div>
      ))}
    </section>
  );
};

export default AboutSection;
