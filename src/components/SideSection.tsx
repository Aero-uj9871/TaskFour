import React from "react";
 
type SideImagesProps = {
  images: string[];
};
 
const SideSection: React.FC<SideImagesProps> = ({ images }) => {
  return (
    <section className="">
      <article className="grid grid-cols-2 hy-auto gap-5">
        {images.map((image, index) => (
          <div key={index} className="">
            <img
              src={image}
              className=" h-[120px] rounded-md object-cover"
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </article>
    </section>
  );
};
 
export default SideSection;